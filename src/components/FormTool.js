import React from "react"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createPost } from "../redux/reducers/postsSlice";


export const FormTool = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        title: "",
    })

    const onSubmit = (event) => {
        event.preventDefault();
    
        const { title } = input

        if(!title.trim()) {
            return
        }
        
        const newPost = {
            title, 
            id: Date.now().toString(),
        };

        dispatch(createPost(newPost))

        setInput({title: ""});
    };

    

    const inputHandler = (event) => {
        setInput({
            [event.target.name]: event.target.value 
        })
    }; 

    return(
        <form onSubmit={onSubmit}>
            <h2>Загололвок поста</h2>
            <input 
            type="text" 
            placeholder="Введите текст" 
            value={input.title}
            onChange={inputHandler}
            name="title"
            />
            <button type="submit">Создать пост</button>
        </form>
    )
}

