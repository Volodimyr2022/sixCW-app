import { useForm } from 'react-hook-form'
import * as Yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
    login: Yup.string().required("Поле обязательно для заполнения"),
    password: Yup.string().required("Поле обязательно для заполнения"),
})

export const Rhf = () => {
    const{
        register,
        handleSubmit,
        formState: {errors},
        } = useForm({resolver: yupResolver(schema)})

    const onSubmit = ({login, password}) => {
        alert(`Login: ${login}, Password: ${password}`)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("login")} />
        {errors.login && <div>{errors.login?.message}</div>}
        <input type='text' {...register("password")} />
        {errors.password && <div>{errors.password?.message}</div>}
        <button type='submit'>Log in</button>
        </form>
    )
}