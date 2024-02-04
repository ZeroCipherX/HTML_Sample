function clicked() {
document.getElementById("sample").innerHTML = "Upon clicking text has been changed";
document.getElementsByClassName("sample2")[0].innerHTML = "This Paragraph is also been modified"
//CSS
document.getElementById("sample").style.color = "red";
document.getElementById("sample2").style.fontFamily = "Helvetica";
document.getElementById("sample2").style.fontWeight = "bold";
}
