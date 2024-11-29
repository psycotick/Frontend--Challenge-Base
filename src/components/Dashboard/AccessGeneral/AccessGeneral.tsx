"use client";

import { Button } from "@/components/ui/button";
import { AccessGeneralProps } from "./AccessGeneral.types";
import Image from 'next/image';
import { useState } from 'react';
import { FormSignIn } from "./SignIn/FormSignIn";
import { FormSignUp } from "./SignUp/FormSignUp";

export function AccessGeneral(props: AccessGeneralProps & { setIsLoggedIn: (isLoggedIn: boolean) => void }) {
    const { setOpenDialog, setIsLoggedIn } = props;
    const [selectedButton, setSelectedButton] = useState('signup');

    return (
        <div className="flex flex-col items-center justify-center w-full h-full text-center">
            <br />
            <div className="bg-transparent rounded-2xl shadow-2xl flex w-full h-full mx-auto">
                <div className="w-3/5 p-10 h-full flex flex-col justify-center">
                    <div className="flex justify-center mb-8">
                        <Button
                            className={`px-6 py-2 rounded-md shadow-md ${selectedButton === 'signup' ? 'bg-yellow-500 text-white' : 'bg-gray-500 text-black'}`}
                            onClick={() => setSelectedButton('signup')}
                        >
                            Sign Up
                        </Button>
                        <Button
                            className={`px-6 py-2 rounded-md shadow-md mr-1 ${selectedButton === 'login' ? 'bg-yellow-500 text-white' : 'bg-gray-500 text-black'}`}
                            onClick={() => setSelectedButton('login')}
                        >
                            Log In
                        </Button>
                    </div>
                    {selectedButton === 'signup' && (
                        <FormSignUp />
                    )}
                    {selectedButton === 'login' && (
                        <FormSignIn setOpenDialog={setOpenDialog} setIsLoggedIn={setIsLoggedIn} />
                    )}
                    <p className="mt-4">For any questions, reach out to <a href="mailto:support@Quickbetdmovies.com" className="text-blue-500">support@Quickbetdmovies.com</a></p>
                </div>
                <div className="w-2/5 bg-black text-white rounded-tr-2xl rounded-br-2xl py-24 px-12 flex flex-col items-center justify-center">
                    {selectedButton === 'signup' && (
                        <>
                            <h1>Welcome to Quickbet Movies!</h1>
                            <p>🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!</p>
                            <Image src='/02.svg' alt='Human' layout='intrinsic' width={300} height={300} />
                        </>
                    )}
                    {selectedButton === 'login' && (
                        <>
                            <h1>Welcome back to Quickbet Movies!</h1>
                            <p>🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!</p>
                            <Image src='/yellow-hoodie-character.svg' alt='Human' layout='intrinsic' width={300} height={300} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
