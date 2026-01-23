function searchUsers() {
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
            } else {
                displayUsersInTable(data.users)
            }
        }).catch(error => {
            console.log(error)
        })
}

function displayUsersInTable(users) {
    const table = document.getElementById('users-table')
    const tableHeader = `
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
        
    `
    let tableContent = tableHeader
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        tableContent = tableContent + `<tr>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.age}</td>
        </tr>`
    }
    table.innerHTML = tableContent
}