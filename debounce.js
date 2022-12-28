const input = document.querySelector("input");
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

input.addEventListener("input", e => {
    defaultText.textContent = e.target.value
    debounce(e.target.value, 1000)
    throttle(e.target.value, 1000)
})

let timeout;
function debounce(text, delay) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        debounceText.textContent = text
    }, delay);

}
let shouldwait = false;
let waitingarg

function throttle(text, delay) {
   
    waitingarg = text
    if (shouldwait) return

    shouldwait = true
    
    setTimeout(() => {
        throttleText.textContent = waitingarg
        shouldwait = false
    }, delay);
}



