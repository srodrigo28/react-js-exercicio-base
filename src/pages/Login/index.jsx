import { Container } from './style'
import './../../style/index.css'
import logoImg from './../../assets/react.svg'

export function Login() {
    return (
        <Container>
            <h1 className='titulo-login'>Login</h1>
            <img src={logoImg} alt='imagem da logo'/>
        </Container>
    )
} 