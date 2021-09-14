import Head from "next/head";
import Header from "../components/Header";
import Router from "next/router";

export default function Home() {
	const { pathname } = Router;
	if (pathname == "/") Router.push("/signin");
	console.log(pathname);
	return (
		<div className="bg-gray-100">
			<Head>
				<title>Online exam platform</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Header />
			</main>
		</div>
	);
}
