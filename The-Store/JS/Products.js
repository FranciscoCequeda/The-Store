function Titulo() {
    return document.title + " - The Store";
};

var title = Titulo();
document.title = title;

// Array productos
const arrayProductos = [
    {
        name: 'Bicicleta Montaña',
        image: './Assets/JPG/Bici.jpg',
        price: 680000,
        quantity: 4
    },
    {
        name: 'Monitor Apple 27\' Plg',
        image: './Assets/JPG/Monitor.jpg',
        price: 1500000,
        quantity: 3
    },
    {
        name: 'Gafas Policarbonato',
        image: './Assets/JPG/Glasses.jpg',
        price: 360000,
        quantity: 6
    },
    {
        name: 'Motocicleta BMW 250 CC',
        image: './Assets/JPG/Bike.jpg',
        price: 32650000,
        quantity: 1
    },
    {
        name: 'Silla Interior Basica',
        image: './Assets/JPG/Chair.jpg',
        price: 155000,
        quantity: 10
    },
    {
        name: 'MacBook Pro 14\' Plg',
        image: './Assets/JPG/Laptop.jpg',
        price: 22358000,
        quantity: 2
    },
    {
        name: 'Mesa Interior Basica',
        image: './Assets/JPG/Table.jpg',
        price: 220000,
        quantity: 1
    }
];

//Creacion de Cajas de productos 
const listarProductos = arrayProductos.map(function (producto) {
    return `<div class="cajas">
    <h3>${producto.name}</h3>
    <img src="${producto.image}" alt="">
    <h5>\$ ${producto.price}</h5>
    <h6>Cantidad: ${producto.quantity}</h6>
    </div>`
}).join('');

document.getElementById('Contenido2').innerHTML = listarProductos;
