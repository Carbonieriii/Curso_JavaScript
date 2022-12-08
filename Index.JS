console.log("Olá mundo!");

let firstName = "André";
let lastName = "Carvalho";
const price = 30;
// price = 20;

console.log(firstName);
console.log(lastName);
console.log(price);

// Os tipos primitivos:
//let itemName = "Pen"; // String
//let itemPrice = 3; // Numero
//let itemAvaliable = true; // Boolean
//let itemColor = "red";
//let itemColor; // Undefined
itemName = null; // Vazio

let Pen = 
{

    itemName: "Pen",
    itemPrice: 3,
    itemAvaliable: true,
    itemColor: "Red"

}

console.log(Pen);


let friends = ["Marcos", "Silvia", "Elisa"]
friends[1] = "Junior"
console.log(friends)

//Forma simples
function saleStatus() 
{
    console.log("Approved")
}
saleStatus()


//Forma elaborada
function saleStatus(status,totalAmount) 
{
   console.log("Transaction " + status + "! Total: $" + totalAmount)
}
 saleStatus("Approved",25)

//Forma simples

function percentage10(price) 
{
    return price - (price * 10/100)
}
let total = percentage10(20)
console.log(total)


// Forma elaborada
function percentage10(price)
{
    return price - (price * 10/100)
}
console.log(percentage10(30))


//Operadores aritimeticos
//Mais
let num1 = 3
let num2 = 2

console.log(num1 + num2)

//Menos
console.log(num1 - num2)

//Vezes
console.log(num1 * num2)

//Divisão
console.log(num1 / num2)

//Resto da divisão
console.log(num1 % num2)

//Exponencial
console.log(num1 ** num2)

//Encrementar e Decremento
console.log(++num1)
console.log(num1++)
console.log(--num2)
console.log(num2--)

// Operadores de atribuição
let num1 = 3
num1 += 20
console.log(num1)
//-= menos igual
//*= vezes igual
// /= divisão igual

// Operadores de comparação
let num1 = 5
console.log(num1 > 3)
console.log(num1 < 3)
console.log(num1 >= 5)
console.log(num1 <= 3)
console.log(num1 === 5)
console.log(num1 !== 5)
