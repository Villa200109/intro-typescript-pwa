// Desestructurador de funciones

export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:'sony erickson',
    precio:1350
}

const tablet:Producto={
    desc:'Ipad Air',
    precio:2500
}

function calcularIVA(productos:Producto[]):number{
    let total=0;

    /* for (let i = 0; i < 2; i++) {
        total+=productos[i].precio;
        
    } */
    
    productos.forEach((producto) => {
        total+=producto.precio;
    });
    return total*0.16;
}

const articulos1=[telefono,tablet];

const iva1=calcularIVA(articulos1);

console.log(`IVA ${iva1}`);

export function calcularIVA2(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio}) => {
        total+=precio;
    });
    return [total,total*0.16];
}

const articulos2=[telefono,tablet];

const [total,iva]=calcularIVA2(articulos2);

console.log(`Total: ${total}`);
console.log(`IVA: ${iva}`);