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
    try{
        let empleado = empleados.find(e => e.id === id);
        if (empleado){
            return empleado; 
        }
        throw new Error(`El empleado con id:${id} no existe`);  //cuando se lanza un error el return esta implícito
    }
    catch(err){
        throw(err)
    }
}
const getSueldoById = async (id) => {
    try {
        let sueldo = sueldos.find(s => s.id === id)
        if (sueldo){
            return sueldo;
        }
        throw new Error(`El empleado con id:${id} no tiene sueldo`)
    } catch (error) {
        throw(error);
    }
}

const id = 3;
const getDatosCompletosEmpleado = async (id)=>{
    try{
        const empleado = await getEmpleadoById(id);
        const sueldo = await getSueldoById(id);
        return {
            id:id,
            nombre: empleado.nombre,
            sueldo: sueldo.sueldo
        }
    }
    catch(err){
        throw(err);
    }
}

getDatosCompletosEmpleado(id)
.then( data =>
    console.log(`El empleado con id:${data.id} es ${data.nombre}`))
.catch(err => console.log(err.message));