class Machine {

    /**
     * @param {string} title
     * @param {string} image
     * @param {string} alt
     * @param {number} [poidsMax]
     */
    constructor( title, image, alt, poidsMax = 0 ) {
        this.title = title
        this.image = image
        this.alt = alt
        this.poidsMax = poidsMax
        
    }

}

export default Machine
