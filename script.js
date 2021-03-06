const progress = document.querySelector('.progress');
let popup = document.getElementById("popup");
let popup_btn = document.getElementById("popup_btn");
const burgerButton = document.getElementById("burger_btn");
const burgerMenu = document.getElementById("burger_menu");
const body = document.body;

function toggleOpenClass(){
  burgerMenu.classList.toggle("open");
  burgerButton.classList.toggle("open");
  if(burgerMenu.classList.contains("open")){
    body.style.height = "100vh";
    body.style.overflow = "hidden";
  } else {
    body.style.height = "auto";
    body.style.overflow = "auto";
  }
}



function enableBodyScroll() {
  if (document.readyState === "complete") {
    document.body.style.position = "";
    document.body.style.overflowY = "";

    if (document.body.style.marginTop) {
      const scrollTop = -parseInt(document.body.style.marginTop, 10);
      document.body.style.marginTop = "";
      window.scrollTo(window.pageXOffset, scrollTop);
    }
  } else {
    window.addEventListener("load", enableBodyScroll);
  }
}

function disableBodyScroll({ savePosition = false } = {}) {
  if (document.readyState === "complete") {
    if (document.body.scrollHeight > window.innerHeight) {
      if (savePosition)
        document.body.style.marginTop = `-${window.pageYOffset}px`;
      document.body.style.position = "fixed";
      document.body.style.overflowY = "scroll";
    }
  } else {
    window.addEventListener("load", () => disableBodyScroll({ savePosition }));
  }
}

function closePopup() {
  popup.classList.remove("open");
  enableBodyScroll();
}

function openPopup() {
  popup.classList.add("open");
  disableBodyScroll();
  disableBodyScroll({ savePosition: true });
}

function progressBar(e){
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let per = windowScroll / windowHeight * 100;
  progress.style.width = per + '%';
}


window.addEventListener('scroll', progressBar);
popup_btn.addEventListener("click", openPopup);
popup.addEventListener("click", closePopup);
burgerMenu.addEventListener("click", toggleOpenClass);
burgerButton.addEventListener("click", toggleOpenClass)



