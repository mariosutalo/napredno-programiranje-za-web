const smileyImg = document.getElementById('smiley-img')
smileyImg.addEventListener('mouseover', (event) => {
    smileyImg.src = 'happy.jfif'
    console.log('mouse over called')
})

smileyImg.addEventListener('mouseleave', (event) => {
    smileyImg.src = 'sad.webp'
})