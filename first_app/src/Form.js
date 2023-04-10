import { useState } from "react";


function Form(props) {
    const [ username, setUsername ] = useState("");
    const [ updatedUser, setUpdatedUser ] = useState("");

    const handleUpdate = (event) => {
        setUpdatedUser(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsername(updatedUser);
        props.onNameChange(updatedUser);
        setUpdatedUser("");
    };

    return(
        <div className="Form-div">
            <form className="form-class" onSubmit={handleSubmit}>
                <label for="name">Enter name:</label>
                <input type="text" name="name" onChange={handleUpdate} value={updatedUser}/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Form;