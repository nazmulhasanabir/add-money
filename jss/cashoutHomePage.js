document.getElementById('cashoutButton').addEventListener('click', function(){
    document.getElementById('Cashout-form').classList.remove('hidden');
    document.getElementById('cashIn-form').classList.add('hidden');

})



document.getElementById('Add-money-btn').addEventListener('click', function(){
    document.getElementById('cashIn-form').classList.remove('hidden');
    document.getElementById('Cashout-form').classList.add('hidden');

})



