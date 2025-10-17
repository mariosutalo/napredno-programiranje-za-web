const receiptItems = []
let receiptItemsCounter = 1
function addItemToReceipt() {
    const itemNameInput = document.getElementById('item-name')
    const itemName = itemNameInput.value

    const itemPriceInput = document.getElementById('item-price')
    const itemPrice = itemPriceInput.value

    const itemQuantityInput = document.getElementById('item-quantity')
    const itemQuantity = itemQuantityInput.value
    const itemTotalPrice = Number(itemPrice) * Number(itemQuantity)
    const receiptItem = {
        id: receiptItemsCounter,
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity,
        total: itemTotalPrice
    }
    receiptItems.push(receiptItem)
    receiptItemsCounter++
    addReceiptItemsToTable()
    calculateTotalPrice()
}

function addReceiptItemsToTable() {
    const table = document.getElementById('products-table')
    const tableHeader = `<tr>
                <th>Naziv artikla</th>
                <th>Cijena</th>
                <th>Količina</th>
                <th>Ukupno</th>
                <th>Brisanje</th>
            </tr>`
    let tableHtml = tableHeader
    for (let index = 0; index < receiptItems.length; index++) {
        const receiptItem = receiptItems[index];
        tableHtml += `<tr>
        <td>${receiptItem.name}</td>
        <td>${receiptItem.price}</td>
        <td>${receiptItem.quantity}</td>
        <td>${receiptItem.price * receiptItem.quantity}</td>
        <td><button onclick="deleteItem(3)">Obriši</button></td>
        </tr>`
    }
    table.innerHTML = tableHtml
}

function calculateTotalPrice() {
    let totalPrice = 0
    for (let index = 0; index < receiptItems.length; index++) {
        const item = receiptItems[index];
        const itemTotal = item.price * item.quantity
        totalPrice += itemTotal
    }
    const p = document.getElementById('total-price')
    p.innerHTML = `Total price: ${totalPrice}`
}

function deleteItem(itemId) {

}