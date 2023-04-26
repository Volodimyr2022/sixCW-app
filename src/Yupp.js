import { useFormik } from "formik"
import * as Yup from "yup"


export const Yupp = () => {

    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = 
    useFormik({
       initialValues: {
        login: "",
        password: "",
       },
       validationSchema: Yup.object({
        login : Yup.string().max(10 , "Login must be shorted then 10 characters").required(),
        password: Yup.string().min(6, "Password should be longer then 6 characters").required(),
       }),
       onSubmit: ({ login, password }) => {
        alert(`login: ${login} password: ${password}`)
       } 
    })
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                name="login" 
                placeholder="Your login" 
                value={values.login}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {touched.login && errors.login ? <div>{errors.login}</div> : null}
                <input
                name="password"
                type="password"
                placeholder="Your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {touched.password && errors.password ? <div>{errors.password}</div> : null}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}