function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomImageId = getRandomInt(1,6);
var imgURL = chrome.extension.getURL('images/ghost'+randomImageId+'.jpg');

document.body.innerHTML = document.body.innerHTML.replace(/river/gi, 'riber');
javascript:var imgs = document.getElementsByTagName("img");for(var i=0, l=imgs.length;i<l;i++){imgs[i].src = imgURL;}
