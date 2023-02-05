//Signup
let usersdata = []; //Array of users

//Function call
(function () {
    if (document.getElementById("signup-button")) {
        document.getElementById("signup-button").addEventListener("click", function (event) {
            event.preventDefault();
            Signup();
        });
    }
    if (document.getElementById("login-button")) {
        document.getElementById("login-button").addEventListener("click", function (event) {
            event.preventDefault();
            login();
        });
    }
})();

//Defining of Signup Function
let Signup = function () {
    if (!validateSignupInput()) {
        return;
    }
    //Take html element from id
    function gender() {
        var data = document.getElementsByName("gender");
        var i;
        var result;
        for (i = 0; i < data.length; i++) {
            if (data[i].checked) {
                result = data[i].value;
            }
        }
        return result;
    }

    function dob() {
        let dobdata = [];
        var dateAttributes = document.getElementsByClassName("dob");
        for (let i = 0; i < dateAttributes.length; i++) {
            options = dateAttributes[i].selectedOptions;
            dobdata[i] = options[0].value;
        }
        return dobdata;
    }

    let user = {
        id: Date.now(),
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        emailorphone: document.getElementById('emailorphone').value,
        password: document.getElementById('password').value,
        dob: dob(),
        gender: gender()
    }
    console.log(user);
    usersdata.push(user);
    document.querySelector('form').reset();
    //Saving to local staorage
    localStorage.setItem("UserList", JSON.stringify(usersdata));
    window.location.href = 'http://localhost:30000/login';
    alert("Signup successfully");
}



//set error function
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};

//set success function
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//valid email function
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//sISignup form validation
var validateSignupInput = function () {
    const firstNameElement = document.getElementById('firstname');
    const lastNameElement = document.getElementById('lastname');
    if (!ValidateNameElement(firstNameElement) || !ValidateNameElement(lastNameElement)) {
        return false;
    }

    const emailorphone = document.getElementById('emailorphone');
    const password = document.getElementById('password');
    const dob = document.getElementById('dob');
    const gender = document.getElementById('gender');

    //Form Validation start
    const firstnameval = firstname.value.trim();
    const lastnameval = lastname.value.trim();
    const emailorphoneval = emailorphone.value.trim();
    const passwordval = password.value.trim();
    // const dobval = dob.value.trim();
    // const genderval = gender.value.trim();
    //FirstName

    //lastName


    //email
    if (emailorphoneval === '') {
        setError(emailorphone, 'Email is required');
        return false;

    } else if (!isValidEmail(emailorphoneval)) {
        setError(emailorphone, 'Provide a valid email address');
        return false;
    } else {
        setSuccess(emailorphone);
    }
    //pass
    if (passwordval === '') {
        setError(password, 'Password is required');
        return false;

    } else if (passwordval.length < 8) {
        setError(password, 'Password must be at least 8 character.')
        return false;
    } else {
        setSuccess(password);
    }
    return true;
}


//Login form validation
var validateLoginInput = function () {
    const emailorphone = document.getElementById('emailorphone');
    const password = document.getElementById('password');

    const emailorphoneval = emailorphone.value.trim();
    const passwordval = password.value.trim();

    //email
    if (emailorphoneval === '') {
        setError(emailorphone, 'Email is required');
        return false;

    } else if (!isValidEmail(emailorphoneval)) {
        setError(emailorphone, 'Provide a valid email address');
    } else {
        setSuccess(emailorphone);
    }
    //pass
    if (passwordval === '') {
        setError(password, 'Password is required')
        return false;

    } else if (passwordval.length < 8) {
        setError(password, 'Password must be at least 8 character.');
        return false;
    } else {
        setSuccess(password);
    }
    return true;
}

//login Function
let login = function () {

    if (!validateLoginInput()) {
        return;
    }
    let user = {
        id: Date.now(),
        emailorphone: document.getElementById('emailorphone').value,
        password: document.getElementById('password').value
    }
    usersdata.push(user);
    var enterEmail = document.getElementById('emailorphone').value;
    var enterPwd = document.getElementById('password').value;
    var users = JSON.parse(localStorage.getItem('UserList'));
    for (var userDetails of users) {
        if (userDetails.emailorphone == enterEmail && userDetails.password == enterPwd) {
            window.location.href = 'http://localhost:30000/';
            alert("Login successfully");
            return true;
        }

    }
    alert("Invalid Detail");
}


//Name Validate function
let ValidateNameElement = function (element) {
    const value = element.value.trim();
    if (value === "") {
        setError(element, "lastname cannot be blank");
        return false;
    }
    else if (value.length <= 2) {
        setError(element, "min 3 char");
        return false;
    }
    else {
        setSuccess(element);
        return true;
    }
}