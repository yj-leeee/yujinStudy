import { Formik } from "formik";
import './LoginForm.css';
import { LoginSchema } from "./LoginSchema";
import errorIcon from '../img/icon-error.svg';

export default function LoginForm(){
    const fields = [
        { name: "FirstName", placeholder: "First Name"},
        { name: "LastName", placeholder: "Last Name"},
        { name: "email", placeholder: "email"},
        { name: "password", placeholder: "Password"}

    ];
    return(
        <Formik
            initialValues={{
                FirstName: '',
                LastName: '',
                email: '',
                password: ''
            }}
            onSubmit={values => console.log(values)}
            validationSchema={LoginSchema}>
            {({handleChange, handleBlur, handleSubmit, values, errors, touched

            }) => (
                <div id="loginForm">
                {fields.map(({name, placeholder}) => (
                    <div className="form" key={name}>
                        <div className="input-wrapper">
                        <input
                            className="inputs"
                            placeholder={placeholder}
                            onChange={handleChange(name)}
                            onBlur={handleBlur(name)}
                            value={values[name]}
                            style={{
                                borderColor: errors[name] && touched[name] ? "hsl(0,100%,74%)" : "lightgray",
                            }}
                        />
                        {errors[name] && touched[name] && (
                            <img src={errorIcon} alt="error icon" className="error-icon"/>
                        )}
                        </div>
                        {errors[name] && touched[name] ? (
                            <p className="error">{errors[name]}</p>
                        ) : null }
                        </div>
                ))}
                
                    <button id="submit" onClick={handleSubmit}>CLAIM YOUR FREE TRIAL</button>
                    <p id="links">By clicking the button, you are agreeing to our <a id="a_link" href="#">Terms and Services</a></p>
                </div>
            )}
        </Formik>
    )
}