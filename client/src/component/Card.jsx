import styled from "styled-components";

const CardElement = styled.div`
    margin-top: 80px;
    color: black;
    margin-left: 150px;
    width: 80%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 3px solid #071952;
    margin-bottom: 80px;
    z-index: -10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    transition: .2s;
    @media screen and (max-width: 700px){
        margin: 20px auto auto auto;
        width: 100%;
        font-size: 14px;
    }
    hr{
        margin:0;
        padding: 0;
    }
    img{
        width: 500px;
        height: 300px;
        border-radius: 16px;
        padding: 0;
        margin: 0;
    }
    .body-content{
        margin-top: 10px;
        font-size: 14px;
    }
    .status{
        backgound-color: grey;
    }
    .card-container{
        position: relative;
        padding-left: 20px;
        height: 300px;
        max-width: 500px;
    }
    .date-time{
        position: absolute;
        bottom: 0;
        left: 40px;
        font-size: 14px;
    
    }
    .status{
        position: absolute;
        bottom: 0;
        right: 40px;
        font-size: 14px;
        color: white;
    }
    .status::before{
        content: "";
        position: absolute;
        top: 50%;
        left: -20px;
        transform: translateY(-50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${props => props.done === true ? "green" : "red"};
    }
    .status::after{
        content: "";
        position: absolute;
        top: -7px;
        left: -28px;
        width: 175px;
        border-radius: 20px;
        z-index: -1;
        height: 35px;
        background-color: #071952;
    }
    .title{
        margin-top: 5px;
        font-size: 32px;
        font-weight: bold;
    }
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 700px){
        flex-direction: column;
        width: 90%;
        img{
            width: 100%;
            height: 200px;
            border-radius: 16px;
            padding: 0;
            margin: 0;
        }
        .card-container{
            margin-top: 10px;
            position: relative;
            padding-left: 0px;
            height: 200px;
        }
        .date-time{
            position: absolute;
            bottom: 0;
            left: 0px;
            font-size: 11px;
        
        }
        .status{
            position: absolute;
            bottom: 0;
            right: 0px;
            font-size: 12px;
        }
        .status::before{
            content: "";
            position: absolute;
            top: 50%;
            left: -20px;
            transform: translateY(-50%);
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: green;
        }
        .status::after{
            content: "";
            position: absolute;
            top: -3px;
            left: -25px;
            width: 145px;
            border-radius: 20px;
            z-index: -1;
            height: 25px;
            background-color: grey;
        }
        .title{
            margin-top: 7px;
            font-size: 23px;
            font-weight: bold;
        }
        &:hover{
            cursor: pointer;
        }
    }
`

function Card ({title, image, body, date, status, id, sudah_dilaksanakan}){
    console.log(sudah_dilaksanakan)
    return (
        <CardElement done={sudah_dilaksanakan} onClick={() => window.location.href = `/acara?id=${id}`}>
            <img src={image} alt="" />
            <div className="card-container">
            <h3 className="title">{title}</h3>
            <p className="body-content">{body}</p>
            <p className="date-time">Tanggal : {date}</p>
            <p className="status">{status}</p>
            </div>
        </CardElement>
    )
}

export default Card;