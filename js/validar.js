const form = document.getElementById('myFormId')
//Para el login
function validacionLogin() {
  let acumErrores = 0

  event.preventDefault()
  form.classList.remove('is-invalid')

  let inputEmail1 = document.getElementById('inputEmail1')
  let inputPassword1 = document.forms['myForm']['inputPassword1']

  if (inputEmail1.value == '') {
    inputEmail1.classList.add('is-invalid')
    document.getElementById('errorEmail1').textContent =
      'Por favor introduce un email'
    acumErrores++
  }

  if (inputPassword1.value == '') {
    inputPassword1.classList.add('is-invalid')
    document.getElementById('errorPassword1').textContent =
      'Por favor introduce una contraseña'
    acumErrores++
  }
  if (acumErrores > 0) {
    return false
  } else {
    return true
  }
}
form.addEventListener(
  'blur',
  (event) => {
    console.log(event)
    if (event.target.value != '') event.target.classList.remove('is-invalid')
  },
  true
)

//Para Registro
const form2 = document.getElementById('myFormId2')

//Se realiza la funcion del NIVEL 2,
function validarPassword() {
  pass = document.getElementById('inputPassword2').value
  console.log(pass)
  regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  if (regex.exec(pass) == null) {
    inputPassword2.classList.add('is-invalid')
    document.getElementById('errorPassword2').textContent =
      'El password debe contener min 8 caracteres, una mayúscula y un caracter especial'
    acumErrores2++
  } else {
    console.log('valid')
  }
}

function validacionRegistro() {
  let acumErrores2 = 0

  event.preventDefault()
  form2.classList.remove('is-invalid')

  let inputfirstName = document.getElementById('inputfirstName')
  let inputlastName = document.getElementById('inputlastName')
  let inputEmail2 = document.getElementById('inputEmail2')
  let inputPassword2 = document.forms['myForm2']['inputPassword2']
  let inputconfirmPassword = document.forms['myForm2']['inputconfirmPassword']
  let inputPhone = document.forms['myForm2']['inputPhone']
  let inputAddress = document.forms['myForm2']['inputAddress']
  let inputProvince = document.forms['myForm2']['inputProvince']
  let inputCity = document.forms['myForm2']['inputCity']
  let inputZip = document.forms['myForm2']['inputZip']
  let inputregister = document.forms['myForm2']['gridCheck2']

  if (inputfirstName.value == '') {
    inputfirstName.classList.add('is-invalid')
    document.getElementById('errorfirstName').textContent =
      'Por favor coloca un nombre'
    acumErrores2++
  }

  if (inputlastName.value == '') {
    inputlastName.classList.add('is-invalid')
    document.getElementById('errorlastName').textContent =
      'Por favor coloca los apellidos'
    acumErrores2++
  }

  //Email
  if (inputEmail2.value == '') {
    inputEmail2.classList.add('is-invalid')
    document.getElementById('errorEmail2').textContent =
      'No ha colocado ningun email'
    acumErrores2++
  }

  //Contraseña
  if (inputPassword2.value == '') {
    inputPassword2.classList.add('is-invalid')
    document.getElementById('errorPassword2').textContent =
      'No ha colocado ninguna contraseña'
    acumErrores2++
    //NIVEL 2, aquí se llama la función
  } else if (validarPassword()) {
    console.log('Nivel 2')
  }
  if (inputconfirmPassword != inputPassword2.value) {
    inputconfirmPassword.classList.add('is-invalid')
    document.getElementById('errorconfirmPassword').textContent =
      'La contraseña no coincide'
    acumErrores2++
  }

  if (inputPhone.value == '') {
    inputPhone.classList.add('is-invalid')
    document.getElementById('errorPhone').textContent =
      'Por favor introduce un telefono'
    acumErrores2++
  }

  if (inputAddress.value == '') {
    inputAddress.classList.add('is-invalid')
    document.getElementById('errorAddress').textContent =
      'Por favor introduce una dirección'
    acumErrores2++
  }

  if (inputProvince.value == '') {
    inputProvince.classList.add('is-invalid')
    document.getElementById('errorProvince').textContent =
      'Por favor selecciona una provincia'
    acumErrores2++
  }

  if (inputCity.value == '') {
    inputCity.classList.add('is-invalid')
    document.getElementById('errorCity').textContent =
      'Por favor introduce una ciudad'
    acumErrores2++
  }

  if (inputZip.value == '' || inputZip.length != 5) {
    inputZip.classList.add('is-invalid')
    document.getElementById('errorZip').textContent =
      'Introduce un codigo postal correcto'
    acumErrores2++
  }

  if (!gridCheck2.checked) {
    gridCheck2.classList.add('is-invalid')
    document.getElementById('errorCheck2').textContent =
      'No has leido las condiciones'
    acumErrores2++
  }

  if (acumErrores2 > 0) {
    return false
  } else {
    return true
  }
}

form2.addEventListener(
  'blur',
  (event) => {
    console.log(event)
    if (event.target.value != '') event.target.classList.remove('is-invalid')
  },
  true
)
