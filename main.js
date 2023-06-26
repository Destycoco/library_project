const aside = document.querySelector(".aside");
const menu = document.querySelector("#menu")
const menu2 = document.querySelector("#menu2")

// console.log(menu);
function showMenu(){
     aside.style.right = "0%";
}
function hideMenu(){
	aside.style.right = "-40%";
}

menu.addEventListener("click", ()=>{
	
	if (menu.classList.contains("fa-bars")){
		menu.id = "menu2" ;
		showMenu();
		menu2.style.opacity = "1"
		menu.style.opacity = "0"
	} 
 	
});
menu2.addEventListener("click", ()=>{
	if(menu2.classList.contains("fa-times")){
		menu2.id = "menu";
		hideMenu();
		menu2.style.opacity = "0";
		menu.style.opacity = "1";

	}
})


