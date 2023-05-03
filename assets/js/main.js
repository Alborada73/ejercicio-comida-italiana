
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

var listadoBebidas = [bebida1, bebida2, bebida3, bebida4]


var menu1 = new Menu("Instalata de riso", 6750, "Ensalada para dos",
    "https://www.allrecipes.com/thmb/DnJpkLhBw09h2bQHnj-3_klYQSs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3924402-fde39bbdca814afc878c7938d37c7c76.jpg")
var menu2 = new Menu("Insalata al cipollotti", 5990, "Ensalada para uno", "https://www.cucchiaio.it/content/cucchiaio/it/ricette/2009/12/ricetta-insalata-ceci-patate-cipollotti/_jcr_content/header-par/image_single.img.jpg/1410277015032.jpg")
var menu3 = new Menu("Insalata Caprese", 8250, "Ensalada para uno con oregano", "https://www.recetasjudias.com/wp-content/uploads/2016/01/Ensalada-Caprese2.jpg")

var listadoMenu = []
listadoMenu.push(menu1, menu2, menu3)

function cambioBebida(indice, checkbox) {
    var seleccionado = $(checkbox).prop(`checked`)
    listadoBebidas[indice].seleccionado = seleccionado
    console.log(listadoBebidas);
    calcularCuenta()
}

function cambioMenu(indice, checkbox) {
    var seleccionado = $(checkbox).prop(checked)
    listadoMenu[indice].seleccionado = seleccionado
    calcularCuenta()
}

function calcularCuenta() {
    var total = 0
    var seleccionado = ListadoBebidas.filter(bebidas => bebidas.seleccionado)
    $("#total-cuenta tbody").html("")
    seleccionados.forEach(item => {
        total = total + item.precio
        $("#total-cuenta tbody").append(`
            <tr>
                <td>${item.nombre}</td>
                <td class="text-end fw-bold">$${item.precio.toLocalesString("es-CL")}
</td>
            </tr>
        `}
        
    })

var seleccionados = listadoMenu.filter(menu => menu.seleccionado)
seleccionados.forEach(item => {
    total += item.precio
    $("#total-cuenta tbody").append(`
            <tr>
                <td>${item.nombre}</td>
                <td class="text-end fw-bold">$${item.precio.toLocaleString("es-CL")}
</td>
            </tr>
        `}
    })

$("#total").html(`$$(total.toLocaleString("es-CL")}`}
}

@@ -53, 10 + 87, 10 @@$(document).ready(function () {
    <Input
        class="form-check-input"
        type="checkbox" value=""
        id="flexCheckDefault"
        id="checkBebida${index}"
        onChange="cambioBebida(${index}, this)"
    >
        <label class="form-check-label" for="flexChechkDefault">
            <label class="form-check-label" for="checkBebida${index}">
                ${bebida.nombre}
            </label>
        </div>
        @@ -71,8 +105,8 @@ $(document).ready(function(){
            $("#listado-menu").append(``
                < li class= "list-group-item" >
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""
                        id="flexCheckDefault">
                        <label class="form-check-label fw-bold" for="flexCheckDefault">
                            <input class="form-check-input" type="checkbox" value=""
                                id="checkMenu${index}" onChange="cambioMenu(${index}, this)">
                                <label class="form-check-label fw-bold" for="checkMenu${index}">
                                    ${menu.nombre}
                                </label>
                            </div>      

}