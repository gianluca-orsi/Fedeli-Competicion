var fotosOtros = new Array()

for (i = 0; i <= 42; i++) {
    fotosOtros[i] = '../images/fotos/Otros/'+ i +'.jpg';
}
let contador = 2;
let contadorColumnas = 0;
contadorGaleria = 0;

console.log(fotosOtros);

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
            $(foto).attr("src", fotosOtros[contador]);
            $(columna).append(foto);
            $(conjuntoColumnas).append(columna);
            foto = "";
            columna = "";
            contador = contador + 1;
        }

        $(".divFotos").append(conjuntoColumnas);
    } while (contador <= fotosOtros.length)
}