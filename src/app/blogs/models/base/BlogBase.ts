export class BlogBase{
    idBlog:number;
    celula:string;
    fechaCreacion:Date;
    nombreIglesia:string;
    tema:string;
    referenciaBiblica:string;

    constructor(){
        this.idBlog = 0;
        this.celula = "";
        this.fechaCreacion = new Date();
        this.nombreIglesia = "";
        this.tema = "";
        this.referenciaBiblica = "";
    }
}