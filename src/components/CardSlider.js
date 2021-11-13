import Carousel from "react-bootstrap/Carousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function CardSlider() {
    return (
        <div>

            <div className="Section2">
                <img className="sec-2-img"src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png" alt="Section 2"></img>
                <h1>The Best of Entertainment</h1>
                <Carousel wrap={false} interval={null} indicators={false} className="top-carousel sec2-carousel" variant="light">
                    <Carousel.Item >
                        <Row className="carousel-row">
                            <Col>
                                <img className="sec-2-cards" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTU1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="card"></img>
                            </Col>
                            <Col>
                                <img className="sec-2-cards" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png" alt="card"></img>
                            </Col>
                            <Col>
                                <img className="sec-2-cards" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NDUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png" alt="card"></img>
                            </Col>
                            <Col>
                                <img className="sec-2-cards" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NzArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png" alt="card"></img>
                            </Col>
                            <Col>
                                <img className="sec-2-cards" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png" alt="card"></img>
                            </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Row className="carousel-row">
                            <Col>
                                <img className="sec-2-cards" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png" alt="card"></img>
                            </Col>
                            <Col>
                                <img className="sec-2-cards" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png" alt="card"></img>
                            </Col>
                            <Col>
                                <img className="sec-2-cards" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/cooking-collection-202007222211.png" alt="card"></img>
                            </Col>
                            <Col>
                                <img className="sec-2-cards" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png" alt="card"></img>
                            </Col>
                            <Col>
                                <img className="sec-2-cards" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/art-and-crafts-collection-202007220710.png" alt="card"></img>
                            </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Row className="carousel-row">
                            <Col>
                                <img className="sec-2-cards" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/theatre-shows-collection-202012041128.png" alt="card"></img>
                            </Col>
                            <Col>
                                <img className="sec-2-cards" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/adventure-collection-202010140844.png" alt="card"></img>
                            </Col>
                            <Col>

                            </Col>
                            <Col>

                            </Col>
                            <Col>

                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default CardSlider;

