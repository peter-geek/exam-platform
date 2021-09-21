function closeDialogue() {
	document.getElementById("messagePopup").style.display = "hidden";
}
function showDialogue(msg = "") {
	document.getElementById("messagePopup").style.display = "flex";
	document.getElementById("messagePopup").querySelectorAll("p")[1].innerText =
		msg;
}

export { closeDialogue, showDialogue };
