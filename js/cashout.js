document.getElementById("btn-cash-out")
.addEventListener('click', function(event)
{   
    event.preventDefault();
    let usercash_out=getInputFieldValueById("input-cash-out");
    let userpass_c=getInputFieldValueById('input-cash-out-pin');

    if(isNaN(usercash_out))
    {
        alert("input number only");
        return;
    }

    if( userpass_c === 1234)
    {
        let getmainbalance=getTextFieldValueById('account-balance');
        let total_balane=getmainbalance-usercash_out;

        document.getElementById('account-balance').innerText=total_balane;
        console.log(total_balane);

        let div =document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
                <h4 class="text-2xl font-bold">Cash Out</h4>
                <p>${usercash_out} withdraw. New Balance ${total_balane}</p>
            `
        document.getElementById('transaction-container').appendChild(div);
    }
})