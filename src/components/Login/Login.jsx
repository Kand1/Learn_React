import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsContent/FormsContent";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import { Redirect } from 'react-router';
import s from "./Login.module.css"
import {Button, Popover} from "antd";



const Login = (props) => {
    const onSubmit = (formData) => {
        props.sendLogin(formData)
    }

    if (props.isAuth) {

        return <Redirect to = {"/profile"}/>
    }

    return <div>
        <ReduxLoginForm onSubmit = {onSubmit}/>
    </div>

}

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div className={s.header}>Login</div>
        <div className={s.loginForm}>
            <div className={s.leftPart}>
                <div>
                    <Field className={s.inputField} component={Input} name = {"login"} placeholder={"Login"}
                           validate = {[requiredField]}/>
                </div>
                <div >
                    <Field className={s.inputField} component={Input} name = {"password"}  placeholder={"Password"} type = {"password"}
                           validate = {[requiredField]}/>
                </div>
                <div className={s.formSummaryError}>
                    {error}
                </div>
                <div>
                    <div className={s.checkbox}><Field component={Input} name = {"rememberMe"}  type ={"checkbox"}/></div>
                    <div className={s.checkboxText}> remember me</div>
                </div>
                <div>
                    <button className={s.loginButton}>Login</button>
                </div>
            </div>
            <div className={s.text}>
                Чтобы ознакомиться с функциональностью сайта
                <br/>
                перейдите в раздел 'Info'
                <p/>
                Используйте данные логин и пароль для входа
                <p/>
                login: eternalflick@gmail.com
                <br/>
                password: 123456
            </div>
        </div>
        </form>

}

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm)

export default Login;