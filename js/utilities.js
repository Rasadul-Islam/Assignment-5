function getInputValueByID(id){
    const inputValue = document.getElementById(id).value;
    const inputNum = parseFloat(inputValue);
    return inputNum;
}
function getTextValueByID(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
function changeBottonColorById(id){
    //transparent all background
    document.getElementById('donate-btn').classList.add('bg-transparent');
    document.getElementById('history-btn').classList.add('bg-transparent');
    //background green after click 
    document.getElementById(id).classList.remove('bg-transparent');
    document.getElementById(id).classList.add('bg-[#B4F461]');
}
function showSectionById(id){
    // hidden all btn section
    document.getElementById('donation-list').classList.add('hidden');
    document.getElementById('history-list').classList.add('hidden');
    // show clicked btn
    document.getElementById(id).classList.remove('hidden');
}