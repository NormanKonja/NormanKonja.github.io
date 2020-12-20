let firstStarted = false;
let secondStarted = false;
let first = false;
let second = false;
let result = false;
let action = false;
let actions = ["minus", "plus", "multiply", "divide"]

function calc(e) {
    if ((result != false || result === 0) && ["+", "-", "/", "*"].includes(e.target.innerHTML) && document.getElementById("calc-display").innerHTML != "Incalculable") {
        first = String(result);
        secondStarted = false;
        action = false;
        second = false;
        result = false;
        actions.forEach(function(e) {
            document.getElementById("button-" + e).style.backgroundColor = "orange";
        })
    }
    if (e.target.innerHTML === "Clear") {
        clear()
    }
    if (result != false) {
        alert("Please clear the calculator to perform another calculation!");
    } else {
        switch (e.target.innerHTML) {

            case "-":
                if (firstStarted === false) {
                    alert("Please input a number first");
                } else {
                    if (action === false) {
                        document.getElementById("button-minus").style.backgroundColor = "red";
                        action = "minus";
                    } else if (secondStarted === false) {
                        actions.forEach(function(e) {
                            document.getElementById("button-" + e).style.backgroundColor = "orange";
                        })
                        document.getElementById("button-minus").style.backgroundColor = "red";
                        action = "minus";
                    }
                    act("-");
                }
                break;

            case "+":
                if (firstStarted === false) {
                    alert("Please input a number first");
                } else {
                    if (action === false) {
                        document.getElementById("button-plus").style.backgroundColor = "red";
                        action = "plus";
                    } else if (secondStarted === false) {
                        actions.forEach(function(e) {
                            document.getElementById("button-" + e).style.backgroundColor = "orange";
                        })
                        document.getElementById("button-plus").style.backgroundColor = "red";
                        action = "plus";
                    }
                    act("+");
                }
                break;

            case "*":
                if (firstStarted === false) {
                    alert("Please input a number first");
                } else {
                    if (action === false) {
                        document.getElementById("button-multiply").style.backgroundColor = "red";
                        action = "multiply";
                    } else if (secondStarted === false && first != false) {
                        actions.forEach(function(e) {
                            document.getElementById("button-" + e).style.backgroundColor = "orange";
                        })
                        document.getElementById("button-multiply").style.backgroundColor = "red";
                        action = "multiply";
                    }
                    act("*");
                }
                break;

            case "/":
                if (firstStarted === false) {
                    alert("Please input a number first");
                } else {
                    if (action === false) {
                        document.getElementById("button-divide").style.backgroundColor = "red";
                        action = "divide";
                    } else if (secondStarted === false) {
                        action = "divide";
                        actions.forEach(function(e) {
                            document.getElementById("button-" + e).style.backgroundColor = "orange";
                        })
                        document.getElementById("button-divide").style.backgroundColor = "red";
                    }
                    act("/");
                }
                break;

            case "=":
                if (secondStarted === true) {
                    second = document.getElementById("calc-display").innerHTML;
                    calculate(first, second, action);
                } else {
                    alert("Please enter a calculation");
                }
                break;

            default:
                if (e.target.innerHTML != "Clear") {
                    if (document.getElementById("calc-display").innerHTML.includes(".") && e.target.innerHTML === ".") {
                        alert("Cannot use two decimals");
                    } else {
                        if (actions.includes(action) && document.getElementById("calc-display").innerHTML != action) {
                            secondStarted = true;
                        }
                        if ((document.getElementById("calc-display").innerHTML === "0" ||
                                document.getElementById("calc-display").innerHTML === "-" ||
                                document.getElementById("calc-display").innerHTML === "*" ||
                                document.getElementById("calc-display").innerHTML === "/" ||
                                document.getElementById("calc-display").innerHTML === "+") && result === false) {
                            document.getElementById("calc-display").innerHTML = e.target.innerHTML;
                        } else if (result === false) {
                            if (document.getElementById("calc-display").innerHTML.length > 6) {
                                alert("Too many numbers.")
                            } else {
                                document.getElementById("calc-display").innerHTML += e.target.innerHTML;
                            }
                        }
                        if (document.getElementById("calc-display").innerHTML != "-" &&
                            document.getElementById("calc-display").innerHTML != "*" &&
                            document.getElementById("calc-display").innerHTML != "/" &&
                            document.getElementById("calc-display").innerHTML != "+" &&
                            document.getElementById("calc-display").innerHTML != "=" &&
                            document.getElementById("calc-display").innerHTML != ".") {
                            firstStarted = true;
                        }
                    }
                } else {
                    document.getElementById("calc-display").innerHTML = 0;
                }
                break;
        }
    }
}

function setup() {
    for (let i = 0; i < 10; i++) {
        document.getElementById("button-" + i).addEventListener("click", calc)
    }
    document.getElementById("button-minus").addEventListener("click", calc)
    document.getElementById("button-plus").addEventListener("click", calc)
    document.getElementById("button-equals").addEventListener("click", calc)
    document.getElementById("button-multiply").addEventListener("click", calc)
    document.getElementById("button-divide").addEventListener("click", calc)
    document.getElementById("button-period").addEventListener("click", calc)
    document.getElementById("button-equals").addEventListener("click", calc)
    document.getElementById("button-clear").addEventListener("click", calc)
}

function act(action) {

    if (first === false) {
        first = document.getElementById("calc-display").innerHTML
    }
    if (secondStarted === false) {
        document.getElementById("calc-display").innerHTML = action;
    }
    if (first.endsWith(".")) {
        first += "0";
    }

}

function calculate() {
    if (result === false) {
        if (first.includes(".") || second.includes(".")) {
            first = parseFloat(first);
            second = parseFloat(second);
        } else {
            first = parseInt(first);
            second = parseInt(second);
        }
        if (action === "minus") {
            result = first - second;
        } else if (action === "plus") {
            result = first + second;
        } else if (action === "divide") {
            result = first / second;
        } else if (action === "multiply") {
            result = first * second;
        }
        if (first === 0 && second === 0) {
            document.getElementById("calc-display").innerHTML = 0;
        } else if (isFinite(result) === false || String(result.toFixed(2)).length > 12) {
            document.getElementById("calc-display").innerHTML = "Incalculable";
        } else {
            if (result % 1 === 0) {
                document.getElementById("calc-display").innerHTML = result;
            } else {
                document.getElementById("calc-display").innerHTML = result.toFixed(2);
            }
        }
    } else {
        alert("Please clear the calculator to perform another calculation!");
    }
}

function clear() {
    firstStarted = false;
    secondStarted = false;
    first = false;
    second = false;
    result = false;
    action = false;
    actions.forEach(function(e) {
        document.getElementById("button-" + e).style.backgroundColor = "orange";
    })
}

setup()