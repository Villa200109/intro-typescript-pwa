
// Definicion de interface
interface Alumno{
    matricula:number;
    nombre:string;
    email:string;
}

// Objeto en ts
const alumno:Alumno={
    nombre:'juan',
    matricula:1234,
    email:"juan@hmail.com"
}

let mascotas=['perro','gato','perico'];
mascotas[1]='nice';
// mascotas.push('nuevo');
mascotas.push();

let tem:(number | string)[]=[];
tem.push('Nombre');
tem.push(324);

console.log(mascotas);