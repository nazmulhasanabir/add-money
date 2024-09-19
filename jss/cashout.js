document.getElementById('CashOut-Btn').addEventListener('click',function(event){
    event.preventDefault();
    const CashAmount =document.getElementById('CashoutAmount').value;
    const pinNumber = document.getElementById('CashOutPin').value;

    if(pinNumber==='1234'){
        const balance = document.getElementById('account-balance').innerText;

        const Cashoutbalance = parseFloat(CashAmount);  
        const Amount = parseFloat(balance);

        const cashout = Amount - Cashoutbalance;
        document.getElementById('account-balance').innerText = cashout;
    }
    else{
        alert('try again')
    }
})