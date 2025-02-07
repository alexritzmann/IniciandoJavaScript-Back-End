
class veiculo
{
    constructor(marca, modelo, ano, cor, carroceria)
    {
        this.marca = marca; // Propriedade da classe criada
        this.modelo = modelo; // Propriedade da classe criada
        this.ano = ano; // Propriedade da classe criada
        this.cor = cor; // Propriedade da classe criada
        this.carroceria = carroceria; // Propriedade da classe criada
    }
    mostrarVeiculo()
    {
        console.log(`Carro: ${this.marca}, ${this.modelo} (${this.carroceria}) | Ano: ${this.ano}, cor: ${this.cor}`);
    }   
    acelerar()
    {
        console.log("Acelerando....");
    }

}



class carro extends veiculo
{
    constructor(marca, modelo, ano, cor, carroceria)
    {
        super(marca, modelo, ano, cor, carroceria);
    }  
}

class moto extends veiculo
{
    constructor(marca, modelo, ano, cor, cilindradas)
    {
        super(marca, modelo, ano, cor);
        this.cilindradas = cilindradas; 
    }
    mostrarVeiculo()
    {
        // polimorfismo... sobrescreve o comportamento da classe pai
        console.log(`Moto: ${this.marca}, ${this.modelo} ${this.cilindradas}cc | Ano: ${this.ano}, cor: ${this.cor}`);
    }   
}



const novoVeiculo1 = new moto("Yamaha","R15","2025","cinza","155");
const novoVeiculo2 = new carro("Ford","Focus","2016","branco", "Sedan");
const novoVeiculo3 = new carro("Peugeot","408","2012","vermelho", "Sedan");
const novoVeiculo4 = new carro("Fiat","Palio","2008","Vermelho", "Hatch");

novoVeiculo1.mostrarVeiculo();
novoVeiculo2.mostrarVeiculo();
novoVeiculo2.acelerar();
