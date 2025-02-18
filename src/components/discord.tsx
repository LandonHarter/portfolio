"use client";

import Image from "next/image";
import { useLanyard } from "react-use-lanyard";

const STATUS_IMAGES = {
	"356877880938070016": "/rl.png",
} as { [key: string]: string };

export default function DiscordStatus() {
	const { loading, status } = useLanyard({
		userId: "796436513470677022",
		socket: true,
	});

	return (
		<div className="border-foreground/10 flex items-center gap-4 border bg-[#ffffff0d] p-4">
			{loading ? (
				<span className="animate-pulse text-sm opacity-80">
					loading status...
				</span>
			) : (
				<>
					{status?.activities.length! === 0 ? (
						<span className="text-sm opacity-80">
							not doing anything
						</span>
					) : (
						<>
							<Image
								src={
									status?.activities[0].assets?.large_image
										? `https://cdn.discordapp.com/app-assets/${status?.activities[0].application_id}/${status?.activities[0].assets?.large_image}.png`
										: STATUS_IMAGES[
												status?.activities[0]
													.application_id!
											]
								}
								alt={status?.activities[0].application_id!}
								width={128}
								height={128}
								className="h-20 w-20 rounded-md"
							/>
							<div className="flex h-full flex-col gap-2">
								<span className="text-base font-semibold">
									{status?.activities[0].name}
								</span>
								<span className="text-xs opacity-80">
									{status?.activities[0].details}
								</span>
								<span className="text-xs opacity-80">
									{status?.activities[0].state}
								</span>
							</div>
						</>
					)}
				</>
			)}
		</div>
	);
}
