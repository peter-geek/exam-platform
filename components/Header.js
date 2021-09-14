import { FireIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Router from "next/router";

function Header({ pathname }) {
	// console.log(pathname);
	return (
		// <header className="bg-white py-4 shadow-md text-[#4e3894]">
		<header className="bg-gray-100 border-b border-gray-200 py-4 text-[#4e3894]">
			<nav className="mx-auto max-w-screen-lg flex justify-between px-5">
				<div className="flex flex-grow">
					<FireIcon className="text-black h-8 text-red-500 mr-5" />
					<Link href="/">
						<a className="text-xl font-bold">
							Online exam platform
						</a>
					</Link>
				</div>
				<div className="space-x-3">
					<Link href="/signin">
						<a
							className={
								pathname == "/signin"
									? "py-1 px-4 text-sm rounded-full bg-[#4e3894] text-white lg:px-7"
									: "bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-sm"
							}
						>
							Sign in
						</a>
					</Link>
					<Link href="/signup">
						<a
							className={
								pathname == "/signup"
									? "py-1 px-4 text-sm rounded-full bg-[#4e3894] text-white lg:px-7"
									: "bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-sm"
							}
						>
							Sign up
						</a>
					</Link>
				</div>
			</nav>
		</header>
	);
}

export default Header;
