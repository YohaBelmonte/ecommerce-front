import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation} from 'react-router-dom';

const ResetPassword = (props) => {
    const history = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword,] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const userPassword = {
            password: e.target.password.value
        }

        setIsLoading(true);
        await axios.put(process.env.REACT_APP_API_URL + '/resetpassword/' + props.match.params.id + '/' + props.match.params.tokenresetpassword, userPassword, {
            where: {
                id: props.match.params.id,
                tokenresetpassword: props.match.params.tokenresetpassword
            }
        })
            .then((res) => {
                setIsLoading(false)
                alert('contraseña cambiada con éxito')
                history.push('/login')
            }).catch((err) => {
                alert('Error')
            });
    }

    const checkValidation = (e) => {
        const confirmPass = e.target.value;
        setConfirmPassword(confirmPass)
        if (password !== confirmPass) {
            setIsError("La contraseña no coincide");
        } else {
            setIsError("");
        }
    }

    const switchShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className='main' onSubmit={handleSubmit}>
            <form className='mainContainer'>
                <h3>Nueva contraseña</h3>
                <div className='divPassword'>Contraseña:*</div>
                <div className='containerPassword'>
                    <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Introduzca su contraseña" required />
                    <button onClick={switchShowPassword}>{showPassword ? "Ocultar" : "Mostrar"}</button>
                </div>
                <div>Confirmar contraseña</div>
                <input type="password" value={confirmPassword} onChange={(e) => checkValidation(e)} name="confirmPassword" placeholder="Confirme su contraseña" required />
                <div className='confirmPassword'>{isError}</div>
                <div className='divButton'>
                    {isLoading
                    ?
                    alert('cargando')
                    :
                    <button type="submit">Enviar</button>
                    }
                    
                </div>
            </form>
        </div>
    )
}

export default ResetPassword;
