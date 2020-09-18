import './LoginForm.css';
import React, { useState, useEffect } from 'react';

function LoginForm(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
        if (email !== '' && (email.indexOf('@') === -1 || email.indexOf('.') === -1)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }, [email]);

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
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    />
                {emailError && (<p>Insira um e-mail válido</p>)}
            </div>
            <button onClick={() => { props.changeName(name) }}>Enviar</button>
        </>
    )

}

export default LoginForm;
