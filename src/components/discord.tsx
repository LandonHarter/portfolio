"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanyard } from "react-use-lanyard";

const STATUS_IMAGES = {
	"356877880938070016": "/rl.png",
} as { [key: string]: string };

export default function DiscordStatus() {
	const { loading, status } = useLanyard({
		userId: "796436513470677022",
		socket: true,
	});
	const [timeElapsed, setTimeElapsed] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout>(null);

	function formatTime() {
		const initial = new Date(
			Date.now() - status?.activities[0].timestamps?.start!
		);

		let hours = initial.getUTCHours();
		let minutes = initial.getUTCMinutes();
		let seconds = initial.getUTCSeconds() + timeElapsed;

		if (seconds >= 60) {
			minutes += 1;
			seconds -= 60;
		}
		if (minutes >= 60) {
			hours += 1;
			minutes -= 60;
		}

		return `${hours ? `${hours}h ` : ""}${minutes ? `${minutes}m ` : ""}${seconds}s`;
	}

	useEffect(() => {
		if (!status?.activities[0]) return;
		setTimeElapsed(0);

		intervalRef.current = setInterval(() => {
			setTimeElapsed((prev) => prev + 1);
		}, 1000);
		return () => clearInterval(intervalRef.current!);
	}, [status?.activities[0]]);

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
									{formatTime()}
								</span>
							</div>
						</>
					)}
				</>
			)}
		</div>
	);
}
