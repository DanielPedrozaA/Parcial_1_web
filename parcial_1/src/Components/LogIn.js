import React, { useState } from 'react';
import './LogIn.css';
import { useNavigate } from 'react-router-dom';


const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            newErrors.email = 'El correo es requerido';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'El formato del correo es inválido';
        }

        if (!password) {
            newErrors.password = 'La contraseña es requerida';
        } else if (password.length < 8) {
            newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
        }

        return newErrors;

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            setSubmitted(true);
            console.log('Formulario enviado con éxito');
            console.log('Datos guardados:');
            navigate('/home');
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="edit-profile-container">
            <div className="card p-4">
                <div className="text-left mb-4">
                    <h1>Log In</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <div className="error-message">{errors.password}</div>}
                    </div>

                    <div className="text-left">
                        <button type="submit" className="btn btn-primary btn-block btn-lg custom-save-button">
                            Log in
                        </button>
                    </div>
                </form>
                {submitted && <div className="text-success text-center mt-3">Login exitoso</div>}
            </div>
        </div>
    );
};

export default LogIn;
