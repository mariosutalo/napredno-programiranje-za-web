// these two function have async code execution
function getUserById() {
    const userIdInput = document.getElementById('user-id')
    const userId = userIdInput.value
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
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

function getAllUsers() {
    console.log('1')
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usersObject => console.log(usersObject))
        .catch((error) => {
            console.log('Error ocurred:', error)
        })
    console.log('2')
}
// this is example of syncronous code execution in javascript
function syncCodeExecutionExample() {
    const sum = 2 + 2
    console.log(sum)
}