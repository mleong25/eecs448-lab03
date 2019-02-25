function manipulate() {
    let red_border = document.getElementById("redBorder").value;
    let green_border = document.getElementById("greenBorder").value;
    let blue_border = document.getElementById("blueBorder").value;
    let widthBorder = document.getElementById("widthBorder").value;

    let red_bg = document.getElementById("redBack").value;
    let blue_bg = document.getElementById("blueBack").value;
    let green_bg = document.getElementById("greenBack").value;

    let paragraph = document.getElementById("textbox");

    let colorBorder = "rgb(" + red_border + ", " + green_border + ", " + blue_border + ")";
    widthBorder += "px";

    let bgColor = "rgb(" + red_bg + ", " + green_bg + ", " + blue_bg + ")";

    paragraph.style.backgroundColor = bgColor;
    paragraph.style.borderWidth = widthBorder;
    paragraph.style.borderColor = colorBorder;
}