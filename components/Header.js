import { FireIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Router from "next/router";

function Header({ pathname }) {
	console.log(pathname);
	return (
		<header className="bg-white py-4 shadow-md text-[#4e3894] flex-grow">
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
									? "py-2 px-5 text-sm rounded-full bg-[#4e3894] text-white lg:px-7"
									: ""
							}
						>
							Sign in
						</a>
					</Link>
					<Link href="/signup">
						<a
							className={
								pathname == "/signup"
									? "py-2 px-5 text-sm rounded-full bg-[#4e3894] text-white lg:px-7"
									: ""
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
