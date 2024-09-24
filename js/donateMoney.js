document.getElementById('donate-btn').addEventListener('click', function(){
    showSectionById('donation-list');
    changeBottonColorById('donate-btn');
})
document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history-list');
    changeBottonColorById('history-btn');
})
document.getElementById('btn-add-money').addEventListener('click', function(){
    const accountBalance = getTextValueByID('account-balance');
    const addMoney = getInputValueByID('input-noakhali-money');
    const balanceNum = getTextValueByID('donate-amount-noakhali');
    
    
    if(!isNaN(addMoney) && !isNaN(balanceNum) && addMoney >= 0 && accountBalance >= 0){
        const newBalance = balanceNum + addMoney;
        const newAccountBalance = accountBalance - addMoney;
        document.getElementById('account-balance').innerText = newAccountBalance;
        document.getElementById('donate-amount-noakhali').innerText = newBalance;
    }
    else{
        alert("Invalid Inpur: Please give a Number");
    }
    
})