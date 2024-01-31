import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
    const [values, setValues] = useState({
        name: '',
        email:'',
        password:''
    });

    const navigate = useNavigate();

    const handleValues = (event) => {
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }

    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);        
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post("http://localhost:8081/signup", values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign up</h2>
                <form method="post" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input onChange={handleValues} type="text" placeholder="name" name="name" className="form-control rounded-0"/>
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input onChange={handleValues} type="email" placeholder="email" name="email" className="form-control rounded-0"/>
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input onChange={handleValues} type="password" placeholder="password" name="password" className="form-control rounded-0"/>
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <button type="submit" className="btn btn-success w-100 mb-3">Sign up</button>
                    <p>You are agree to terms and policies</p>
                    <Link to='/' className="btn btn-default border w-100 bg-light text-decation-none">Login</Link>
                </form>
            </div>
        </div>
    )
};