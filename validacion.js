// Refactorización para mejorar la validación de formulario incluyendo email y nombre
function validarFormulario() {
  let asuntoInput = document.getElementsByName('asunto')[0];
  let asunto = asuntoInput.value.trim();

  // Validación del asunto
  if (asunto === '') {
    alert('Por favor, escribe un asunto');
    asuntoInput.focus();
    return false;
  }

  if (asunto.length > 50) {
    alert('El asunto excede los 50 caracteres permitidos');
    asuntoInput.focus();
    return false;
  }

  let mensajeTextArea = document.getElementsByName('mensaje')[0];
  let mensaje = mensajeTextArea.value.trim();

  // Validación del mensaje
  if (mensaje === '') {
    alert('Por favor, escribe un mensaje');
    mensajeTextArea.focus();
    return false;
  }

  if (mensaje.length > 300) {
    alert('El mensaje excede los 300 caracteres permitidos');
    mensajeTextArea.focus();
    return false;
  }

  // Validación del nombre
  let nombreInput = document.getElementsByName('nombre')[0];
  let nombre = nombreInput.value.trim();

  if (nombre === '') {
    alert('Por favor, escribe tu nombre');
    nombreInput.focus();
    return false;
  }

  if (nombre.length > 100) {
    alert('El nombre excede los 100 caracteres permitidos');
    nombreInput.focus();
    return false;
  }

  // Validación del email
  let emailInput = document.getElementsByName('email')[0];
  let email = emailInput.value.trim();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    alert('Por favor, escribe tu email');
    emailInput.focus();
    return false;
  }

  if (!emailRegex.test(email)) {
    alert('Por favor, escribe un email válido');
    emailInput.focus();
    return false;
  }
  limpiarInputs();
  return true; // Retorna true si todas las validaciones pasan
}

function limpiarInputs() {
  document.getElementsByName('asunto')[0].value = '';
  document.getElementsByName('mensaje')[0].value = '';
  document.getElementsByName('nombre')[0].value = '';
  document.getElementsByName('email')[0].value = ''; // Asegúrate de tener un input para el email en tu formulario
}
