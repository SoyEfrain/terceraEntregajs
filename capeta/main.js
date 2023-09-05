const boton = document.getElementById ("boton");

boton.addEventListener ("click", () => {
    console.log ("Hola");
});




let formulario = document.getElementById ("formulario");

formulario.addEventListener ("submit", (e) => {
    e.preventDefault ();
    let inputs = e.target.children;
    console.log (inputs [0].value);
    console.log (inputs [1].value);
    console.log (inputs [2].value);
});

const productos = [
    {id: 1 , nombre: "Audi", precio: 27000},
    {id: 2 , nombre: "Bmw", precio: 35000},
    {id: 3 , nombre: "Ferrari", precio: 54000},
];

localStorage.setItem ("carrito" , JSON.stringify(productos));



let carrito = [];
let carritoStorage = localStorage.getItem ("carrito")

if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
} else {
    let div = document.createElement ("div");
    div.innerHTML = "carrito vacio";
    document.body.append(div);
}


const agregar = (id) => {
    console.log (id);
};

carrito.forEach(item => {
    let div = document.createElement ("div")
    div.innerHTML = `
        <h2>ID: ${item.id}</h2>
        <p>Nombre: ${item.nombre}</p>
        <b>$${item.precio} </b> 
        <button id="boton${item.id}">Agregar al carrito</button>
    `;
    document.body.append(div);
    let boton = document.getElementById (`boton${item.id}`);
    boton.addEventListener("click", () => agregar (item.id));
});

