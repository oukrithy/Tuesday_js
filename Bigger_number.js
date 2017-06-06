function numbers (num1, num2) {
  if (num1 > num2) {
    alert("The two numbers are " + num1 + " and " + num2 + ". " + num1 + " is greater than " + num2);
    return num1;
  } else if (num1 === num2){
      alert("The two numbers are " + num1 + " and " + num2 + ". " + num1 + " equals " + num2);
      return num1
  } else {
    alert("The two numbers are " + num1 + " and " + num2 + ". " + num2 + " is greater than " + num1);
    return num2;
  }
}
