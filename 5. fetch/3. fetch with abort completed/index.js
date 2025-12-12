// 2. shared base url
const baseUrl = 'https://dummyjson.com/'
let currentController
let timer


// this function has async code execution
function getUserByName() {
    clearTimeout(timer)
    timer = setTimeout(() => {
        fetchUser()
    }, 2000);

}

function fetchUser() {
    if (currentController) {
        currentController.abort()
    }
    currentController = new AbortController()
    const userIdInput = document.getElementById('user-name')
    const name = userIdInput.value
    if (!name || name.length < 2) {
        return
    }

    fetch(`${baseUrl}users/search?q=${name}`, { signal: currentController.signal })
        .then(response => {
            if (response.ok === false) {
                throw new Error(`Request failed, status code: ${response.status}`)
            }
            return response.json()
        })
        .then(userObject => console.log(userObject))
        .catch((error) => {
            console.log('Error ocurred:', error)
        })
}

// this is example of syncronous code execution in javascript
// program wait for code line to execute before it goes to next line
function syncCodeExecutionExample() {
    const sum = 2 + 2
    console.log(sum)
}