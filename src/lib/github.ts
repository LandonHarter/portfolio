"use server";

interface GithubContributionDay {
	date: string;
	contributionCount: number;
}

interface GitHubAuthor {
	name: string;
	email: string;
}

interface GitHubRepositoryOwner {
	login: string;
	url: string;
	avatarUrl: string;
}

interface GitHubRepository {
	name: string;
	url: string;
	owner: GitHubRepositoryOwner;
}

interface GitHubCommit {
	messageHeadline: string;
	message: string;
	committedDate: string;
	commitUrl: string;
	author: GitHubAuthor;
	repository: GitHubRepository;
}

interface GitHubCommitHistory {
	nodes: GitHubCommit[];
}

interface GitHubTarget {
	history: GitHubCommitHistory;
}

interface GitHubBranchRef {
	target: GitHubTarget;
}

interface GitHubRepositoryNode {
	name: string;
	defaultBranchRef: GitHubBranchRef | null;
	owner: GitHubRepositoryOwner;
}

interface GithubContributionData {
	totalContributions: number;
	contributionDays: GithubContributionDay[];
	commits: GitHubCommit[];
}

export async function fetchGitHubStats(): Promise<GithubContributionData | null> {
	const query = `
    query {
      user(login: "LandonHarter") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
        repositories(first: 1, orderBy: {field: UPDATED_AT, direction: DESC}, affiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]) {
            nodes {
                name
                defaultBranchRef {
                    target {
                        ... on Commit {
                            history(first: 1) {
                                nodes {
                                    messageHeadline
                                    message
                                    committedDate
                                    commitUrl
                                    author {
                                        name
                                        email
                                    }
                                    repository {
                                        name
                                        url
										owner {
											login
											url
											avatarUrl
										}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
      }
    }
  `;

	try {
		const response = await fetch("https://api.github.com/graphql", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ query }),
		});

		const data = await response.json();
		if (!data.data?.user) {
			return null;
		}

		const contributionCalendar =
			data.data.user.contributionsCollection.contributionCalendar;

		const commits = data.data.user.repositories.nodes
			.filter(
				(
					repo: GitHubRepositoryNode & {
						defaultBranchRef: GitHubBranchRef;
					}
				) => repo.defaultBranchRef !== null
			)
			.map(
				(
					repo: GitHubRepositoryNode & {
						defaultBranchRef: GitHubBranchRef;
					}
				) => repo.defaultBranchRef.target.history.nodes[0]
			)
			.sort(
				(a: GitHubCommit, b: GitHubCommit) =>
					new Date(b.committedDate).getTime() -
					new Date(a.committedDate).getTime()
			) as GitHubCommit[];

		return {
			totalContributions: contributionCalendar.totalContributions,
			contributionDays: contributionCalendar.weeks.flatMap(
				(week: any) => week.contributionDays
			),
			commits,
		};
	} catch (error) {
		console.error("Error fetching GitHub stats:", error);
		return null;
	}
}
