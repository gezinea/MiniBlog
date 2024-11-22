import style from './style/Login.module.css'
import { useState } from 'react';

const Login = () => {
    const [displayName, setDisplayName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [terms, setTerms] = useState<boolean>();
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return(
        <>
        <div className={style.container}>
            <h1>Entre na sua conta</h1>
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
                <button className='btn'>Entrar</button>
            </form>
        </div>
        </>
    );
}
export default Login;