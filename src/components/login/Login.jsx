import LoginForm from "./loginform/LoginForm";
import {connect} from "react-redux";
import {login, loginOut} from "../../redux/authenticationsReduser";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData);
    }
    return(
        <div>
            <h1>Тут будем логиниться</h1>
            <LoginForm onSubmit={onSubmit} isAuthentications = {props.isAuthentications}
                       loginOut ={props.loginOut} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuthentications: state.authenticationsInformation.isAuthentications
    }
}

export default connect(mapStateToProps, {login, loginOut})(Login);