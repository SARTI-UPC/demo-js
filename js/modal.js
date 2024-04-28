
const modal = document.getElementById('confirmModal');
const btnAbrirModal = document.getElementById('borrarBtn');
const btnCerrarModal = document.getElementsByClassName('close')[0];
const btnConfirmar = document.getElementById('confirmarBtn');
const btnCancel = document.getElementById('cancelarBtn');
const borrarLink = document.getElementById('borrarLink');

// Funciones para mostrar y ocultar el modal
borrarLink.onclick = function() {
  modal.style.display = 'block';
};

btnCerrarModal.onclick = function() {
  modal.style.display = 'none';
};

btnCancel.onclick = function() {
  modal.style.display = 'none';
};

// Confirmar l'eliminació si es fa click sobre el botó "Confirmar"
btnConfirmar.onclick = function() {
  // delete the file
  console.log('Archivo borrado');
  modal.style.display = 'none';
};

// tancar el modal si es fa click fora d'ell
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
