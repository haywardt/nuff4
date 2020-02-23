const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function bottomBarClickHandler() {
  for (let q of event.target.parentElement.children) {
    q.removeAttribute("selected");
  }
  event.target.setAttribute("selected", true);
}

function slideMenu(flag) {
  let value = false;
  console.log(event)
  if (event.path.includes($("div#drawer"))) {
    $("div#drawer").setAttribute("selected", true);
  } else {
    $("div#drawer").removeAttribute("selected");
  }
  event.stopPropagation();
}
function ignoreSwitchClick(){
  console.log('ignoring')
  event.stopPropagation()
}
function init() {
  $("#bottomBar").addEventListener("click", bottomBarClickHandler);
  $("#drawer").addEventListener("click", slideMenu);
  $("body").addEventListener("click", slideMenu);
}
window.onload = init;
