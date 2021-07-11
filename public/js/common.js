// ---------- requetes HTTP ---------- //

function httpGet(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    return xhr.responseText;
}

// inspired from : https://stackoverflow.com/questions/3748929/passing-parameter-to-a-javascript-function-as-a-dictionary-object
function getArgsBuilder(object) {
    var getArgs = [];
    for (var key in object) if (object.hasOwnProperty(key)) {
        getArgs.push(encodeURIComponent(key) + '=' + encodeURIComponent(object[key]));
    }
    return getArgs.join('&');
}

function httpPost(url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, false);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
    return xhr.responseText;
}


// ---------- DOM ---------- //

function getHTML(cssSelector){      return document.querySelector(cssSelector).outerHTML }
function getInnerHTML(cssSelector){ return document.querySelector(cssSelector).innerHTML }
function getValue(cssSelector){     return document.querySelector(cssSelector).value }
function get(cssSelector){          return document.querySelector(cssSelector) }


// ---------- Fonctionnement global ---------- //

var sidebar = false;
function clickHamburger(){
    if(sidebar){
        get('.sidebar').style.display = 'none';
        sidebar = false;
    } else {
        get('.sidebar').style.display = 'initial';
        sidebar = true;
    }
}
