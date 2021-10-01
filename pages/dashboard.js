import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import CustomPrompt from "../components/CustomPrompt";
import { showDialogue, closeDialogue } from "../functions/dialogue";
import { UserIcon, UserCircleIcon, LogoutIcon } from "@heroicons/react/solid";
import Lorem from "../components/Lorem";
// import "localstorage-polyfill";
function dashboard() {
	return (
		<div className="flex h-screen bg-[#f5f5f5] text-gray-600">
			<div className="flex-shrink-0 w-[240px] text-gray-600 min-h-full bg-white shadow-lg">
				<p className="">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
			</div>
			<div className="flex-grow flex">
				<div className="flex flex-grow flex-col">
					<div className="p-2 pl-4 flex bg-white">
						<p className="flex-grow text-lg font-bold">
							Welcome to your dashboard
						</p>
						<div className="mr-2 flex justify-center items-center">
							<Link href="https://www.google.com" target="_blank">
								<UserCircleIcon className="text-red-500 cursor-pointer rounded-full h-6" />
							</Link>
							<div className="border-[#9476f7] border-[1px] bg-[#f3efff] p-1 px-2 pl-4 text-sm ml-4 rounded-full flex">
								<Link
									href="#"
									className="pr-2 text-[#482ca5] font-semibold"
								>
									<a href="/logout">Logout</a>
								</Link>
								<Link
									href="https://www.google.com"
									target="_blank"
								>
									<LogoutIcon className="text-[#613ae0] cursor-pointer rounded-full h-5" />
								</Link>
							</div>
						</div>
					</div>
					<div className="flex-grow flex pt-2 break-all whitespace-pre-wrap overflow-y-scroll">
						{/* <div className="flex-grow">
							<div className="bg-white rounded-md ml-2 overflow-hidden">
								<p className="border-b border-gray-200 p-2 font-semibold bg-gradient-to-t from-[#f5f5f5] to-white">
									Performance
								</p>
								lll
							</div>
						</div>
						<div className="flex-grow-0 w-[350px]">
							<div className="bg-white rounded-lg ml-2 mr-2 p-2">
								Card
							</div>
						</div> */}
						<Lorem />
						<Lorem />
					</div>
				</div>
			</div>
			<CustomPrompt />
		</div>
	);
}

export default dashboard;

// this.props.token = localStorage.getItem("token");

// export async function getServerSideProps() {
// 	// const url = process.env.HOST_URL;
// 	const url = "http://localhost:4000/dashboard";
// 	// console.log(url + "here");
// 	const results = await fetch(url, {
// 		headers: {
// 			"Content-Type": "application/json",
// 			// Authorization: "Bearer " + localStorage.getItem("token"),
// 		},
// 	})
// 		.then((res) => res.json())
// 		.catch((err) => {
// 			console.log(err);
// 		});
// 	return {
// 		props: {
// 			dashboard: results,
// 		},
// 	};
// }
