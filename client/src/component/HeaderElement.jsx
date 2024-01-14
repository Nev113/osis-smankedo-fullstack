import styled from "styled-components";
const Sphere = styled.div`
    background-color: #0b666a;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    z-index: -10;
    top: 15px;
    right: 60px;
    animation: move3 10s infinite;
    @media (max-width: 768px){
        width: 100px;
        height: 100px;
    }
`
const Sphere1 = styled.div`
    background-color: #0b666a;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    z-index: -10;
    top: 200px;
    right: -75px;
    animation: move2 10s infinite;
    @media (max-width: 768px){
        display: none;
    }
`

const Square = styled.div`
    background-color: #35a29f;
    width: 150px;
    height: 150px;
    position: absolute;
    z-index: -10;
    top: 100px;
    left: 0px;
    animation: move1 10s infinite;
    @media (max-width: 768px){
        width: 100px;
        height: 100px;
    }
`
const Triangle = styled.div`
    width: 0;
    height: 0;
    border-top: 150px solid #071952;
    border-right: 150px solid transparent;
    position: absolute;
    z-index: -10;
    top: 100px;
    right: 230px;
    animation: move 10s infinite;
    @media (max-width: 768px){
        border-top: 100px solid #071952;
        border-right: 100px solid transparent;
        left: 50px;
        top: 200px;
    }
`

const Header = styled.div`
    position: relative;
    height: 370px;
    width: 100%;
    .title{
        font-size: 4rem;
        font-weight: bold;
        color: #394867;
        padding-top: 200px;
        margin-left: 200px;
        @media screen and (max-width: 768px){
            margin-left: 60px;
            padding-top: 150px;
            font-size: 2rem;
        }
        @media screen and (max-width: 480px){
            font-size: 1.5rem;
        }
    
    }
    @keyframes move {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(20px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    @keyframes move1 {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    @keyframes move2 {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-27px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    @keyframes move3 {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0px);
        }
    }
`

const Hr = styled.hr`
    width: 100%;
    border: 1px solid #071952;
    position: absolute;
    bottom: -40px;
    @media (max-width: 768px){
        bottom: -10px;
    }
`

export default function HeaderElement({title}){
    return (
        <Header>
            <Sphere></Sphere>
            <Square></Square>
            <Triangle></Triangle>
            <Sphere1></Sphere1>
            <div className="title">{title}</div>
            <Hr />
        </Header>
    )
}