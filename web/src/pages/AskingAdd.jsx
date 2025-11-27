
import "../css/global.css"
import "../css/AskingAdd.css"
import { useNavigate, Navigate } from "react-router-dom";

function AskingAdd (){
    const navigate = useNavigate()

    return (<div className="boutons-centre">
        <button onClick={(e) =>navigate("/add")}>Ajouter une autre machine</button>
        <button onClick={(e) =>navigate("/")}>Retourner au menu principale</button>
    </div>)
}
export default AskingAdd;