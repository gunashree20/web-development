let count = 0;

function increase() {

    count = count + 1;

    document.getElementById("number").textContent = count;

}

function decrease() {

    count = count - 1;

    document.getElementById("number").textContent = count;

}

function reset() {

    count = 0;

    document.getElementById("number").textContent = count;

}