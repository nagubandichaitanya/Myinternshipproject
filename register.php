<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $fname = $_POST["fname"];
  $mname = $_POST["mname"];
  $lname = $_POST["lname"];
  $dob = $_POST["dob"];
  $gender = $_POST["gender"];
  $password = $_POST["password"];
  $confirmPassword = $_POST["confirmPassword"];

  // Perform validation and processing here
  // Note: In a real-world scenario, you should also hash the password before storing it.

  // For simplicity, just printing the data for now
  echo "Registration successful!<br>";
  echo "First Name: $fname<br>";
  echo "Middle Name: $mname<br>";
  echo "Last Name: $lname<br>";
  echo "Date of Birth: $dob<br>";
  echo "Gender: $gender<br>";
}
?>
