import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged,sendEmailVerification  } from "firebase/auth";
// import initializeFirebase from "../pages/Login/Login/Firebase/firebase.init";
import firebaseInitialize from "../pages/Login/Login/Firebase/firebase.init"

// initializeFirebase()
firebaseInitialize()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

    const auth = getAuth()

    // Registation function

    const handleRegistetion = (email, password, name, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // const user = result.user
                setAuthError("")
                // update user enter name
                const newUser = { displayName: name, email }
                setUser(newUser)
                varifyEmail()
                // save database
                // saveUsers(email, name, "POST", password, navigate)
                // update name
                navigate("/")
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => { })
                    .catch((error) => { });
            })
            .catch(error => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    };
    const varifyEmail =()=>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{})
    }


    console.log('redister', user);
    // Login email password function

    const loginEmailPassword = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                navigate(location)
                console.log("login hoyse", result.user);
                setAuthError("")
            })
            .catch(error => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    };
   


    // Login by google
    const loginByGoogle = (location, navigate) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthError("")
                // saveUsers(user.email, user.displayName, "PUT", user.password, navigate, location)
                navigate(location)

            })
            .catch(error => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    };

    // observe user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    useEffect(() => {
        // let emailIs = user.email;
        // if (emailIs) {

        //     fetch(`https://blooming-sierra-49140.herokuapp.com/users/${emailIs}`)
        //         .then(res => res.json())
        //         .then(data => {
        //             setAdmin(data.admin)
        //         })
        // }

    }, [user.email])

    // SignOut function
    const handleLogout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
            })
            .catch(error => { })
            .finally(() => setIsLoading(false))
    }

    // save user in database
    // const saveUsers = (email, displayName, method, Password = "", navigate, location = "/") => {
    //     const user = { email, displayName, Password }
    //     fetch("https://blooming-sierra-49140.herokuapp.com/users", {
    //         method: method,
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.acknowledged) {
    //                 alert("Registration Successfully..!")
    //                 navigate(location)
    //             }
    //         })
    // }




    return {
        user,
        admin,
        authError,
        isLoading,
        handleRegistetion,
        loginEmailPassword,
        loginByGoogle,
        handleLogout
    }
}

export default useFirebase