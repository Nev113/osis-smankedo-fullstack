import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SekbidCard from "./src/component/CardSekbid";
import { useEffect, useState } from "react";
import supabase from "./config/supabaseConfig";
import Navbar from "./src/element/Navbar";

const Container = styled.div`
    position: relative;
    margin: 0px 50px;
    @media (max-width: 768px){
      margin: 100px 20px;
      .select-menu{
        font-size: 18px;
        margin-top: 50px;
        right: 0px;
      }
      .select-menu{
        font-size: 18px;
        top: 0px;
        right: 0px;
      }
      .title-main{
        font-size: 32px;
        margin: 50px 0 0 0;
      }
    }
    @media (max-width: 576px){
      margin: 100px 10px;
      .select-menu{
        font-size: 16px;
        margin-top: 50px;
        right: 0px;
      }
      .select-menu{
        font-size: 16px;
        top: 0px;
        right: 0px;
      }
      .title-main{
        font-size: 24px;
        margin: 50px 0 0 0;
      }
    }
`

const HeaderName = styled.div`
    margin: 100px 0 0 50px;
    font-size: 40px;
    weight: bold;
    @media (max-width: 768px){
      margin: 100px 0 0 20px;
      font-size: 32px;
    }
`
const SelectMenu = styled.select`
    background-color: white;
    border: none;
    position: absolute;
    top: 0px;
    right: 20px;
    font-size: 24px;
    weight: 10;
    @media (max-width: 768px){
      font-size: 18px;
      top: 0px;
      right: 0px;
    }
`

export default function Sekbid() {
  const [datas, setDatas] = useState([]);
  const [st, setSt] = useState(false)
  if (!st) {
    getData(2023);
    setSt(true);
  }
  async function getData(tahun) {
    const {error, data} = await supabase.from("seksi-bidang").select("*").eq("tahun", tahun)
    if (error) {
      console.log(error);
    }
    if (data) {
      setDatas(data);
    }
  } 
    return (
        <>
        <HelmetProvider>
                <Helmet>
                    <title>Seksi Bidang | OSIS SMANKEDO</title>
                </Helmet>
            </HelmetProvider>
            <Navbar></Navbar>
        <Container>
        <HeaderName className="title-main">Seksi Bidang</HeaderName>
        <SelectMenu className="select-menu">
            <option value={"2023"} onClick={() => getData(2023)} defaultValue={true}>Tahun Jabatan 2023</option>
            <option value={"2024"} onClick={() => getData(2024)}>Tahun Jabatan 2024</option>
        </SelectMenu>
        {datas.length === 0 ? <div className="loading fs-1 text-center" style={{marginTop: "100px"}}>Loading...</div> : null}
        {datas.map((d, i) => (<SekbidCard key={i} title={d.title} description={d.description} year={d.tahun} no={d.no} ></SekbidCard>))}
        </Container>
        </>
    )

}