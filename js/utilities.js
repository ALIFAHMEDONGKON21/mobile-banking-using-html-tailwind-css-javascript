function getInputFieldValueById(id)
{
    let inputvalue=document.getElementById(id).value;
    let inputvalueNumber=parseFloat(inputvalue);
    return inputvalueNumber;
}


function getTextFieldValueById(id)
{
    const textvalue=document.getElementById(id).innerText;
    const textnumber=parseFloat(textvalue);
    return textnumber;
}

function showsection(id)
{
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('transaction-section');

    document.getElementById(id).classList.remove('hidden');

}