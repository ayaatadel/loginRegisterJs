


// login 

let loginForm = document.getElementById('logForm');
console.log(loginForm);

let message=document.getElementById("message");
loginForm.addEventListener('submit', (event) => {
    console.log(event.target);
    
    event.preventDefault();

    let userEmail = document.getElementById('logEmail').value;
    let userPassword = document.getElementById('logPassword').value;
    console.log(userEmail);
    console.log(userPassword);



    // get all users=> users=> store in local storge

    let users = JSON.parse(localStorage.getItem('users')) || [];

    let existUser = users.filter(user => user.userEmail === userEmail && user.userPassword === userPassword);
    console.log(existUser);
    
    if (existUser.length > 0) {
   
        message.innerText = "login successfully";
        message.classList.add("alert-success");

        setTimeout(() => {
            window.location.href = "products.html";
        }, 1000);
    } else {
        message.classList.add("alert-danger");
        message.innerText = "check user name or password";
    }



})


