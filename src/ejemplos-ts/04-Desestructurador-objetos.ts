// destructor de Objetos y Arrays

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:66,
    cancion:'Mañanitas',
    detalles:{
        autor:'cepillin',
        year:1978,
    }
}

// Desustructurar un objeto
const{volumen,segundo,cancion,detalles}=reproductor;
const{autor}=detalles;




console.log(`El volumen actual es: ${volumen}`);
console.log(`El segundo actual es: ${segundo}`);
console.log(`El cancion actual es: ${cancion}`);
console.log(`El autor es: ${autor}`);

/* 
// estructura normar haciendo referencia a la interface

console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`El segundo actual es: ${reproductor.segundo}`);
console.log(`El cancion actual es: ${reproductor.cancion}`);
console.log(`El autor es: ${reproductor.detalles.autor}`); */

const dbz:string[]=['goku','vegeta','trunks','yamcha'];


/* 
// Construccion de manera normal
console.log(`personaje 1: ${dbz[0]}`);
console.log(`personaje 2: ${dbz[1]}`);
console.log(`personaje 3: ${dbz[2]}`);
console.log(`personaje 4: ${dbz[3]}`);
 */

const[a,b,c,d]=dbz;
console.log(`personaje 1: ${a}`);
console.log(`personaje 2: ${b}`);
console.log(`personaje 3: ${c}`);
console.log(`personaje 4: ${d}`);