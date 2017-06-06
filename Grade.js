function assignGrade (score) {
  switch (true) { //Cool trick to activate a switch statement. This will run unless false
    case (score >= 90):
      alert("A");
      break;
    case (score >= 80):
      alert("B");
      break;
    case (score >= 70):
      alert("C");
      break;
    case (score >= 60):
      alert("D");
      break;
    default:
      alert("F");
  }
}
