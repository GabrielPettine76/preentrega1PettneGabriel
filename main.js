function calcularCredito(cuotas,monto, tasaInteres){
    let interesMensual = tasaInteres/12;
    let interes = monto *(interesMensual*cuotas/100);
    let montoTotal= monto+interes;
    let valorCuota= montoTotal/cuotas;

    return montoTotal;
    
}

const calcularCuota = (montoTotal, cuotas)=>{
    let cuota = montoTotal/cuotas;
    return cuota;

}

const validarCuota =(cuota)=>{
    if(cuota>0 && cuota<=60){
        return true;
    }
    else {
        return false;
    }
}

const validarNumero =(numero)=>{
    if(isNaN(numero)){
        return false;
    }else if(numero<=0){
        return false;
    }
    else{
        return true;
    }
}
function validarNombre(nombre){
    if(nombre.length>=3 || /^\s+$/.test(nombre) ){
        return true;
    }
    else{
        return false;
    }
}
function ingresarCantidad(){
    let cantidad;
    do{
        cantidad = parseInt(prompt('Ingrese la Cantidad de clientes'));
        if(validarNumero(cantidad)==false){
            alert('ingrese la cantidad correcta.');
        }
        else{
            return cantidad;
        }
    }while(validarNumero(cantidad)==false)
    
    
}
function ingresarCuotas(){
    let cuotas;
    do{
        cuotas = parseInt(prompt('ingrese la cantidad de cuotas:'));
        if(validarCuota(cuotas)==false){
        alert('Las cuotas deben ir entre 1 y 60.');
        }
        else{
            return cuotas;
        }
        
    }while(validarCuota(cuotas)==false)
}

function ingresarMonto(){
    let monto;
    do{
        monto = parseInt(prompt('ingrese el monto del credito'));
        if(validarNumero(monto)==true){
            return monto;
        }else{
            alert('Debe ingresar un monto correcto');
        }
        
    }while(validarNumero(monto)==false)
}
const ingresarTasaInteres=()=>{
    let tasaInteres;
    do{
        tasaInteres = parseInt(prompt('ingrese la tasa de interes'));
        if(validarNumero(tasaInteres)==true){
            return tasaInteres;
        }
        else{
            alert('Ingrese la tasa de interes correcta.');
        }
    }while(validarNumero(tasaInteres)==false)
}
const ingresarNombre=()=>{
    let nombre;
    do{
        nombre = prompt('ingrese El nombre del cliente:');
        if(validarNombre(nombre)==false){
            alert('Ingrese un nombre correcto');
        }else{
            return nombre;
        }
    }while(validarNombre(nombre)==false)
}

let cantidadClientes = ingresarCantidad();
for(i=0;i<cantidadClientes;i++){

    let nombre=ingresarNombre();
    
    let monto =ingresarMonto();
    let cuotas = ingresarCuotas();
    let tasaInteres = ingresarTasaInteres();
    
    alert('El monto total del credito del cliente '+ nombre +' es: ' +calcularCredito(cuotas,monto,tasaInteres)+'. ' 
    + ' El valor de la cuota es '+calcularCuota(calcularCredito(cuotas,monto,tasaInteres),cuotas) );
    
    }