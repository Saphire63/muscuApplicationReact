import MachineCard from "../components/machineCard"

function Home(){
    const machines =[
        {id: 1, title: "deadlift"},
        {id: 2, title: "benchpress"},
        {id: 3, title: "squat"},
        {id: 4, title: "incline bench"},
    ]
    return( 
    <div className="Home">
        <div className="machine-list">
            {machines.map(machine =>( 
                <MachineCard machine={machine} key={machine.id}/>
            ))}
        </div>
    </div>
    )
}

export default Home