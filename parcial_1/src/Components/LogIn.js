import React, { useState } from 'react';
import './LogIn.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LogIn = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            newErrors.email = t('EmailRequired');
        } else if (!emailRegex.test(email)) {
            newErrors.email = t('InvalidEmail');
        }

        if (!password) {
            newErrors.password = t('PasswordRequired');
        } else if (password.length < 8) {
            newErrors.password = t('PasswordLength');
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            setSubmitted(true);
            console.log('Formulario enviado con éxito');
            navigate('/home');
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="edit-profile-container">
            <div className="card p-4">
                <div className="text-left mb-4">
                    <h1>{t('Login')}</h1>  { }
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">{t('Email')}</label>
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
                        <label className="form-label">{t('Password')}</label>
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
                            {t('Submit')}
                        </button>
                    </div>
                </form>
                {submitted && <div className="text-success text-center mt-3">{t('LoginSuccess')}</div>}
            </div>
        </div>
    );
};

export default LogIn;
