@@ -1,9 +1,11 @@
function Bebida(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
    this.seleccionado = false

}

function Menu(nombre, precio, descripcion, foto) {
    this.nombre = nombre
    this.precio = precio
    this.descripcion = descripcion
    this.foto = foto
    this.seleccionado = false

}

var bebdida1 = new Bebida("Martini", 2550)
var bebdida2 = new Bebida("Cappuccino", 1370)
var bebdida3 = new Bebida("Latte", 1350)
var bebdida4 = new Bebida("Mojito", 2290)

var listadoBebidas = [ bebida1, bebida2, bebida3, bebida4 ]


var menu1 = new Menu("Instalata de riso", 6750, "Ensalada para dos",
"https://www.allrecipes.com/thmb/DnJpkLhBw09h2bQHnj-3_klYQSs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3924402-fde39bbdca814afc878c7938d37c7c76.jpg")
var menu2 = new Menu("Insalata al cipollotti", 5990, "Ensalada para uno",)