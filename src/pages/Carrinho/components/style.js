import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    max-width: 42.8rem;
    margin-left: auto;
    background-color: var(--color-surface-color);

    display: grid;
    grid-template-rows: max-content 1fr max-content;
`;