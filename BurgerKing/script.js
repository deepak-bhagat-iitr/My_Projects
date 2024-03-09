document.querySelector('input[type="checkbox"]').addEventListener('change', function () {
    if (this.checked) {
        document.querySelector('.span1').style.color = "black";
        document.querySelector('.span2').style.color = "orange";
    } else {
        document.querySelector('.span1').style.color = "brown";
        document.querySelector('.span2').style.color = "black";
    }
});