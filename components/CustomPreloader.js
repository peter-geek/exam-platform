function CustomPreloader() {
	return (
		<div
			className="fixed hidden justify-center items-center overflow-hidden bg-[rgba(72,44,165,0.23)] h-screen w-screen z-50 top-0 left-0"
			id="CustomPreloader"
		>
			<div className="bg-white p-5 py-7 rounded-lg shadow-lg w-[350px]">
				<p className="mb-2 font-semibold text-sm">please wait ...</p>
				<div className="bg-gray-100 rounded-full h-[10px]  border-red-200 border-[1px] flex items-center">
					<div
						className="bg-[#d6385b] h-1 w-[100px] ml-1 rounded-full"
						id="preloader_film"
					></div>
				</div>
			</div>
		</div>
	);
}

export default CustomPreloader;
