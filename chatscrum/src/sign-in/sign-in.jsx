
import React from 'react';
import './sign-in.css';
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

const SignIn = () => {

    // const { register, handleSubmit, form: errors } = useForm();
    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        {
            resolver: yupResolver(schema)
        }
    ); 

    const onSubmit = (data) => console.log(data)

    return (
        <div className='sign-in'>
            <h1>CHATSCRUM</h1>
            <h2>Have an account Already</h2>
            <h3>sign in here!</h3>

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

                <div className='hidden'>
                    <label htmlFor="options">User Type</label>
                    <select id="options"  name="usertype">
                        <option value="owner">Owner</option>
                        <option value="user">User</option>
                    </select>
                </div>

              <Link to="/scrumboard"><button>Sign IN</button></Link>
            </form>

            <p> Don't have an account? <Link to="/signup">Sign up</Link></p>
            <p><Link to="/">Back To Home</Link></p>
        </div>
    )
}


export default SignIn;