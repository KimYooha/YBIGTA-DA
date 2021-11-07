let counter = 0;

function ClickUp() {
    updatenumber(++counter);
}

function ClickDown() {
    updatenumber(--counter);
}

function updatenumber(num) {
    document.getElementById("number").innerHTML = num;
}