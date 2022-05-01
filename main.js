function getEle(id) {
  return document.getElementById(id);
}
function moveClass(className, idRemove, idAdd) {
  getEle(idRemove).classList.remove(className);
  getEle(idAdd).classList.add(className);
}

// Mode switch
getEle("sun").onclick = function () {
  moveClass("active", "sun", "moon");
};
getEle("moon").onclick = function () {
  moveClass("active", "moon", "sun");
};

// Menu toggler
function switchClass(id, classRemove, classAdd) {
  getEle(id).classList.remove(classRemove);
  getEle(id).classList.add(classAdd);
}
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function showDiv(div, btn) {
  getEle(btn).onclick = function () {
    var classList = getEle(div).classList;
    if (classList[classList.length - 1] === "animate__zoomOut") {
      switchClass(div, "animate__zoomOut", "animate__zoomIn");
    }
    getEle(div).style.display = "block";
  };
}
showDiv("navbarNav", "menuToggler");
//Close button animation & Disapperance
function closeDiv(div, btn) {
  getEle(btn).onclick = function () {
    switchClass(div, "animate__zoomIn", "animate__zoomOut");
    delay(300).then(() => (getEle(div).style.display = "none"));
  };
}
closeDiv("navbarNav", "closeNavBtn");
//BackToTop
document.onscroll = function () {
  if (window.scrollY > 100) {
    getEle("backToTop").classList.add("animate__fadeIn");
    getEle("backToTop").style.display = "block";
  } else {
    getEle("backToTop").style.display = "none";
  }
};
//Play video popup
showDiv("videoClip", "playVid")
closeDiv("videoClip", "closeVideoBtn");
