import React from 'react';
import "./UserImages.css"

const UserImages = () => {
    const sportsData = {
        cycling: Array(10).fill({
            title: 'Cycling Session',
            description: 'Recorrido alrededor de la bahía de Cartagena',
            distance: '40k',
            duration: '2h10m',
            city: 'Cartagena'
        }),
        running: Array(10).fill({
            title: 'Running Session',
            description: 'Recorrido alrededor de la bahía de Cartagena',
            distance: '10k',
            duration: '1h10m',
            city: 'Cartagena'
        }),
        swimming: Array(10).fill({
            title: 'Swimming Session',
            description: 'Recorrido alrededor de la bahía de Cartagena',
            distance: '5k',
            duration: '1h00m',
            city: 'Cartagena'
        }),
    };

    return (
        <div className="container mt-5">
            <div className="row text-center">
                <div className="col">
                    <h2>Cycling</h2>
                </div>
                <div className="col">
                    <h2>Running</h2>
                </div>
                <div className="col">
                    <h2>Swimming</h2>
                </div>
            </div>

            <div className="row">
                {['cycling', 'running', 'swimming'].map((sport, sportIndex) => (
                    <div key={sportIndex} className="col">
                        <div className="row">
                            {sportsData[sport].map((session, index) => (
                                <div key={index} className="col-6 mb-2">
                                    <div className="card">
                                        <img
                                            src={`https://picsum.photos/300/200?random=${index}`}
                                            alt={session.title}
                                            className="card-img-top"
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{session.title}</h5>
                                            <p className="card-text">
                                                {session.description} <br />
                                                {session.distance} - {session.duration}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserImages;
