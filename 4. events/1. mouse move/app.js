const p = document.getElementById('cord-p')
window.addEventListener('mousemove', (event) => {
    p.innerText = `Mouse move: x:${event.x}, y:${event.y}`
    //console.log(`Mouse move: x:${event.x}, y:${event.y}`)
})



