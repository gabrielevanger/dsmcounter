import styled from "styled-components";

import tokens from '@/styles/tokens';

export const HeaderContainer = styled.header`
    background: ${tokens.colors.primary_shade};
    padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const CompanyButton = styled.button`
    height: 50px;
    border: 0;
    background: ${tokens.colors.terciary};
    color: ${tokens.colors.light};
    font-weight: ${tokens.fontWeights.bold};
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
   
   

    &:hover {
        background: ${tokens.colors.terciary_shade};
        transition: background-color 0.2s;
    }

`;
