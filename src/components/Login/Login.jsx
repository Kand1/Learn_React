import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsContent/FormsContent";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import { Redirect } from 'react-router';
import s from "./Login.module.css"



const Login = (props) => {
    const onSubmit = (formData) => {
        props.sendLogin(formData)
    }

    if (props.isAuth) {

        return <Redirect to = {"/profile"}/>
    }

    return <div>
        <h2>Login</h2>
        <ReduxLoginForm onSubmit = {onSubmit}/>
    </div>

}

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name = {"login"} placeholder={"Login"}
                       validate = {[requiredField]}/>
            </div>
            <div >
                <Field component={Input} name = {"password"}  placeholder={"Password"} type = {"password"}
                       validate = {[requiredField]}/>
            </div>
            <div className={s.formSummaryError}>
                {props.error}
            </div>
            <div>
                <div className={s.checkbox}><Field component={Input} name = {"rememberMe"}  type ={"checkbox"}/></div>
                <div className={s.checkbox}> remember me</div>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

}

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm)

export default Login;