let wrapper = document.querySelector("#wrapper");

let form = document.querySelector("form.firstBlock");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let firstInput = document.querySelector(".text");
  let newDiv = document.createElement("div");
  newDiv.className = "marker"
  let span = document.createElement("span");
  let button = document.createElement("button");
  let cross = document.createElement("span");
  cross.innerHTML="X";
  cross.className = "delete"
  cross.addEventListener('click', function () {
    newDiv.remove()
  })
  button.addEventListener('click', function () {
    span.classList.toggle('lines')
  }) 
  span.innerHTML = firstInput.value;
  button.innerHTML= "mark as done"
  newDiv.appendChild(span)
  newDiv.appendChild(button)
  newDiv.appendChild(cross);
  if (firstInput.value !== "") {
    firstInput.value = "";
    wrapper.appendChild(newDiv);
  }
});
