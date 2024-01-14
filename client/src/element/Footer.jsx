import styled from "styled-components";
import logo from "../component/logo-smankedo.png";
import logo2 from "./pngwing.com.png";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #000;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  position: relative;
  bottom: 0;
  .item {
    margin-right: 40px;
    margin-top: 50px;
    font-size: 2rem;
    cursor: pointer;
  }
  .fa-brands{
    margin-top: 50px;
    font-size: 2rem;
    cursor: pointer;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 100px;
  }
  .copyright{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    color: #9095A0;
    font-size: 1rem;
  }
  .container-website{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    color: #9095A0;
    font-size: 1rem;
  }
  .logo-smankedo{
    width: 150px;
    height: 150px;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 300px;
    margin-top: 50px;
  }
  .logo-osis{
    width: 115px;
    height: 152px;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 300px;
    margin-top: 50px;
    object-fit: cover;
  }
  @media (max-width:826px) {
    .logo-osis{
     display: none;
    }
    .logo-smankedo{
     display: none;
    }
  }
`;



export default function Footer() {
  return (
    <FooterContainer>
      <img className="logo-smankedo" src={logo} alt="" />
    <div className="container">
    <i className="fa-brands item fa-youtube" onClick={() => window.location.href = "https://www.youtube.com/channel/UCv33E0kJFaWB2IN_KbCGEjQ"} style={{color:"#fffff"}}></i>
    <i className="fa-brands item fa-facebook" onClick={ () => window.location.href = "https://www.facebook.com/p/OSIS-SMAN-1-Kedokanbunder-100064946040086"} style={{color:"#fffff"}}></i>
    <i className="fa-brands fa-instagram" style={{color:"#fffff"}}></i>
    </div>
    <div className="container-website">
      Dibuat oleh Sekbid TIK OSIS SMANKEDO
    </div>
    <p className="copyright">@OSIS SMAN 1 KEDOKANBUNDER {new Date().getFullYear()}. All Right reserved</p>
    <img className="logo-osis" src={logo2} alt="" />
    </FooterContainer>
  )


}
