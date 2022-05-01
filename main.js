function getEle(id) {
  return document.getElementById(id);
}
function moveClass(className, idRemove, idAdd) {
  getEle(idRemove).classList.remove(className);
  getEle(idAdd).classList.add(className);
}
function addClass (className, idDiv){
  getEle(idDiv).classList.add(className);
}
function removeClass (className, idDiv){
  getEle(idDiv).classList.remove(className);
}
// Mode switch
function darken(className, darkClass) {
  var classes = document.getElementsByClassName(className);
  for (var i=0; i<classes.length; i++){
    classes[i].classList.add(darkClass);
  }
}
function lighten(className, darkClass) {
  var classes = document.getElementsByClassName(className);
  for (var i=0; i<classes.length; i++){
    classes[i].classList.remove(darkClass);
  }
}
getEle("moon").onclick = function () {
  moveClass("active", "moon", "sun");
  darken('lightBg', 'dark__bg');
  darken('lightText', 'dark__text');
  darken('lightHeader', 'dark__header');
};
getEle("sun").onclick = function () {
  moveClass("active", "sun", "moon");
  lighten('lightBg', 'dark__bg');
  lighten('lightText', 'dark__text');
  lighten('lightHeader', 'dark__header');
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

