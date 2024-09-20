function getInputFieldValueById(id)
{
    let inputvalue=document.getElementById(id).value;
    let inputvalueNumber=parseFloat(inputvalue);
    return inputvalueNumber;
}