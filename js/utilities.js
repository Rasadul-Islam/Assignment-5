// convert input value to number
function getInputValueByID(id){
    const inputValue = document.getElementById(id).value;
    const inputNum = parseFloat(inputValue);
    return inputNum;
}
// Convert text value to number
function getTextValueByID(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
// common function for change botton color
function changeBottonColorById(id){
    //transparent all background
    document.getElementById('donate-btn').classList.add('bg-transparent');
    document.getElementById('history-btn').classList.add('bg-transparent');
    //background green after click 
    document.getElementById(id).classList.remove('bg-transparent');
    document.getElementById(id).classList.add('bg-[#B4F461]');
}
// common function for show botton section
function showSectionById(id){
    // hidden all btn section
    document.getElementById('donation-list').classList.add('hidden');
    document.getElementById('history-list').classList.add('hidden');
    // show clicked btn
    document.getElementById(id).classList.remove('hidden');
}
// Donate now function
// Common function for processing donation sections
function processDonation(accountBalanceID, inputMoneyID, donateAmountID, modalID, nameForDonation) {
    const accountBalance = getTextValueByID(accountBalanceID);
    const addMoney = getInputValueByID(inputMoneyID);
    const balanceNum = getTextValueByID(donateAmountID);
    const modal = document.getElementById(modalID);
    const donationFor = document.getElementById(nameForDonation).innerText;

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
            // History update section
            const div = document.createElement('div');
            div.classList.add('container', 'mx-auto', 'border-2', 'p-8', 'gap-8', 'rounded-lg', 'mb-8')
            div.innerHTML = `<h3 class="font-bold text-base lg:text-xl">${addMoney} Taka is ${donationFor}</h3> 
            <p class="text-[rgba(17,17,17,0.7)] text-xs lg:text-base font-light">${new Date}</p>
            `
            document.getElementById('history-container').appendChild(div);
        } else {
            alert("Insufficient balance: Balance is less than the donation amount.");
        }
    } else {
        alert("Invalid Input: Please enter a valid number");
    }
}
