import AnimatedLandingBackground from "@/components/background";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const font = Geist_Mono({
	subsets: ["latin"],
});
const font2 = Poppins({
	subsets: ["latin"],
	weight: "500",
});

export const metadata: Metadata = {
	title: "Landon Harter - Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`flex w-screen justify-center bg-background antialiased ${font2.className} overflow-x-hidden`}
			>
				<Providers>
					<div className="flex w-full max-w-[750px] flex-col gap-16 px-8 py-20">
						<Header />
						<AnimatedLandingBackground />
						{children}
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
