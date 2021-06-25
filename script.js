//Generate random password
function generate() {

  //set password length/how complex

  let complexity = document.getElementById("slider").value;

  //password values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+~";

  let password = "";

  //Create for loop to choose password characters
  for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
  }

  // Add password to textobx.display area
  document.getElementById("display").value = password;

  // add password to previously generated password section
  document.getElementById("lastPasswords").innerHTML += password + "<br />";
}

//set default length display of 15
document.getElementById("length").innerHTML = "Length: 15";

// function to set length based on slider
document.getElementById("slider").oninput = function(){ 

  if(document.getElementById("slider").value > 0) {
    document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
  }
  else{
    document.getElementById("length").innerHTML = "Length: 1";
  }

  //function to copy password

  function copypassword(){  

    document.getElementById("display").select();

   // document.execCommand("Copy");

    alert("Password copied to clipboard!");
  }
}