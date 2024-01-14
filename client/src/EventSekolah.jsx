import React, { useState, useEffect } from "react";
import Navbar from "./element/Navbar";
import Card from "./component/Card";
import HeaderElement from "./component/HeaderElement";
import supabase from "../config/supabaseConfig";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";

 
const Container = styled.div`
    .container-card{
        margin-bottom: 150px;
    }
    `

export default function EventSekolah() {
    const [dataAcara, setDataAcara] = useState([]);
    const [imagesDataName, setImagesDataName] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getDataAcara();
            await getImagesData();
        };

        fetchData();
    }, []);

    const getDataAcara = async () => {
        const { data, error } = await supabase.from("acara-sekolah").select("*");
        if (error) {
            console.error(error);
        } else {
            setDataAcara(data);
        }
    };

    const getImagesData = async () => {
        const { data, error } = await supabase.storage.from('acara-bucket').list("image/");
        if (error) {
            console.error(error);
        } else {
            const imageData = await Promise.all(
                data.map(async (item) => {
                    item.metadata.url = await supabase.storage.from('acara-bucket').getPublicUrl("image/" + item.name);
                    return item;
                })
            );
            setImagesDataName(imageData);
        }
    };

    const formattedData = dataAcara.map((acara, index) => ({
        id: acara.id,
        title: acara.title,
        image: imagesDataName[index+1]?.metadata.url.data.publicUrl,
        date: acara.date,
        status: acara.status,
        sudah_dilaksanakan: acara.sudah_dilaksanakan,
        body: acara.body,
    }));
    return (
        <Container>
            <HelmetProvider>
                <Helmet>
                    <title>Event Sekolah | OSIS SMANKEDO</title>
                </Helmet>
            </HelmetProvider>
            <Navbar active={4} />
            <HeaderElement title={"Event / Acara Sekolah"}></HeaderElement>
            <div className="container-card">
                {formattedData.map((d) => (
                    <div key={d.title}>
                        <Card title={d.title} image={d.image} date={d.date} status={d.status} body={d.body} id={d.id} sudah_dilaksanakan={d.sudah_dilaksanakan}/>
                    </div>
                ))}
            </div>
        </Container>
    );
}
