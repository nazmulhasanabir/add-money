document.getElementById('add-money-Btn').addEventListener('click',function(event){
event.preventDefault();

const  phoneNumber = document.getElementById('amount').value;
console.log(phoneNumber)


const   pincode = document.getElementById('pinNumber').value;
console.log(pincode);

if(pincode==='123'){
    // step-4  get the current balance 
const acountBalance = document.getElementById('account-balance').innerText;




// step 5 add money with current balance
const addingMoney = parseFloat(phoneNumber);
const balanceNumber = parseFloat(acountBalance);
const newBalance = addingMoney + balanceNumber;
document.getElementById('account-balance').innerText = newBalance; 

}
else{
    alert ('wrong pin')
}


});



