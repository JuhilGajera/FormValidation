function validate(e) {

  console.log("hello");
  
  var fName = document.f1.fName.value;
  var lName = document.f1.lName.value;
  var email = document.f1.email.value;
  var password = document.f1.password.value;
  var number = document.f1.number.value;
  var yourBio = document.f1.yourBio.value;


  var fNameRegex = /^[a-zA-Z ]{3,16}$/;
  if (fName == "" || !fNameRegex.test(fName)) {
    document.getElementById("error1").innerHTML =
      "First Name must be albhanumeric and contain 3-16 characters";
  }
  var lNameRegex = /^[a-zA-Z ]{3,16}$/;
  if (lName == "" || !lNameRegex.test(lName)) {
    document.getElementById("error2").innerHTML =
      "Last Name must be albhanumeric and contain 3-16 characters";
  }

  var emailRegex = /^\S+@\S+\.\S+$/;
  if (email == "" || !emailRegex.test(email)) {
    document.getElementById("error3").innerHTML =
      "emil must be a valid address , e.g. example@example.com";
  }
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (password == "" || !passwordRegex.test(password)) {
    document.getElementById("error4").innerHTML =
      "password must be alphanumeric (@, _ and - are also allowed) and between 6-20 characters";
  }
  var numberRegex = /^(?:\d{2}-\d{3}-\d{3}-\d{3}|\d{11})$/;
  if (number == "" || !numberRegex.test(number)) {
    document.getElementById("error5").innerHTML =
      "a valid Telephone number (11 digits and 333-333-3334)";
  }
  var bioRegex = /^[A-Z]{8,50}$/;
  if (yourBio == "" || !bioRegex.test(yourBio)) {
    document.getElementById("error6").innerHTML =
      "Bio must be contain only loercase letters, underscores, hyphens and be 8-50 characters";
  }
}
