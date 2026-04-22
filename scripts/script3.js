const header = document.getElementById("my-paragraph");
header.textContent = "Hello, Davin!";

//const paragraph = document.getElementsByClassName("whatever")[0];
//const paragraph = document.querySelector("div p.whatever");
// Get all paragraphs and make them red with font-size 20px
document.querySelectorAll("p").forEach((p) => {
    p.style.color = "red";
    p.style.fontSize = "20px";
})
//paragraph.style.color = "red";
//paragraph.style.font = "20px";