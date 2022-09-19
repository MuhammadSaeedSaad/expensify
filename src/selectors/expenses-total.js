

const getExpensesTotal = (expenses) => {
    return expenses.map((expense) => expense.amount).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

export default getExpensesTotal;