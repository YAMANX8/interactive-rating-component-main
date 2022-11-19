const rateBtnsContainer = document.querySelector(".rate-state__btns");
const form = document.querySelector(".rate-state");
const rateBtns = rateBtnsContainer.querySelectorAll(".btn_theme_dark");
const thankState = document.querySelector(".thank-state");
const starsNum = thankState.querySelector(".thank-state__stars-num");
let starNumber = undefined;
rateBtnsContainer.addEventListener("click", function (e) {
    rateBtns.forEach(btn => {
        btn.classList.remove("btn_active");
    });
    starNumber = getStar(e);

})
function getStar(e) {
    const id = e.target.dataset.id;
    if (id) {

        e.target.classList.add("btn_active")
        return id;
    }
    else {
        return undefined;
    }
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!starNumber) {
        // alert("not submited")
        window.history.back();
        return false;
    }
    starsNum.textContent = starNumber;
    form.classList.add("hide");
    thankState.classList.remove("hide");
})