function hello(name) {
  if (!name) {
    return "Hello, World!";
  }

  return (
    `Hello, ` +
    name
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase())) +
    `!`
  );
}

console.log(hello("luQMaN hAKIM"));
