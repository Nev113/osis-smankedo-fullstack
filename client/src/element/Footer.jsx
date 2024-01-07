import styled from "styled-components";
import logo from "../component/logo-smankedo.png";

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  height: auto;
  background-color: #171a1f;
  color: #f1f6f9;
  border-top: 1px solid grey;
  padding: 30px;
  text-align: center;

  .logo {
    width: 800px;
    max-width: 100%;
    height: 500px;
    object-fit: cover;
    margin: 20px auto;
  }

  .social-links {
    margin-top: 20px;

    a {
      color: #f1f6f9;
      margin: 0 10px;
      font-size: 24px;
      transition: 0.3s;

      &:hover {
        color: #ff0000;
        transform: scale(1.2);
      }
    }
  }
  @media (max-width: 768px) {
    .logo {
      height: 200px;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <footer className="footer">
        <div className="container">
          <img className="logo" src="https://picsum.photos/800/500" alt="" />
          <h2>We Are OSIS SMANKEDO</h2>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </footer>
    </FooterContainer>
  );
}
