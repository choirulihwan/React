import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";

export default function Login() {
    const [values, setValues] = useState({
        email:'',
        password:''
    });

    const handleValues = (event) => {
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post("http://localhost:8081/login", values)
            .then(res => {
                if (res.data === "Success") {
                    navigate('/home');
                } else {
                    alert (res.data);
                }
                
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Log in</h2>
                <form onSubmit={handleSubmit} method="post">
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="email" name="email" className="form-control rounded-0" onChange={handleValues} />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="password" name="password" className="form-control rounded-0" onChange={handleValues} />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <button type="submit" className="btn btn-success w-100 mb-3">Log in</button>
                    <p>You are agree to terms and policies</p>
                    <Link to='/signup' className="btn btn-default border w-100 bg-light text-decation-none">Create Account</Link>
                </form>
            </div>
        </div>
    );
}