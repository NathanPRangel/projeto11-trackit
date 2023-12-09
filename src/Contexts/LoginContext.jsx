import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginProvider ({children}) {

    const [login, setLogin] = useState({});
    const [listadeHabitos, setListadeHabitos] = useState({});
    const [habitosdeHoje, setHabitosdeHoje] = useState([]);
    const [porcentagem, setPorcentagem] = useState(0);

    return (
        <LoginContext.Provider value={{login, setLogin, listadeHabitos, setListadeHabitos, habitosdeHoje, setHabitosdeHoje, porcentagem, setPorcentagem}}>
            {children}
        </LoginContext.Provider>
    )
}

