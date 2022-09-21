// import{ calcularIVA2, Producto} from './ejemplos-ts/05-desestructuracion-Funciones';
import{ calcularIVA2, Producto} from './05-desestructuracion-Funciones';


const carrito:Producto[]=[
    {
        desc:'telefono1',
        precio:1000
    },
    {
        desc:'telefono2',
        precio:2000
    },
    {
        desc:'telefono3',
        precio:3000
    },
];

const [total,iva]=calcularIVA2(carrito);
console.log(`total: ${total}`);
console.log(`iva: ${iva}`);