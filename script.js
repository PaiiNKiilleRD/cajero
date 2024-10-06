

let money = 20000
let transactions = [];

const showMoney = document.getElementById("showMoney")
showMoney.innerText = money;

const consulta = () => {
    alert(`Su cuenta tiene ${money} pesos`)
}

const retiro = () => {
    const quantity = parseInt(document.getElementById("quantity").value)

    if (isNaN(quantity) || quantity <= 0) {
        alert(`Inserte un numero valido mayor que cero`)
        return
    }

    if (quantity > money) {
        alert(`No tiene ese monto disponible`)
        return
    }

    money -= quantity;
    showMoney.innerText = money;

    console.log(money, quantity)

    const newTransaction = `Retiro: ${quantity}`
    transactions.push(newTransaction)

    alert(newTransaction)

    renderTransactions()

}

const deposito = () => {
    const quantity = parseInt(document.getElementById("quantity").value)

    if (isNaN(quantity) || quantity <= 0) {
        alert(`Inserte un numero valido mayor que cero`)
        return
    }

    money += quantity;
    showMoney.innerText = money;

    console.log(money, quantity)

    const newTransaction = `Deposito: ${quantity}`
    transactions.push(newTransaction)

    alert(newTransaction)

    renderTransactions()

}

const renderTransactions = () => {
    const transactionsList = document.getElementById("transactionsList")

    const li = document.createElement("li");
    li.innerText = transactions[transactions.length - 1];
    transactionsList.appendChild(li);

}