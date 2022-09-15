interface AlumnoTotales{
    nombre:string;
    edad:number;
    // direccion:string;
    calle:string;
    pais:string;
    estado:string;
    mostrarDireccion:()=>void;
}

// function alumnosChido(alu:AlumnoTotales):void{}

const AlumnoUTl:AlumnoTotales={
    nombre:'mario',
    edad:23,
    // direccion:{
        calle:'veracruz',
        pais:'MX',
        estado:'GTO',
    // },
    mostrarDireccion(){
        return this.nombre+', '+ this.estado+', '+ this.pais;
    }
}
const direccion=AlumnoUTl.mostrarDireccion();
console.log(direccion);
