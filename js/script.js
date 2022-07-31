//determining the type of screen
function is_touch_device() {
    return 'ontouchstart' in window        // works on most browsers 
        || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

//Loader
const loaderVisibility = document.querySelector('.loaderOnStart');
window.addEventListener('load', readyLoad);
function readyLoad() {
    loaderVisibility.style = 'animation: disappearStarter 0s linear 1 1s forwards;';
}

//Light / Dark theme switch
const textDecorationH1 = document.querySelector('h1');
const textDecorationH5 = document.querySelector('h5');
const textDecorationH6 = document.querySelector('h6');
const switchButton = document.querySelector('.lightButton');
const bodyBackground = document.querySelector('body');

function lightOn() {
    if (window.getComputedStyle(switchButton).getPropertyValue('background-color') < 'rgba(255, 255, 255, 0.5)') {
        switchButton.style = 'left: 30px; background: rgba(255, 255, 255, 0.6); border: 2px solid rgba(0, 0, 0, 0.6);';
        bodyBackground.style = 'background: rgb(35, 35, 35) url(img/background/dot.gif);';
        textDecorationH1.style = 'color: rgb(45, 45, 45);';
        textDecorationH5.style = 'color: rgb(45, 45, 45);';
        textDecorationH6.style = 'color: rgb(45, 45, 45);';
    } else {
        switchButton.style = 'left: 0px; background: rgba(0, 0, 0, 0); border: 2px solid rgba(255, 255, 255, 0.6);';        
        bodyBackground.style = 'background: null';
        textDecorationH1.style = 'color: null';
        textDecorationH5.style = 'color: null';
        textDecorationH6.style = 'color: null';
    }
}

document.querySelector('.switch').addEventListener('click', lightOn);

//cheatSheet switch HTML/CSS/JS/React
const bookmarksBlock = document.querySelectorAll('.bookmark');
const cheatSheet = document.querySelectorAll('.bookmarksBodies');
const textDecorationH3 = document.querySelectorAll('h3');
bookmarksBlock[0].style = 'height: 50px;';
bookmarksBlock.forEach(function(bookmark) {
    bookmark.addEventListener('click', function switchPage(event) {
        bookmarksBlock.forEach(function(bookmark) {
            bookmark.style = 'top: none;';
        });
        bookmark.style = 'height: 50px;';
        if (bookmark.id === 'bookmarkHTML') {
            cheatSheet[0].style = 'display: flex;';
            cheatSheet[1].style = 'display: none;';
            cheatSheet[2].style = 'display: none;';
            cheatSheet[3].style = 'display: none;';
            for (i=0; i<textDecorationH3.length; i++) {
                textDecorationH3[i].style = 'color: rgb(255, 130, 50);';
            };
        } else if (bookmark.id === 'bookmarkCSS') {
            cheatSheet[0].style = 'display: none;';
            cheatSheet[1].style = 'display: flex;';
            cheatSheet[2].style = 'display: none;';
            cheatSheet[3].style = 'display: none;';
            for (i=0; i<textDecorationH3.length; i++) {
                textDecorationH3[i].style = 'color: rgb(50, 180, 255);';
            };
        } else if (bookmark.id === 'bookmarkJS') {
            cheatSheet[0].style = 'display: none;';
            cheatSheet[1].style = 'display: none;';
            cheatSheet[2].style = 'display: flex;';
            cheatSheet[3].style = 'display: none;';
            for (i=0; i<textDecorationH3.length; i++) {
                textDecorationH3[i].style = 'color: rgb(255 200 20);';
            }
        } else {
            cheatSheet[0].style = 'display: none;';
            cheatSheet[1].style = 'display: none;';
            cheatSheet[2].style = 'display: none;';
            cheatSheet[3].style = 'display: flex;';
            for (i=0; i<textDecorationH3.length; i++) {
                textDecorationH3[i].style = 'color: rgb(97 218 251);';
            }
        }
    });
});

//right bookmarks switch ------------------------------------ START ----->
//create <div><p>bookmarksName</p></div>
let addBook = function(text){
    let divTag = document.createElement('div');
    divTag.className = 'rightBookmark';
    let pTag = document.createElement('p');
    pTag.className = 'rightBookmarkText';
    pTag.innerText = text;
    divTag.append(pTag);
    return divTag;
}
cheatSheet.forEach(function(e){
    const bookmarkContentBlock = e.querySelectorAll('.bookmarksBodies__content');
    const rightBookmarkItem = e.querySelector('.rightBookmarksBlock');
    for (i=0; i < bookmarkContentBlock.length; i++){
        let rightBookmarkName = bookmarkContentBlock[i].children[0].textContent;
        rightBookmarkItem.append(addBook(rightBookmarkName));
    }
});
//first rightBookmark style
const firstRightBookmark = document.querySelectorAll('.rightBookmarksBlock');
firstRightBookmark.forEach((e) => {
    e.children[0].style='width: 40px; background-color: white;';
    e.children[0].children[0].style='color: #303030;';
});
//content switcher by clicking the right bookmark
const rightBookmark = document.querySelectorAll('.rightBookmark');
rightBookmark.forEach((e) => e.addEventListener('click', rightBookmarkSwitch));
function rightBookmarkSwitch() {
    this.style='width: 40px; background-color: white;';
    this.children[0].style='color: #303030;';
    for (i=0; i < this.closest('.rightBookmarksBlock').children.length; i++){
        if (this.closest('.rightBookmarksBlock').children[i] == this){continue;}
        this.closest('.rightBookmarksBlock').children[i].removeAttribute('style');
        this.closest('.rightBookmarksBlock').children[i].children[0].removeAttribute('style');
    }
    for (i=0; i < this.closest('.bookmarksBodies').children.length-1; i++){
        if (this.closest('.bookmarksBodies').children[i].children[0].textContent == this.children[0].textContent){
            this.closest('.bookmarksBodies').children[i].style.display = 'flex';
        } else {
            this.closest('.bookmarksBodies').children[i].style.display = 'none';
        }
    }
}
//right bookmarks switch ------------------------------------ END ----->

//CSS Flex Example
const flexExample = document.querySelector('.flexConteiner');
const flexItemExample = document.querySelector('.item2');
const flexOptionText = document.querySelectorAll('.valueInText');
const flexListner = document.querySelectorAll('.flexValues');
const flexItemListner = document.querySelectorAll('.flexItemValues');
const newElementsConteiner = document.querySelector('.additionalTextElement');
const newElementsConteinerItem = document.querySelector('.additionalTextElementItem');

flexListner.forEach(function(flexTip){
    for (i=0; i<flexTip.children.length; i++) {
        flexTip.children[i].addEventListener('click', flexClick);
}
});

flexItemListner.forEach(function(flexTip){
    for (i=0; i<flexTip.children.length; i++) {
        flexTip.children[i].addEventListener('click', flexItemClick);
}
});

function flexClick() {
    flexExample.style = flexExample.style.cssText + this.textContent;

    if (this.textContent.includes('flex-direction')) {
        if (newElementsConteiner.textContent.includes('flex-direction')) {
            const flexRemover = document.querySelectorAll('.flexDirectionRemover');
            flexRemover.forEach(e => e.remove());
        }
        newElementsConteiner.insertAdjacentHTML(
            'beforeend',
            `<span class="optionInText flexDirectionRemover">&emsp; flex-direction: </span><span class="valueInText flexDirectionRemover"> ${flexExample.style.flexDirection};</span><br class="flexDirectionRemover">`
        );
    }
    if (this.textContent.includes('justify-content')) {
        if (newElementsConteiner.textContent.includes('justify-content')) {
            const flexRemover = document.querySelectorAll('.flexJustifyRemover');
            flexRemover.forEach(e => e.remove());
        }
        newElementsConteiner.insertAdjacentHTML(
            'beforeend',
            `<span class="optionInText flexJustifyRemover">&emsp; justify-content: </span><span class="valueInText flexJustifyRemover"> ${flexExample.style.justifyContent};</span><br class="flexJustifyRemover">`
        );       
    }
    if (this.textContent.includes('align-items')) {
        if (newElementsConteiner.textContent.includes('align-items')) {
            const flexRemover = document.querySelectorAll('.alignItemsRemover');
            flexRemover.forEach(e => e.remove());
        }
        newElementsConteiner.insertAdjacentHTML(
            'beforeend',
            `<span class="optionInText alignItemsRemover">&emsp; align-items: </span><span class="valueInText alignItemsRemover"> ${flexExample.style.alignItems};</span><br class="alignItemsRemover">`
        );       
    }
    if (this.textContent.includes('flex-wrap')) {
        if (newElementsConteiner.textContent.includes('flex-wrap')) {
            const flexRemover = document.querySelectorAll('.flexWrapRemover');
            flexRemover.forEach(e => e.remove());
        }
        newElementsConteiner.insertAdjacentHTML(
            'beforeend',
            `<span class="optionInText flexWrapRemover">&emsp; flex-wrap: </span><span class="valueInText flexWrapRemover"> ${flexExample.style.flexWrap};</span><br class="flexWrapRemover">`
        );       
    }
    if (this.textContent.includes('align-content')) {
        if (newElementsConteiner.textContent.includes('align-content')) {
            const flexRemover = document.querySelectorAll('.alignContentRemover');
            flexRemover.forEach(e => e.remove());
        }
        newElementsConteiner.insertAdjacentHTML(
            'beforeend',
            `<span class="optionInText alignContentRemover">&emsp; align-content: </span><span class="valueInText alignContentRemover"> ${flexExample.style.alignContent};</span><br class="alignContentRemover">`
        );       
    }
}

function flexItemClick() {
    flexItemExample.style = flexItemExample.style.cssText + this.textContent;
    if (this.textContent.includes('order')) {
        if (newElementsConteinerItem.textContent.includes('order')) {
            const flexRemover = document.querySelectorAll('.orderRemover');
            flexRemover.forEach(e => e.remove());

        }
        newElementsConteinerItem.insertAdjacentHTML(
            'beforeend',
            `<span class="optionInText orderRemover">&emsp; order: </span><span class="valueInText orderRemover"> ${flexItemExample.style.order};</span><br class="orderRemover">`
        );
    }
    if (this.textContent.includes('flex-grow')) {
        if (newElementsConteinerItem.textContent.includes('flex-grow')) {
            const flexRemover = document.querySelectorAll('.flexGrowRemover');
            flexRemover.forEach(e => e.remove());

        }
        newElementsConteinerItem.insertAdjacentHTML(
            'beforeend',
            `<span class="optionInText flexGrowRemover">&emsp; flex-grow: </span><span class="valueInText flexGrowRemover"> ${flexItemExample.style.flexGrow};</span><br class="flexGrowRemover">`
        );
    }
    if (this.textContent.includes('flex-shrink')) {
        if (newElementsConteinerItem.textContent.includes('flex-shrink')) {
            const flexRemover = document.querySelectorAll('.flexShrinkRemover');
            flexRemover.forEach(e => e.remove());

        }
        newElementsConteinerItem.insertAdjacentHTML(
            'beforeend',
            `<span class="optionInText flexShrinkRemover">&emsp; flex-shrink: </span><span class="valueInText flexShrinkRemover"> ${flexItemExample.style.flexShrink};</span><br class="flexShrinkRemover">`
        );
    }
    if (this.textContent.includes('align-self')) {
        if (newElementsConteinerItem.textContent.includes('align-self')) {
            const flexRemover = document.querySelectorAll('.alignSelfRemover');
            flexRemover.forEach(e => e.remove());

        }
        newElementsConteinerItem.insertAdjacentHTML(
            'beforeend',
            `<span class="optionInText alignSelfRemover">&emsp; align-self: </span><span class="valueInText alignSelfRemover"> ${flexItemExample.style.alignSelf};</span><br class="alignSelfRemover">`
        );
    }
}

/*CSS flex example. Items amount scale*/
const mouseEvent = document.querySelector('.itemsAmount_scale');
const regulatorMover = document.querySelector('.itemsAmount_regulator');
const itemsCounter = document.querySelectorAll('.flexItem');
regulatorMover.addEventListener('mousedown', TakeRegulator);

function TakeRegulator() {
    window.addEventListener('mousemove', MoveRegulator);
    let prevX = event.clientX;
    function MoveRegulator(){
        if (prevX<event.clientX & parseInt(regulatorMover.style.left)<218){
            regulatorMover.style.left = parseInt(regulatorMover.style.left)+(event.clientX-prevX)+'px';
        }
        if (prevX>event.clientX & parseInt(regulatorMover.style.left)>3){
            regulatorMover.style.left = parseInt(regulatorMover.style.left)-(prevX-event.clientX)+'px';
        }            
        if (parseInt(regulatorMover.style.left)>217) {
            regulatorMover.style.left = '218px';
        }
        if (parseInt(regulatorMover.style.left)<3) {
            regulatorMover.style.left = '3px';
        }

        prevX = event.clientX;

        if (parseInt(regulatorMover.style.left)<54) {
            for (i=3; i<itemsCounter.length; i++){
                itemsCounter[i].style.display = 'none';
            }
            regulatorMover.innerHTML = 3;
        } else if (parseInt(regulatorMover.style.left)<109) {
            for (i=4; i<itemsCounter.length; i++){
                itemsCounter[i].style.display = 'none';
            }
            for (i=0; i<4; i++){
                itemsCounter[i].style.display = 'flex';
            }
            regulatorMover.innerHTML = 4;
        } else if (parseInt(regulatorMover.style.left)<164) {
            for (i=5; i<itemsCounter.length; i++){
                itemsCounter[i].style.display = 'none';
            }
            for (i=0; i<5; i++){
                itemsCounter[i].style.display = 'flex';
            }
            regulatorMover.innerHTML = 5;
        } else {
            for (i=6; i<itemsCounter.length; i++){
                itemsCounter[i].style.display = 'none';
            }
            for (i=0; i<6; i++){
                itemsCounter[i].style.display = 'flex';
            }
            regulatorMover.innerHTML = 6;
        }            
    }
    window.addEventListener('mouseup',  dropRegulator);
    function dropRegulator(){
        window.removeEventListener('mousemove', MoveRegulator);
        window.removeEventListener('mouseup',  dropRegulator);
    }
    

}

//burger content for mobile devices
if (window.innerWidth <= 815) {
    const tipHover = document.querySelectorAll('.tip');
    tipHover.forEach(item => {
        const divElem = item.querySelector('div');
        const h3Elem = item.querySelector('h3');
        const tryTry = item.querySelector('input');
        const limiter = item.querySelector('.limiter');
        if (divElem !== null) {divElem.style.display = 'none';}
        if (tryTry !== null) {
            tryTry.remove();
            limiter.remove();
            divElem.style.maxHeight = 'none';
        }
        h3Elem.addEventListener('click', burgerContent => {
            if (divElem.style.display == 'none') {
                divElem.style.display = 'block';
            } else {
                divElem.style.display = 'none';}
        });
    });
}