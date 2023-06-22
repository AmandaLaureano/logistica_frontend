'use client';
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { IoLogInOutline } from 'react-icons/io5'
import { useState } from 'react';
import { version } from '../../../../package.json';

export default function Login  () {
    const [showPassword, setshowPassword] = useState(false)
    const [password, setPassword] = useState("")
    
    const switchIconEye = () => {
        setshowPassword(!showPassword)
    }

    return (
        <main className="containerLogin flex h-screen w-screen bg-black-light justify-center place-content-center" >
            <section className="loginSection place-self-center bg-black drop-shadow-3xl w-[500px] h-[650px] rounded-sm">
                <div className="containerWrapper h-full pt-12 p-5">
                    <div className="containerAppTitle text-center">
                        <h1 className="inputLoginTitle text-white text-4xl font-semibold tracking-wide">Pormade Logística</h1>
                    </div>
                    <div className="containerAppSubtitle text-center pt-4 px-12">
                        <h2 className="text-white text-lg font-normal">Faça seu login na plataforma</h2>
                    </div>
                    <div className="containerEmail flex pt-20 mx-14 border-b border-green-simple">
                        <AiOutlineMail className='flex mb-1 mr-2 self-end w-6 h-6 fill-white stroke-white'></AiOutlineMail>
                        <input className="loginEmail flex self-center tracking-wide h-fit outline-0 bg-transparent text-white cursor-default w-full text-sm" type="text" placeholder="E-mail" />
                    </div>
                    <div className="containerPassword flex pt-12 mx-14 justify-end border-b border-green-simple">
                        <AiOutlineLock className='flex mb-1 mr-1 self-end w-8 h-7 fill-white stroke-white'></AiOutlineLock>
                        <input id='password' value={password} className="LoginPassword flex self-center tracking-wide h-fit outline-0 bg-transparent text-white cursor-default placeholder:text-sm w-full text-sm" type={showPassword ? 'text' : 'password'} placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                        <button className='' onClick={switchIconEye}>
                            {showPassword ? (
                                <VscEye  className='iconEye cursor-pointer flex self-end w-7 h-6 fill-white stroke-white hover:scale-[110%] transition duration-150'></VscEye>
                            ):(
                                <VscEyeClosed className='iconEye cursor-pointer flex self-end w-7 h-6 fill-white stroke-white hover:scale-[110%] transition duration-150'></VscEyeClosed>
                            )}
                        </button>
                    </div>
                    <div className='containerCheckbox flex mx-14 pt-5'>
                        <input className='w-5 h-4 mx-1' id="checkbox" type="checkbox" />
                        <label id='checkbox' className='text-white text-sm tracking-wide'>Manter conectado</label>
                    </div>
                    <div className='containerLoginButton flex justify-center pt-14'>
                        <button className='loginButton flex items-stretch justify-center shadow-sm shadow-green-simple bg-black h-10 w-3/4 rounded-md hover:scale-95 transition-all duration-200'>
                            <div className='flex items-center mx-1'>
                                <span className='text-lg text-white-simple font-regular tracking-wide'>Login</span>
                            </div>
                            <div className='flex items-center'>
                                <IoLogInOutline className='stroke-white w-5 h-5'/>
                            </div>
                        </button>
                    </div>
                    <div className='containerSupport flex justify-center items-end w-full pb-5 h-32'>
                        <button className='buttonGreenHover text-lg text-green-simple tracking-widest'>Suporte</button>
                    </div>
                    <div className='containerVersion flex justify-center w-full'>
                        <span className='text-sm text-green-simple tracking-widest'>Version {version}</span>
                    </div>
                </div>
            </section>
        </main>  
    );
}
