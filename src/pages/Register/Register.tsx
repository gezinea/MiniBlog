import style from './style/Register.module.css'
import { useState, useEffect } from 'react';

const Register = () => {
    const [displayName, setDisplayName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [terms, setTerms] = useState<boolean>();
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }


    return(
        <>
        <div className={style.container}>
            <h1>Cadastre-se para postar</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input 
                        type="text"
                        name="nome" 
                        placeholder='Nome do Usuário'
                        value={displayName}
                        required onChange={e => setDisplayName(e.target.value)}/>
                </label>
                <label>
                    <span>Email:</span>
                    <input 
                        type="email" 
                        name="email" 
                        required placeholder='Email do Usuário' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha:</span>
                    <input 
                        type="password" 
                        name="senha" 
                        required
                        placeholder='Senha do Usuário'
                        value={password} 
                        onChange={e => setPassword(e.target.value)}/>
                </label>
                <label>
                    <span>Confirmar Senha</span>
                    <input 
                        type="password" 
                        name="confirmarSenha" 
                        required
                        placeholder='Confirme a senha'
                        value={confirmPassword} 
                        onChange={e => setConfirmPassword(e.target.value)}/>
                </label>
                <label>
                    <input type="checkbox" name="termos" />
                </label>
                <button className='btn'>Cadastrar</button>
            </form>
        </div>
        </>
    );
}
export default Register;