import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";

function Reset_password() {
	return (
		<div>
			<Head>
				<title>Online exam platform</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-1 flex-col">
				<Header />
				<div className="items-center justify-center flex flex-col py-16">
					<form className="min-w-[290px] lg:min-w-[350px]">
						<h1 className="text-xl text-gray-500 text-center pb-6 font-bold">
							Account Recovery
						</h1>
						<p className="mb-2 text-gray-400">Enter your email</p>
						<input
							required
							type="email"
							className="signin_input"
							placeholder="e.g sales@anmolthedeveloper.com"
						/>
						<button className="text-white bg-[#008a63] mt-[-5px] block py-[5px] px-6 rounded-[5px] text-sm my-4">
							submit
						</button>
					</form>
				</div>
			</main>
		</div>
	);
}

export default Reset_password;
