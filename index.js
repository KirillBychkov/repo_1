let wrapper = document.querySelector('#wrapper')
console.log(wrapper)
wrapper.innerHTML = "text"


let form = document.querySelector("form.firstBlock")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let firstInput = document.querySelector(".text");
    console.log(firstInput.value);
    firstInput.value = "";
})
