import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import { useState } from "react";
import { showDialogue, closeDialogue } from "../functions/dialogue";

function Signin() {
	const [formData, setformData] = useState({
		email: "",
		password: "",
	});
	const formHandler = (event) => {
		let x = formData;
		x[event.target.name] = event.target.value;
		setformData(x);
		console.log(formData);
	};

	const signin = (event) => {
		event.preventDefault();
		if (formData.email == "") showDialogue("Your email please");
		else if (formData.password == "")
			showDialogue("Please include your password.");
		else {
			const url = "http://localhost:4000/signin";
			const data = JSON.stringify(formData);
			console.log(data);
			const options = {
				headers: {
					"Content-Type": "application/json",
				},
				body: data,
				method: "POST",
			};
			fetch(url, options)
				.then((response) => response.json())
				.then((data) => {
					if (data.msg != "ok") showDialogue(data.msg);
					else {
						console.log(data.token);
						localStorage.setItem("token", data.token);
						rt.push("./dashboard");
					}
				})
				.catch((err) => console.log(err));
		}
	};

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
					<form
						onSubmit={signin}
						className="min-w-[290px] lg:min-w-[350px]"
					>
						<h1 className="text-xl text-gray-500 text-center pb-6 font-bold">
							Account signin
						</h1>
						<p className="mb-2 text-gray-400">Email</p>
						<input
							name="email"
							required
							type="email"
							className="signin_input"
							placeholder="e.g sales@anmolthedeveloper.com"
							onChange={formHandler}
						/>
						<p className="mb-2 text-gray-400">Password</p>
						<input
							type="password"
							name="password"
							className="signin_input"
							placeholder="E.g &*(^jio"
							onChange={formHandler}
						/>
						<Link href="/reset_password">
							<a className="text-[#482ca5] underline text-sm">
								Forgot password?
							</a>
						</Link>
						<button
							type="submit"
							className="text-white bg-[#008a63] block py-[5px] px-6 rounded-[5px] text-sm my-4"
						>
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
