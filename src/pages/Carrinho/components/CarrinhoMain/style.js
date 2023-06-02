import styled from "styled-components";

export const Container = styled.div`
    color: #fff;
    height: 100vh;
    max-width: 32.8rem;
    margin-left: auto;
    background-color: #1c1c1c;

    display: grid;
    grid-template-rows: max-content 1fr max-content;

     /** Resolvendo com Scroll */
    overflow-y: scroll; 
    /** Resolvendo com Scroll */
    padding: 1.5rem;

    display: grid;
    place-content: start;
    
    .item{
        gap: 1rem;
        display: flex;
        background-color: red;
    }
    .item img{
        width: 10.4rem;
        height: 10.4rem;
        object-fit: cover;
        border-radius: .8rem;
    }
    .item .title{
        color: var(--color-text-color-secondary);
    }
`;
export const Title = styled.h1`
    margin-left: 15px;
`;
export const Price = styled.h3`

`;
export const Qty = styled.div`

`;
export const Details = styled.div`
    font-size: .7rem;
    color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 2px solid #000;
    .price{

    }
    .price-qty{
        margin-top: 1.6rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .price-qty .qty{
        display: flex;
        align-items: center;
    }
`;
export const BoxItem = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;

    button{
        color: #fff;
        width: 2rem;
        height: 2rem;
        align-items: center;
        border-color: darkviolet;
        background-color: transparent;
    }
    button.add{
        cursor: pointer;
    }
    button.add:hover{
        color: #09090b;
        background-color: darkviolet;
    }
    button.minus{
        cursor: pointer;
    }
    button.minus:hover{
        background-color: red;
    }
    span{
        margin-left: 5px;
        margin-right: 7px;
    }
`;
