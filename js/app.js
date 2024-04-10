let inputElement = document.querySelector("input")
let listElement = document.querySelector("search")
let itemElement = listElement.querySelectorAll("a")

inputElement.addEventListener("input", (e) => {
  let inputed = e.target.value.toLowerCase()
  itemElement.forEach((a) => {
    let text = a.textContent.toLowerCase()
    if(text.includes(inputed)){
      a.style.display = "block"
    }else{
      a.style.display = "none"
    }
  })
})