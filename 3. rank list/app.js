const footballClubs = []

function addClubToArray() {
    const clubNameInput = document.getElementById('club-name')
    const clubNameValue = clubNameInput.value
    const clubPointsInput = document.getElementById('club-points')
    const clubPointsValue = clubPointsInput.value
    const club = { name: clubNameValue, points: clubPointsValue }
    footballClubs.push(club)
    // pri svakom unosu novog kluba, potrebno je ponovno sortirati polje
    footballClubs.sort((firstObject, secondObject) => {
        // sortira od većeg ka manjem
        return secondObject.points - firstObject.points
    })
    displayUsersInTable()
}

function displayUsersInTable() {
    const table = document.getElementById('clubs-table')
    const tableHeader = `
        <tr>
            <th>Rank</th>
            <th>Club name</th>
            <th>Points</th>
        </tr>
    `
    let tableContent = tableHeader
    for (let index = 0; index < footballClubs.length; index++) {
        const club = footballClubs[index];
        tableContent += `<tr>
        <td>${index + 1}</td>
        <td>${club.name}</td>
        <td>${club.points}</td>
        </tr>`
    }
    table.innerHTML = tableContent
}

function sortValuesAsceding(firstNumber, secondNumber) {
    // sortira od manjeg ka većem
    return firstNumber - secondNumber
}

function sortValuesDescending(firstNumber, secondNumber) {
    // sortira od većeg ka manjem
    return secondNumber - firstNumber
}

function sortSamples() {
    const stringsArray = ['Mario', 'Pero', 'Jozo']
    console.log('Strings array before sort: ', stringsArray)
    stringsArray.sort()
    console.log('String arrray after sort', stringsArray)

    const numbersArray = [3, 1, 4, 12]
    console.log('Numbers array before sort: ', numbersArray)

    numbersArray.sort(sortValuesAsceding)
    console.log('Numbers arrray after ascending sort', numbersArray)

    numbersArray.sort(sortValuesDescending)
    console.log('Numbers arrray after descending sort', numbersArray)





}

