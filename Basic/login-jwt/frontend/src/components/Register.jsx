import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword
      });
      
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        // console.log(error.response.data.msg);
      }
    }
  };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className='columns is-centered'>
            <div className='column is-4-desktop'>
                <form className="box" onSubmit={Register}>
                    <p className='has-text-centered'>{msg}</p>
                    <div className="field mt-5">
                        <label className="label">Name</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder='username' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Email</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder='******' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Confirm Password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder='******' value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button type="submit" className="button is-success is-fullwidth">Register</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
