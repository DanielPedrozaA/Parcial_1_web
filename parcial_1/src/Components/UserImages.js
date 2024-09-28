import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './UserImages.css';

const UserImages = () => {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const [selectedSession, setSelectedSession] = useState(null);

    const sportsData = {
        cycling: Array(10).fill({
            title: t('CyclingSession'),
            description: t('RecorridoBahia'),
            distance: '40k',
            duration: '2h10m',
            city: 'Cartagena'
        }),
        running: Array(10).fill({
            title: t('RunningSession'),
            description: t('RecorridoBahia'),
            distance: '10k',
            duration: '1h10m',
            city: 'Cartagena'
        }),
        swimming: Array(10).fill({
            title: t('SwimmingSession'),
            description: t('RecorridoBahia'),
            distance: '5k',
            duration: '1h00m',
            city: 'Cartagena'
        }),
    };

    const handleShowModal = (session) => {
        setSelectedSession(session);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container mt-5">
            <div className="row text-center">
                <div className="col">
                    <h2>{t('Cycling')}</h2>
                </div>
                <div className="col">
                    <h2>{t('Running')}</h2>
                </div>
                <div className="col">
                    <h2>{t('Swimming')}</h2>
                </div>
            </div>

            <div className="row">
                {['cycling', 'running', 'swimming'].map((sport, sportIndex) => (
                    <div key={sportIndex} className="col">
                        <div className="row">
                            {sportsData[sport].map((session, index) => (
                                <div key={index} className="col-6 mb-4">
                                    <div className="card" onClick={() => handleShowModal(session)} style={{ cursor: 'pointer' }}>
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
                                                {t('Distance')}: {session.distance} - {t('Duration')}: {session.duration}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {selectedSession && (
                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedSession.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        <img
                            src="https://picsum.photos/600/400"
                            alt={selectedSession.title}
                            className="img-fluid"
                        />
                        <p className="mt-3">{selectedSession.description}</p>
                        <p>{t('Distance')}: {selectedSession.distance} - {t('Duration')}: {selectedSession.duration}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            {t('Close')}
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default UserImages;
