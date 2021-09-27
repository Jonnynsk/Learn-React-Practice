import styled from "styled-components"

const MyInput = (props) => {
    return (
        <Input {...props} />
    )
}

export default MyInput


const Input = styled.input`
    width: 100%;
    padding: 5px 15px;
    margin: 5px 0;
    border: 1px solid #4a6f87;
`