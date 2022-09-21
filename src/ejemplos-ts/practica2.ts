// Clases

class opercacion{
    a:number;
    b:number;
    bb:number;
    c:number;
    operacion:number;
    operacion1:number;
    operacion11:number;
    operacionx1:number;
    operacionx2:number;
    operacionTotalx1:number;
    operacionTotalx2:number;
    // sexo:string;
    
    imprimir():void{
        
        console.log(`a ${this.a} \nb ${this.b}\nbb ${this.c}\nc ${this.bb}\nopercacion -4: ${this.operacion}\noperacion dentro raiz: ${this.operacion1}\nraiz cuadrada: ${this.operacion11}\nopercacion arriba x1: ${this.operacionx1}\noperacion arriba x2: ${this.operacionx2}\noperacion final x1: ${this.operacionTotalx1}\noperacion final x2: ${this.operacionTotalx2}`);
    }
}

let calcular=new opercacion();
// variables
calcular.a=6;
calcular.b=-19;
calcular.bb=calcular.b*calcular.b;
calcular.c=7;


// Operacion de -4
calcular.operacion= -((4)*(calcular.a)*(calcular.c));

// Opercacion dentro de Raiz cuadrada
calcular.operacion1= (calcular.bb)-(-calcular.operacion);

// Opercacion Raiz cuadrada
calcular.operacion11= Math.sqrt(calcular.operacion1);

// Opercacion x1
calcular.operacionx1= -calcular.b + calcular.operacion11;
calcular.operacionTotalx1=calcular.operacionx1 / (2 * calcular.a);

// Opercacion x2
calcular.operacionx2= -calcular.b - calcular.operacion11;
calcular.operacionTotalx2=calcular.operacionx2 / (2 * calcular.a);

// Impresion
calcular.imprimir();


// Math.sqrt(3.2);

