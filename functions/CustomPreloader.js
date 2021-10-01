const showpreloader = () => {
	const preloader = document.getElementById("CustomPreloader");
	let classes = preloader.classList;
	let newClassList = classes.contains("flex")
		? classes.toString().replace(/ flex /gi, " hidden ")
		: classes.toString().replace(/hidden/gi, "flex");
	preloader.className = newClassList;
};
export { showpreloader };
