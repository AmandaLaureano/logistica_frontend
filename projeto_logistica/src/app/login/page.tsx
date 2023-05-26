'use client';
import { VscEye } from 'react-icons/vsc'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { useState } from 'react';
import './login.css'

export default function Login() {

    const [password, setPassword] = useState('');

    function alteraVisibilidade(event:any){
        event.preventDefault()
        var input = document.querySelector("#password")

        if (input?.getAttribute('type') === 'password') {
           input.setAttribute("type", "text") 
        }else{
            input?.setAttribute("type", "password")
        }
    }

    return (
        <main className="containerLogin flex h-screen w-screen bg-black-light justify-center place-content-center" >
            <section className="sessaoLogin place-self-center bg-black drop-shadow-3xl w-[600px] h-[650px] rounded-md">
                <div className="containerWrapper h-full px-10 pt-14">
                    <div className="containerTituloApp text-center">
                        <h1 className="text-white text-5xl font-semibold drop-shadow-2xl tracking-wide">NOME DO APP</h1>
                    </div>
                    <div className="containerSubtituloApp text-center pt-4 px-12">
                        <h2 className="text-white text-lg font-normal">FAÇA SEU LOGIN NA PLATAFORMA</h2>
                    </div>
                    <div className="containerEmail flex pt-16 mx-14 justify-center border-b-2 border-white">
                        <AiOutlineMail className='flex mx-2 self-center w-8 h-8 fill-white stroke-white'></AiOutlineMail>
                        <input className="inputsLogin h-12 outline-0 bg-transparent text-white cursor-default placeholder:text-xl placeholder:font-medium w-full text-xl" type="text" placeholder="E-mail"/>
                    </div>
                    <div className="containerSenha flex pt-12 mx-14 justify-center border-b-2 border-white">
                        <AiOutlineLock className='flex mx-2 self-center w-9 h-9 fill-white stroke-white'></AiOutlineLock>
                        <input id='password' value={password} className="inputsLogin h-12 outline-0 bg-transparent text-white cursor-default placeholder:text-xl placeholder:font-medium w-full text-xl" type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                        <VscEye onClick={alteraVisibilidade} className='iconEye flex self-end w-8 h-8 fill-white stroke-white'></VscEye>
                    </div>
                    <div className='containerCheckbox flex mx-14 pt-5'>
                        <input className='w-5 h-5 mx-3' id="checkbox" type="checkbox"/>
                        <label id='checkbox' className='text-white'>Manter conectado</label>
                    </div>
                    <div className='containerBotaoLogin drop-shadow-2xl flex justify-center pt-14'>
                        <button className='botaoLogin bg-black-light h-12 w-[400px] text-2xl font-medium text-white-normal rounded-md'>LOGIN</button>
                    </div>
                    <div className='containerVersao grid grid-rows-1 justify-center pt-10'>
                        <span className='text-gray tracking-widest'>Version 0.0.1</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
  