function nameReturn(name) {
  if (name === "" || name === undefined) return "Hello, World";
  else {
    return (
      "Hello, " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    );
  }
}
console.log(nameReturn("muaNO"));
