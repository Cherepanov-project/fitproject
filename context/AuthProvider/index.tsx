import {useState, useEffect, useCallback, useMemo} from "react";
import Cookies from 'js-cookie';
import {useQuery} from "react-query";
import api from "../../services";
import {AuthContext} from "../AuthContext";


const AuthProvider = (props) => {
    const [isLoaded, setLoaded] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setTokenData] = useState(null);

    const setToken = useCallback((tokenData)=>{
        setTokenData(tokenData);

        if (tokenData) {
            Cookies.set('auth-token', tokenData);
        }else {
            Cookies.remove('auth-token');
        }
    },[])

    const logOut = useCallback(()=>{
        setUser(null);
        setToken(null);
    },[setToken])

    const loadData = useCallback(async () => {
        const tokenData = Cookies.get('auth-token');
        console.log(tokenData);
        setTokenData(tokenData);

        const query = useQuery('get-user', async () => {
                const request = await api.auth.getUser();
                return request;
            },{
            onSettled: () => setLoaded(true),
            onError:()=>setToken(null),
            onSuccess:(data)=>setUser(data),
            }
        );
    }, [setToken])

    useEffect(() => {
        loadData();
    }, [loadData]);

    const contextValue = useMemo(
        ()=>({
            isLoaded,user,token,setUser,setToken,logOut,
        }),[isLoaded,user,token,setUser,setToken,logOut]
    )

    // @ts-ignore
    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
