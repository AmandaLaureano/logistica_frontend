'use client';
import Image from 'next/image'
import logo from "@assets/logo-pormade.png"
import Folha from "@assets/folha.png"
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { useState } from 'react';
import Link from "next/link"

export default function Login  () {
    const [showPassword, setshowPassword] = useState(false)
    const [password, setPassword] = useState("")
    
    const switchIconEye = () => {
        setshowPassword(!showPassword)
    }

    return (
        <main className="containerLogin flex flex-col h-screen bg-black justify-center place-content-center">
            <section className="loginSection place-self-center bg-black-light shadow-md shadow-light-gray/25 w-9/12 h-9/12 rounded-lg my-12">
                <div className="containerWrapper grid grid-cols-1 xl:grid-cols-2 p-5 md:p-16 xl:p-0">
                    <div className='containerLogo hidden items-center xl:flex'>
                        <div className='containerWrapperLogo'>
                            <Image className='pb-20 xl:px-10 2xl:px-10' src={logo} alt="logo da Pormade" quality={100} />
                        </div>
                    </div>
                    <div className='containerDados xl:p-5 2xl:p-16'>
                        <div className='containerLogoFolha flex justify-center'>
                            <Image className='h-[50px] w-[60px] m-5' src={Folha} alt="logo folha" quality={100} />
                        </div>
                        <div className="containerAppTitle text-center">
                            <h1 className="inputLoginTitle text-white text-xl sm:text-2xl 2xl:text-4xl font-medium tracking-wider">Sistema de Sincronização de Transportadoras Pormade</h1>
                        </div>
                        <div className="containerAppSubtitle text-center pt-4">
                            <h2 className="text-white text-sm xl:text-lg font-medium tracking-widest">Faça seu login na plataforma</h2>
                        </div>
                        <div className='containerWrapperInputs lg:px-10 2xl:px-12 pb-5'>
                            <div className='left-3 relative -bottom-3 border border-transparent w-fit pt-5'>
                                <p className='font-medium px-2 text-sm text-white-simple rounded-md bg-green-simple tracking-widest'>Usuário</p>
                            </div>
                            <div className="containerEmail flex h-12 border-2 bg-black border-green-simple rounded-md w-full">
                                <input className="loginEmail cursor-pointer flex self-center h-fit outline-0 bg-transparent text-white w-full text-sm mx-3" type="text"/>
                            </div>
                            <div className='left-3 relative -bottom-3 border border-transparent w-fit pt-5'>
                                <p className='font-medium px-2 text-sm text-white-simple rounded-md bg-green-simple tracking-widest'>Senha</p>
                            </div>
                            <div className="containerPassword flex h-12 justify-end border-2 bg-black border-green-simple rounded-md w-full">
                                <input id='password' value={password} className="LoginPassword flex cursor-pointer px-3 self-center h-fit outline-0 bg-transparent text-white w-full text-sm" type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
                                <button className='' onClick={switchIconEye}>
                                    {showPassword ? (
                                        <ImEye className='iconEye cursor-pointer flex self-end w-5 h-5 mx-2 fill-green-simple stroke-white hover:scale-[110%] transition duration-150'/>
                                    ):(
                                        <ImEyeBlocked className='iconEye cursor-pointer flex self-end w-5 h-5 mx-2 fill-green-simple stroke-white hover:scale-[110%] transition duration-150'/>
                                    )}
                                </button>
                            </div>
                            <div className='containerCheckbox flex pt-3'>
                                <input className='w-5 h-4 mx-1' id="checkbox" type="checkbox" />
                                <label id='checkbox' className='text-white-simple font-medium text-sm tracking-wider'>Manter-me conectado</label>
                            </div>
                            <div className='containerLoginButton flex justify-center pt-10'>
                                <button className='loginButton flex items-stretch justify-center shadow-sm shadow-green-simple bg-black h-10 w-full rounded-md hover:scale-95 transition-all duration-200'>
                                    <div className='flex items-center mx-1'>
                                        <span className='text-md text-white-simple font-medium tracking-widest'>LOGIN</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='containerSupport flex justify-center w-full pb-5'>
                            <Link href="/suporte">
                                <button className='buttonGreenHover text-lg text-green-simple tracking-widest'>Suporte</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>  
    );
}
