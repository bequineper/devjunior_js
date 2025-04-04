function displayImage() {
    const image = document.getElementById('image');
    const button = document.getElementById('button')

    if (image.style.visibility == 'hidden') {
        image.style.visibility = 'visible';
        button.innerHTML = 'hide';
    } else {
        image.style.visibility = 'hidden';
        button.innerHTML = 'Show';
        
    }
}