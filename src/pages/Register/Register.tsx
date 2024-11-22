import style from './style/Register.module.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    const [displayName, setDisplayName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [terms, setTerms] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setError('');

        const user = {
            displayName,
            email,
            password,
            confirmPassword
        }

        if(password !== confirmPassword){
            setError('As senhas precisam ser iguais');
            return;
        }

        console.log(user);
    }


    return(
        <>
        <div className={style.register}>
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
                {error && <p className='error'>{error}</p>}
                
                <label style={{display: 'flex'}}>Já possui uma conta? <Link to='/login'>Entrar</Link></label>
            </form>
        </div>
        </>
    );
}
export default Register;