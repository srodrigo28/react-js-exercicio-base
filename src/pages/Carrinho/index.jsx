import { CarrinhoHeader } from './components/CarrinhoHeader'
import { CarrinhoMain } from './components/CarrinhoMain'
import { CarrinhoFooter } from './components/CarrinhoFooter'
import { Container } from './style'

export function Carrinho() {
    return (
        <Container>
            <CarrinhoHeader />
            <CarrinhoMain />
            <CarrinhoFooter />
        </Container>
    ) 
}
