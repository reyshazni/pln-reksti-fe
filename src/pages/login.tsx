import plnLogo from '../assets/images/logo_pln.png'
import Image from "next/image";
import { app, auth, provider } from "../util/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react'

const Login = () => {
    const [value,setValue] = useState<string | null>('')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const route = useRouter()
    const toast = useToast()

    const googleSignIn = () => {
        signInWithPopup(auth,provider).then((data)=>{
            if (data.user.email) {
                setValue(data.user.email)
                localStorage.setItem("email",data.user.email)
                route.push("/")
            }
        })
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            toast({
                title: 'Login success',
                status: 'success',
                duration: 2000,
                isClosable: false,
              })
            route.push("/")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            toast({
                title: 'Incorrect email or password',
                description: "Please enter the right credentials",
                status: 'error',
                duration: 2000,
                isClosable: false,
              })
        });
    }

    useEffect(() => {
        if (localStorage.getItem('email')) {
            setValue(localStorage.getItem('email'))
        }
    })

    return (
        <div className="bg-[#F8FAFB] min-h-screen flex items-center justify-center font-alata">
            <div className="bg-white flex flex-col items-center p-[35px] gap-10 rounded-xl shadow-md w-[300px]">
                <div className="flex items-center gap-2.5">
                    <Image src={plnLogo} alt="Logo PLN" />
                    <p className="text-black text-md whitespace-nowrap">Maintenance System</p>
                </div>
                <div className='w-full'>
                    <p className='text-sm'>Email</p>
                    <input className='bg-[#F7F9FA] w-full mb-[16px]' type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <p className='text-sm'>Password</p>
                    <input className='bg-[#F7F9FA] w-full' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <button className='bg-[#0561FC] px-[30px] pt-[5px] pb-[10px] rounded-md shadow-xl' onClick={handleLogin}>
                    <p className='text-white'>Login</p>
                </button>
                    
                {/* <button onClick={googleSignIn} className="bg-[#0561FC] text-black text-lg whitespace-nowrap font-bold flex p-5 items-center gap-5 rounded-xl shadow-xl">
                    <i className="fa-brands fa-google text-white"></i>
                    <p className='text-white text-md'>Sign In with Google</p>
                </button> */}
                

            </div>
        </div>
    )
}

export default Login