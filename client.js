const context_menu = document.querySelector('#context-menu')

window.addEventListener('contextmenu', (event) => {
    context_menu.classList.remove('active')

    event.preventDefault() // preventing default drop down

    context_menu.style.top = event.offsetY + 'px'
    context_menu.style.left = event.offsetX + 'px'
    context_menu.classList.add('active')
})

window.addEventListener('click', (event) => {
    context_menu.classList.remove('active')
})