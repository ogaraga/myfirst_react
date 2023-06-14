import { useState } from "react";
function Myform() {
    const [myName, setMyName] = useState("");
    const [myAge, setMyAge] = useState("");
    const handleClick = (e) => {
        e.preventDefault(e);
        alert(`${myName} is ${myAge} years old`);

    }

    return (
        <form method="post" onSubmit={handleClick} className="myform">
            <label htmlFor="Name">Full Name</label>
            <input type="text" placeholder="Enter your name" onChange={(e) => setMyName(e.target.value)} />
            <label htmlFor="Age">Your age</label>
            <input type="number" placeholder="Enter your age" onChange={(e) => setMyAge(e.target.valueAsNumber)} />
            <button id="mybtn" type="button" onClick={handleClick}>Submit</button>
        </form>
    )
}

export default Myform;