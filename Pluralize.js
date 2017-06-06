function pluralizer(num, noun) {
  if (num > 1) {
    switch (noun.toLowerCase()) {
      case "sheep":
        alert(num + " " + "sheep");
        break;
      case "goose":
        alert(num + " of these are called geese.");
        break;
      case "child":
        alert(num + " of these are called children.");
        break;
      default:
        alert(num + " " + noun + "s");
    }
  } else {
    alert(noun + " is singular.");
  }
}
