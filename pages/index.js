import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>Online exam platform</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main className="flex flex-col flex-1 bg-gray-100 items-center justify-center">
				<Image
					height={150}
					width={150}
					objectFit="cover"
					src="/exam-hall.jpg"
					className="rounded-full"
				/>
				<div className="mx-auto max-w-screen-md px-6 items-center flex flex-col">
					<h1 className="text-xl font-bold py-8 text-center">
						Welcome to the{" "}
						<span className="text-gray-600">
							Online exam platform
						</span>
					</h1>
					<p className="text-center">
						Do your assessments boundaryless and on time for free.
						<br /> This is a free open source platform. Any
						contributions are accepted and welcome.
					</p>
					<Link href="/signin">
						<a className="bg-[#4e3894] text-white py-2 px-4 my-2 rounded-lg">
							Get started
						</a>
					</Link>
				</div>
			</main>
			<Footer />
		</div>
	);
}
