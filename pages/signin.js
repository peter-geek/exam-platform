import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import { useRouter } from "next/router";

function Signin() {
	const rt = useRouter();
	// const { aspath, pathname } = useRouter;
	// console.log(pathname + ", ", +aspath, +", " + rt.pathname);
	// console.log(Router);
	return (
		<div className="">
			<Head>
				<title>Online exam platform</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-1 flex-col">
				<Header pathname={rt.pathname} />
				<div className="items-center justify-center flex flex-col py-16">
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
		</div>
	);
}

export default Signin;
