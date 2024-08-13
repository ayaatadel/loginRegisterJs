// register
// select => name , id , class
let regUerName = document.getElementById('regName');
let regUerEmail = document.getElementById('regEmail');
let regUerPssword = document.getElementById('regPassword');
let regButton = document.getElementById('regBtn');
let registerForm = document.getElementById('regForm');
let messsage = document.getElementById("message");
registerForm.addEventListener('submit', (event) => {
    // console.log(event.target);
    event.preventDefault();

    let userName = regUerName.value;
    let userEmail = regUerEmail.value;
    let userPassword = regUerPssword.value;

    // store data long time=> local storage
    // handle local storage => key => value
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // username or email exist => messsage username or email already exist
    // not exist store in array users
    // user name , userEmail ,userPassword

    // iteration on users =>array
    // foreach  , filter => data , [] , map => data , undefined 

    // filter
    users.filter((user) => {
        // local storage    // form 
        if (user.userName == userName || user.userEmail == userEmail) {
            console.log('user EXIT');

        }
        return;
    })


    const existingUsers = users.filter(user => user.userName === userName || user.userEmail === userEmail);
    // return data => exist user ,[]=> not found user

    if (existingUsers.length > 0) {
        // console.log("user already exist");
        messsage.innerText = "user already exit";
        messsage.classList.add("alert-danger");

    } else {

        //[]
        users.push({ userName: userName, userEmail: userEmail, userPassword: userPassword });
        // array of object 
        // local storage 

        localStorage.setItem("users", JSON.stringify(users));

        messsage.innerText = "user added successfully";
        messsage.classList.add("alert-success");
        regUerName.value = "";
        regUerEmail.value = "";
        regUerPssword.value = "";

        // go to login
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    }

});
