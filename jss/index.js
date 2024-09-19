document.getElementById('btn-primary').addEventListener('click', function(event){
   event.preventDefault();
    // console.log('clicked on login');
    

    // next step
    const PhoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    // console.log(PhoneNumber,password);

    if(PhoneNumber === '5' && password ==='123' ){
             console.log('corect');
                window.location.href = '../home.html'
     }
    else{
        alert   ('wrong phone or pin')
    }

})