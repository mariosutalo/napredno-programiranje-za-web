const typingP = document.getElementById('typing-p')
const textInput = document.getElementById('text-input')

textInput.addEventListener('keydown', (ev) => {
    typingP.innerText = 'Typing'
})

textInput.addEventListener('keyup', (ev) => {
    typingP.innerText = ''

})