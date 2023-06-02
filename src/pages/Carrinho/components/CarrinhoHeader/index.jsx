import { Container } from './style'

export function CarrinhoHeader() {
    return (
        <Container>
            <div className="title">
                Seu carrinho tem <strong> 5 </strong> itens 
            </div>
        </Container>
    )
}