import React, { useState } from "react";
import styled from "styled-components";


const Input = () => {
    
    const [password, setPassword] = useState("")
    const [validateInput, setValidateInput] = useState({
        uppercase: false,
        lowercase: false,
        number: false,
        length: false
    })

    const secureText = (password) => {
        const regexUppercase = new RegExp(/^(?=.*[A-Z]).+$/)
        const regexLowercase = new RegExp(/^(?=.*[a-z]).+$/)
        const regexNumber = new RegExp(/^(?=.*[0-9]).+$/)
        const length = password.length >= 6

        setValidateInput({
            uppercase: regexUppercase.test(password),
            lowercase: regexLowercase.test(password),
            number: regexNumber.test(password),
            length
        })
    }

    return (
        <Container>
            <Label>Informe sua senha</Label>
            <InputPassword
                value={password}
                placeholder="Digite sua senha"
                type="password"
                onChange={(event) => {
                    setPassword(secureText(event.target.value))
                }}
            />
            <Validate>
            <li style={validateInput.length ? { color: "#3DBF94" } : {color: "black"}}>A senha deve conter no mínimo 8 caractéres</li>
            <li style={validateInput.uppercase ? { color: "#3DBF94" } : {color: "black"}}>A senha deve conter letras Maiúsculas</li>
            <li style={validateInput.lowercase ? { color: "#3DBF94" } : {color: "black"}}>A senha deve conter letras Minúsculas</li>
            <li style={validateInput.number ? { color: "#3DBF94" } : {color: "black"}}>A senha deve conter Números</li>
            </Validate>
        </Container>
    )
}

const Container = styled.div`
    width: 350px;
    height: 350px;
    display: flex;
    margin-top: 60px;
    flex-direction: column;
    align-items: center;
    background-color: #DCDCDC;
    border-radius: 16px;   
`;

const Label = styled.label`
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 20px;
`;

const InputPassword = styled.input`
    width: 200px;
    height: 30px;
`;

const Validate = styled.div`
    margin-top: 20px;
    margin-left: 5px;
`;

export default Input;