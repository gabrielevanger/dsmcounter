import { styled } from "styled-components";

import tokens from "@/styles/tokens";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        background: ${tokens.colors.light_shade};
        padding: 1rem;

        &::placeholder{
            color: ${tokens.colors.dark};
        }

    }
    button{
        display: flex;
        align-items: center;
        gap: 0.75rem;

        border:0;
        padding: 1rem;
        background: transparent;
        background: ${tokens.colors.terciary};
        color: ${tokens.colors.light};
        font-weight: ${tokens.fontWeights.bold};
        border-radius: 6px;
     
        &:hover{
        background: ${tokens.colors.terciary_shade};
        border-color: 1px solid ${tokens.colors.auxiliary_shade};
        color: ${tokens.colors.primary};
        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }
    }
`;