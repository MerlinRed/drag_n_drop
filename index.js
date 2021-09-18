const item = document.querySelector(".item")
const placeholders = document.querySelectorAll(".placeholder")

const dragStart = (event) => {
    event.target.classList.add("hold")
    setTimeout(() => event.target.classList.add("hide"), 0)
}
const dragEnd = (event) => {
    event.target.className = "item"
}

const dragOver = (event) => {
    event.preventDefault()
}
const dragEnter = (event) => {
    event.target.classList.add("hovered")
}
const dragLeave = (event) => {
    event.target.classList.remove("hovered")
}
const dragDrop = (event) => {
    event.target.classList.remove("hovered")
    event.target.append(item)
}

item?.addEventListener("dragstart", dragStart)
item?.addEventListener("dragend", dragEnd)

placeholders.forEach((placeholder) => {
    placeholder.addEventListener("dragover", dragOver)
    placeholder.addEventListener("dragenter", dragEnter)
    placeholder.addEventListener("dragleave", dragLeave)
    placeholder.addEventListener("drop", dragDrop)
})
