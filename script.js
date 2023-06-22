function checkAnswer() {
    var homeInput = document.getElementById("homeInput").value;
    var result = document.getElementById("result");

    if (homeInput.toLowerCase() === "yari road") {
        result.textContent = "Correct!";
    } else {
        result.textContent = "Incorrect!";
    }
}
