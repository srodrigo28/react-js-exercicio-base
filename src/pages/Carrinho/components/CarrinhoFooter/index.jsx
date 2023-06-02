import { Container } from "./style";

export function CarrinhoFooter() {
    return (
        <Container>
            <footer>
                <div class="total">
                    <span>Total:</span>
                    <strong>R$ 10.386,20</strong>
                </div>

                <div class="coupon">
                    <div class="ph ph-tag"></div>
                    <span>Adicionar cupom</span>
                </div>
                <button>Finalizar compra</button>
            </footer>
        </Container>
    )
}