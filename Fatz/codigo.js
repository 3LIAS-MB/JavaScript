/*Modelar datos de la vida real a traves de entidades llamadasd objetos*/

// Cualquier tipo de dato que no es un objeto se lo conoce como un tipo de dato primitivo
console.log( typeof "hello wolrd" ) // string
console.log( typeof 100 ) // number
console.log( typeof false ) // boolean

// Equivalencia de datos primitivos a objeto

console.log( typeof new Number(100))
console.log( typeof new String("hello world"))
console.log( typeof new Boolean(true))

/**/

console.log( typeof {} ) // object
console.log( typeof [] ) // object

console.log( typeof new Date() ) // object - Ahora es un objeto, solo con "Date()" seria un string

/*CREAR UN OBJETO LITERAL EN JS*/

console.log ( { } )

let name = "Ryan"
let lastname = "Ray"
let age = 30
let country = "Argentina"

function showFullName ( ) {
    return "Ryan Ray"
}

var user = {
    /*Propiedades*/
    country: country,
    user_name: name,
    lastname: lastname,
    age: 30,
    hobbies: ['read', 'run'],
    address: {
        country: "colombia"  ,
        street: "some street",
        city: "london"
    },  
    
    friends: ['elias', 'brandom'],
    active: true,
    /*Metodos*/
    sendMail: function() { // sendMail(){  -> Forma corta para crear un metodo
        // metodo que esta basado en los datos o propiedades que tiene el objeto
        return "My name is " + this.user_name + "I'm " + this.age + "years old";
    },
    // Llamo al metodo 'showFullName' y lo guardo en una variable
    showFul1Name: showFullName() 
}

console.log(user.address.city)
console.log(user.active)
// Con los parentesis '()' llamo a la funcion -> 'sending email...'    
console(user.sendMail()) 
console.log(user.showFullName () )

/*USANDO METODOS EN UN OBJETO, ES UNA FUNCION EN SI XD*/

const account = {
    number: "1231235123123123123",
    amount: 100,
    deposit(quantity) {
        this.amount = this.amount + quantity
    },
    withdraw(quantity){
        this.amount = this.amount - quantity 
    }
}

account.deposit(100) // +100
account.deposit(50) // +150
account.deposit(10) // +10
console.log(account) // amout: 260

account.withdraw(10) // -10
account.withdraw(200) // -200
console.log(account) // 50

// "hello world".toUpperCase -> Esto siempre fue un metodo XD

// Los contrusctores en JS no son mas que funciones que nos permiten crear objetos con propiedades y metodos

// CONSTRUCTOR -> Nos permite crear objetos
function Person() {
    this.name = "" //con la plabra "this" estamos creando un objeto con estas propiedades
    this.lastname = ""
    this.age = 0
    this.showFullName = function() { // NO SE PUEDE ABREVIAR PORQUE ES UN CONSTRUCTOR
        return `${this.name} ${this.lastname}`
    }

}

const user2 = new Person()
user2.name = "Joe"
user2.lastname = "McMillan"
user2.age = "30"
console.log(user2.showFullName()) // Joe MacMillan

const user3 = new Person()
user3.name = "Cameron"
user3.lastname = "Howe"
console.log(user3.showFullName()) // Cameron Howe

const user4 = new Person()
const user5 = new Person()
const user6 = new Person()

console.log(user2) // Person { name: '', lastname: '', age: 0, showFullName: [Fuction action]}. CREAMOS UN OBJETO XD

/*FORMAS DE CREAR UN OBJETO*/

const number = new Object() // Devuelve un objeto literal
console.log(Person) // {}

const person2 = {}
console.log(person2) // {}
console.log(person2.constructor == Object) // true

/*CREAR OBJETO CON OBJECT -> ESTA FORMA NOES LA MAS OPTIMA ES MEJOR USAR OBJETOS LITERALES*/

const number2 = new Object(10 * 2)
console.log(number2) // [Number: 6]

/*CREANDO OBJETO CON "OBJECT(), PUEDE TENER UNA FUNCION DENTRO"*/

const string = new Object("Hello world") // No es un string comun, es un string con valores de un objeto

string.name = "Special String" // Aquí se agrega una nueva propiedad llamada name al objeto string y se le asigna el valor "Special String"
string.lastname = "Mamani"
string.test = function() { // // Se agrega una nueva propiedad llamada test al objeto string, y se le asigna una función anónima
    return this + " test"
}
console.log(string.name) // Special String                
console.log(string.lastname) // Mamani
console.log(string.test()) // hello world test
 
/*CREANDO una función constructora OBJECT() Y LLAMANDOLOS CON LA FORMA "OBJETO.PROPIEDAD" -> "customObject.firstname"*/

const customObject = new Object(); // Crear un objeto utilizando el constructor Object
customObject.firstname = "John";  // Agregar la propiedad 'firstname' con valor "John"
customObject.lastname = "Doe"; // Agregar la propiedad 'lastname' con valor "Doe"

// Acceder a las propiedades utilizando la sintaxis de punto
console.log(customObject.firstname); // Imprimirá "John"
console.log(customObject.lastname); // Imprimirá "Doe"

// Acceder a las propiedades utilizando la sintaxis de corchetes
console.log(customObject['firstname']); // Imprimirá "John"
console.log(customObject['lastname']); // Imprimirá "Doe"

/*CON OBJECT PUEDO OBTENER VALORES Y KEYS DE UN OBJETO*/

const user = {
    name: "ryan",
    lastname: "ray",
    age: 30,
    showName(){
        return this.name;
    }
}

console.log(Object.keys(user)) // -> ['name', 'lastname', 'age', 'showName']
console.log(Object.values(user)) // -> ['ryan', 'ray', 30, [Function: showName]]

/**/

function Person() { // Si inicio el constructor con mayusla JavaS detecta que es un constructor y no una funcion comun
    this.name = ""
    this.lastname = ""
}

/*------------------------------------------------------------------------------------------------------------------------------*/
