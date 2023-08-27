"use struct";

function ghs__(tag) {
    return document.querySelector(tag);
}
ghs__("#loginbtn").onclick = (e) => {
    ghs__("#login").style.display = "block";
    ghs__("#login").setAttribute("open", "login");
};
ghs__("#signupbtn").onclick = (e) => {
    ghs__("#signup").style.display = "block";
    ghs__("#login").setAttribute("open", "signup");
};
ghs__("#cross-login").onclick = (e) => {
    ghs__("#login").style.display = "none";
};
ghs__("#cross-signup").onclick = (e) => {
    ghs__("#signup").style.display = "none";
};
