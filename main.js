function getEle(id){
    return document.getElementById(id);
}
function switchClass(className, idRemove, idAdd){
    getEle(idRemove).classList.remove(className);
    getEle(idAdd).classList.add(className);
}
// Mode switch
getEle('sun').onclick = function(){
    switchClass('active', 'sun', 'moon');
}
document.getElementById('moon').onclick = function(){
    switchClass('active', 'moon', 'sun');
}
//Menu toggler
getEle('menuToggler').onclick = function(){
    var classList = getEle('navbarNav').classList;
    if (classList[classList.length-1] === "animate__zoomOut"){
        getEle('navbarNav').classList.remove('animate__zoomOut');
        getEle('navbarNav').classList.add("animate__zoomIn");
    }
    getEle('navbarNav').style.display = 'block';
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
getEle('closeBtn').onclick = function(){
    getEle('navbarNav').classList.remove("animate__zoomIn");
    getEle('navbarNav').classList.add('animate__zoomOut');
    delay(300).then(() => getEle('navbarNav').style.display = 'none');
}