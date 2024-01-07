import styled from "styled-components";

const HeaderText = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    color: #394867;
    margin-top: 100px;
    padding-left: 100px;
    @media screen and (max-width: 768px){
        font-size: 2rem;
    }
    @media screen and (max-width: 480px){
        font-size: 1.5rem;
    }
`

export default HeaderText;