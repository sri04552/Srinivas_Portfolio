// Prevent browser from scrolling to top on reload
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Form Validation
function formSubmit() {
  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const Email = document.getElementById("email").value.trim();
  const Phone = document.getElementById("phone").value.trim();

  if (firstName === "" && lastName === "" && Email === "" && Phone === "") {
    alert("Please Enter All Fields...!");
    return false;
  }

  if (firstName === "") {
    alert("Please Enter Your First Name...!");
    return false;
  }
  if (lastName === "") {
    alert("Please Enter Your Last Name...!");
    return false;
  }
  if (Email === "") {
    alert("Please Enter Your Email...!");
    return false;
  }
  if (Phone === "") {
    alert("Please Enter Your Phone Number...!");
    return false;
  }

  //Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(Email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

// Print values to console
function formValues() {
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const Email = document.getElementById("email").value;
  const Phone = document.getElementById("phone").value;

  console.log(`First Name : ${firstName}`);
  console.log(`Last Name  : ${lastName}`);
  console.log(`E-mail     : ${Email}`);
  console.log(`Phone      : ${Phone}`);
}

// Show success alert on top and hide after 3 seconds
function showSuccessAlert() {
  const alertBox = document.getElementById("formSuccess");
  alertBox.classList.remove("d-none");

  setTimeout(() => {
    alertBox.classList.add("d-none");
  }, 5000); // 3 seconds
}

// Form submit event
document.getElementById("contactform").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop actual form submission

  // Check validation
  if (formSubmit()) {
    showSuccessAlert();
    formValues(); // Log values to console
    this.reset(); // Clear the form
  }
});
