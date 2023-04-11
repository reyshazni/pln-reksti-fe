import plnLogo from '../assets/images/logo_pln_big.png'
import Image from "next/image";
import { app, auth, provider } from "../util/firebase"
import { signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
    const [value,setValue] = useState<string | null>('')
    const route = useRouter()

    const googleSignIn = () => {
        signInWithPopup(auth,provider).then((data)=>{
            if (data.user.email) {
                setValue(data.user.email)
                localStorage.setItem("email",data.user.email)
                route.push("/")
            }
        })

    }

    useEffect(() => {
        if (localStorage.getItem('email')) {
            setValue(localStorage.getItem('email'))
        }
    })

    return (
        <div className="bg-[#F8FAFB] min-h-screen flex items-center justify-center font-alata">
            <div className="bg-white flex flex-col items-center p-10 gap-5 rounded-xl shadow-md">
                <p className="text-black text-2xl whitespace-nowrap font-bold">Maintenance System</p>
                <Image width={100} src={plnLogo} alt="Logo PLN" />
                    
                <button onClick={googleSignIn} className="bg-[#02adee] text-black text-lg whitespace-nowrap font-bold flex p-5 items-center gap-5 rounded-xl shadow-xl">
                    <i className="fa-brands fa-google text-white"></i>
                    <p className='text-white text-md'>Sign In with Google</p>
                </button>
                

            </div>
        </div>
    )
}

export default Login