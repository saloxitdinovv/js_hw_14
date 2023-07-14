
let companies = [
    {
        name: "Rustam nosfrush",
        budget: 20000,
        tax: 12,
        expenses: [
            {
                title: "pockets",
                total: 3000,
            },
            {
                title: "rent",
                total: 5000,
            },
            {
                title: "transfer",
                total: 1000,
            },
        ]
    },
    {
        name: "Axror mashennik",
        budget: 100000,
        tax: 7,
        expenses: [
            {
                title: "idea",
                total: 10000,
            },
            {
                title: "rent",
                total: 14000,
            },
            {
                title: "car",
                total: 400,
            },
        ]
    },
    {
        name: "Xojimurod phones",
        budget: 70000,
        tax: 14,
        expenses: [
            {
                title: "goods",
                total: 30000,
            },
            {
                title: "rent",
                total: 2000,
            },
            {
                title: "tools",
                total: 1200,
            },
        ]
    },
    {
        name: "Ruxshod games",
        budget: 50000,
        tax: 14,
        expenses: [
            {
                title: "oborudovaniye",
                total: 13000,
            },
            {
                title: "rent",
                total: 800,
            },
            {
                title: "salary",
                total: 500,
            },
        ]
    },
]

// Посчитать месячцные расходы каждой компании и сохранить в новом ключе expensesPerMonth
// Высчитать все расходы включая налоги (месяц) и понять компания в плюсе или в минусе

let a = [] /* успешные  */
let b = [] /* неуспешные */
for (businessmans of companies) {
    businessmans.expensesPerMonth = 0

    for (expense of businessmans.expenses) {
        businessmans.expensesPerMonth += expense.total / 12
        businessmans.expensesPerMonth = Math.round(businessmans.expensesPerMonth)
    }

    let totalExpenses = Math.round(
        businessmans.budget / 100 * businessmans.tax / 12 + businessmans.expensesPerMonth
    )
    
    let profit = Math.round(businessmans.budget / 12 - totalExpenses)
    
    if(profit > 0) {
        a.push(businessmans.name)
    } else {
        b.push(businessmans.name)
    }
    console.log(profit);
}