document.getElementById("btn-add-money")
       .addEventListener('click', function(event)

       {
        // console.log("click  now you add here some ")
        event.preventDefault()
        const userinput=getInputFieldValueById('input-add-money');
        const userpass=getInputFieldValueById('input-pin-number')
        // console.table({userinput,userpass});

        if(userpass === 1234)
        {
            const maainblance=getTextFieldValueById('account-balance');
            const totalcash_in=maainblance+userinput;
            console.log(totalcash_in);
            document.getElementById('account-balance').innerText=totalcash_in;

        }
    })