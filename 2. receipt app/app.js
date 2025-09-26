function addItemToReceipt() {
    const itemNameInput = document.getElementById('item-name')
    const itemName = itemNameInput.value

    const itemPriceInput = document.getElementById('item-price')
    const itemPrice = itemPriceInput.value

    const itemQuantityInput = document.getElementById('item-quantity')
    const itemQuantity = itemQuantityInput.value

    const itemTotalPrice = Number(itemPrice) * Number(itemQuantity)
    const itemDescriptionParagraph = document.getElementById('item-description')
    itemDescriptionParagraph.innerText = `Naziv artikla: ${itemName}, cijena: ${itemPrice}, količina: ${itemQuantity}, ukupan iznos stavke je ${itemTotalPrice}`
}