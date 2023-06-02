import { Container, Details, Title, BoxItem, Price, Qty } from './style'

export function CarrinhoMain() {
    return (
        <Container>
            <div className="item">
                <img 
                    src="https://images.kabum.com.br/produtos/fotos/129919/monitor-gamer-samsung-odyssey-led-49-curvo-dqhd-hdmi-displayport-usb-g-sync-freesync-240hz-1ms-altura-ajustavel-lc49g95tsslxzd_1603130064_gg.jpg" 
                    alt="samsung  4k ultra monitor 32p"
                />
                <Details>
                    <Title> Samsung  4k ultra monitor 32p </Title>
                    <BoxItem>
                        <Price>R$ 850,50</Price>
                        <Qty>
                            <button className="minus"> - </button>
                            <span>1</span>
                            <button className="add"> + </button>
                        </Qty>
                    </BoxItem>
                </Details>
            </div>
        </Container>
    )
}