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

// POO
// Constructor

function CreateBook(title, author, pages)
{
        this.bookTitle = title;
        this.bookAuthor = author;
        this.bookPages = pages
      
}

const book1 = new CreateBook("Atomic", "James", 306)
console.log(book1)

// POO
// Built in Objects
// Math

let num1 = 3
console.log(Math.PI * num1)

console.log(Math.max(1,2,3,55,78,9))
console.log(Math.min(6,2,3,55,78,9))

// POO
// Built in Objects
// String

let message = "Hey, my name is Giovanni"
console.log(message.length)
console.log(message.startsWith("Hey"))

// Templates literals

let firstName = "Joe"

const email = "Hi Margot, \nThe meeting is confirmed! \nGiovanni."
console.log(email)

const email2 = `Hi ${firstName},
The meeting is confirmed!
Giovanni.`
console.log(email2)

// Array 
// Adicionando informações a uma array pré definida

const num = [7,8,9]

num.push(10,11,12)

num.unshift(1,2,3)

num.splice(3,0,4,5,6)

console.log(num)

// Array 
// Localizando informações em um array primitivo

const num = [6,7,8,9]

console.log(num.indexOf(8))
console.log(num.includes(4))

// Array 
// Localizando informações em um array de referecia

const movie = [
    {id: 1, movieName: "Dejavu"},
    {id: 2, movieName: "Back to the future"},
    {id: 3, movieName: "The Matrix"}
]
console.log(movie.find(function(movie)
{
    return movie.movieName == "Back to the future"
}))

// Array 
// Arrow Function

const movie = [
    {id: 1, movieName: "Dejavu"},
    {id: 2, movieName: "Back to the future"},
    {id: 3, movieName: "The Matrix"}
]
console.log(movie.find(

 movie => movieName == "Back to the future"
))

// Array 
// Pop, shift e splice

const num = [5,6,7,8]
//const final = num.pop()
//const final = num.shift()
const final = num.splice(2,1)

console.log(num)
console.log(final)

// Array 
// Deixando vazia a array

let num = [6,7,8,9]

num = []
num.length = 0
num.splice(0,num.length)

// Array 
// Concat/Slice

let num = [6,7,8,9]
let letters = ["a","b","c"]

all = num.concat(letters)
half = all.slice(3,5)

console.log(all)
console.log(half)

// Array 
// Join


let clients = ["Andre", "Lucas", "Carol"]
let clientsJoin = clients.join(", ")

console.log(clients)
console.log(clientsJoin)

// Array 
// Sort/Reverse


let clients = ["Andre", "Lucas", "Carol"]
clients.sort()
clients.reverse()
console.log(clients)

// Array 
// Every


const tempLondon = [10,4,6,8,0]
const tempPositive = tempLondon.every(function(value){
    return value >= 0
})

console.log(tempPositive)

// Array 
// Filter


const tempLondon = [10,4,6,8,0, -9,2,-7]
const tempPositive = tempLondon.filter(value => value >= 0
)

console.log(tempPositive)


// Function 

// Function Declaration
function movie() 
{
    console.log("Rambo")
}
movie()

// Function Expression
const car = function()
{
    console.log("BMW")
}
car()

// Function 

// Arguments

function price() {

    let total = 0
    for (let value of arguments)
    total += value 
    return total
}

console.log(price(10,20,30,40,50))


// Function 
// Default

function carLoan(loan, rate = 2.5, years = 5) 
{
   return (loan * rate / 100 * years) + loan
    
}
console.log(carLoan(20000))
