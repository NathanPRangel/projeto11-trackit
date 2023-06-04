import React, { useState } from "react";

export const LoginContext = React.createContext({});

export const LoginProvider = (props) => {
    const [usuario, setUsuario] = useState({});
    const [dias, setDias] = useState([]);
    const [hab, setHab] = useState([])
    const [qntHab,setQntHab]=useState(0)
    const [qntHabFeito,setQntHabFeito]=useState(0)
    const [hoje,setHoje]=useState([])



    
    


    return (
        <LoginContext.Provider value={{ usuario, setUsuario, dias, setDias, hab, setHab, qntHab,setQntHab,qntHabFeito,setQntHabFeito,hoje,setHoje}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => React.useContext(LoginContext)