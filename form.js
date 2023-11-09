document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("register-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let phoneNumber = form.elements.namedItem("phone-input").value;
        let birthDate = form.elements.namedItem("date-input").value;
        let password = form.elements.namedItem("password-input").value;
        if(!phoneNumber.match(/^[0-9]{9}$/)) {
            alert("Phone number must be 9 digits and be numeric");
            return;
        }
        let today = new Date();
        let date = new Date(birthDate);
        if (birthDate.length !== 10 || !birthDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
            alert("Birth date must be in format yyyy-mm-dd");
            return;
        }
        else if(today<date){
            alert("Wtf, you are not born yet");
            return;
        }
        else if(password.length < 8 || !password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/)){
            alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number");
            return;
        }

        let fields = document.getElementById("credentials").children;
        let phone = fields.namedItem("phone");
        date = fields.namedItem("date");
        passWord = fields.namedItem("password");

        phone.textContent = phoneNumber;
        date.textContent = birthDate;
        passWord.textContent = password;
    });
});