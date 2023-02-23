const allButton = document.getElementsByClassName("fa-plus");
for (const button of allButton) {
  button.addEventListener("click", function (event) {
    let parent = event.target.parentNode.parentNode;
    let ans = parent.children[1];
    ans.classList.toggle("show-ans");
    if (button.className === "fa-solid fa-minus") {
      button.className = "fa-solid fa-plus";
    } else {
      button.className = "fa-solid fa-minus";
    }
  });
}
