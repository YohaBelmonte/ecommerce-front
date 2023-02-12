import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const PaymentForms = () => {

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus : e.target.name
        })
    }

    // const processPayment = () => {
    //     console.log("number => ", state.number)
    //     console.log("name => ", state.name)
    //     console.log("expiry => ", state.expiry)
    //     console.log("cvc => ", state.cvc)
    //     console.log(JSON.stringify(state))
    // }

    return (
        <div className="card w-100 h-100">
            <div className="card-body">

                <Cards 
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus}
                /> 
                <form className=' w-75 '>
                <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            maxLength="15"
                            className="form-control w-100"
                            placeholder='Ingresar email'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Numero de la tarjeta</label>
                        <input
                            type="text"
                            name="number"
                            id="number"
                            maxLength="16"
                            className="form-control w-100 "
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                            placeholder="Ingresar el numero de la tarjeta"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            maxLength="30"
                            className="form-control w-100"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                            placeholder="Ingresar Nombre completo"
                        />
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="expiry">Fecha de expiración</label>
                            <input
                                type="text"
                                name="expiry"
                                id="expiry"
                                maxLength="4"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                                placeholder="Ingresar fecha de expiracion"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="cvc">CVC</label>
                            <input
                                type="text"
                                name="cvc"
                                id="cvc"
                                maxLength="4"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                                placeholder="Ingresar CVC"
                            />
                        </div>
                    </div>

                    <button type="button" className="btn btn-dark btn-block btn-lg w-100">Pagar</button>
                </form>
            </div>
        </div>
    )
}

export default PaymentForms