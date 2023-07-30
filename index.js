

function handleFormSubmit() {
	const firstName = document.getElementById("firstName").value;
	const lastName = document.getElementById("lastName").value;
	const email = document.getElementById("email").value;
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const confirmPassword = document.getElementById("confirmPassword").value;

	// Perform form validation
	const missingFields = [];
	if (!firstName) {
		missingFields.push("First Name");
	}

	if (!lastName) {
		missingFields.push("Last Name");
	}

	if (!email) {
		missingFields.push("Email Address");
	} 
	else if (!isValidEmail(email)) {
		alert("Invalid Email Address");
		return
	}

	if (!username) {
		missingFields.push("Username");
	}

	if (!password) {
		missingFields.push("Password");
	}

	if (!confirmPassword) {
		missingFields.push("Confirm Password");
	} 
	else if (password !== confirmPassword) {
		alert("Passwords do not match");
		return
	}

	if (missingFields.length > 0) {
		displayErrorMessages(missingFields);
	} 
	else {
		// If form is valid redirect user to Login Page
		alert("Registration successful! Redirecting to Login Page...");
		redirectToLogin(); // Redirect To login Page
	}
}


function isValidEmail(email) {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email);
}

function displayErrorMessages(errors) {
	const errorMessage = `Please fill in the following fields:\n - ${errors.join("\n - ")}`;
	alert(errorMessage);
}

function redirectToLogin() {
	window.location.href = "./database.php";
}