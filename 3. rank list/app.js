const footballClubs = []

function addClubToArray() {
    const clubNameInput = document.getElementById('club-name')
    const clubNameValue = clubNameInput.value
    const clubPointsInput = document.getElementById('club-points')
    const clubPointsValue = clubPointsInput.value
    const club = { name: clubNameValue, points: clubPointsValue }
    footballClubs.push(club)
    displayClubsInTable()
}

function displayClubsInTable(){
    const table = document.getElementById('clubs-table')
    const tableHeader = `
        <tr>
            <th>Club name</th>
            <th>Points</th>
        </tr>
    `
    let tableContent = tableHeader
    for (let index = 0; index < footballClubs.length; index++) {
        const club = footballClubs[index];
        tableContent += `<tr>
        <td>${club.name}</td>
        <td>${club.points}</td>
        </tr>`
    }
    table.innerHTML = tableContent
}

