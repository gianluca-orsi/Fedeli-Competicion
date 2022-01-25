var fotosMatias = new Array()

for (i = 0; i <= 2; i++) {
    fotosMatias[i] = '../images/fotos/Matias/'+ i +'.jpg';
}
let contador = 2;
let contadorColumnas = 0;
contadorGaleria = 0;

console.log(fotosMatias);

function galeria () {
    let contador = 0;
    let foto;
    let columna;
    let conjuntoColumnas;
    let contadorConjuntoColumnas = 0;

    do {

        /* divColumnas + un numero para hacer un conjunto de 3 columnas */
        let claseConjuntoColumnas = "divColumnas" + contadorConjuntoColumnas;
        
        /* aumenta el contador */
        contadorConjuntoColumnas = contadorConjuntoColumnas + 1;

        /* creando el conjunto de columnas */
        conjuntoColumnas = $("<div></div>")
        $(conjuntoColumnas).addClass("columns is-centered");
        $(conjuntoColumnas).addClass(claseConjuntoColumnas);
        console.log(claseConjuntoColumnas);

        for (i = 0; i<=2; i++) {
            columna = $("<div></div>");
            $(columna).addClass("column is-3 has-text-centered");
            foto = $("<img>");
            $(foto).attr("src", fotosMatias[contador]);
            $(foto).addClass("hvr-grow-shadow");
            $(columna).append(foto);
            $(conjuntoColumnas).append(columna);
            foto = "";
            columna = "";
            contador = contador + 1;
        }

        $(".divFotos").append(conjuntoColumnas);
    } while (contador <= fotosMatias.length)
}