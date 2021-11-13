import Carousel from "react-bootstrap/Carousel";
import './Slider.css';

function Slider() {
    return (
        <div>
            <Carousel className="top-carousel Slider" variant="light">
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://in.bmscdn.com/promotions/cms/creatives/1633868816247_preshots_1240x300.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://in.bmscdn.com/promotions/cms/creatives/1636436877089_expo2020desktop.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://in.bmscdn.com/promotions/cms/creatives/1633548047240_navratrigiftcardcreative_promo_webshowcase_1240x300.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://in.bmscdn.com/promotions/cms/creatives/1633099172106_bas_oct21_finalbannerweb1240x300.png"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://in.bmscdn.com/promotions/cms/creatives/1633924754562_amazonoffer_1240x300revised.jpg"
                        alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;

