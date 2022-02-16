import {useState, useEffect, useCallback, useMemo} from "react";
import Cookies from 'js-cookie';
import {useQuery} from "react-query";
import api from "../../services";
import {AuthContext} from "../AuthContext";


function AuthProvider(props) {
    const [isLoaded, setLoaded] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setTokenData] = useState(null);

    console.log(isLoaded, user, token);

    const setToken = useCallback((tokenData) => {
        console.log(tokenData);
        setTokenData(tokenData);

        if (tokenData) {
            Cookies.set('auth-token', tokenData);
        } else {
            Cookies.remove('auth-token');
        }
    }, [])

    const logOut = useCallback(() => {
        setUser(null);
        setToken(null);
    }, [setToken])

    const loadData = useCallback(async () => {
        const tokenData = Cookies.get('auth-token');
        console.log(tokenData);
        setTokenData(tokenData);

        try{
            if(tokenData){
                const {data} = await api.auth.getUser();
                console.log(data);
                setUser(data.user);
            }
        }catch {
            setToken(null);
        }finally {
            setLoaded(true);
        }
    }, [setToken])

    useEffect(() => {
        console.log('loadData');
        loadData();
    }, [loadData]);

    const contextValue = useMemo(
        () => ({
            isLoaded, user, token, setUser, setToken, logOut,
        }), [isLoaded, user, token, setUser, setToken, logOut]
    )

    // @ts-ignore
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
