document.getElementById("btn-cash-out")
.addEventListener('click', function(event)
{   
    event.preventDefault();
    let usercash_out=getInputFieldValueById("input-cash-out");
    let userpass_c=getInputFieldValueById('input-cash-out-pin');

    if( userpass_c === 1234)
    {
        let getmainbalance=getTextFieldValueById('account-balance');
        let total_balane=getmainbalance-usercash_out;

        document.getElementById('account-balance').innerText=total_balane;
        console.log(total_balane);
    }
})