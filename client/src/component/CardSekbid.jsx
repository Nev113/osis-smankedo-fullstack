import styled from "styled-components";
import Navbar from "../element/Navbar";

const CardContainer = styled.div`
    width: 100%;
    height: 322px;
    background-color: #dee1e6;
    margin-top: 50px;
    border-radius: 10px;
    position: relative;
    transition: .2s;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover{
        border: 3px black solid;
    }
    .title{
        font-size: 32px;
        weight: bolder;
        position: absolute;
        top: 50px;
        left: 80px;
    }
    .line{
         width: 30px;
         border-bottom: 2px solid grey;
         position: absolute;
         top: 110px;
         left: 80px;
    }
    .desc{
        fonst-size: 24px;
        position: absolute;
        top: 100px;
        left: 120px;
        width: 300px;
    }
    .circle{
        width: 120px;
        height: 120px;
        positon: absolute;
        clip-path: polygon(50% 50%, 0% 50%, 50% 0%, 50% 50%, 0% 50%);
        top: 0;
        left: 0;
        background-color: #0b666a;
        box-shadow: 23px 19px 4px -3px rgba(0,0,0,0.1);
    }
    .square{
        width: 200px;
        height: 100px;
        background-color: #071952;
        position: absolute;
        bottom: 0;
        right: 500px;
        z-index: 5;
    }
    .year{
        position: absolute;
        font-size: 48px;
        bottom: 20px;
        right: 220px;
    }
    .triangle{
        width: 0;
        height: 0;
        border-top: 150px solid transparent;
        border-left: 150px solid #0b666a;
        position: absolute;
        bottom: 0px;
        right: 50px;
        z-index: 1;
    }
    @media (max-width: 768px){
        .square{
            width: 100px;
            height: 50px;
            right: 0;
            border-bottom-right-radius: 10px;  
        }
        .triangle{
            border-top: 20px solid transparent;
            border-left: 20px solid #0b666a;
        }
        .circle{
            width: 80px;
            height: 80px;
        }
        .year{
            font-size: 32px;
            right: 5px;
            bottom: 50px;
        }
        .title{
            font-size: 20px;
            left: 50px;
            top: 20px;
        }
        .line{
            width: 20px;
            left: 50px;
        }
        .desc{
            font-size: 18px;
            left: 80px;
            width: 100px;
        }
    }
`

export default function SekbidCard({title, description, year, no}) {

    return (
         <CardContainer onClick={() => window.location.href = `/sekbid/${no}`}>
        <div className="triangle"></div>
        <div className="circle"></div>
        <div className="square"></div>
        <div className="year">{year}</div>
         <div className="title">{title}</div>
         <div className="line"></div>
         <div className="desc">{description}</div>
         </CardContainer>
    )
}