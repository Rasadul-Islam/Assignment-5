document.getElementById('donate-btn').addEventListener('click', function(){
    showSectionById('donation-list');
    changeBottonColorById('donate-btn');
})
document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history-list');
    changeBottonColorById('history-btn');
})
document.getElementById('btn-add-money').addEventListener('click', function(){
    const addMoney = getInputValueByID('input-noakhali-money');
    const balanceNum = getTextValueByID('donate-amount-noakhali');
    
    if(!isNaN(addMoney) && !isNaN(balanceNum) ){
        const newBalance = balanceNum + addMoney;
        document.getElementById('donate-amount-noakhali').innerText = newBalance;
        console.log(newBalance); 
        // add donation history
        
    }
    else{
        alert("Invalid Inpur: Please give a Number");
    }
    
})