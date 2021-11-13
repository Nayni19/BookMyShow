import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './movies.json';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router";

function SingleMovie() {
    const { movid } = useParams();
    return (
        <div>
            {data.map((movim) => {
                if (movim.id == movid) {
                    return (
                        <div style={{ backgroundImage: `url(${movim.bimage})` }} className="backimage">
                            <Row className="all-movies-row movie-card" >
                                {data.map((mov) => {
                                    if (mov.id == movid) {
                                        return (
                                            <div>
                                                <Row>
                                                    <Col key={mov.id} id={mov.id} xs={6} md={4} lg={3} style={{ padding: "1%" }}>
                                                        <img className="sec-2-cards" src={mov.image} alt="card"></img>
                                                    </Col>
                                                    <Col key={mov.id} id={mov.id} xs={6} md={8} lg={6} style={{ padding: "1%" }}>
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
                                                        <h5 className="back-desc">{mov.desc}</h5>
                                                    </Col>
                                                </Row>
                                            </div>
                                        )
                                    }
                                }
                                )}
                            </Row>
                        </div>
                    )
                }
            })}
            <div className="below-mov-sec">
            <div>
            <h3 className="about-mov">About the movie</h3>
            {data.map((mov)=> {
                if (mov.id == movid) {
                    return(
                        <p>{mov.about}</p>
                    )
                }
            })}
                
            </div>
                <hr style={{color: "grey"}} />
            </div>
        </div>
    );
}

export default SingleMovie;

