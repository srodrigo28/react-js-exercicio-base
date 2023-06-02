import { Container } from './style'
import './../../style/index.css'
import logoImg from './../../assets/react.svg'

export function Login() {
    return (
        <Container className='titulo-login'>
            <h1>Login</h1>
            <img src={logoImg} alt='imagem da logo'/>
        </Container>
    )
} 