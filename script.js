let edad = 0;
let antiguedad = 0;
let nombre = '';

nombre = prompt('Ingrese nombre: ');

if(nombre == '' || nombre==0){
    alert('Debe ingresar el nombre del empleado.');
    nombre = prompt('Ingrese nombre: ');
} else {
    edad = Number(prompt('Ingrese edad: '));
    if(edad== '' || edad==0){
        alert('Debe ingresar la edad del empleado.');
        edad = Number(prompt('Ingrese edad: '));
    }else {
        antiguedad = Number(prompt('Ingrese años de antigüedad de empleo: '));
        if(antiguedad  == '' || antiguedad  == 0){
            antiguedad = Number(prompt('Debe ingresar los años de antigüedad de empleo: '));
            antiguedad = Number(prompt('Ingrese años de antigüedad de empleo: '));
        }else{
            clasificarEmpleado();
        }
    }
}


function clasificarEmpleado(){
    if(edad>=60 && antiguedad<25){
        alert(`El empleado ${nombre} se jubilará por Edad.`);
        }else if(edad<60 && antiguedad>=25){
                    alert(`El empleado ${nombre} se jubilará por Antiguedad joven.`);
                }else if(edad>=60 && antiguedad>=25){
                 alert(`El empleado ${nombre} se jubilará por Antiguedad adulta.`);
                      }else{
                             alert(`La persona no cumple con los criterios de jubilación.`);
                             }

}   //End function                      