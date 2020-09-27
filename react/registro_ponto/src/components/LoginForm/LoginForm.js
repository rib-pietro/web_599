import './LoginForm.css';
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

function LoginForm(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);

    const dispatch = useDispatch();

    const changeName = () => {
        dispatch({
            type: 'SET_NAME',
            payload: name
        });
    };

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }

    return (
        <>
            <div>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={handleEmailInput}
                    />
            </div>
            <div>
                <input 
                    type="password" 
                    placeholder="Senha" 
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    />
                {/* {emailError && (<p>Insira um e-mail válido</p>)} */}
            </div>
            <button onClick={changeName}>
                Enviar
            </button>
        </>
    )

}

export default LoginForm;