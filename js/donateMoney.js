//event listener for Donate button
document.getElementById('donate-btn').addEventListener('click', function(){
    showSectionById('donation-list');
    changeButtonColorById('donate-btn');
})
//event listener for history button
document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history-list');
    changeButtonColorById('history-btn');
})

//event listener for Noakhali donation button
document.getElementById('btn-donate-noakhali').addEventListener('click', function() {
    processDonation('account-balance', 'input-money-noakhali', 'donate-amount-noakhali', 'my_modal_1', 'noakhali-donate');
});

//event listener for feni donation button
document.getElementById('btn-donate-feni').addEventListener('click', function() {
    processDonation('account-balance', 'input-money-feni', 'donate-amount-feni', 'my_modal_1', 'feni-donate');
});
//event listener for Quota donation button
document.getElementById('btn-donate-quota').addEventListener('click', function() {
    processDonation('account-balance', 'input-money-quota', 'donate-amount-quota', 'my_modal_1', 'quota-donate');
});