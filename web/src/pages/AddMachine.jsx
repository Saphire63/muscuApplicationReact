import { use, useState } from "react"
import "../css/global.css"
import Machine from "../models/Machine.js"
import "../css/addMachine.css"



function AddMachine(){
    const [title, setTitle] = useState("")
    const [poidsMax, setPoidsMax] = useState("")
    const [poidsActuel, setPoidsActuel] = useState("")
    const [message, setMessage] = useState("")
    const [image, setImage] = useState("")


        // Gérer l'upload de l'image
    const handleImageUpload = (event) => {
        const file = event.target.files[0]
        
        if (file) {
            // Vérifier que c'est bien une image
            // prend en parametre le type MIME ( image/jpeg, image/png, text/html)
            if (!file.type.startsWith('image/')) {
                setMessage("Veuillez sélectionner une image")
                return
            }

            // Vérifier la taille (2MB max)
            if (file.size > 2 * 1024 * 1024) {
                setMessage("L'image est trop grande (max 2MB)")
                return
            }

            const reader = new FileReader()
            
            reader.onloadend = () => {
                setImage(reader.result) // Base64 de l'image
                setMessage("")
            }
            
            reader.onerror = () => {
                setMessage("Erreur lors de la lecture de l'image")
            }
            
            reader.readAsDataURL(file)
        }
    }




    const handleAddMachine = (e) => {
        e.preventDefault()

        if(!image){
            setImage="noImage"
        }
        if(title ==""){
            setMessage("entrez un titre")
        }
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
                localStorage.setItem("Machine_"+title, JSON.stringify(nM))
                setMessage("machine crée")
            }
        }
        catch(err){
            console.log('Erreur sauvegarde machine', err)
            setMessage("probleme lors de la création de machine")
            setTitle("")
            setPoidsMax("")
            setPoidsActuel("")
            setImage("")
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
            required  
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


            <div className="image-upload-container">
                    <label htmlFor="image-upload" className="image-upload-label">
                        {image ? "Changer l'image" : "Sélectionner une image"}
                    </label>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="image-upload-input"
                        style={{ display: 'none' }}
                    />
                    
                    {image && (
                        <div className="image-preview">
                            <img 
                                src={image} 
                                alt="Aperçu" 
                                style={{ width: '200px', marginTop: '10px', borderRadius: '8px' }}
                            />
                        </div>
                    )}
                </div>
            <button type="submit" className="submit-btn">submit</button>

        </form>
        {message && <p>{message}</p>}
    </div>
    )
}

export default AddMachine