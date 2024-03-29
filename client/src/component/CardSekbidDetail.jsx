import styled from "styled-components";

const Container = styled.div`
    margin-top: 50px;
`
const Card = styled.div`
    background-color: #f3f4f6;
    width: 100%;
    height: 1300px;
    border-radius: 10px;
    position: relative;
    img{
        width: 1220px;
        height: 550px;
        object-fit: cover;
        border-radius: 10px;
        margin: 20px;
        object-fit: cover;
    }
    .text-description{
        font-size: 30px;
        margin: 10px 20px;
    }
    .description-text{
        display: inline-block;
        margin-left: 80px;
        width: 1200px;
        font-size: 20px;
        margin-top: -10px;
    }
    .description-text::before{
        content: "";
        width: 40px;
        height: 6px;
        background-color: #565e6c;
        display: inline-block;
        position: absolute;
        left: 30px;
        bottom: 10px;
    }
    .description-container{
        margin-top: 30px;
        position: relative;
    }
    .card-inner{
        background-color: #dee1e6;
        width: 96%;
        height: 200px;
        border-radius: 10px;
        margin-left: 50px;
        margin-top: 30px;
        position: relative;
    }
    .line-1 {
        width: 5px;
        height: 100%;
        background-image: repeating-linear-gradient(0deg, #9095a0, #9095a0 7px, transparent 10px, transparent 8px);
        position: absolute;
        left: 100px;
    }
    .dot-1::before{
        content: " ";
        width: 20px;
        height: 20px;
        background-color: #000;
        border-radius: 50%;
        position: absolute;
        left: -30px;
        top: 10px;
        z-index: -1;
    }
    .dot-1{
        position: relative;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #171a1f;
        position: absolute;
        left: 123px;
        top: 20px;
        font-size: 25px;
    }
    .dot-2::before{
        content: "";
        width: 20px;
        height: 20px;
        background-color: #000;
        border-radius: 50%;
        position: absolute;
        left: -30px;
        top: 10px;
    }
    .dot-2{
        color: #171a1f;
        position: absolute;
        left: 123px;
        top: 80px;
        font-size: 25px;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .dot-3::before{
        content: "";
        width: 20px;
        height: 20px;
        background-color: #000;
        border-radius: 50%;
        position: absolute;
        left: -30px;
        top: 10px;
    }
    .dot-3{
        color: #171a1f;
        position: absolute;
        left: 123px;
        top: 140px;
        font-size: 25px;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .head-text{
        margin-top: 80px;
    }
    .line-2 {
        width: 5px;
        height: 100%;
        background-image: repeating-linear-gradient(0deg, #9095a0, #9095a0 7px, transparent 10px, transparent 8px);
        position: absolute;
        left: 400px;
        top: 0px;
    }
    .dot-4::before{
        content: "";
        width: 20px;
        height: 20px;
        background-color: #000;
        border-radius: 50%;
        position: absolute;
        left: -30px;
        top: 10px;
    }
    .dot-4{
        color: #171a1f;
        position: absolute;
        left: 423px;
        top: 20px;
        font-size: 25px;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .dot-5::before{
        content: "";
        width: 20px;
        height: 20px;
        background-color: #000;
        border-radius: 50%;
        position: absolute;
        left: -30px;
        top: 10px;
    }
    .dot-5{
        color: #171a1f;
        position: absolute;
        left: 423px;
        top: 80px;
        font-size: 25px;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .dot-6::before{
        content: "";
        width: 20px;
        height: 20px;
        background-color: #000;
        border-radius: 50%;
        position: absolute;
        left: -30px;
        top: 10px;
    }
    .dot-6{
        color: #171a1f;
        position: absolute;
        left: 423px;
        top: 140px;
        font-size: 25px;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .line-3{
        width: 5px;
        height: 100%;
        background-image: repeating-linear-gradient(0deg, #9095a0, #9095a0 7px, transparent 10px, transparent 8px);
        position: absolute;
        left: 700px;
        top: 0px;
    }
    .dot-7::before{
        content: "";
        width: 20px;
        height: 20px;
        background-color: #000;
        border-radius: 50%;
        position: absolute;
        left: -30px;
        top: 10px;
    }
    .dot-7{
        color: #171a1f;
        position: absolute;
        left: 723px;
        top: 20px;
        font-size: 25px;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .dot-8::before{
        content: "";
        width: 20px;
        height: 20px;
        background-color: #000;
        border-radius: 50%;
        position: absolute;
        left: -30px;
        top: 10px;
    }
    .dot-8{
        color: #171a1f;
        position: absolute;
        left: 723px;
        top: 80px;
        font-size: 25px;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .dot-9::before{
        content: "";
        width: 20px;
        height: 20px;
        background-color: #000;
        border-radius: 50%;
        position: absolute;
        left: -30px;
        top: 10px;
    }
    .dot-9{
        color: #171a1f;
        position: absolute;
        left: 723px;
        top: 140px;
        font-size: 25px;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .sphere{
        width: 200px;
        height: 200px;
        background-color: #171a1f;
        border-radius: 50%;
        position: absolute;
        left: -150px;
        bottom: 100px;
    }
    .square-dotted{
        width: 200px;
        height: 100px;
        border: 5px dashed #bcc1ca;
        position: absolute;
        right: 200px;
        bottom: 30px;
        z-index: 1;
    }
    .square{
        width: 200px;
        height: 100px;
        background-color: #35a29f;
        position: absolute;
        right: 170px;
        bottom: 0px;
        z-index: 2;
    }
    .sphere-2{
        width: 200px;
        height: 200px;
        background-color: #0b666a;
        position: absolute;
        right: 0px;
        border-radius: 50%;
        bottom: 200px;
        z-index: 2;
    }
    .sphere-2-dotted{
        width: 200px;
        height: 200px;
        border: 5px dashed #bcc1ca;
        position: absolute;
        right: -40px;
        border-radius: 50%;
        bottom: 190px;
        z-index: 1;
    }
    @media (max-width: 768px){
        margin-top: 20px;
        width: 100%;
        height: 1000px;
        img{
            width: 90%;
            height: 300px;
            fit: cover;
        }
        .text-description{
            font-size: 24px;
        }
        .description-text{
            width: 90%;
            margin-top: 20px;
            margin-left: 30px;
        }
        .description-text::before{
            display: none;
        }
        .card-inner{
            border: 1px solid #565e6c;
            width: 96%;
            height: 400px;
            margin: auto;
        }
        .line-1{
            left: 28px;
        }
        .dot-1{
            top: 20px;
            left: 50px;
        }
        // .dot-1::before{
        //     content: "";
        //     width: 15px;
        //     height: 15px;
        // }
        .dot-2{
           top: 50px;
           left: 50px;
        }
        // .dot-2::before{
        //     width: 15px;
        //     height: 15px;
        // }
        .dot-3{
            top: 80px;
            left: 50px;
        }
        // .dot-3::before{
        //     width: 15px;
        //     height: 15px;
        // }
        .line-2{
            display: none;
        }
        .dot-4{
            top: 110px;
            left: 50px;
        }
        // .dot-4::before{
        //     width: 15px;
        //     height: 15px;
        // }
        .dot-5{
            top: 140px;
            left: 50px;
        }
        // .dot-5::before{
        //     width: 15px;
        //     height: 15px;
        // }
        .dot-6{
            top: 170px;
            left: 50px;
        }
        // .dot-6::before{
        //     width: 15px;
        //     height: 15px;
        // }
        .line-3{
            display: none;

        }
        .dot-7{
            top: 200px;
            left: 50px;
        }
        // .dot-7::before{
        //     width: 15px;
        //     height: 15px;
        // }
        .dot-8{
            top: 230px;
            left: 50px;
        }
        // .dot-8::before{
        //     width: 15px;
        //     height: 15px;
        // }
        .dot-9{
            top: 260px;
            left: 50px;
        }
        // .dot-9::before{
        //     width: 15px;
        //     height: 15px;
        // }
        .sphere{
            display: none;
        }
        .square-dotted{
            display: none;
        }
        .square{
            display: none;
        }
        .sphere-2{
           display: none;
        }
        .sphere-2-dotted{
            display: none;
        }
        card-inner > div{
            font-size: 10px;
        }
    }
`

export default function CardSekbidDetail({title, description, image, anggota}) {
    return (
        <Container>
            <Card>
                <div className="text-header"></div>
                <img src={image} alt="" />
                <div className="text-description">Deskripsi dan Tujuan</div>
                <div className="description-container">
                <div className="description-text">{description}</div>
                </div>
                <div className="text-description head-text">Anggota Sekbid</div>
                <div className="card-inner">
                     <div className="line-1"></div>
                    <div className="dot-1">{(anggota[0] && anggota[0]["nama"]) ?? "-"}</div>
                    <div className="dot-2">{(anggota[1] && anggota[1]["nama"]) ?? "-"}</div>
                    <div className="dot-3">{(anggota[2] && anggota[2]["nama"]) ?? "-"}</div>
                    <div className="line-2"></div>
                    <div className="dot-4">{(anggota[3] && anggota[3]["nama"]) ?? "-"}</div>
                    <div className="dot-5">{(anggota[4] && anggota[4]["nama"]) ?? "-"}</div>
                    <div className="dot-6">{(anggota[5] && anggota[5]["nama"]) ?? "-"}</div>
                    <div className="line-3"></div>
                    <div className="dot-7">{(anggota[6] && anggota[6]["nama"]) ?? "-"}</div>
                    <div className="dot-8">{(anggota[7] && anggota[7]["nama"]) ?? "-"}</div>
                    <div className="dot-9">{(anggota[8] && anggota[8]["nama"]) ?? "-"}</div>
                </div>
                <div className="sphere-2"></div>
                <div className="sphere-2-dotted"></div>
                <div className="sphere"></div>
                <div className="square"></div>
                <div className="square-dotted"></div>
            </Card>
        </Container>
    )
}
