class animal {

    constructor(especie) {
        this.especie = especie
    }

    falar(){
        console.log(this.especie + ' ')
    }

    comer(){
        console.log(this.especie + ' ')
    }

    dormir(){
        console.log(this.especie + ' ')
    }
}



class Cachorro extends animal {
    falar(){
        console.log(this.especie + ' au au au')
    }
}
const cachorro = new Cachorro('cachorro')

cachorro.falar()
cachorro.comer()
cachorro.dormir()