import './RegisterButton.css';
import React, {useState} from 'react';

class RegisterButton extends React.Component {

    constructor (props) {
        super();
        this.computeEntry = props.computeEntry;
        this.computeOut = props.computeOut;
        this.time = props.time;
        this.state = {
            msg: 'Bem-vindo'
        };
    }

    setMessage(newMessage) {
        this.setState({...this.state, msg: newMessage});
    }

    // componentDidMount() {
    //     alert('carregado!');
    // }

    // componentDidUpdate() {
    //     alert('atualizado!');
    // }

    // componentWillUnmount() {}

    render() {
        return (
            <>
                <p>{this.time}</p>
                <button onClick={this.computeEntry}>Entrada</button>
                <button onClick={this.computeOut}>Saída</button>
                <p>{this.state.msg}</p>
                <button onClick={() => {this.setMessage('Trocou')}}>Trocar</button>
            </>
        );
    }

}

export default RegisterButton;