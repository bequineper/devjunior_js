function showAndHide() {
    const text = document.getElementById("text");
    const button = document.getElementById('button')
    if (text.style.display == "none") {
        text.style.display = "block";
        button.innerHTML = 'hide'

    } else {
        text.style.display = "none";
        button.innerHTML = 'show'
    }
}