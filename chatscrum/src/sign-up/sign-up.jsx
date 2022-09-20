
import React from 'react';
import './sign-up.css';
import content from '../static/index';
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";



const schema = yup.object().shape(
    {
        fullname: yup.string().required().min(6),
        email: yup.string().required("please enter a valid email").matches("@gmail"),
        password: yup.string().required("please enter password").matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
            "Must Contian 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
    }
);

const SignUp = () => {

    // const { register, handleSubmit, form: errors } = useForm();
    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        {
            resolver: yupResolver(schema)
        }
    ); 

    const onSubmit = (data) => console.log(data)

    return (
        <div className='sign-up'>
            <h1>Don't have an account?</h1>
            <h3>sign up here!</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                {content.inputs.map((input,key) => {
                    return (
                        <div key={key}>
                            <label htmlFor={input.name}>{input.label} </label>
                            <br />
                            <input type={input.type} name={input.name} {...register(input.name)} />
                            <br />
                            <span className="message">{errors[input.name]?.message}</span>
                        </div>
                    )
                })}

                <label for="options">User Type</label>
                <select id="options">
                    <option value="Developer">Developer</option>
                    <option value="Owner">Owner</option>
                </select>

                <button>Sign Up</button>
            </form>

            

            <p>Have an account? <Link to="/signin">Sign in</Link></p>
            <p><Link to="/">Back To Home</Link></p>
        </div>
    )
}


export default SignUp;