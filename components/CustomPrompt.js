function CustomPrompt() {
	return (
		<div>
			<div
				id="messagePopup"
				className="fixed items-center justify-center h-screen w-full bg-white top-0 left-0 flex flex-col hidden"
			>
				<div className="border w-[350px] fixed z-10 border-gray-300 flex-1 mx-auto min-h[200px] shadow-lg rounded-lg overflow-hidden">
					<p className="p-2 text-left border-b border-gray-200 bg-[#fffcff]">
						Online exam platform
					</p>
					<p className="p-3 text-left">
						border min-w-[350px] fixed z-10 border-gray-300 flex-1
						mx-auto min-h[200px] shadow-lg rounded-lgborder
						min-w-[350px] fixed z-10 border-gray-300 flex-1 mx-auto
						min-h[200px] shadow-lg rounded-lg
					</p>
					<div className="flex justify-end p-2 mt-2">
						<button
							onClick={xew}
							className="bg-[#4e3894] text-white px-4 py-1"
						>
							ok
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

const closeMessagePopup = () => {
	document.getElementById("messagePopup").style.display = "flex";
};

const xew = () => {
	document.getElementById("messagePopup").style.display = "none";
};

export default CustomPrompt;
