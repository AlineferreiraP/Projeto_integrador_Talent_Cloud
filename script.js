const menu = document.getElementById("menu");
const menuTrigger = document.getElementById("menu-trigger");
let state ="true";


menuTrigger.addEventListener('click', () => {
  if(state == "false") {
    state = "true";
  } else {
    state = "false";
  }
  
  menu.dataset.aberto = state;
})
