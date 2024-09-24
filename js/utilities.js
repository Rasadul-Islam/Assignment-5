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
// function donateNowById(id){

// }