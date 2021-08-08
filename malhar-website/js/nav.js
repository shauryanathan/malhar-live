// Auto animate for demo

// HAMBURGER ANIMATION

var toggle = document.querySelector('.toggle input')

var animate = setInterval(() => {
    toggle.checked = !toggle.checked
}, 3000)

document.querySelector('body').addEventListener('click', () => {
  clearInterval(animate);
})



