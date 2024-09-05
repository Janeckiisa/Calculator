import { useState } from "react"
import { StyledButton, StyledContainer, StyledRow, StyledInput } 
    from "./CalculatorStyles"
import { evaluate } from "mathjs";

function CalculatorTwo () {

    const [charValue, setCharValue] = useState("");

    function addValue(value) {
        const newValue = charValue + value;
        setCharValue(newValue);
    }

    function calculate() 
    {
        const result = evaluate(charValue)
        try{
            setCharValue(result);
        }
        catch(error) {
            setCharValue("Erro");
        }
    }

    function clear() {
        setCharValue("");
    }

    return (
        <>
            <StyledContainer>
                <StyledRow>
                    <StyledInput type="text" value={charValue} readOnly/>
                </StyledRow>
                <StyledRow>
                    <StyledButton color="#D57A66" onClick={() => addValue("1")}>1</StyledButton>
                    <StyledButton color="#D57A66" onClick={() => addValue("2")}>2</StyledButton>
                    <StyledButton color="#D57A66" onClick={() => addValue("3")}>3</StyledButton>
                    <StyledButton color="#D57A66" onClick={() => addValue("4")}>4</StyledButton>
                    <StyledButton color="#D57A66" onClick={() => addValue("5")}>5</StyledButton>
                    <StyledButton color="#D57A66" onClick={() => addValue("6")}>6</StyledButton>
                    <StyledButton color="#D57A66" onClick={() => addValue("7")}>7</StyledButton>
                    <StyledButton color="#D57A66" onClick={() => addValue("8")}>8</StyledButton>
                    <StyledButton color="#D57A66" onClick={() => addValue("9")}>9</StyledButton>
                    <StyledButton color="#D57A66" onClick={() => addValue("0")}>0</StyledButton>

                    <StyledButton color="#D57A66" onClick={() => addValue("-")}>-</StyledButton>
                    <StyledButton color="#D57A66" onClick={() => addValue("+")}>+</StyledButton>
                    <StyledButton color="#D57A66" onClick={() => addValue("/")}>÷</StyledButton>
                    <StyledButton color="#D57A66" onClick={() => addValue("*")}>x</StyledButton>
                    <StyledButton color="#CA6680" onClick={calculate}>=</StyledButton>
                    <StyledButton color="#63A375" onClick={clear}>C</StyledButton>
                </StyledRow>
            </StyledContainer>
        </>
    )
}

export default CalculatorTwo;