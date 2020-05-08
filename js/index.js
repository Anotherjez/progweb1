var click = 0;
var title = " Clicks";

function Click() {
    click = click + 1;
    document.getElementById('title').innerHTML = click + title;
}
