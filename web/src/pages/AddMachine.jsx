import { use, useState } from "react"
import "../css/global.css"
import Machine from "../models/Machine.js"
import "../css/addMachine.css"



function AddMachine(){
    const [title, setTitle] = useState("")
    const [poidsMax, setPoidsMax] = useState("")
    const [poidsActuel, setPoidsActuel] = useState("")
    const [message, setMessage] = useState("")
    const handleAddMachine = (e) => {
        e.preventDefault()

        const image = "noImage"
        const alt = title ? `${title} image` : "machine image"

        const nM = new Machine(
            title,
            image,
            alt,
            Number(poidsMax) || 0,
            Number(poidsActuel) || 0
        )
        // Utiliser console.log au lieu de print
        //stockage de l'info en localStorage:
        try{
            const existingMachine = JSON.parse(localStorage.getItem(title))
            if(existingMachine){
                setMessage("machine déjà existante")
            }
            else{
                localStorage.setItem(title, JSON.stringify(nM))
                setMessage("machine crée")
            }
        }
        catch(err){
            console.log('Erreur sauvegarde machine', err)
            setMessage("probleme lors de la création de machine")
        }

    }


    return (
    <div>
        <form className="AddMachine-form" onSubmit={handleAddMachine}>
            <input 
            type="text" 
            placeholder="Machine Title" 
            className="machine-title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <input
            type="text"
            placeholder="Max Weight "
            className="max-weight-input input"
            value={poidsMax}
            onChange={(e) => setPoidsMax(e.target.value)}/>
            <input
            type="text"
            placeholder="Weight Rep"
            className="mid-weight-input input"
            value={poidsActuel}
            onChange={(e) => setPoidsActuel(e.target.value)}/>
            <button type="submit" className="submit-btn">submit</button>
        </form>
        {message && <p>{message}</p>}
    </div>
    )
}

export default AddMachine