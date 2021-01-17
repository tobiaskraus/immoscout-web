export function disablePageScrolling() {
    document.getElementsByTagName("body")[0].classList.toggle("noscroll", true);
}
export function enablePageScrolling() {
    document
        .getElementsByTagName("body")[0]
        .classList.toggle("noscroll", false);
}
