import Carousel from "react-bootstrap/Carousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Premieres() {
    return (
        <div>

            <div className="Section3">
                <img className="sec-3-img" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Section 2"></img>
                <h1>Premieres</h1>
                <p>Brand new releases every Friday</p>
                <Carousel wrap={false} interval={null} indicators={false} className="top-carousel sec3-carousel" variant="dark">
                    <Carousel.Item >
                        <Row className="carousel-row">
                            <Col>
                                <img className="sec-3-cards" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122455-lwtatstyvd-portrait.jpg" alt="card"></img>
                                <h5 className="sec-3-title">The Conjuring: The Devil Made Me Do It</h5>
                                <p className="sec-3-lang">English</p>
                            </Col>
                            <Col>
                                <img className="sec-3-cards" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-krhwkssbul-portrait.jpg" alt="card"></img>
                                <h5 className="sec-3-title">The Suicide Squad</h5>
                                <p className="sec-3-lang">English</p>
                            </Col>
                            <Col>
                                <img className="sec-3-cards" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00304964-sppgefaccr-portrait.jpg" alt="card"></img>
                                <h5 className="sec-3-title">Rewind</h5>
                                <p className="sec-3-lang">Kannada</p>
                            </Col>
                            <Col>
                                <img className="sec-3-cards" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312486-vmhtawzpws-portrait.jpg" alt="card"></img>
                                <h5 className="sec-3-title">Death of Me</h5>
                                <p className="sec-3-lang">English</p>
                            </Col>
                            <Col>
                                <img className="sec-3-cards" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-rrsywzepzb-portrait.jpg" alt="card"></img>
                                <h5 className="sec-3-title">Zack Snyder`s Justice League</h5>
                                <p className="sec-3-lang">English</p>
                            </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Row className="carousel-row">
                            <Col>
                                <img className="sec-3-cards" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301282-dnzbnayacy-portrait.jpg" alt="card"></img>
                                <h5 className="sec-3-title">Kabullywood</h5>
                                <p className="sec-3-lang">Farsi</p>
                            </Col>
                            <Col>
                                <img className="sec-3-cards" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312642-blnurwblux-portrait.jpg" alt="card"></img>
                                <h5 className="sec-3-title">Honest Thief</h5>
                                <p className="sec-3-lang">English</p>
                            </Col>
                            <Col>
                                <img className="sec-3-cards" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122532-qcgacjzxdc-portrait.jpg" alt="card"></img>
                                <h5 className="sec-3-title">Venom: Let There Be Carnage</h5>
                                <p className="sec-3-lang">English</p>
                            </Col>
                            <Col>
                                <img className="sec-3-cards" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00311591-cdufynwmlq-portrait.jpg" alt="card"></img>
                                <h5 className="sec-3-title">Mojin - The Treasure Valley</h5>
                                <p className="sec-3-lang">English</p>
                            </Col>
                            <Col>
                                <img className="sec-3-cards" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00304063-lhucxfrvtz-portrait.jpg" alt="card"></img>
                                <h5 className="sec-3-title">The Climb</h5>
                                <p className="sec-3-lang">English</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Premieres;

