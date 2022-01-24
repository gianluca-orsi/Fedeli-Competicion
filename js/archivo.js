$("i").addClass("hvr-grow");


//function galeria

var fotosFranco = 16;
var fotosRamiro = 66;
var fotosGaspar = 35;
var fotosMatias = 3;
var fotosJuampi = 22;
var fotosOtros = 43;

function galeria () {
    for (i = i; i<= fotosFranco.length; i++) {
        let contador = 1;
        var galeria = $("<div></div>").addClass("column is-4 divFotosColumnasGaleria");
        var foto = URL("../images/fotos/Franco/foto ("+ i +").jpg");
        $(".divFotosColumnasGaleria").append(foto);
        contador +=1;
        if (contador == 4){
            let columnas = $("<div></div>").addClass("columns has-text-centered is-centered divFotosColumnas");
            $(".divFotosColumnas").append(galeria);
            $(".divFotos").append(columnas);
            contador = 1;
        }
    }
}