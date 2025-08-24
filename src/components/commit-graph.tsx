"use client";

import { GithubContributionData } from "@/lib/github";
import { useMemo, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface CommitGraphProps {
	stats: GithubContributionData | null;
}

type TimePeriod = "month" | "year";

interface ChartData {
	date: string;
	commits: number;
	displayDate: string;
}

export default function CommitGraph({ stats }: CommitGraphProps) {
	const [timePeriod, setTimePeriod] = useState<TimePeriod>("month");

	const chartData = useMemo(() => {
		if (!stats?.contributionDays) return [];

		const now = new Date();
		const cutoffDate = new Date();
		
		if (timePeriod === "month") {
			cutoffDate.setMonth(now.getMonth() - 1);
		} else {
			cutoffDate.setFullYear(now.getFullYear() - 1);
		}

		// Filter data by time period
		const filteredDays = stats.contributionDays.filter(day => {
			const dayDate = new Date(day.date);
			return dayDate >= cutoffDate;
		});

		if (timePeriod === "month") {
			// For month view, show daily data
			return filteredDays.map(day => ({
				date: day.date,
				commits: day.contributionCount,
				displayDate: new Date(day.date).toLocaleDateString('en-US', {
					month: 'short',
					day: 'numeric'
				})
			}));
		} else {
			// For year view, aggregate by week
			const weeklyData: { [key: string]: number } = {};
			
			filteredDays.forEach(day => {
				const date = new Date(day.date);
				// Get the Monday of the week
				const monday = new Date(date);
				monday.setDate(date.getDate() - date.getDay() + 1);
				const weekKey = monday.toISOString().split('T')[0];
				
				weeklyData[weekKey] = (weeklyData[weekKey] || 0) + day.contributionCount;
			});

			return Object.entries(weeklyData)
				.map(([date, commits]) => ({
					date,
					commits,
					displayDate: new Date(date).toLocaleDateString('en-US', {
						month: 'short',
						day: 'numeric'
					})
				}))
				.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
		}
	}, [stats, timePeriod]);

	if (!stats) {
		return (
			<div className="flex items-center justify-center h-64 text-sm opacity-60">
				Failed to load commit data
			</div>
		);
	}

	const maxCommits = Math.max(...chartData.map(d => d.commits));

	return (
		<div className="border-foreground/10 flex flex-col gap-4 border bg-[#ffffff0d] p-4">
			{/* Toggle buttons */}
			<div className="flex gap-2">
				<button
					onClick={() => setTimePeriod("month")}
					className={`px-3 py-1 text-xs rounded-md transition-colors ${
						timePeriod === "month"
							? "bg-foreground text-background"
							: "bg-foreground/10 hover:bg-foreground/20"
					}`}
				>
					Last Month
				</button>
				<button
					onClick={() => setTimePeriod("year")}
					className={`px-3 py-1 text-xs rounded-md transition-colors ${
						timePeriod === "year"
							? "bg-foreground text-background"
							: "bg-foreground/10 hover:bg-foreground/20"
					}`}
				>
					Last Year
				</button>
			</div>

			{/* Chart */}
			<div className="h-64 w-full -translate-x-8 pt-4">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart data={chartData}>
						<defs>
							<linearGradient id="commitGradient" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="currentColor" stopOpacity={0.3} />
								<stop offset="95%" stopColor="currentColor" stopOpacity={0} />
							</linearGradient>
						</defs>
						<CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.2} />
						<XAxis 
							dataKey="displayDate"
							axisLine={false}
							tickLine={false}
							tick={{ fill: 'currentColor', fontSize: 11 }}
							interval="preserveStartEnd"
						/>
						<YAxis 
							axisLine={false}
							tickLine={false}
							tick={{ fill: 'currentColor', fontSize: 11 }}
							domain={[0, maxCommits || 1]}
						/>
						<Tooltip
							contentStyle={{
								backgroundColor: 'var(--background)',
								border: '1px solid var(--foreground)',
								borderRadius: '6px',
								fontSize: '12px',
								color: 'var(--foreground)'
							}}
							formatter={(value: number) => [value, 'Commits']}
							labelFormatter={(label) => `Date: ${label}`}
						/>
						<Area
							type="monotone"
							dataKey="commits"
							stroke="currentColor"
							strokeWidth={2}
							fill="url(#commitGradient)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>

			{/* Summary stats */}
			<div className="flex gap-6 text-xs opacity-80">
				<div>
					Total commits: {chartData.reduce((sum, d) => sum + d.commits, 0)}
				</div>
				<div>
					Average per {timePeriod === "month" ? "day" : "week"}:{" "}
					{chartData.length > 0 ? Math.round(chartData.reduce((sum, d) => sum + d.commits, 0) / chartData.length) : 0}
				</div>
			</div>
		</div>
	);
}
