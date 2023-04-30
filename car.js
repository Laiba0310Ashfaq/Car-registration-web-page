let CarMakeInput = document.getElementById('CarMake');
let CarmodelInput = document.getElementById('Carmodel');
let RegistrationNumberInput = document.getElementById('RegistrationNumber');
let CarColorInput = document.getElementById('CarColor');

let CarMakeerror = document.getElementById('CarMake-error');
let Carmodelerror = document.getElementById('Carmodel-error');
let RegistrationNumbererror = document.getElementById('RegistrationNumber-error');
let CarColorerror = document.getElementById('CarColor-error');

//functions for validations of four fields 
CarMakeInput.addEventListener('input', function () {
  let CarMake = CarMakeInput.value;
  if (!/^[a-zA-Z]+$/.test(CarMake)) {
    CarMakeerror.innerHTML = 'Must only contain letters';
  }
  else {
    CarMakeerror.innerHTML = '';
  }
});
CarmodelInput.addEventListener('input', function () {
  let Carmodel = CarmodelInput.value;
  if (!/^[a-zA-Z]+$/.test(Carmodel)) {
    Carmodelerror.innerHTML = 'Must only contain letters';
  }
  else {
    Carmodelerror.innerHTML = '';
  }
});
RegistrationNumberInput.addEventListener('input', function () {
  let RegistrationNumber = RegistrationNumberInput.value;
  if (!/^[a-zA-Z0-9]+$/.test(RegistrationNumber)) {
    RegistrationNumbererror.innerHTML = 'Must only contain letters and number';
  }
  else {
    RegistrationNumbererror.innerHTML = '';
  }
});
CarColorInput.addEventListener('input', function () {
  let Carcolor = CarColorInput.value;
  if (!/^[a-zA-Z]+$/.test(Carcolor)) {
    CarColorerror.innerHTML = 'Must only contain letters';
  }
  else {
    CarColorerror.innerHTML = '';
  }
});


let cararr = []
function addinforow() {
  //checking if the fields are empty or have invalid input
  if (CarMakeInput.value === '' || CarmodelInput.value === '' ||
    RegistrationNumberInput.value === '' || CarColorInput.value === '') {
      error.innerHTML = 'complete the input fields';

    return;
  }
  if (CarMakeerror.innerHTML !== '' || Carmodelerror.innerHTML !== '' ||
    RegistrationNumbererror.innerHTML !== '' || CarColorerror.innerHTML !== '') {
    return;
  }
//setting the inputvalues to car attributes 
  let car = {
    carmake: CarMakeInput.value,
    carmodel: CarmodelInput.value,
    carregistration: RegistrationNumberInput.value,
    carcolor: CarColorInput.value

  }
  cararr.push(car)

//adding data to table from array
let rowsHtml = "";
for (let i = 0; i < cararr.length; i++) 
{
  rowsHtml += "<tr><td>"
   + cararr[i].carmake +
    "</td><td>" + cararr[i].carmodel 
    + "</td><td>" + cararr[i].carregistration 
    + "</td><td>" + cararr[i].carcolor 
    + "</td></tr>";
}
document.getElementById("infotable").getElementsByTagName("tbody")[0].innerHTML = rowsHtml;

// removing data from inputfields
  document.getElementById("CarMake").value = "";
  document.getElementById("Carmodel").value = "";
  document.getElementById("RegistrationNumber").value = "";
  document.getElementById("CarColor").value = "";
}
