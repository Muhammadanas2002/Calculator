function inpValue(a) {
    var input = document.getElementById("input")
    input.value += a;
}
function equalValue() {
    var input = document.getElementById("input")
    var ans = eval(input.value)
    console.log("ans", ans)
    input.value = ans
}
function cleared() {
    var input = document.getElementById("input")
    var copy = input.value.slice(0, -1)
    console.log(copy)
    input.value = copy;
}
function allCleared() {
    var input = document.getElementById("input")
    input.value = " ";
}