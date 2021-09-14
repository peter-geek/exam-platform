import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

function Signin() {
	const rt = useRouter();
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>Online exam platform</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex-1">
				<Header pathname={rt.pathname} />
				<div className="items-center justify-center flex flex-col sm:py-16 py-14 h-full">
					<form className="min-w-[290px] lg:min-w-[350px]">
						<h1 className="text-xl text-gray-500 text-center pb-6 font-bold">
							Account signin
						</h1>
						<p className="mb-2 text-gray-400">Email</p>
						<input
							required
							type="email"
							className="signin_input"
							placeholder="e.g sales@anmolthedeveloper.com"
						/>
						<p className="mb-2 text-gray-400">Password</p>
						<input
							className="signin_input"
							placeholder="E.g &*(^jio"
						/>
						<Link href="/reset_password">
							<a className="text-[#482ca5] underline text-sm">
								Forgot password?
							</a>
						</Link>
						<button className="text-white bg-[#008a63] block py-[5px] px-6 rounded-[5px] text-sm my-4">
							login
						</button>
					</form>
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default Signin;
