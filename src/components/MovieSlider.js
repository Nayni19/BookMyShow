import Carousel from "react-bootstrap/Carousel";
import './Slider.css';

function MovieSlider() {
    return (
        <div>
            <Carousel className="top-carousel Slider" variant="light">
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://in.bmscdn.com/promotions/cms/creatives/1635327600351_freeacessdesktop.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://in.bmscdn.com/promotions/cms/creatives/1635399009148_inoxbannerdesktop.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://in.bmscdn.com/promotions/cms/creatives/1636721585042_mkt_lastnightinsoho_webshowcase_1240x300.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://in.bmscdn.com/promotions/cms/creatives/1636717141147_mkt_sooryavanshireview_1240x300.jpg"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MovieSlider;

