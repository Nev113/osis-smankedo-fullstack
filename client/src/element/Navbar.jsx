import styled from "styled-components";
import logo from "./pngwing.com.png";
//#f1f6f9
//#394867


const Nav = styled.nav`
    max-width: 100%;
    .navbar{
        position: fixed;
        top: 0;
        width: 100%;
        backdrop-filter: blur(10px) saturate(50%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(255, 255, 255, 0.45);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 100;
    }
    .text-navbar{
        color: black;
        font-weight: bold;
        padding: 0 10px;
        margin: 0;
        border-right: 1px solid black;
    }
    @media (max-width: 700px){
    max-width: 90%;
    }
    `
export default function Navbar() {
    return (
        <Nav>
        <nav className="navbar navbar-light navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img width="40px" src={logo} alt="" /><span className="text-navbar">OSIS SMANKEDO</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item " id="nav-1">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item " id="nav-2">
                            <a className="nav-link" href="/sekbid">Seksi Bidang</a>
                        </li>
                        <li className="nav-item " id="nav-4">
                            <a className="nav-link" href="/event-sekolah">Acara Sekolah</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </Nav>
    );
}
