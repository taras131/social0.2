import LoginForm from "./loginform/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/authenticationsReduser";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData);
    }
    return(
        <div>
            <h1>Тут будем логиниться</h1>
           <LoginForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return { }
}

export default connect(mapStateToProps, {login})(Login);