
function handleLoginFormSubmit() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  

  // Perform login form validation
  let missingFields = [];
  if (!username) {
    missingFields.push("Username");
  }

  if (!password) {
    missingFields.push("Password");
  }

  if (missingFields.length > 0) {
    displayErrorMessages(missingFields);
  } else {
   
   //redirectToBuyerDashboard(); // Redirect to buyer dashboard
     
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

function redirectToBuyerDashboard() {
	window.location.href = "./login.php";
}