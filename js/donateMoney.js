//perameter pass for 'Donate' botton
document.getElementById('donate-btn').addEventListener('click', function(){
    showSectionById('donation-list');
    changeBottonColorById('donate-btn');
})
// perameter pass for 'History' bottom
document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history-list');
    changeBottonColorById('history-btn');
})
// Common function for processing donation sections
function processDonation(accountBalanceID, inputMoneyID, donateAmountID, modalID) {
    const accountBalance = getTextValueByID(accountBalanceID);
    const addMoney = getInputValueByID(inputMoneyID);
    const balanceNum = getTextValueByID(donateAmountID);
    const modal = document.getElementById(modalID);

    if (!isNaN(addMoney) && !isNaN(balanceNum) && addMoney >= 0 && accountBalance >= 0) {
        // Check if the account balance is sufficient for the transaction
        if (accountBalance >= addMoney) {
            // Add the donation amount to the current balance
            const newBalance = balanceNum + addMoney; 
            document.getElementById(donateAmountID).innerText = newBalance;

            // Deduct the added amount from the account balance
            const newAccountBalance = accountBalance - addMoney;
            document.getElementById(accountBalanceID).innerText = newAccountBalance;

            // Open Modal
            modal.showModal();
        } else {
            alert("Insufficient balance: Balance is less than the donation amount.");
        }
    } else {
        alert("Invalid Input: Please enter a valid number");
    }
}

// Attach event listener for Noakhali donation button
document.getElementById('btn-donate-noakhali').addEventListener('click', function() {
    processDonation('account-balance', 'input-money-noakhali', 'donate-amount-noakhali', 'my_modal_1');
});

// Attach event listener for feni donation button
document.getElementById('btn-donate-feni').addEventListener('click', function() {
    processDonation('account-balance', 'input-money-feni', 'donate-amount-feni', 'my_modal_1');
});
// Attach event listener for Quota donation button
document.getElementById('btn-donate-quota').addEventListener('click', function() {
    processDonation('account-balance', 'input-money-quota', 'donate-amount-quota', 'my_modal_1');
});
