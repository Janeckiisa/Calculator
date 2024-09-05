import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(#EDC79B, #E1A181);
    align-items: center;
    width: 300px;
    height: 400px;
    padding: 30px;
    border-radius: 20px;
    flex-wrap: wrap;

`

export const StyledInput = styled.input`
    text-align: end;
    background-color: #713E5A;
    color: white;
    height: 55px;
    border-radius: 5px;
    font-family: "Tiny5", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: x-large;
`;

export const StyledButton = styled.button`
    background-color: ${prop => prop.color};
    color: white;
    width: 60px;
    height: 60px;
    margin: 5px;
    border-radius: 5px;
    font-family: "Tiny5", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: larger;
`;
export const StyledRow = styled.div`
    margin: 10px;
    place-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`