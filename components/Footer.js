import Image from "next/image";
import Link from "next/link";

function Footer() {
	return (
		<div className="flex flex-row space-x-2 items-center justify-center text-center bg-gray-200 border-t border-gray-300 text-sm py-4 font-semibold text-gray-700">
			<p className="pr-2">Get the repo</p>
			<Image
				className="rounded-full"
				src="/GitHub-icon.png"
				height={20}
				width={20}
			/>
			<Link href="https://github.com/peter-geek/exam-platform">
				<a className="text-[#2467a7]">@ exam-platform</a>
			</Link>
		</div>
	);
}

export default Footer;
