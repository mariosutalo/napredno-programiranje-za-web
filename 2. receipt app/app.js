const receiptItems = []
function addItemToReceipt() {
    const itemNameInput = document.getElementById('item-name')
    const itemName = itemNameInput.value

    const itemPriceInput = document.getElementById('item-price')
    const itemPrice = itemPriceInput.value

    const itemQuantityInput = document.getElementById('item-quantity')
    const itemQuantity = itemQuantityInput.value
    const itemTotalPrice = Number(itemPrice) * Number(itemQuantity)
    const receiptItem = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity,
        total: itemTotalPrice
    }
    receiptItems.push(receiptItem)
    addReceiptItemsToTable()
}

function addReceiptItemsToTable() {
    const table = document.getElementById('products-table')
    const tableHeader = `<tr>
                <th>Naziv artikla</th>
                <th>Cijena</th>
                <th>Količina</th>
                <th>Ukupno</th>
            </tr>`
    const itemStartTr = '<tr>'
    const nameColumn = `<td>Mlijeko</td>`
    const priceColumn = `<td>2</td>`
    const quantityColumn = `<td>3</td>`
    const totalPriceColumn = `<td>6</td>`
    const itemEndTr = '</tr>'

    table.innerHTML = tableHeader + itemStartTr + nameColumn
    + priceColumn + quantityColumn + totalPriceColumn + itemEndTr
}