import React, { useState } from "react";

const Ordinary = () => {

    const[login, setLogin] = useState("");
    const[password, setPassword] = useState("");

    const handleChangeLogin = (event) => {
        setLogin(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(!login.length || !password.length) {
            return;
        } else {

            setLogin("");
            setPassword("");

            alert(`Your login ${login} Your password ${password}`)
        }
    };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="login" placeholder="Your login" value={login} onChange={handleChangeLogin}/>
                <input name="password" placeholder="Your password" value={password} onChange={handleChangePassword} />
                <button type="submit">Submit</button>
            </form>
        </div>
    ) 
}

export default Ordinary