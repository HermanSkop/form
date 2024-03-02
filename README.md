## Project Description:

This project implements a simple registration form with validation for phone number, birth date, and password. Upon successful submission, the entered details are displayed in a separate section below the form.

## Files:

- index.html: This file contains the HTML structure of the page, including the form and output sections.
- form.js: This file contains the JavaScript code for handling form submission and validation.
- style.css: This file contains the CSS styles for the form elements and overall layout.

## Functionality:

The form allows users to enter their phone number, birth date, and password.

JavaScript validation ensures:
- Phone number is 9 digits and numeric.
- Birth date is in format YYYY-MM-DD and the user is born before the current date.
- Password is at least 8 characters long and contains at least one lowercase letter, one uppercase letter, and one number.

![wrong phone.png](readme%20imgs%2Fwrong%20phone.png)

Upon successful submission, the entered details are displayed in the "Credentials" section.

![correct submit.png](readme%20imgs%2Fcorrect%20submit.png)