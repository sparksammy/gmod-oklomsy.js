//Licensed under MIT license!
document.body.innerHTML = document.body.innerHTML + "<h1>Dear Oklomsy, </h1><br><hr><br>You "
const txt = `don't like Garry's Mod, but you downloaded GMod, thus you like Garry's Mod, yet you `;
document.body.innerHTML = document.body.innerHTML + `${txt.repeat(99999)}`
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        window.scrollByPages(-10)
    }
};
