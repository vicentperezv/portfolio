import styled from "styled-components"

export const Label = styled.label`
    display: block; 
`;

export const Input = styled.input`
    display: block;
    margin-top:1rem;
    margin-bottom:1rem;
    padding: 0.375rem 0.75rem;
    background-color:#0F1624;
    font-weight: 400;
    line-height: 1.5;
    color: hsl(204,23.8%,95.9%);
    width: 100%;
    border:1px solid #ced4da;
    &:focus{
        border-color: #d0eae2;
        outline: 0;
    }

`;

export const Message = styled.textarea`
    height:15rem;
    width:100%;
    padding: 0.938rem 0.625rem;
    color: hsl(204,23.8%,95.9%);
    background-color:#0F1624;
    resize: none;
    border:1px solid #ced4da;

    &:focus{
        border-color: #d0eae2;
        outline: 0;
    }
`;
export const Error = styled.p`
    color: #B00020;
`
