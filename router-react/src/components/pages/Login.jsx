import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Dummy Admin and User Account
    const admin = {
        email: "admin@gmail.com",
        password: "admin"
    };

    const user = {
        email: "user@gmail.com",
        password: "user"
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === admin.email && password === admin.password) {
            navigate('/DashBorad');
        } else if (email === user.email && password === user.password) {
            navigate('/');
        } else {
            alert('Invalid Email or Password');
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <h1 className="text-center">Login</h1>
                    <form className="my-5" onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success w-100">Submit</button> {/* เปลี่ยนเป็น btn-success */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );    
    
};

export default Login;