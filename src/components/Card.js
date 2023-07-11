import react from "react";
const Card = ({taskObj, index, deleteTask}) => {

    const handleDelete = () =>{
        deleteTask(index)

    }

    return(
        <div class = "card-wrapper mr-5">
            <div class = "cad-top" style={{"background-color" : "chartreuse"}}> </div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": "#F2FAF1", "border-raduis": "10px"}}> {taskObj.Name}</span>
                <p className="mt-3">{taskObj.Description}</p>

                <div style={{"position": "absolute", "right":"20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-3" style={{"color": "#5DC250", "cursor" : "pointer"}}></i>
                    <i class = "fas fa-trash-alt" style={{"color": "#5Dc250", "cursor" : "pointer" }} onClick={handleDelete} ></i>
                


                </div>

            </div>
        </div>
    );
};

export default Card; 