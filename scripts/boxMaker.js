var dot = document.createElement("h3");

var oneClick = false;
var using = false;
var widthOne = 0;
var heightOne = 0;
var widthTwo = 0;
var heightTwo = 0;

var finalWidth, finalHeight;
//function creates boxes with a set width and height and x, and y coordinates, and the english and spanish word that go with the item...
function makeBox(width, height, x, y) {
    var clickBox = document.createElement("div");
    clickBox.setAttribute("class", "clickbox centered");
    clickBox.setAttribute("ondblclick", "destroyElement(this)");
    clickBox.setAttribute("style", "width:" + width + "%;height:" + height + "%;left:" + x + "%;top:" + y + "%;");
    document.body.appendChild(clickBox);
    dragElement(clickBox);
}
//allows click for box making
function printMousePos(event) {
    if (using == false) {
        if (oneClick == false) {
            oneClick = true;
            dot.innerHTML = "*";
            dot.setAttribute("style", "position:absolute;left:" + (event.clientX - 4) + "px;top:" + (event.clientY - 24) + "px");
            document.body.appendChild(dot) //adds dot where the first click is made
            widthOne = (event.clientX / window.innerWidth) * 100;
            heightOne = (event.clientY / window.innerHeight) * 100;
            //gets screen size and width and height
        } else if (oneClick == true) {
            oneClick = false;
            widthTwo = (event.clientX / window.innerWidth) * 100;
            heightTwo = (event.clientY / window.innerHeight) * 100;
            dot.innerHTML = "";
        }
        if (widthTwo > 0) {
            //math for geting correct width and height
            if (widthOne > widthTwo) {
                finalWidth = widthOne - widthTwo;
            } else {
                finalWidth = widthTwo - widthOne;
            }
            if (heightOne > heightTwo) {
                finalHeight = heightOne - heightTwo;
            } else {
                finalHeight = heightTwo - heightOne;
            }
            if (finalWidth < .5) {
                finalWidth = .5
            }
            if (finalHeight < .5) {
                finalHeight = .5
            }
            //gets the screen location where the box was clicked at and makes it at that location
            if (widthTwo > widthOne && heightOne > heightTwo) {
                makeBox(finalWidth, finalHeight, widthOne, heightTwo)
            } else if (widthTwo < widthOne && heightOne > heightTwo) {
                makeBox(finalWidth, finalHeight, widthTwo, heightTwo)
            } else if (widthTwo < widthOne || heightTwo < heightOne) {
                makeBox(finalWidth, finalHeight, widthTwo, heightOne)
            } else {
                makeBox(finalWidth, finalHeight, widthOne, heightOne)
            }
            //Logs final width and height of boxes
            console.log("Box Width " + finalWidth);
            console.log("Box Height " + finalHeight);
            widthTwo = 0;
        }
    }
    using = false;
}

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    var set1, set2;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        using = true;
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        //tells you the location of the boxes before they are moved
        console.log("Box Top Location: " + elmnt.style.top);
        console.log("Box Left Location: " + elmnt.style.left);

    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = ((elmnt.offsetTop - pos2) / window.innerHeight) * 100 + "%";
        elmnt.style.left = ((elmnt.offsetLeft - pos1) / window.innerWidth) * 100 + "%";

    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
        //tells you the location of boxes after they are moved
        console.log("Box Top Location After Being Moved: " + elmnt.style.top);
        console.log("Box Left Location After Being Moved: " + elmnt.style.left);
    }
}

function destroyElement(obj) {
    obj.parentNode.removeChild(obj);
}

document.addEventListener("click", printMousePos);