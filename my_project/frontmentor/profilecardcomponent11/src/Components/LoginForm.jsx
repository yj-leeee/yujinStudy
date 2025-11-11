import { Formik } from "formik";
import './LoginForm.css';
import { LoginSchema } from "./LoginSchema";
export default function LoginForm(){
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
                    <input className="inputs" placeholder="First Name"
                    onChange={handleChange('FirstName')}
                    onBlur={handleBlur('FirstName')}
                    value={values.FirstName}/>
                    {/* Display validation error for FirstName */}
                    {errors.FirstName && touched.FirstName ? (
                        <p>{errors.FirstName}</p>
                    ) : null}

                    <input className="inputs" placeholder="Last Name"
                    onChange={handleChange('LastName')}
                    onBlur={handleBlur('LastName')}
                    value={values.LastName}/>
                    {/* Display validation error for FirstName */}
                    {errors.LastName && touched.LastName ? (
                        <p>{errors.LastName}</p>
                    ) : null}

                    <input className="inputs" placeholder="email"
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}/>
                    {/* Display validation error for FirstName */}
                    {errors.email && touched.email ? (
                        <p>{errors.email}</p>
                    ) : null}

                    <input className="inputs" placeholder="password"
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}/>
                    {/* Display validation error for FirstName */}
                    {errors.password && touched.password ? (
                        <p>{errors.password}</p>
                    ) : null}

                    <button id="submit" onClick={handleSubmit}>CLAIM YOUR FREE TRIAL</button>
                </div>
            )}
        </Formik>
    )
}