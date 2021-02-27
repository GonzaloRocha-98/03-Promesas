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

const getEmpleadoById = async (id)=>{       // cuando le asignamos la palabra async que implicitamente devuelve una promesa
        let empleado = empleados.find(e => e.id === id);
        if (empleado){
            return empleado; 
        }
        throw error;  //cuando se lanza un error el return esta implícito
}

const id = 5;
const getDatosCompletosEmpleado = async (id)=>{
    const empleado = await getEmpleadoById(id);
    console.log(`El empleado con id: ${id} es ${empleado.nombre}`);
}

getDatosCompletosEmpleado(id);