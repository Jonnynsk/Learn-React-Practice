import styled from "styled-components"

const MyButton = ({ children, ...props }) => {
    return (
        <Button {...props}>
            {children}
        </Button>
    )
}

export default MyButton


const Button = styled.button`
    padding: 5px 15px;
    color: #4a6f87;
    font-size: 14px;
    background: transparent;
    border: 1px solid #4a6f87;
    cursor: pointer;
`