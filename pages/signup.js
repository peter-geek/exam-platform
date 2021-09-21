import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useState } from "react";
import { showDialogue, closeDialogue } from "../functions/dialogue";

function Signup() {
	const rt = useRouter();
	const [formData, setformData] = useState({
		name: "",
		email: "",
		new_pass: "",
		pass_confirm: "",
	});

	const formHandler = (event) => {
		let x = formData;
		x[event.target.name] = event.target.value;
		setformData(x);
	};

	const submitForm = (event) => {
		event.preventDefault();
		const url = "http://localhost:4000/signup";
		let data = JSON.stringify(formData);
		const options = {
			body: data,
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		};
		fetch(`${url}`, options)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.hasOwnProperty("error") && data.error != "") {
					showDialogue(data.error);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>Online exam platform</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex-1 flex flex-grow flex-col">
				<Header pathname={rt.pathname} />
				<div className="items-center justify-center flex flex-col py-16">
					<form
						className="min-w-[290px] lg:min-w-[350px]"
						onSubmit={submitForm}
					>
						<h1 className="text-xl text-gray-500 text-center pb-6 font-bold">
							Create account
						</h1>
						<p className="mb-2 text-gray-400">Email</p>
						<input
							required
							type="email"
							className="signin_input"
							placeholder="e.g sales@anmolthedeveloper.com"
							name="email"
							onChange={formHandler}
						/>
						<p className="mb-2 text-gray-400">Full name</p>
						<input
							required
							type="text"
							className="signin_input"
							placeholder="e.g Robert Kiganda"
							name="name"
							onChange={formHandler}
						/>
						<p className="mb-2 text-gray-400">New Password</p>
						<input
							type="password"
							className="signin_input"
							placeholder="E.g &*(^jio"
							name="new_pass"
							onChange={formHandler}
						/>
						<p className="mb-2 text-gray-400">Confirm Password</p>
						<input
							type="password"
							className="signin_input"
							placeholder="E.g &*(^jio"
							name="pass_confirm"
							onChange={formHandler}
						/>
						<button className="text-white bg-[#008a63] block py-[5px] px-6 rounded-[5px] text-sm my-4">
							submit
						</button>
					</form>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Signup;
