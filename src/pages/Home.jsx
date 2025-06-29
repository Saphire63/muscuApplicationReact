import MachineCard from "../components/MachineCard"

import "../css/global.css"
import "../css/home.css"

import { useState } from "react"

function Home(){
    const [searchQuery, setSearchQuery] = useState ("");{/* set pour changer la valeur et searchQuery qui est la valeur elle meme,
                                                             permet de notifier la vue */}
    const machines =[
        {id: 1, title: "deadlift"},
        {id: 2, title: "benchpress"},
        {id: 3, title: "squat"},
        {id: 4, title: "incline bench"},
    ]

    const handleSearch = (e) => {
        alert(searchQuery) 
        setSearchQuery("") // met ce qui est a l'intérieur a "" pour faire un clear meme en backend
    }
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
            {machines.map(machine =>(  // .map parcours toute la liste machines et vas donner l'objet machine qui est égale a machineCard ...
                <MachineCard machine={machine} key={machine.id}/>
            ))}
        </div>
    </div>
    )
}

export default Home