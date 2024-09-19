document.getElementById('add-money-Btn').addEventListener('click',function(event){
    event.preventDefault();
    
const addMoney = document.getElementById('amount').value;
console.log(addMoney)

const pinNumber = document.getElementById('pinNumber').value;
console.log(pinNumber)

if ( pinNumber=== '123'){
    const balance = document.getElementById('account-balance').innerText;

    const Addedamount = parseFloat(addMoney)
    const Intotalbalance = parseFloat(balance);
    const adjustBalance = Addedamount + Intotalbalance;
    document.getElementById('account-balance').innerText = adjustBalance

    
}
else{
    alert('trying more')
}
})