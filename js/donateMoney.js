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

// Attach event listener for Noakhali donation button
document.getElementById('btn-donate-noakhali').addEventListener('click', function() {
    processDonation('account-balance', 'input-money-noakhali', 'donate-amount-noakhali', 'my_modal_1', 'noakhali-donate');
});

// Attach event listener for feni donation button
document.getElementById('btn-donate-feni').addEventListener('click', function() {
    processDonation('account-balance', 'input-money-feni', 'donate-amount-feni', 'my_modal_1', 'feni-donate');
});
// Attach event listener for Quota donation button
document.getElementById('btn-donate-quota').addEventListener('click', function() {
    processDonation('account-balance', 'input-money-quota', 'donate-amount-quota', 'my_modal_1', 'quota-donate');
});


