class Machine {
    constructor( title, image, alt, poidsMax = 0, poidsActuel = 0) {
        this.title = title
        this.image = image
        this.alt = alt
        this.poidsMax = poidsMax
        this.poidsActuel = poidsActuel
    }

  // Exemple de méthode utile
    progression() {
        if (this.poidsMax === 0) return "0%"
        return ((this.poidsActuel / this.poidsMax) * 100).toFixed(1) + "%"
    }
}

export default Machine
