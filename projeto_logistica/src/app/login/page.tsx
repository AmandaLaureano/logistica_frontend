'use client';
import { VscEye } from 'react-icons/vsc'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { useState } from 'react';

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
        <main className="flex h-screen w-full justify-center place-content-center">
            <section className="sessaoLogin place-self-center bg-black drop-shadow-3xl w-[678px] h-[738px] rounded-xl">
                <div className="containerWrapper h-full px-12 py-10">
                    <div className="containerTituloApp text-center">
                        <h1 className="text-white text-6xl font-semibold drop-shadow-2xl">NOME DO APP</h1>
                    </div>
                    <div className="containerSubtituloApp text-center pt-8 px-12">
                        <h2 className="text-white text-3xl font-normal tracking-widest">FAÇA SEU LOGIN NA PLATAFORMA</h2>
                    </div>
                    <div className="containerEmail flex pt-16 mx-14 justify-center border-b-2 border-white">
                        <AiOutlineMail className='flex mx-2 self-center w-8 h-8 fill-white stroke-white'></AiOutlineMail>
                        <input className="inputsLogin h-12 outline-0 bg-transparent text-white cursor-default placeholder:font-medium w-full text-2xl" type="text" placeholder="E-mail"/>
                    </div>
                    <div className="containerSenha flex pt-12 mx-14 justify-center border-b-2 border-white">
                        <AiOutlineLock className='flex mx-2 self-center w-9 h-9 fill-white stroke-white'></AiOutlineLock>
                        <input id='password' value={password} className="inputsLogin h-12 outline-0 bg-transparent text-white cursor-default placeholder:font-medium w-full text-2xl" type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                        <VscEye onClick={alteraVisibilidade} className='iconEye flex self-end w-8 h-8 fill-white stroke-white'></VscEye>
                    </div>
                    <div className='containerCheckbox flex mx-14 pt-5'>
                        <input className='w-5 h-5 mx-3 border-2 border-white' id="checkbox" type="checkbox"/>
                        <span className='text-white'>Manter conectado</span>
                    </div>
                    <div className='containerBotaoLogin flex justify-center pt-28'>
                        <button className='bg-green h-16 w-[470px] text-3xl font-medium text-white-normal rounded-md'>LOGIN</button>
                    </div>
                    <div className='containerVersao flex justify-center pt-12'>
                        <span className='text-white tracking-widest'>Version 0.0.1</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
  