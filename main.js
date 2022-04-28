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
getEle("menuToggler").onclick = function () {
  var classList = getEle("navbarNav").classList;
  if (classList[classList.length - 1] === "animate__zoomOut") {
    switchClass("navbarNav", "animate__zoomOut", "animate__zoomIn");
  }
  getEle("navbarNav").style.display = "block";
};
//Close button animation & Disapperance
getEle("closeBtn").onclick = function () {
  switchClass("navbarNav", "animate__zoomIn", "animate__zoomOut");
  delay(300).then(() => (getEle("navbarNav").style.display = "none"));
};
//BackToTop
document.onscroll = function () {
  if (window.scrollY > 100) {
    getEle('backToTop').classList.add('animate__fadeIn');
    getEle("backToTop").style.display = "block";
  } else {
    getEle("backToTop").style.display = "none";
  }
};
