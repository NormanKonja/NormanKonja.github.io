//NO ELIMINATION--MOST CORRECT FROM WHEN EVERYTHING IS SELECTED
//WINNER ANSWERS LAST QUESTION
//BACK AND FORTH QUESTIONS
///TEAM NAME OPTION
// IF TIED GO BY TIME PER QUESTION
do {
    do {
        var playerOne = prompt("Player One Enter Name: ");
    }
    while (playerOne.length < 1)
    do {
        var playerTwo = prompt("Player Two Enter Name: ");
    }
    while (playerTwo.length < 1)
    if (playerOne.toLowerCase() == playerTwo.toLowerCase()) {
        alert("Both Players Cant Have The Same Name!")
    }
}
while (playerOne.toLowerCase() == playerTwo.toLowerCase())

//Object with all of the game data, will come over as a json object eventually
var mydata = {
    v1: {
        id: 1,
        eng: 'one',
        trans: 'uno',
        audio: '',
        image: ''
    },
    v2: {
        id: 2,
        eng: 'two',
        trans: 'dos',
        audio: '',
        image: ''
    },
    v3: {
        id: 3,
        eng: 'three',
        trans: 'tres',
        audio: '',
        image: ''
    },
    v4: {
        id: 4,
        eng: 'four',
        trans: 'quatro',
        audio: '',
        image: ''
    },
    v5: {
        id: 5,
        eng: 'five',
        trans: 'cinco',
        audio: '',
        image: ''
    },
    v6: {
        id: 6,
        eng: 'six',
        trans: 'seis',
        audio: '',
        image: ''
    },
    v7: {
        id: 7,
        eng: 'seven',
        trans: 'siete',
        audio: '',
        image: ''
    },
    v8: {
        id: 8,
        eng: 'eight',
        trans: 'ocho',
        audio: '',
        image: ''
    },
    v9: {
        id: 9,
        eng: 'nine',
        trans: 'nueve',
        audio: '',
        image: ''
    },
    v10: {
        id: 10,
        eng: 'ten',
        trans: 'diez',
        audio: '',
        image: ''
    },
    v11: {
        id: 11,
        eng: 'eleven',
        trans: 'once',
        audio: '',
        image: ''
    },
    v12: {
        id: 12,
        eng: 'twelve',
        trans: 'doce',
        audio: '',
        image: ''
    },
    v13: {
        id: 13,
        eng: 'thirteen',
        trans: 'trece',
        audio: '',
        image: ''
    },
    v14: {
        id: 14,
        eng: 'fourteen',
        trans: 'catorce',
        audio: '',
        image: ''
    },
    v15: {
        id: 15,
        eng: 'fifteen',
        trans: 'quince',
        audio: '',
        image: ''
    },
    v16: {
        id: 16,
        eng: 'sixteen',
        trans: 'dieciseis',
        audio: '',
        image: ''
    },
    v17: {
        id: 17,
        eng: 'seventeen',
        trans: 'diecisiete',
        audio: '',
        image: ''
    },
    v18: {
        id: 18,
        eng: 'eighteen',
        trans: 'dieciocho',
        audio: '',
        image: ''
    },
    v19: {
        id: 19,
        eng: 'nineteen',
        trans: 'diecinueve',
        audio: '',
        image: ''
    },
    v20: {
        id: 20,
        eng: 'twenty',
        trans: 'veinte',
        audio: '',
        image: ''
    },
    v21: {
        id: 21,
        eng: 'twenty-one',
        trans: 'veintiuno',
        audio: '',
        image: ''
    },
    v22: {
        id: 22,
        eng: 'twenty-two',
        trans: 'veintidos',
        audio: '',
        image: ''
    },
    v23: {
        id: 23,
        eng: 'twenty-three',
        trans: 'veintitres',
        audio: '',
        image: ''
    },
    v24: {
        id: 24,
        eng: 'twenty-four',
        trans: 'veinticuatro',
        audio: '',
        image: ''
    },
    v25: {
        id: 25,
        eng: 'twenty-five',
        trans: 'veinticinco',
        audio: '',
        image: ''
    },
    v26: {
        id: 26,
        eng: 'twenty-six',
        trans: 'veintiseis',
        audio: '',
        image: ''
    },
    v27: {
        id: 27,
        eng: 'twenty-seven',
        trans: 'veintisiete',
        audio: '',
        image: ''
    },
    v28: {
        id: 28,
        eng: 'twenty-eight',
        trans: 'veintiocho',
        audio: '',
        image: ''
    },
    v29: {
        id: 29,
        eng: 'twenty-nine',
        trans: 'veintinueve',
        audio: '',
        image: ''
    },
    v30: {
        id: 30,
        eng: 'thirty',
        trans: 'treinta',
        audio: '',
        image: ''
    }
};

var allids = [];
for (var marr in mydata) { //Pull all of the question ids...
    allids.push(mydata[marr]['id']);
}
var shuffledids = shuffleArr(allids); //... and shuffle them

var finalq = {
    image: './images/parqueguell.jpg',
    question: 'Parque Guell is located in which Spanish city?',
    answer: 'Barcelona',
    factoid: 'The Park Guell is a public park system composed of gardens and architectonic elements located on Carmel Hill, in Barcelona, Catalonia (Spain).<br> The park was built between 1900 and 1914 and was officially opened as a public park in 1926.'
};

var mainObj = [];
var mainObjRef = [];
var defaultLanguage = 'trans';
var amount = 4;
var done = false;
var playerOneClicks = 0;
var playerTwoClicks = 0;
var missMatched = {
    playerOne: [],
    playerTwo: []
};
var times = [0, 0];
var gameStart, flipStart;
var player = Math.floor(Math.random() * 2) + 1;
var playerTurnDisplay = document.createElement("h2");

var clickedCard = 0;
var score = 0;
var isFlipped = false;

var playerOneScore = 0;
var playerTwoScore = 0;
var playerOneIncorrectScore = 0;
var playerTwoIncorrectScore = 0;

var xLarge = window.matchMedia("(max-width:5000px) and (min-width: 900px)");
var large = window.matchMedia("(max-width: 900px) and (min-width:517px)");
var medium = window.matchMedia("(max-width: 516px) and (min-width:417px)");
var small = window.matchMedia("(max-width: 416px) and (min-width:367px)");
var xSmall = window.matchMedia("(max-width: 366px) and (min-width:150px)");

var options = document.getElementById("wordblock");

var board = document.getElementById("boardbkg");
document.getElementById('boardbkg').style.backgroundImage = "url('" + finalq['image'] + "')"; //Set the background image from final question.

function flip(card) {
    if (isFlipped == true) {
        card.setAttribute('class', 'back');
        card.classList.remove('flipped');
        isFlipped = false;
    } else if (isFlipped == false) {
        card.setAttribute('class', 'flipped');
        card.classList.remove('back');
        isFlipped = true;
    }
}


function createGame(amountOfCards) {
    setDisplay();
    gameStart = new Date();
    document.body.appendChild(playerTurnDisplay);
    var cardLanguage = 2;
    var randtype = 0;
    var answerwords = [];
    var rowsize = Math.sqrt(amountOfCards);
    var rowcount = 0;
    for (var i = 0; i < amountOfCards; i++) {
        var thiscardid = 'v' + shuffledids[i]; //Get the card id
        if (mydata[thiscardid]) { //Check to make sure the card exists
            if (rowcount == 0) {
                var row = document.createElement("div");
                row.setAttribute('class', 'row');
                board.appendChild(row);
                rowcount++;
            } else {
                rowcount++;
            }

            if (rowcount == rowsize) {
                rowcount = 0;
            }

            var box = document.createElement("div");
            box.setAttribute('class', 'square');
            row.appendChild(box);
            var newCardDiv = document.createElement("div");
            newCardDiv.setAttribute("id", "card");
            newCardDiv.setAttribute("onclick", "clickCard(this);");
            newCardDiv.setAttribute('data-cardid', btoa(thiscardid)); //Store the ID with the card, but encode it to prevent easy cheating
            box.appendChild(newCardDiv);
            var newCardFront = document.createElement("figure");
            newCardFront.setAttribute("class", "front");
            newCardDiv.appendChild(newCardFront);
            var newCardBack = document.createElement("figure");
            randtype = Math.floor(Math.random() * 4); //Random number 0-3, to detrimine card type
            if (randtype == 3) {
                //Picture on card, target language as correct
                if (mydata[thiscardid]['image'] != '') {
                    answerwords.push([thiscardid, mydata[thiscardid]['trans']]);
                } else {
                    randtype = Math.floor(Math.random() * 3);
                }
            }

            if (randtype == 2) {
                //Audio on card, english word as correct
                if (mydata[thiscardid]['audio'] != '') {
                    answerwords.push([thiscardid, mydata[thiscardid]['eng']]);
                } else {
                    randtype = Math.floor(Math.random() * 2);
                }
            }

            if (randtype == 1) {
                //English on card, target language as correct
                newCardBack.innerHTML = '<div class="cardtext resize">' + mydata[thiscardid]['eng'] + '</div>';
                answerwords.push([thiscardid, mydata[thiscardid]['trans']]);
            }

            if (randtype == 0) {
                //Translation on card, english word as correct
                newCardBack.innerHTML = '<div class="cardtext resize">' + mydata[thiscardid]['trans'] + '</div>';
                answerwords.push([thiscardid, mydata[thiscardid]['eng']]);
            }
            newCardBack.setAttribute("class", "back");
            newCardBack.setAttribute("data-randtype", randtype);
            newCardDiv.appendChild(newCardBack);
        }
    }

    var shufans = shuffleArr(answerwords); //Shuffle the possible answers
    for (var i = 0; i < answerwords.length; i++) {
        var option = document.createElement("div");
        options.appendChild(option);
        option.setAttribute("class", "matchoption");
        option.setAttribute("onclick", "clickOption(this);");
        option.setAttribute("data-cardid", answerwords[i][0]);
        option.innerHTML = answerwords[i][1];
    }
    sizeCheck();
    autoSizeText();
}

function resizeIt() {
    sizeCheck();
    autoSizeText();
}

function clickCard(card) {
    if (clickedCard == 0) {
        clickedCard = 1;
        flipStart = new Date();
        flip(card);
        card.childNodes[1].setAttribute("id", "clicked");
        card.childNodes[0].setAttribute("id", "front");
    } else {
        clearCard();
    }
}

function clickOption(option) {
    if (clickedCard == 0) {
        alert("Select Card First")
    } else if (clickedCard == 1) {
        //add time to player
        if (player == 1) {
            times[0] = times[0] + (new Date() - flipStart)
            playerOneClicks++;
        } else if (player == 2) {
            times[1] = times[1] + (new Date() - flipStart)
            playerTwoClicks++;
        }
        option.setAttribute("id", "clickedOption");
        find(option.getAttribute('data-cardid'));
    }
} //Make you need to click the card first

function find(ansid) {
    //---> Instead of cycling through the array to figure out if this is correct, compare the stored cardids
    var cardid = document.getElementById("clicked").parentNode.getAttribute('data-cardid');
    var randtype = document.getElementById("clicked").getAttribute('data-randtype');
    if (btoa(ansid) == document.getElementById("clicked").parentNode.getAttribute('data-cardid')) {
        if (player == 1) {
            playerOneScore++;
        } else if (player == 2) {
            playerTwoScore++;
        }
        score++;
        document.getElementById("clicked").parentNode.style.display = "none";
        clearCard();
        clearOption();
        if (score == amount) {
            document.getElementById("wordblock").style.display = 'none';
            createQuestion();
        }
    } else {
        if (randtype == 3) {
            if (player == 1) {
                missMatched["playerOne"][missMatched["playerOne"].length] = [(mydata[atob(cardid)]['eng'] + '(pic)'), [mydata[ansid]['trans']]];
            } else if (player == 2) {
                missMatched["playerTwo"][missMatched["playerTwo"].length] = [(mydata[atob(cardid)]['eng'] + '(pic)'), [mydata[ansid]['trans']]];
            }
        } else if (randtype == 2) {
            if (player == 1) {
                missMatched["playerOne"][missMatched["playerOne"].length] = [(mydata[atob(cardid)]['trans'] + '(audio)'), [mydata[ansid]['eng']]];
            } else if (player == 2) {
                missMatched["playerTwo"][missMatched["playerTwo"].length] = [(mydata[atob(cardid)]['trans'] + '(audio)'), [mydata[ansid]['eng']]];
            }
        } else if (randtype == 1) {
            if (player == 1) {
                missMatched["playerOne"][missMatched["playerOne"].length] = [mydata[atob(cardid)]['eng'],
                    [mydata[ansid]['trans']]
                ];
            } else if (player == 2) {
                missMatched["playerTwo"][missMatched["playerTwo"].length] = [mydata[atob(cardid)]['eng'],
                    [mydata[ansid]['trans']]
                ];
            }
        } else if (randtype == 0) {
            if (player == 1) {
                missMatched["playerOne"][missMatched["playerOne"].length] = [mydata[atob(cardid)]['trans'],
                    [mydata[ansid]['eng']]
                ];
            } else if (player == 2) {
                missMatched["playerTwo"][missMatched["playerTwo"].length] = [mydata[atob(cardid)]['trans'],
                    [mydata[ansid]['eng']]
                ];
            }
        }

        clearCard();
        clearOption();
    }
    if (player == 1) {
        player = 2;
    } else if (player == 2) {
        player = 1;
    }
    if (done == false) {
        setDisplay()
    }
}

function clearCard() {
    clickedCard = 0;
    flip(document.getElementById("clicked").parentNode);
    document.getElementById('clicked').setAttribute("id", "unclicked");
    document.getElementById('front').setAttribute("id", "unclicked");
}

function clearOption() {
    document.getElementById('clickedOption').setAttribute("id", "unclicked");
}

function setDisplay(type = "default", curPlayer = 0) {
    if (type == "default") {
        if (player == 1) {
            playerTurnDisplay.innerHTML = playerOne + " pick a card and match it with the equivalent word!";
        } else if (player == 2) {
            playerTurnDisplay.innerHTML = playerTwo + " pick a card and match it with the equivalent word!";
        }
    } else if (type == "end") {
        done = true;
        if (curPlayer == 1) {
            playerTurnDisplay.innerHTML = playerOne + " You Won!<br>With a total score of " + playerOneScore + " out of " + amount + " total cards!<br> Heres a bonus question!";
        } else if (curPlayer == 2) {
            playerTurnDisplay.innerHTML = playerTwo + " You Won!<br>With a total score of " + playerTwoScore + " out of " + amount + " total cards!<br> Answer the bonus question!";
        }
    }
}
//tracking checking question
function createQuestion() {
    if (playerOneScore > playerTwoScore) {
        player = 1;
        setDisplay("end", player);
    } else if (playerOneScore < playerTwoScore) {
        player = 2;
        setDisplay("end", player);
    } else if (playerOneScore == playerTwoScore) {
        if (times[0] > times[1]) {
            player = 2;
            setDisplay("end", player)
        } else if (times[0] < times[1]) {
            player = 1;
            setDisplay("end", player)
        } else if (times[0] == times[1]) {
            player = Math.floor(Math.random() * 2) + 1;
            if (player == 1) {
                setDisplay("end", player);
            } else if (player == 2) {
                setDisplay("end", player);
            }
        }
    }
    document.getElementById("finalq").style.display = "block";
    var q = finalq['question'];
    document.getElementById("q").innerHTML = q;
    sizeCheck();
}

function submitForm() {
    playerTurnDisplay.innerHTML = "";
    var answer = document.getElementById("a").value;
    var ahtml = '';
    if (answer.toLowerCase() == finalq['answer'].toLowerCase()) {
        ahtml += "<br><br><br><b>CORRECT</b><br><br><br>";
        //h3.innerHTML = "Correct <br>" + clicks.toString() + " Attempted matches out of " + amount.toString() + " possible matches! <br>Incorrect Matches : ";
    } else {
        ahtml += "<br><br><br><b>INCORRECT</b><br><br><br>";
        //h3.innerHTML = "Incorrect! <br>" + clicks.toString() + " Attempted matches out of " + amount.toString() + " possible matches! <br>Incorrect Matches : ";
    } //clicks + correctness
    ahtml += '<img src="' + finalq['image'] + '" style="height:25%;"/><br/>';
    ahtml += finalq['factoid'] + '<br/><br/>';
    if (player == 1) {
        ahtml += "It took you " + playerOneClicks.toString() + " attempts to match " + playerOneScore.toString() + " cards in " + (times[0] / 1000).toFixed(0) + " seconds!<br>";
    } else if (player == 2) {
        ahtml += "It took you " + playerTwoClicks.toString() + " attempts to match " + playerTwoScore.toString() + " cards in " + (times[1] / 1000).toFixed(0) + " seconds!<br>";
    }
    if (missMatched["playerOne"].length > 0) {
        ahtml += "<br><br><br>Incorrect Matches For " + playerOne + " : ";
        for (var i = 0; i < missMatched["playerOne"].length; i++) {
            ahtml += "<br>" + missMatched["playerOne"][i].join(' / ');
        }
    }
    if (missMatched["playerTwo"].length > 0) {
        ahtml += "<br><br><br>Incorrect Matches For " + playerTwo + " : ";
        for (var i = 0; i < missMatched["playerTwo"].length; i++) {
            ahtml += "<br>" + missMatched["playerTwo"][i].join(' / ');
        }
    }
    document.getElementById('results').innerHTML = ahtml;
    document.getElementById('results').innerHTML += "<br><br><br><a href='./index.html'>Click Here To Go Back Home</a>";
    document.getElementById('finalq').style.display = 'none';
    document.getElementById('boardbkg').style.display = 'none';
    document.getElementById('results').style.display = 'block';
}

function forMissed(inner) {
    for (var i = 0; i < missMatched.length; i++) {
        inner.innerHTML += "<br>" + missMatched[i].toString(', ');
    }
    if (missMatched.length == 0) {
        inner.innerHTML += "None"
    }
}

var object = {
    key: function(n) {
        return this[Object.keys(this)[n]];
    }
};

function key(obj, idx) {
    return object.key.call(obj, idx);
}

function shuffleArr(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

var autoSizeText = function() {
    var el, elements, _i, _len, _results;
    elements = $('.resize');
    if (elements.length < 0) {
        return;
    }
    _results = [];
    for (_i = 0, _len = elements.length; _i < _len; _i++) {
        el = elements[_i];
        //console.log(el);
        _results.push((function(el) {
            var resizeText, _results1;
            resizeText = function() {
                var elNewFontSize;
                elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
                return $(el).css('font-size', elNewFontSize);
            };
            _results1 = [];
            //console.log(el.scrollHeight +' <> '+ el.offsetHeight);
            //console.log(el.scrollWidth +' <> '+ el.offsetWidth);
            while (el.scrollHeight > el.offsetHeight || el.scrollWidth > el.offsetWidth) {
                _results1.push(resizeText());
            }
            return _results1;
        })(el));
    }
    return _results;
};

function sizeCheck() {
    var vw = document.documentElement.clientWidth;
    var vh = document.documentElement.clientHeight;
    var wbh = document.getElementById('wordblock').clientHeight;
    var wbw = document.getElementById('wordblock').clientWidth;
    var fqh = document.getElementById('finalq').clientHeight;

    document.getElementById('boardbkg').style.height = "calc(80vh - " + (wbh + fqh) + "px)";
}

createGame(amount, defaultLanguage);
var boxBoard = document.getElementsByClassName("container")[0];
//callAll();