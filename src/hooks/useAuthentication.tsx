import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile } 
from "firebase/auth";

import { useEffect, useState } from "react";

export const useAuthentication = () => {
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
   // const [user, setUser] = useState<any>(null);

   const [cancelled, setCancelled] = useState<boolean>(false);

    const auth = getAuth();

    function checkIfIsCancelled(){
        if(cancelled){
            return;
        }
    }

    const createUser = async (data: any) => {
        checkIfIsCancelled();

        setLoading(true);
        
        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            
        } catch (error: any) {
            console.log(error.message);
            console.log(typeof error.message);
        }
        setLoading(false);

    };

    useEffect(() => {
        return () => setCancelled(true);    
    }, [])

    return{
        auth,
        createUser,
        error,
        loading
    }
};