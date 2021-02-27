empleados = [
    {id:1,
    nombre: 'Fernando'},
    {id:2,
    nombre: 'Patricio'},
    {id: 3,
    nombre: 'Manuel'}
];

sueldos = [
    {id:1,
    sueldo: 1500},
    {id:2,
    sueldo: 1400}
]

const getEmpleadoById = (id)=>{
    return new Promise((resolve, reject)=>{
        let empleado = empleados.find(e => e.id === id);
        if (empleado){
            resolve(empleado);
            return
        }
        reject(`El empleado con id:${id} no existe`);
    })
}
const getSueldoById = (id) => {
    return new Promise((resolve,reject) => {
        let sueldo = sueldos.find(s => s.id === id);
        if(sueldo){
            resolve(sueldo);
            return
        }
        reject(`El empleado trabaja de onda nomás`);
    })
}
const id =2;
let nombre;
getEmpleadoById(id)
.then(
    empleado => {
        nombre = empleado.nombre;
        console.log(`El empleado con id:${id} es ${empleado.nombre}`);
        return getSueldoById(id)})
.then(sueldo => console.log(`El sueldo de ${nombre} es de ${sueldo.sueldo}`))
.catch(error => console.log(error))