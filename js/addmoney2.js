document.getElementById("btn-add-money")
       .addEventListener('click', function(event)

       {
        // console.log("click  now you add here some ")
        event.preventDefault()
        const userinput=getInputFieldValueById('input-add-money');
        const userpass=getInputFieldValueById('input-pin-number')
        // console.table({userinput,userpass});
        if(isNaN(userinput))
        {
            alert("input number only");
            return;
        }

        if(userpass === 1234)
        {
            const maainblance=getTextFieldValueById('account-balance');
            const totalcash_in=maainblance+userinput;
            console.log(totalcash_in);
            document.getElementById('account-balance').innerText=totalcash_in;

            let div =document.createElement('div');
            div.classList.add('bg-red');

            div.innerHTML=`
                <p> cash out ${userinput} blance ${totalcash_in}</p>
            `
            document.getElementById('transaction-section').appendChild(div);
        }
        else
        {
            alert("password no right")
        }
    })