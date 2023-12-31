import React from "react";
// import notes from "..notes"
import DeleteIcon from '@mui/icons-material/Delete';




function Note(props) {

    function handleDelete(){
        props.onDelete(props.id)
    }

    return ( 
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
            <button><DeleteIcon onClick={handleDelete}/></button>
    </div>
    );
}

export default Note;