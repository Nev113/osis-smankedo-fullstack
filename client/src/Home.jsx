import Navbar from "./element/Navbar";
import styled from "styled-components";
import swipe from "./element/swipe.svg";
import { useState, useEffect } from "react";
import supabase from "../config/supabaseConfig.js";
import Footer from "./element/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";


const Container = styled.div`
    max-width: 100%;
    @media (max-width: 700px;){
    max-width: 700px;
    }
`

const HeaderContainer = styled.div`
    width: 100%;
    height: 70vh;
    padding-left: 100px;
    margin-top: 160px;
    @media screen and (max-width: 700px){
        padding-left: 0px;
    }
    `
const HeaderText = styled.div`
    margin-top: 200px;
    margin-left: 100px;
    font-size: 26px;
    weight: bold;
    @media screen and (max-width: 700px){
        font-size: 20px;
        text-align: center;
        margin-left: 0px;
    }
    `
const SphereElement = styled.div`
    width: 200px;
    height: 200px;
    background-color: #0b666a;
    border-radius: 50%;
    position: absolute;
    top: 100px;
    left: -100px;
    z-index: -1;
    @media (max-width: 700px){
        width: 100px;
        height: 100px;
        left: -50px;
    }
    `
const SphereElement2 = styled.div`
    width: 200px;
    height: 200px;
    background-color: #0b666a;
    border-radius: 50%;
    position: absolute;
    border-top: 100px solid white;
    top: -30px;
    right: 80px;
    z-index: -1;
    @media (max-width: 700px){
        width: 100px;
        height: 100px;
        border-top: 50px solid white;
        right: 30px;
        top: 25px;
    }
    `
const SphereElement3 = styled.div`
    width: 200px;
    height: 200px;
    background-color: #0b666a;
    border-radius: 50%;
    position: absolute;
    top: 765px;
    left: -100px;
    z-index: -1;
    @media (max-width: 700px){
        width: 100px;
        height: 100px;
        left: -50px;
     }
    `
const SphereElement4 = styled.div`
    width: 200px;
    height: 200px;
    background-color: #171a1f;
    border-radius: 50%;
    position: absolute;
    top: 765px;
    right: -100px;
    z-index: -2;
    @media (max-width: 700px){
       width: 100px;
        height: 100px;
        right: -50px;
    }
    `
const SphereElement5 = styled.div`
    width: 200px;
    height: 200px;
    background-color: #171a1f;
    border-radius: 50%;
    position: absolute;
    top: 665px;
    right: 100px;
    border-top: 100px solid white;
    z-index: -20;
    @media (max-width: 700px){
        display: none;
    }
    `

const TriangleElement = styled.div`
    width: 0;
    height: 0;
    border-top: 200px solid transparent;
    border-left: 200px solid #071952;
    position: absolute;
    top: 350px;
    left: 0px;
    z-index: -1;
    @media (max-width: 700px){
        border-top: 100px solid transparent;
        border-left: 100px solid #071952;
    }
    `
const TriangleElement2 = styled.div`
    width: 0;
    height: 0;
    border-top: 200px solid transparent;
    border-left: 200px solid #071952;
    position: absolute;
    top: 900px;
    right: 0px;
    z-index: -1;
    @media (max-width: 700px){
        display: none;
    }
    `

const RectangleElement = styled.div`
    width: 200px;
    height: 200px;
    background-color: #35a29f;
    position: absolute;
    top: 350px;
    right: 0px;
    z-index: -1;
    @media (max-width: 700px){
        width: 100px;
        height: 100px;
        right: 0px;
    }
    `
const RectangleElement2 = styled.div`
    width: 200px;
    height: 200px;
    background-color: #35a29f;
    position: absolute;
    top: 765px;
    left: 110px;
    z-index: -3;
    @media (max-width: 700px){
       display: none;
    }
    `

const LineElement = styled.div`
    width: 70px;
    height: 10px;
    margin-top: 10px;
    border-radius: 10px;
    background-color: #394867;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    @media (max-width: 700px){
        width: 50px;
        height: 5px;
    }
    `
const LineElement2 = styled.div`
    width: 70px;
    height: 10px;
    border-radius: 10px;
    background-color: #394867;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    @media (max-width: 700px){
        width: 50px;
        height: 5px;
    }
    `

const HighlightBottomText = styled.div`
    color: #f1f6f9;
    background-color: #394867;
    width: fit-content;
    @media screen and (max-width: 700px){
        padding: 10px 10px;
    }
    `

const SwipeText = styled.div`
    margin-top: 350px;
    text-align: center;
    margin-right: 100px;
    font-size: 26px;
    @keyframes swipe {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(20px);
        }
        100% {
            transform: translateY(0);
        }
    }
    animation: swipe 1s infinite;
    @media screen and (max-width: 700px){
        font-size: 20px;
        text-align: center;
        margin-right: 0px;
        margin-top: 200px;
        animation: swipe 1s infinite;
    }
    `

const Hr = styled.hr`
    margin-top: 10px;
    width: 100%;
    border: 1px solid #071952;
    `
const AboutContainer = styled.div`
h2{
    margin-left: 150px;
    z-index: 1;
    margin-top: 70px;
    @media screen and (max-width: 700px){
        margin-left: 0px;
        text-align: center;
}
    width: 100%;
    `
const AboutText = styled.div`
    margin-left: 150px;
    width: 80%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 20px;
    margin-bottom: 100px;
    z-index: -10;
    @media screen and (max-width: 700px){
        margin-left: 0px;
        width: 95%;
        font-size: 14px;
        margin: 10px 10px;
    }
`
const HeaderPage = styled.div`
    font-size: 30px;
    text-align: center;
    margin-left: 50%;
    transform: translate(-50%, 0);
    z-index: -11;
    margin-bottom: 10px;
    @media (max-width: 700px){
        font-size: 20px;
    }
    `
const Page3 = styled.div`
   position: relative;
   width: 100%;
   height: 90vh;
   .img-active{
    width: 200px;
    height: 200px;
    border-radius: 100%;
    display: block;
    margin: 10px auto;
    border: 5px solid #394867;
    padding: 5px;
    z-index: 1;
   }
   .active{
       transform: translateX(400px);
       top: 90px;
       height: 500px;
       width: 900px;
       .card-2-content{
              height: 500px;
       }
   }
   .angkatan{
         position: absolute;
         bottom: 0;
         right: 0;
         margin: 20px;
         font-size: 10px;
         opacity: 0.5;
   }
   .hover{
    &:hover{
        transform: translateY(-20px);
    }
   }
   @media (max-width: 700px){
    height: 200vh;
    .card-1{
        top: 130px;
    }
    .card-2{
        top: 190px;
    }
    .card-3{
        top: 150px;
    }
    .active{
        transform: translateY(800px);
        top: 50px;
        height: 550px;
        width: 300px;
        .card-2-content{
               height: 500px;
        }
    }
}
`

const Card = styled.div`
    cursor: pointer;
    width: 300px;
    height: fit-content;
    max-height: 550px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 40px;
    left: 20px;
    z-index: 0;
    transition: 0.5s;
    `
const Card1 = styled.div`
    cursor: pointer;
    width: 300px;
    height: fit-content;
    max-height: 550px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(0, 0, 0, 0.3);
    margin: 20px;
    position: absolute;
    top: 100px;
    left: 0px;
    z-index: 3;
    opacity: 1;
    transition: 0.5s;
    `;
   const Description = styled.div`
    height: 300px;
    font-size: 10px;
    margin-top: -50px;
    `
    const Card2 = styled.div`
    cursor: pointer;
    width: 300px;
    height: fit-content;
    max-height: 550px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(0, 0, 0, 0.3);
    margin: 20px;
    position: absolute;
    top: 60px;
    left: 0px;
    z-index: 2;
    opacity: 1;
    transition: 0.5s;
    `

const Page4 = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    @media (max-width: 700px){
        height: 80vh;
    }
    `
const CarouselContainer = styled.div`
    posiiton: relative;
    width: 100%;
    margin-top: 100px;
    overflow: hidden;
    .carousel-control-prev{
        color: black;
    }
    .carousel-control-next{
        color: black;
    }
    .carousel-inner img{
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    .gradient-left{
        position: absolute;
        width: 400px;
        height: 400px;
        left: 0;
        background: linear-gradient(to right, white, transparent);
        z-index: 1;
    }
    .gradient-right{
        position: absolute;
        width: 500px;
        height: 400px;
        right: 0;
        background: linear-gradient(to left, white, transparent);
        z-index: 1;
    }
    @media (max-width: 700px){
     .gradient-right{
        width: 100px;
        height: 200px;
     }
     .gradient-left{
        width: 100px;
        height: 200px;
     }
     .carousel-inner img{
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    `

const Page5 = styled.div`
    position: relative;
    width: 100%;
    height: 50vh;
    `
const Marquee = styled.div`
.slider {
    margin-top: 100px;
    height: 60px;
    position: relative;
    width: 100%;
    height: 130px;
    display: grid;
    place-items: center;
    overflow: hidden;
  }
  .slider::before,
  .slider::after{
    position:absolute;
    background-image:linear-gradient(to right,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
    content:'';
    height:100%;width:25%;
    z-index:2;pointer-events:none;
  }
  .slider::before{
    left:0;
    top:0;
  }
  .slider::after{
    right:0;
    top:0;
    transform:rotateZ(180deg);
  }
  
  
  .slide-track {
    width: calc(150px * 20);
    display: flex;
    animation: scroll 25s linear infinite;
    justify-content: space-between;
  }
  
  .slide-track2 {
    width: calc(150px * 15);
    display: flex;
    animation: scroll2 15s linear infinite;
    justify-content: space-between;
  }
  ul li{
    list-style: none;
  }
  
  .slide {
    width: 150px;
    height: 60px;
    list-style: none;
    text-decoration: none;
    display: grid;
    place-items: center;
    transition:0.5s;
    cursor:pointer;
  }
  .slide:hover{
    transform:scale(0.8)
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(calc(-150px * 10));
    }
  }
  i{
    font-size: 100px;
  }
  @keyframes scroll2 {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(calc(-150px * 5));
    }
  }
  
  @media screen and (max-width: 768px) {
    .slide-track {
      width: calc(80px * 9);
    }
  
    .slide-track2 {
      width: calc(80px * 15);
    }
    i{
        font-size: 50px;
        margin: 0 50px;
    }
    .slide {
      width: 50px;
    }
  
    @keyframes scroll {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(calc(-80px * 10));
      }
    }
}
  `

export default function Home() {
    const [active, setActive] = useState(1);
    const [dataKetua, setDataKetua] = useState(null);
    const [dataWakil, setDataWakil] = useState(null);
    const [dataPembina, setDataPembina] = useState(null);
    const [error, setError] = useState(null);
    const handleActive = (e) => {
        if (active === e) return;
        if (active !== undefined) {
        const card = document.querySelector(".card-"+active);
        const img = document.querySelector(".img-"+active);
        img.classList.remove("img-active");
        card.classList.remove("active");
        card.classList.add("hover");
        }
        setActive(e);
        const card = document.querySelector(".card-"+e);
        const img = document.querySelector(".img-"+e);
        card.classList.add("active");
        img.classList.add("img-active");
        card.classList.remove("hover");
    }
    useEffect(() => {
        const getDataKetua = async () => {  
            try {
                let { data, error } = await supabase.from('ketua-osis').select('*');
                if (error) {
                    setError(true);
                }
    
                if (data) {
                    setDataKetua(data);
                }
            } catch (error) {
                setError(true);
                console.error(error);
            }
        }
        const getDataWakil = async () => {
            try {
                let { data, error } = await supabase.from('wakil-osis').select('*');
                if (error) {
                    setError(true);
                }
    
                if (data) {
                    setDataWakil(data);
                }
            } catch (error) {
                setError(true);
                console.error(error);
            }
        }
        const getDataPembina = async () => {
            try {
                let { data, error } = await supabase.from('pembina').select('*');
                if (error) {
                    setError(true);
                }
    
                if (data) {
                    setDataPembina(data);
                }
            } catch (error) {
                setError(true);
                console.error(error);
            }
        }
        getDataPembina();
        getDataKetua();
        getDataWakil();
    }, []);
    
    return(
        <Container>
            <HelmetProvider>
                <Helmet>
                    <title>OSIS SMANKEDO</title>
                </Helmet>
            </HelmetProvider>
            <Navbar />
            <HeaderContainer>
                <SphereElement2></SphereElement2>
                <SphereElement></SphereElement>
                <TriangleElement></TriangleElement>
                <RectangleElement></RectangleElement>
            <HeaderText>Organisasi ini bertujuan mempersiapakan siswa sebagai penerus cita-cita <HighlightBottomText>perjuangan bangsa dan sumber insani pembangunan nasional.</HighlightBottomText></HeaderText>
            <SwipeText><img width="40px" src={swipe} alt="" /> Swipe Up</SwipeText>
            </HeaderContainer>
            <Hr></Hr>
            <AboutContainer>
                <SphereElement3 />
                <RectangleElement2 />
{/*                 <SphereElement4/> */}
                <SphereElement5/>
                <TriangleElement2/>
                <HeaderPage>Tentang OSIS</HeaderPage>
                <LineElement />
                <h2>Visi & Misi</h2>
                <AboutText>
    Meningkatkan keimanan dan ketaqwaan terhadapa Tuhan Yang Maha Esa dan budi pekerti luhur
    <br />Meningkatkan pengetahuan dan ketrampilan
    <br />Meningkatkan kesehatan jasmani dan rohani
    <br />Memantapkan kepribadian dan mandiri, serta
    <br />Mempertebal rasa tangung jawab kemasyarakatan dan kebangsaan
    </AboutText>
            </AboutContainer>
            <Hr />
            <Page3>
                <HeaderPage>Pengurus</HeaderPage>
                <LineElement2 />
                {error ? (<p>Data Sedang di Update, Mohon Bersabar</p>) : (
                <div className="card-container">
                <Card className="card-1 active" onClick={() => handleActive(1)}>
                    <div>
                         <div className="text-center bold h4 p-1">Pembina OSIS</div>
                    <hr className="m-0 p-0" />
                    <img className ="img-1 img-active" src="https://picsum.photos/300/200" alt="" />
                    <div className="text-center bold h5 mt-2">{dataPembina == null ? "nama_ketua" : dataPembina[0]["nama-pembina"]}</div>
                    <Description className="card-1-content m-3">{dataPembina === null ? "deskripsi_data" : dataPembina[0]["deskripsi-pembina"]}</Description>
                    </div>
                    </Card>
                    <Card1 className="card-2 hover" onClick={() => handleActive(2)}>
                    <div className="text-center bold h4 p-1">Ketua OSIS</div>
                    <hr className="m-0 p-0" />
                    <img className="img-2" src="https://picsum.photos/300/200" alt="" />
                    <div className="text-center bold h5 mt-5">{dataKetua == null || dataKetua[0] === undefined ? "nama_Ketua" : dataKetua[0]["nama-ketua"]}</div>
                    <Description className="card-2-content m-3">{dataKetua == null || dataKetua[0] === undefined ? "deskripsi_Ketua" : dataKetua[0]["deskripsi-ketua"]}</Description>
                    <p className="angkatan">{dataKetua == null || dataKetua[0] === undefined ? "angkatan_Ketua" : dataKetua[0]["angkatan-ke"]}</p>
                    </Card1>
                    <Card2 className="card-3 hover" onClick={() => handleActive(3)}>
                    <div className="text-center bold h4 p-1">Wakil Ketua OSIS</div>
                    <hr className="m-0 p-0" />
                    <img className="img-3" src="https://picsum.photos/300/200" alt="" />
                    <div className="text-center bold h5 mt-5">{dataWakil == null || dataWakil[0] === undefined ? "nama_wakil" : dataWakil[0]["nama-wakil-ketua"]}</div>
                    <Description className="card-3-content m-3">{dataWakil == null || dataWakil[0] === undefined ? "deskripsi_Wakil" : dataWakil[0]["deskripsi-wakil-ketua"]}</Description>
                    <p className="angkatan">{dataWakil == null || dataWakil[0] === undefined ? "angkatan_wakil" : dataWakil[0]["angkatan-ke"]}</p>
                    </Card2>
                    </div>
                    )}
            </Page3>
            <Hr />
            <Page4>
                <HeaderPage>Seksi Bidang</HeaderPage>
                <LineElement></LineElement>
                <CarouselContainer>
                <div className="gradient-left"></div>
                <div className="gradient-right"></div>
                <div className="carousel-container">
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://picsum.photos/300/200" className="d-block" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="https://picsum.photos/300/200" className="d-block" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="https://picsum.photos/300/200" className="d-block" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="https://picsum.photos/300/200" className="d-block" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="https://picsum.photos/300/200" className="d-block" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="https://picsum.photos/300/200" className="d-block" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="https://picsum.photos/300/200" className="d-block" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="https://picsum.photos/300/200" className="d-block" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="https://picsum.photos/300/200" className="d-block" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="black" aria-hidden="true"><i className="fa-solid black fa-arrow-left"></i></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="black" aria-hidden="true"><i className="fa-solid fa-arrow-right"></i></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
                </CarouselContainer>
                <AboutText className="mt-5 text-center">Klik pada gambar untuk mendapatkan detail sekbid</AboutText>
            </Page4>
            <Hr />
            <Page5>
                <HeaderPage>Ekstrakulikuler</HeaderPage>
                <LineElement />
                <Marquee>
                <div className="marquee slider">
                    <ul className="marquee-content slide-track">
                    <li><i className="fab slide fa-github"></i></li>
                    <li><i className="fab slide fa-codepen"></i></li>
                    <li><i className="fab slide fa-free-code-camp"></i></li>
                    <li><i className="fab slide fa-dev"></i></li>
                    <li><i className="fab slide fa-react"></i></li>
                    <li><i className="fab slide fa-vuejs"></i></li>
                    <li><i className="fab slide fa-angular"></i></li>
                    <li><i className="fab slide fa-node"></i></li>
                    <li><i className="fab slide fa-wordpress"></i></li>
                    <li><i className="fab slide fa-aws"></i></li>
                    <li><i className="fab slide fa-docker"></i></li>
                    <li><i className="fab slide fa-android"></i></li>
                    </ul>
                </div>
                </Marquee>
            </Page5>
        </Container>
    )
}
