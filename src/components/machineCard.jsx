function MachineCard({machine}){


    function OnOkClicked(){
        alert("ok clicked")
    }
    function OnFavoriteClicked(){
        alert("favorite clicked")
    }
    return (
    <div className="machine-card">
        <div className="machine-infos">
            <h3>{machine.title}</h3>
        </div>
        <div className="machine-poster">
            <img src ={machine.image} alt={machine.title}/>
            <div className="machine-overlay">
                <input className="weight-input" type="number">
                </input>
                <button className="ok-btn" onClick={OnOkClicked}>
                    Ok
                </button>
                <button className="favorite-btn" onClick={OnFavoriteClicked}>
                    ❤️
                </button>
            </div>
        </div>
        
    </div>
    );
}


export default MachineCard