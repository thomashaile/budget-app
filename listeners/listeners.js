function eventListeners() {
    const budgetForm = document.getElementById('budget-form');
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    //new instance of UI Class
    const userInterface = new UI();

    //budget form submit
    budgetForm.addEventListener('submit', function(event) {
            event.preventDefault();
            userInterface.submitBudgetForm();
        })
        //expense form submit
    expenseForm.addEventListener('submit', function(event) {
            event.preventDefault();
            userInterface.submitExpenseForm();

        })
        //expense list submit
    expenseList.addEventListener('click', function(event) {
        if (event.target.parentElement.classList.contains('edit-icon')) {
            userInterface.editExpense(event.target.parentElement);
        } else if (event.target.parentElement.classList.contains('delete-icon')) {
            userInterface.deleteExpense(event.target.parentElement);
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
});