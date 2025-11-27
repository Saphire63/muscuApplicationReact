import { useLocation, useParams, useNavigate } from "react-router-dom"
import "../css/global.css"
import "../css/machineInfos.css"
function MachineInfos() {
    const { title } = useParams()
    const location = useLocation()
    const machine = location.state?.machine
    const navigate = useNavigate()

    if (!machine) {
        return (
            <div className="machine-info">
                <h2>Détails de la machine {title}</h2>
                <p>Aucune donnée de machine fournie (navigué directement ou état manquant).</p>
                <button onClick={() => navigate(-1)}>Retour</button>
            </div>
        )
    }

    return (
        <div className="machine-info">
            <img src={machine.image} alt={machine.title} className="machine-info-img" />
            <div className="machine-info-details">
                <button onClick={() => navigate(-1)}>⬅️ Retour</button>
                <h2>{machine.title}</h2>

                <p>Poids max : {machine.poidsMax} kg</p>
                
                    <p>90% : {machine.poidsMax*0.9} kg</p>
                    <p>85% : {machine.poidsMax*0.85} kg</p>
                    <p>70% : {machine.poidsMax*0.7} kg</p>
                <button>Modifier</button>
            </div>
        </div>
    )
}

export default MachineInfos