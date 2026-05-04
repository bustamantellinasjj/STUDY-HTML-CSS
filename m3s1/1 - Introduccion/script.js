function runExamples() {
  console.log("=== VARIABLES ===");
  var a = 1;
  let b = 2;
  const c = 3;
  console.log(a, b, c);

  console.log("=== HOISTING ===");
  console.log(x);
  var x = 10;

  console.log("=== CLOSURE ===");
  function outer() {
    let count = 0;
    return function () {
      count++;
      console.log(count);
    };
  }
  const counter = outer();
  counter();
  counter();

  console.log("=== CALLBACK ===");
  function saludar(nombre, cb) {
    cb(nombre);
  }
  saludar("Moisés", (n) => console.log("Hola " + n));

  console.log("=== PROMESA ===");
  const promesa = new Promise((res) => {
    setTimeout(() => res("Listo"), 1000);
  });

  promesa.then(console.log);

  console.log("=== ASYNC/AWAIT ===");
  async function ejemploAsync() {
    const data = await Promise.resolve("Async OK");
    console.log(data);
  }

  ejemploAsync();
}
