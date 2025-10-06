import MachineCard from "../components/machineCard.jsx"

import "../css/global.css"
import "../css/home.css"

import { useState } from "react"

function Home(){
    const [searchQuery, setSearchQuery] = useState ("");{/* set pour changer la valeur et searchQuery qui est la valeur elle meme,
                                                             permet de notifier la vue */}
    const [filteredMachines, setFilteredMachines] = useState([]);{/* pour le futur filtrage */}
        
    const machines =[
        {id: 1, title: "deadlift", image : "/images/sdt.jpg", alt : "soulever de terre"},
        {id: 2, title: "benchpress", image : "/images/developpecouche.jpeg", alt : " développé couché"},
        {id: 3, title: "squat", image : "/images/squat.jpg", alt : "Squat"},
        {id: 4, title: "incline bench" , image : "/images/developperincline.png", alt : "développé incliné"},
    ]
    const handleSearch = (e) => {
        e.preventDefault() // empeche le rechargement de la page
        if (searchQuery.trim() === "") {
            // si la barre de recherche est vide, on affiche tout
            setFilteredMachines(machines);
        }
        setFilteredMachines(
            machines.filter(machine =>
                machine.title.toLowerCase().startsWith(searchQuery.trim().toLocaleLowerCase())
            )
        );
        setSearchQuery("") // met ce qui est a l'intérieur a "" pour faire un clear meme en backend
    }

 
    const machinesToDisplay = filteredMachines.length > 0 
        ? filteredMachines
        : machines;
    return( 
    <div className="Home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for machine ..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/> {/* si la search bar a changée alors on change la valeur et le notifie  */}
            <button type="submit" className="submit-btn">🔍</button>
        </form>
        <div className="machine-list">
            {machinesToDisplay.map(machine =>(  // .map parcours toute la liste machines et vas donner l'objet machine qui est égale a machineCard ...
                <MachineCard machine={machine} key={machine.id}/>
            ))}
        </div>
    </div>
    )
}

export default Home