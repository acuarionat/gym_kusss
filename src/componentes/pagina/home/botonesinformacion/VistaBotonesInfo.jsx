import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardInfo from './CardInfo';
import { useNavigate } from 'react-router-dom';
import "./VistaBotonesInfoE.css";

const BotonesInfo = () => {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('https://665fc14e5425580055b0bc8c.mockapi.io/Project/api/v1/Pages')
            .then(response => {
                const botonesInfoData = response.data.find(page => page.BotonesInfo);
                if (botonesInfoData && botonesInfoData.BotonesInfo) {
                    const cardsWithRoutes = botonesInfoData.BotonesInfo.map(card => {
                        let route;
                        switch (card.titulo.toLowerCase()) {
                            case 'pérdida de grasa':
                                route = '/perdida-de-grasa';
                                break;
                            case 'como ganar masa muscula':
                                route = '/nutricion';
                                break;
                            case 'salud mental':
                                route = '/saludmental';
                                break;
                            default:
                                route = '/';
                        }
                        return {
                            ...card,
                            route
                        };
                    });
                    setCards(cardsWithRoutes);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="botones-scroll-container">
            {cards.map(card => (
                <div key={card.id} onClick={() => navigate(card.route)}>
                    <CardInfo
                        iconSrc={card.imagen}
                        iconAlt={card.titulo}
                        title={card.titulo}
                        description={card.descripcion}
                    />
                </div>
            ))}
        </div>
    );
};

export default BotonesInfo;
