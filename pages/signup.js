import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import { useRouter } from "next/router";

function Signup() {
	const rt = useRouter();
	return (
		<div>
			<Head>
				<title>Online exam platform</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-1 flex-col">
				<Header pathname={rt.pathname} />
				<div className="items-center justify-center flex flex-col py-16">
					<form className="min-w-[290px] lg:min-w-[350px]">
						<h1 className="text-xl text-gray-500 text-center pb-6 font-bold">
							Create account
						</h1>
						<p className="mb-2 text-gray-400">Email</p>
						<input
							required
							type="email"
							className="signin_input"
							placeholder="e.g sales@anmolthedeveloper.com"
						/>
						<p className="mb-2 text-gray-400">Full name</p>
						<input
							required
							type="text"
							className="signin_input"
							placeholder="e.g Robert Kiganda"
						/>
						<p className="mb-2 text-gray-400">New Password</p>
						<input
							type="password"
							className="signin_input"
							placeholder="E.g &*(^jio"
						/>
						<p className="mb-2 text-gray-400">Confirm Password</p>
						<input
							type="password"
							className="signin_input"
							placeholder="E.g &*(^jio"
						/>
						<button className="text-white bg-[#008a63] block py-[5px] px-6 rounded-[5px] text-sm my-4">
							submit
						</button>
					</form>
				</div>
			</main>
		</div>
	);
}

export default Signup;
