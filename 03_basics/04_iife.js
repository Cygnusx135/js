//Immediately Invoked Function Expression (IIFE)
//names iife
(function chai() {
  console.log('DB connected');
})();

//unamed iife
((name) => {
  console.log(name);
})('yuya');
