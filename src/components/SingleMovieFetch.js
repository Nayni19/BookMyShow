import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router";
import { useEffect, useState } from 'react';
const axios = require('axios');



function SingleMovieFetch() {

    const { movid } = useParams();
    const [singledata, setSingleData] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        try {
            const response = await axios.get(`http://localhost:5000/${movid}`);
            setSingleData([response.data]);
        } catch (error) {
            console.error(error);
        }
    }, [movid]);

    return (
        <div>
            {singledata.map((movim) => {
                return (
                    <div key={movim._id} id={movim._id} style={{ backgroundImage: `url(${movim.bimage})` }} className="backimage">


                        <Row className="all-movies-row movie-card" >
                            {singledata.map((mov) => {
                                return (
                                    <div>
                                        <Row>
                                            <Col key={mov._id} id={mov._id}  md={4} lg={3} style={{ padding: "1%" }}>
                                                <img className="sec-2-cards" src={mov.image} alt="card"></img>
                                            </Col>
                                            <Col key={mov._id} id={mov._id}md={8} lg={6} style={{ padding: "1%" }}>
                                                <h1 className="back-title">{mov.title}</h1>
                                                <div className="back-border">
                                                    <Row className="box">
                                                        <Col md={8} className="mar-cent">
                                                            <p className="back-date">Realeasing on {mov.date}</p>
                                                            <p className="back-int">Mark Interested to know when bookings open</p>
                                                        </Col>
                                                        <Col md={4} className="mar-cent but-imt">
                                                            <Button variant="light">I'm Interested</Button>
                                                        </Col>
                                                    </Row>

                                                </div>
                                                <h5 key={mov._id} id={mov._id} className="back-desc">{mov.desc}</h5>
                                            </Col>
                                        </Row>
                                    </div>
                                )

                            }
                            )}
                        </Row>
                    </div>
                )
            })}
            <div className="below-mov-sec">
                <div>
                    <h3 className="about-mov">About the movie</h3>
                    {singledata.map((mov) => {
                        return (
                            <p key={mov._id} id={mov._id}>{mov.about}</p>
                        )
                    })}

                </div>
                <hr style={{ color: "grey" }} />
            </div>
        </div>
    );
}

export default SingleMovieFetch;

