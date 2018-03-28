export class Producto {

    $key: string;
    nombre: string;
    categoria: string;
    locacion: string;
    precio: number;
    createdAt: Date = new Date();
    foto: File

    constructor(){    }
}

