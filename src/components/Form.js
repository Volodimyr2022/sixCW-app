import React from "react"


export class Form extends React.Component {

    state = {
        title: "",
    };

    onSubmit = (event) => {
        event.preventDefault();
    
        const { title } = this.state;
        const { addNewPost } = this.props;

        const newPost = {
            title, 
            id: Date.now().toString(),
        };

        addNewPost(newPost);

        this.setState({title: ""});
    };

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }; 

    render() {
    return(
        <form onSubmit={this.onSubmit}>
            <h2>Загололвок поста</h2>
            <input 
            type="text" 
            placeholder="Введите текст" 
            value={this.state.title}
            onChange={this.inputHandler}
            name="title"
            />
            <button type="submit">Создать пост</button>
        </form>
    )
    }
}