const validateForm = (event) => {
    event.preventDefault();

    let username = event.target.username;
    let password = event.target.password;
    let error = document.getElementById("error");

    error.innerHTML = "";
    username.style.borderColor = "";
    password.style.borderColor = "";

    if (username.value === "") {
        error.innerHTML = "Please enter username";
        username.style.borderColor = "red";
        return;
    }

    if (password.value === "") {
        error.innerHTML = "Please enter password";
        password.style.borderColor = "red";
        return;
    }

    error.style.color = "green";
    error.innerHTML = "Login Successful";
};