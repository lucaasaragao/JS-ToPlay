let a = 10; // Tipagem dinamica -> Valores mudam 
a = 'Lucas'
console.log(a);

console.log(b);
var b = 'Aragão'; // hoisting -> Na primeira analise sintaxica é separado o valor da variaável

const c = 11; // Não permite outra atribuição depois de definir um const (apenas se estiver dentro de um objeto)
console.log(c);

// Sempre usar o const
const firstName = 'Lucas';
const lastName = 'Aragão';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

