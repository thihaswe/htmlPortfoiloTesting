const h1 = document.getElementsByTagName("h1")[0]; // Access the first h1 element
const button1 = document.getElementsByClassName("button")[0]; // Access the first element with class "button"
const body = document.body; // Access the body directly

const handleClick = () => {
  if (body.style.backgroundColor === "red") {
    body.style.backgroundColor = "white";
    h1.style.color = "red";
  } else {
    body.style.backgroundColor = "red";
    h1.style.color = "white";
  } // Fix the typo in backgroundColor
};

button1.addEventListener("click", () => {
  handleClick();
});
