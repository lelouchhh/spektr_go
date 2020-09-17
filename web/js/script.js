
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("my_sliders");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

document.addEventListener('DOMContentLoaded', () => {
    for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
        const pattern = el.getAttribute("placeholder"),
            slots = new Set(el.dataset.slots || "_"),
            prev = (j => Array.from(pattern, (c,i) => slots.has(c)? j=i+1: j))(0),
            first = [...pattern].findIndex(c => slots.has(c)),
            accept = new RegExp(el.dataset.accept || "\\d", "g"),
            clean = input => {
                input = input.match(accept) || [];
                return Array.from(pattern, c =>
                    input[0] === c || slots.has(c) ? input.shift() || c : c
                );
            },
            format = () => {
                const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
                    i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
                    return i<0? prev[prev.length-1]: back? prev[i-1] || first: i;
                });
                el.value = clean(el.value).join``;
                el.setSelectionRange(i, j);
                back = false;
            };
        let back = false;
        el.addEventListener("keydown", (e) => back = e.key === "Backspace");
        el.addEventListener("input", format);
        el.addEventListener("focus", format);
        el.addEventListener("blur", () => el.value === pattern && (el.value=""));
    }
});



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function button_in_tarrif(first_name_front, second_name_front, first_name_back, second_name_back, num) {
    if (num == 1)
    {
        var span_text_in_tarrif_image = document.getElementsByClassName("span_text_in_tarrif_image");
        var button = document.getElementById("button_in_tarrif_1");
        var tarrif_image = document.getElementsByClassName("tarrif_image")[0];
        var text_in_tarrif_image = document.getElementsByClassName("text_in_tarrif_image")[0];
        var first_text_in_tarrif_image = document.getElementsByClassName("first_span_text_in_tarrif_image")[0];
        var second_text_in_tarrif_image = document.getElementsByClassName("second_span_text_in_tarrif_image")[0];
    }
    else if(num == 2){
        var span_text_in_tarrif_image = document.getElementsByClassName("span_text_in_tarrif_image");
        var button = document.getElementById("button_in_tarrif_2");
        var tarrif_image = document.getElementsByClassName("tarrif_image")[1];
        var text_in_tarrif_image = document.getElementsByClassName("text_in_tarrif_image")[1];
        var first_text_in_tarrif_image = document.getElementsByClassName("first_span_text_in_tarrif_image")[1];
        var second_text_in_tarrif_image = document.getElementsByClassName("second_span_text_in_tarrif_image")[1];
    }else{
        var span_text_in_tarrif_image = document.getElementsByClassName("span_text_in_tarrif_image");
        var button = document.getElementById("button_in_tarrif_3");
        var tarrif_image = document.getElementsByClassName("tarrif_image")[2];
        var text_in_tarrif_image = document.getElementsByClassName("text_in_tarrif_image")[2];
        var first_text_in_tarrif_image = document.getElementsByClassName("first_span_text_in_tarrif_image")[2];
        var second_text_in_tarrif_image = document.getElementsByClassName("second_span_text_in_tarrif_image")[2];
    }

    if(button.innerHTML == "Подробнее"){
        tarrif_image.className = "tarrif_image"
        tarrif_image.className += " big_resize";
        button.innerHTML = "Скрыть";
        first_text_in_tarrif_image.style.fontSize = "55px";
        second_text_in_tarrif_image.style.fontSize = "45px";
        second_text_in_tarrif_image.style.textAlign = "center";

        first_text_in_tarrif_image.innerHTML = first_name_back
        second_text_in_tarrif_image.innerHTML = second_name_back
    }
    else if(button.innerHTML == "Скрыть"){
        tarrif_image.className = "tarrif_image"
        tarrif_image.className += " small_resize";
        button.innerHTML = "Подробнее";
        first_text_in_tarrif_image.style.fontSize = "65px";
        second_text_in_tarrif_image.style.fontSize = "75px"

        first_text_in_tarrif_image.innerHTML = first_name_front;
        second_text_in_tarrif_image.innerHTML = second_name_front
    }
}
function navbar(){

}