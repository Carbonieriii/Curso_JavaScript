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

// Operadores ternarios
let driver = 90
let speed = driver > 110 ? "Above" : "Below"

console.log(speed)

// Operadores lógicos
/*let temIdadeMinima = true
let temTituloEleitor = true

let podeVotar = temIdadeMinima && temTituloEleitor
console.log("Pode votar: " + podeVotar)

let podeViajar = !podeVotar
console.log("Pode viajar: " + podeViajar)*/

let temIdadeMinima = true
let temTituloEleitor = false

let podeVotar = temIdadeMinima || temTituloEleitor
console.log("Pode votar: " + podeVotar)

let podeViajar = !podeVotar
console.log("Pode viajar: " + podeViajar)

// Operadores lógicos com String
//Exemplo 1
/*let corCliente = "White"
let corEstoque = "Red"
let corVendida = corCliente || corEstoque

console.log("A cor selecionada foi: " + corVendida)
*/
//Exemplo 2 
let corCliente = undefined
let corEstoque = "Red"
let corVendida = corCliente || corEstoque

console.log("A cor selecionada foi: " + corVendida)

// If ... Else
// Exemplo de um motorista em uma estrada que é 110

let driverSpeed = 80

if(driverSpeed > 110)
{
    console.log("Driving too fast")
}

else if(driverSpeed > 40 && driverSpeed <= 110)
{
    console.log("OK")
}

else
console.log("Driving too slow")

// Switch/Case
// Exemplo de um aeroporto em que as siglas retornam o nome real.

let airport = "SEA"

switch (airport)
{
    case "MCO" :
        console.log("Orlando")
        break
    case "JFK" :
        console.log("Jonh F. Kennedy")
        break
    case "SEA" :
        console.log("Seattle")
        break
    default:
        console.log("Unknown")            
}

// For loop
// Exemplo contando do 0 ao 10

for (i = 0; i <= 10; i++)
{
    console.log("Numero " , i)
}

// While loop
// Exemplo contando do 0 ao 10

i = 1
while (i <= 10)
{
    console.log("Numero " , i)
    i++
}

// Do While Loop
i = 0
do
{

    console.log("Numero ", i)
    i++

}
while(i <= 10)
    
// For in Loop

const myCar = 
{
  model: "BMW",
  year: 2023,
  km: 60000
}

for(let i in myCar)
console.log(i, myCar[i])

// For of Loop

const friends = ["Gustavo", "Leo", "Lucas", "Alex"]

for(let i of friends)
console.log(i)

// Adicionando Break

i = 0
while(i <= 10)
{
    if(i === 7) break
    console.log("Numero ", i)
    i++
}

//POO
const book = 
{
    bookTitle: "Atomic Habits",
    bookAuthor: "James Clear",
    bookPages: 306,
    bookChapters: 
    {
        chap1: "Fundamentals",
        chap2: "1st Law"
    }
}

console.log(book)

// POO
// Funções
const book = 
{
    bookTitle: "Atomic Habits",
    bookAuthor: "James Clear",
    bookPages: 306,
    bookChapters: 
    {
        chap1: "Fundamentals",
        chap2: "1st Law"
    },
    printBook: function()
    {
        console.log("Printing...")
    }
}

book.printBook()


// POO
// Factory

function createBook(title, author, pages)
{
    const book = 
    {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function()
        {
            console.log("Printing...")
        }
    }
    return book
    
}

const book1 = createBook("Atomic", "James", 306)
const book2 = createBook("Tim", "Carl", 1001)

console.log(book1)
console.log(book2)
