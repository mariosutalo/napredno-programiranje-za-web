function displayInputValue() {
    const statusP = document.getElementById('searh-result-p')
    statusP.innerHTML = ''
    const inputElement = document.getElementById('user-name-input')
    const inputValue = inputElement.value
    fetch(`https://dummyjson.com/users/search?q=${inputValue}`)
        .then(response => {
            if (response.ok === false) {
                throw new Error('Error fetching user :-(')
            }
            return response.json()
        }).then(data => {
            console.log('data from server', data)
            if (data.users.length === 0) {
                const statusP = document.getElementById('searh-result-p')
                statusP.innerHTML = 'No users found :('
            }
        }).catch(error => {
            console.log(error)
        })
}