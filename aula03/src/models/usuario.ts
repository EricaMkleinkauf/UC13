export class usuario{
    constructor(public id: number,  public nome: string, public email: string) {}
}


export const usuarios: usuario[] = []; // Simulando um "banco de dados" temporário