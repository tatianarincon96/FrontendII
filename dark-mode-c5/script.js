/* PRIMERA OPCION 
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const items = document.querySelectorAll(".item");
const h2 = document.querySelectorAll("h2");
const p = document.querySelectorAll("div p");
const button = document.querySelector("button");

//const confirmar = confirm("Desea activar el Dark Mode");
button.addEventListener("click", ()=>changeMode());

function changeMode() {
    body.classList.toggle("dark-mode-body");
    h1.classList.toggle("dark-mode-h1");
    items.forEach(item => item.classList.toggle("dark-mode-items"));
    h2.forEach(h2 => h2.classList.toggle("dark-mode-item-text"));
    p.forEach(p => p.classList.toggle("dark-mode-item-text"));
}
*/

/* CORRECCIONES */

// [buenas prácticas]
// - Usar const en lugar de let ya que no volveremos a modificar las variables

// [tip]
// agrega la siguiente linea en las propiedades de css del body
// transition: all 300ms linear;
// prueba de nuevo cambiar a modo escuro 😉
// ojo: no es buena practica agregar la propiedad transition al body, pero para tener en cuenta....

// [desafío]
// - hay una forma de aplicar el modo oscuro obteniendo un unico elemento del HTML

// OPTIMIZACION
const body = document.querySelector("body");
const button = document.querySelector("button");
button.addEventListener("click", () => changeMode());
function changeMode() {
    body.classList.toggle("dark");
}

// Uso de setInterval()
/*
setInterval(()=>{
        body.classList.toggle("dark");
    },3000);
*/
const contenedor = document.querySelector(".contenedor");

function crearNoticia(urlImagen, titulo, contenido) {
    const template = `
    <div class="item">
        <img src="${urlImagen}">
        <h2>${titulo}</h2>
        <p>${contenido}</p>
    </div>
    `;

    contenedor.innerHTML += template;
}

// const personalizada = prompt("Cuál desea que sea el título del artículo?"); crearNoticia(urlImagen, personalizada, contenido);


const noticias = [
    {
        titulo: 'El tigre',
        imagen: './imagenes/tiger.jpg',
        cuerpoNoticia: `El tigre (Panthera tigris) es una de las especies​ 
        de la subfamilia de los panterinos (familia Felidae) pertenecientes 
        al género Panthera. Se encuentra solamente en el continente asiático; 
        es un predador carnívoro y es la especie de félido más grande del mundo 
        junto con el león pudiendo alcanzar ambos un tamaño comparable al de 
        los fósiles de félidos de mayor tamaño.`
    },
    {
        titulo:'El leon',
        imagen: './imagenes/leon.jpg',
        cuerpoNoticia: `El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del
        género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África
        subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una
        pequeña zona del noroeste de India`
    },
    {
        titulo: 'El leopardo',
        imagen: './imagenes/leopardo.jpg',
        cuerpoNoticia: `El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás
        félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el
        hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje
        completamente oscuro como pantera negra (melánico).`
    },
    {
        titulo: 'La pantera negra',
        imagen: './imagenes/pantera-negra.jpg',
        cuerpoNoticia: `La pantera negra es una variación negra (melanismo) de varias especies de grandes félidos, en especial del
        leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni
        siquiera una subespecie, es simplemente una variación negra de estos animales.`
    },
    {
        titulo: 'El jaguar',
        imagen: './imagenes/jaguar.jpg',
        cuerpoNoticia: `El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y
        género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También
        es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Panthera
        leo).`
    },
    {
        titulo: 'El guepardo',
        imagen: './imagenes/chita.jpg',
        cuerpoNoticia: `El guepardo o chita (Acinonyx jubatus)1​ es un miembro atípico de la familia de los félidos. Es el único
        representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre
        más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos
        metros.`
    }
]

crearNoticia(noticias[0].imagen, noticias[0].titulo, noticias[0].cuerpoNoticia);
crearNoticia(noticias[1].imagen, noticias[1].titulo, noticias[1].cuerpoNoticia);
crearNoticia(noticias[2].imagen, noticias[2].titulo, noticias[2].cuerpoNoticia);
crearNoticia(noticias[3].imagen, noticias[3].titulo, noticias[3].cuerpoNoticia);
crearNoticia(noticias[4].imagen, noticias[4].titulo, noticias[4].cuerpoNoticia);
crearNoticia(noticias[5].imagen, noticias[5].titulo, noticias[5].cuerpoNoticia);
