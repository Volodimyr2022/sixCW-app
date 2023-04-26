import React from "react";
import { useFormik } from "formik";

export const Formic = () => {

    const {handleSubmit, handleChange, values} = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        onSubmit: (login, password) => {
            alert(`login: ${login} password: ${password}`)
        }
    })

    return (
      
            <form onSubmit={handleSubmit}>
                <input 
                name="login"
                placeholder="Your login" 
                value={values.login} 
                onChange={handleChange} 
                />
                <input 
                name="password" 
                placeholder="Your password" 
                value={values.password} 
                onChange={handleChange} 
                />
                <button type="submit">Submit</button>
            </form>
       
    )
}