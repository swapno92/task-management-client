// import React from 'react';
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import UseAxiosSecure from "../hooks/UseAxiosSecure";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
// const axiosPublic = UseAxiosSecure()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // console.log(user)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('object', currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = { user, loading, createUser, signInUser, logOut, signInWithGoogle }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}