import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Footer.css';
import { TelephoneOutbound } from 'react-bootstrap-icons';
import { Film } from 'react-bootstrap-icons';
import { EnvelopeOpen } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Github, Telegram, Reddit, Messenger } from 'react-bootstrap-icons';

function Footer() {
    return (
        <div className="complete-footer">
            <div className="footer">
                <Row>
                    <Col xs={10}><img alt="hut" src="https://in.bmscdn.com/webin/common/icons/hut.svg"></img><div className="space"></div><span className="footer-title">List your Show</span><div className="space"></div><span className="footer-desc">Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</span></Col>
                    <Col className="button-col" xs={2}><Button style={{ background: "#ec5e71" }}>Contact today!</Button></Col>
                </Row>
            </div>
            <div className="footer2">
                <Row >
                    <Col><TelephoneOutbound color="grey" size={40} /></Col>
                    <Col><Film color="grey" size={40} /></Col>
                    <Col><EnvelopeOpen color="grey" size={40} /></Col>
                </Row>
                <Row className="subtitles">
                    <Col>24/7 CUSTOMER CARE</Col>
                    <Col>RESEND BOOKING CONFIRMATION</Col>
                    <Col>SUBSCRIBE TO THE NEWSLETTER</Col>
                </Row>
            </div>
            <div className="footer small-letter">
                <h6>UPCOMING MOVIES</h6>
                <p>Venom: Let There Be Carnage | Maha Samudram | ESPORTS FESTIVAL | Srikrishna@gmail.com | Mana Mo Neigalu Re | Salaga | Raajavamsam | Aranmanai 3 | Thalli Pogathey | Kotigobba 3 | The Conversion | Pelli SandaD | Honsla Rakh | Gaon Ra Na Galuapur | Tari Sathe | Rashmi Rocket | Sanak | Dham Dham Dhammachakkdi | Nayanam | Sangi Janam Janam Ke</p>
                <h6>MOVIES BY GENRE</h6>
                <p>Venom: Let There Be Carnage | Maha Samudram | ESPORTS FESTIVAL | Srikrishna@gmail.com | Mana Mo Neigalu Re | Salaga | Raajavamsam | Aranmanai 3 | Thalli Pogathey | Kotigobba 3 | The Conversion | Pelli SandaD | Honsla Rakh | Gaon Ra Na Galuapur | Tari Sathe | Rashmi Rocket | Sanak | Dham Dham Dhammachakkdi | Nayanam | Sangi Janam Janam Ke | Tari Sathe | Rashmi Rocket | Sanak | Dham Dham Dhammachakkdi | Nayanam | Sangi Janam Janam Ke</p>
                <h6>MOVIES BY LANGUAGE</h6>
                <p>Venom: Let There Be Carnage | Maha Samudram | ESPORTS FESTIVAL | Srikrishna@gmail.com | Mana Mo Neigalu Re | Salaga | Raajavamsam | Aranmanai 3 | Thalli Pogathey | Kotigobba 3 | The Conversion | Pelli SandaD | Honsla Rakh | Gaon Ra Na Galuapur | Tari Sathe | Rashmi Rocket | Sanak | Dham Dham Dhammachakkdi | Nayanam | Sangi Janam Janam Ke | Tari Sathe | Rashmi Rocket | Sanak | Dham Dham Dhammachakkdi | Nayanam | Sangi Janam Janam Ke</p>
                <h6>PLAYS BY GENRE IN MUMBAI</h6>
                <p>Venom: Let There Be Carnage | Maha Samudram | ESPORTS FESTIVAL | Srikrishna@gmail.com | Mana Mo Neigalu Re | Salaga | Raajavamsam | Aranmanai 3 | Thalli Pogathey | Kotigobba 3 | The Conversion | Pelli SandaD | Honsla Rakh | Gaon Ra Na Galuapur | Tari Sathe | Rashmi Rocket | Sanak | Dham Dham Dhammachakkdi | Nayanam | Sangi Janam Janam Ke</p>
                <h6>MOVIE REVIEWS</h6>
                <p>Venom: Let There Be Carnage | Maha Samudram | ESPORTS FESTIVAL | Srikrishna@gmail.com | Mana Mo Neigalu Re | Salaga | Raajavamsam | Aranmanai 3 | Thalli Pogathey  </p>
                <h6>MOVIE UPDATES AND CELEBRITIES</h6>
                <p>Venom: Let There Be Carnage | Maha Samudram | ESPORTS FESTIVAL</p>
                <h6>THINGS TO DO IN MUMBAI</h6>
                <p>Venom: Let There Be Carnage | Maha Samudram | ESPORTS FESTIVAL | Srikrishna@gmail.com | Mana Mo Neigalu Re | Salaga | Raajavamsam | Aranmanai 3 | Thalli Pogathey | Kotigobba 3 | The Conversion | Pelli SandaD | Honsla Rakh | Gaon Ra Na Galuapur | Tari Sathe | Rashmi Rocket | Sanak | Dham Dham Dhammachakkdi | Nayanam | Sangi Janam Janam Ke</p>
                <h6>SPORTS EVENTS IN MUMBAI</h6>
                <p>Venom: Let There Be Carnage | Maha Samudram | ESPORTS FESTIVAL | Srikrishna@gmail.com | Mana Mo Neigalu Re | Salaga | Raajavamsam | Aranmanai 3 | Thalli Pogathey | Kotigobba 3 | The Conversion | Pelli SandaD | Honsla Rakh | Gaon Ra Na Galuapur | Tari Sathe | Rashmi Rocket | Sanak | Dham Dham Dhammachakkdi | Nayanam | Sangi Janam Janam Ke</p>
                <h6>EVENTS IN MUMBAI</h6>
                <p>Venom: Let There Be Carnage | Maha Samudram | ESPORTS FESTIVAL | Srikrishna@gmail.com | Mana Mo Neigalu Re | Salaga | Raajavamsam | Aranmanai 3 | Thalli Pogathey  </p>
                <h6>EVENTS IN TOP CITIES</h6>
                <p>Venom: Let There Be Carnage | Maha Samudram | ESPORTS FESTIVAL | Srikrishna@gmail.com | Mana Mo Neigalu Re | Salaga | Raajavamsam | Aranmanai 3 | Thalli Pogathey  </p>
                <h6>PLAYS IN TOP CITIES</h6>
                <p>Venom: Let There Be Carnage | Maha Samudram | ESPORTS FESTIVAL | Srikrishna@gmail.com | Mana Mo Neigalu Re | Salaga | Raajavamsam | Aranmanai 3 | Thalli Pogathey  </p>
                <h6>ACTIVITIES IN TOP CITIES</h6>
                <p>Venom: Let There Be Carnage | Maha Samudram | ESPORTS FESTIVAL | Srikrishna@gmail.com | Mana Mo Neigalu Re | Salaga | Raajavamsam | Aranmanai 3 | Thalli Pogathey  </p>
                <h6>MOVIES IN TOP CITIES</h6>
                <p>Venom: Let There Be Carnage | Maha Samudram | ESPORTS FESTIVAL | Srikrishna@gmail.com | Mana Mo Neigalu Re | Salaga | Raajavamsam | Aranmanai 3 | Thalli Pogathey  </p>
            </div>
            <div className="logo-part">
                <Row >
                    <Col xs={5}><hr /></Col>
                    <Col xs={2}><img alt="logo" src="https://in.bmscdn.com/webin/common/icons/logo.svg"></img></Col>
                    <Col xs={5}><hr /></Col>
                </Row>
                <div className="social-icons">
                    <div className="inner-social-icons"><Facebook color="grey" size={30} /></div>
                    <div className="inner-social-icons"><Github color="grey" size={30} /></div>
                    <div className="inner-social-icons"><Telegram color="grey" size={30} /></div>
                    <div className="inner-social-icons"><Reddit color="grey" size={30} /></div>
                    <div className="inner-social-icons"><Messenger color="grey" size={30} /></div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright 2021 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved. <br></br>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
            </div>
        </div>
    );
}

export default Footer;

