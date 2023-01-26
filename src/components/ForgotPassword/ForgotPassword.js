import React, {useState} from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const UserEmail = {
        email: e.target.email.value
    };

    setIsLoading(true);
    await axios.post(process.env.REACT_APP_API_URL + '/NewPassword', userEmail)
    .then((res) => {
setIsLoading(false)
alert('Revise su email, se ha enviado un enlace para crear una nueva contraseña')

    }). catch((err) => {
        setIsLoading(false)
        alert('Ha habido un error. Compruebe si sus datos introducidos son correctos o intentelo nuevamente más tarde.')

    });

}
return (
    <div className="main">
        <form className="mainContainer" onSubmit={handleSubmit}>
            <h3>Recuperar Cuenta</h3>
            <div>Correo electrónico</div>
            <input type="email" name="email" placeholder="Introduzca su email" required />
            <div className="divButton">
                
                <button type="submit">Enviar</button>
            

            </div>
        </form>
    </div>
)
}

export default ForgotPassword;
