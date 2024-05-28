const galeria=['./img/florcitas.jpg','./img/lagoMontaña.jpg','./img/Mar.jpg','./img/atardecerPiedra.jpg'];
const imagen=document.querySelector('img');
const botonAnterior=document.getElementById('imgAnterior');
const botonPosterior=document.getElementById('imgPosterior');


const cargarImagenInicial= (imagen,galeria)=>{
 imagen.setAttribute('src',galeria[0]);
}
cargarImagenInicial(imagen,galeria);



botonPosterior.addEventListener('click', function posterior(){
  
   
    let imagenActual=imagen.getAttribute("src");
    let pos=galeria.indexOf(imagenActual);
    if(pos==galeria.length-1 ){
        cargarImagenInicial(imagen,galeria);
        return;
    }
    imagen.setAttribute('src',galeria[pos+1]);
});
botonAnterior.addEventListener('click',function anterior(){
   
    let imagenActual=imagen.getAttribute('src');
    let pos=galeria.indexOf(imagenActual);
    if(pos==0){
        imagen.setAttribute('src',galeria[galeria.length-1]);
        return;
    }
    imagen.setAttribute('src',galeria[pos-1]);
});
