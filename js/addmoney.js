document.getElementById('btn-add-money')
    .addEventListener('click', function(event) {
    event.preventDefault();
    
    console.log("Click done here");
    let addMoneyAmount = document.getElementById('input-add-money').value;  // Corrected 'Value' to 'value'
    let getpinnumber = document.getElementById('input-pin-number').value;  // Corrected 'Value' to 'value'
    let addMoneyAmountnumber = Number(addMoneyAmount);

    
    if(getpinnumber ==='1234')
    {
        let balance=document.getElementById('account-balance').innerText;
        let balancenumber=parseFloat(balance);
        
        let newblance=addMoneyAmountnumber+balancenumber;
        console.log(newblance);
        document.getElementById('account-balance').innerText=newblance;
    }
    else
    {
        console.log("Enter Your right pin")
    }


    
});
