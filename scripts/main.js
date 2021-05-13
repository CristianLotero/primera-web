let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/AntiguoSiamTailandia.jpg') {
      miImage.setAttribute('src','images/ankorwat.jpg');
    } else {
      miImage.setAttribute('src', 'images//AntiguoSiamTailandia.jpg');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Vas a ser lo que te propongas ser, ' + miNombre;
  }
}
miBoton.onclick = function() {
  estableceNombreUsuario();
}