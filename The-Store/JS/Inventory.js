// Titulo dinamico en el cual se le agrega - The Store al final de cada TITLE en cada pagina
function Titulo() {
    return document.title + " - The Store";
};

var title = Titulo();
document.title = title;

// Validacion de campos vacios, generacion de errores y llenado de arrayProductos 
var inputs = document.getElementsByClassName('btnForm');
var formulario = document.getElementById("formInventory");

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    let ArrayErrores = [];
    let name = inputs[0].value;
    let price = inputs[1].value;
    let inventory = inputs[2].value;
    let ingrese = 'Ingrese:<br>';

    if (name == null || name.trim().length <= 3 || name == '') {
        ArrayErrores.push('Producto');
    }

    if (price < 1) {
        ArrayErrores.push('Precio');
    }

    if (inventory < 1) {
        ArrayErrores.push('Cantidad');
    }

    if (inventory >= 1 && price >= 1 && name.trim().length > 3) {
        let newProduct = { 'name': name, image: '', 'price': price, 'quantity': inventory };
        ingrese = '';
        arrayProductos.push(newProduct);
        alert("Producto Creado!!");
        formulario.reset();
        dibujarTabla();
    }

    CampoError.innerHTML = ingrese + ArrayErrores.join(', ');
});

// Listado de productos en tabla
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

// Funcion Dibujar tabla
window.onload = dibujarTabla();

function dibujarTabla() {
    const listarproductos = arrayProductos.map(function (iterador) {
        return `
        <tr>
            <td>${iterador.name}</td>
            <td>\$ ${iterador.price}</td>
            <td>${iterador.quantity}</td>
        </tr>
    `
    }).join('');

    let llenartabla = document.querySelector('.infotabla');
    llenartabla.innerHTML = listarproductos;

}


