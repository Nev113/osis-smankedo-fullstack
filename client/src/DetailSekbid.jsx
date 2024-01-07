import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";
import Navbar from "./element/Navbar";
import CardSekbidDetail from "./component/CardSekbidDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../config/supabaseConfig";

const Container = styled.div`
 margin: 100px 50px;
 @media (max-width: 768px){
    margin: 100px 20px;
     }
`
const TextHeader = styled.div`
    font-size: 32px;
    font-weight: bold;
    margin: 50px 0 0 0;
    @media (max-width: 768px){
        font-size: 24px;
        margin: 50px 0 0 0;
    }
`

export default function DetailedSekbid() {
  const [data, setData] = useState([]);
  async function getIdData() {
    const { id } = useParams();
    const { error, data } = await supabase.from("detail-sekbid").select("*").eq("no", id);
    if (error) console.log(error);
    if (data) setData(data);
  }
  getIdData();
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Detail Sekbid</title>
                </Helmet>
            </HelmetProvider>
            <Navbar />
            <Container>
                <TextHeader>{data[0]? data[0]["title"] : null}</TextHeader>
            {data[0] ? <CardSekbidDetail title={data[0].title} description={data[0].description} image={data[0].image} anggota={data[0].anggota} /> : null}
            </Container>
        </>
    )
}