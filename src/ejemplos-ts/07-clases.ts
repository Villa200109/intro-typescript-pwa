// Clases

class Persona{
    nombre:string;
    edad:number;
    // sexo:string;
    
    imprimir():void{
        console.log(`El nombre es: ${this.nombre} \nLa edad es: ${this.edad}`);
    }
}

let persona1=new Persona();
persona1.nombre='pancho';
persona1.edad=22;
persona1.imprimir();


// Math.sqrt(3.2);

