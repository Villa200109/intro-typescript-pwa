// Funciones
// void no recibe nada
function sumar(a,b):void{
    console.log(a+b);
}

const resultado=sumar('juan ','luis');
// sumar(12,12); 
console.log(resultado)

function sumar2(n1:number,n2:number):number{
    return n1+n2;
}

console.log(sumar2(12,12))

// function multiplicar(n1:number, otronumero?:number, base:number):number{            el simbolo "?" significa que es opcional
function multiplicar(n1:number, otronumero:number, base:number=3):number{
   let tem=n1*base;
    return tem;
}

console.log(multiplicar(12,12));

interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void; //
}

/* function calcular(mascota:Mascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
} */

const nuevaMascota:Mascota={
    nombre:'Miau',
    edad:10,
    mostrarEdad() {
        console.log('La edad es: ', this.edad , 'y se llama', this.nombre )
    },
}

// calcular(nuevaMascota,3)