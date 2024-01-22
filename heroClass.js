class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    atack(){
        let ataque
        if (this.type === "mago"){
            ataque = "magia"
        }
        else if (this.type === "guerreiro"){
            ataque = "espada"
        }
        else if (this.type === "monge"){
            ataque = "artes marciais"
        }
        else if (this.type === "ninja"){
            ataque = "shuriken"
        }
        
        console.log(`O ${this.type} ${this.name} atacou usando ${ataque}`)
    }
}

const mageHero = new hero("Merlin", 200, "mago")
const warriorHero = new hero("Arthur", 42, "guerreiro")
const monkHero = new hero("Tranquilus", 25, "monge")
const ninjaHero = new hero("Sekiro", 30, "ninja")

mageHero.atack()
warriorHero.atack()
monkHero.atack()
ninjaHero.atack()