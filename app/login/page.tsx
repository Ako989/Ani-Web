/*El login debe tener iteractividad (inputs que cambian, un submit)
por ende debe ser un "cliente component" */

/**El login/page si necesita interactivad (inputs cambiantes, un submint)
 * asi que tiene que ser un client component.
 * 
 * el "use client" es obligatorio por que usaremos useState y manejaremos 
 * eventos del navegador
 * 
 * el estado del formulario necesitara guardar lo que el usuario escriba en email y password
 * para eso es que sirve el useState
 * 
 * el submit, cuando el usuario de click en "entrar" captura el evento, evito que la pagina
 * recargue (e.preventDefault()) y ahi es donde se llama al backend
 */

"use client";

import React, { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

    if (!email || !password) {
        setError("Completa todos los campos");
        return;
    }
    

    setError("");
    /**Aqui mas tarde se pondra el fetch/axiox a la API de autenticacion */
    console.log("Intentando con el login:", {email, password});

    }

    return(
        <main>
            <h1>Iniciar Sesion</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Correo</label>
                    <input 
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail (e.target.value)} 
                    />
                </div>

                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>

                {error && <p style={{color:"red"}}>{error}</p>}

                <button type="submit">Entrar</button>
            </form>
        </main>
    );
}