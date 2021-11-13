import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
const axios = require('axios');

function AllMoviesFetch() {
    const [data, setData] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        try {
            const response = await axios.get('http://localhost:5000/movies');
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <div className="all-movies">
            <h1>Upcoming Movies In Mumbai</h1>
            <div className="top-search">
                <div className="search-flex-box">
                    <h6>Hindi</h6>
                </div>
                <div className="search-flex-box">
                    <h6>English</h6>
                </div>
                <div className="search-flex-box">
                    <h6>Telugu</h6>
                </div>
                <div className="search-flex-box">
                    <h6>Tamil</h6>
                </div>
                <div className="search-flex-box">
                    <h6>Kannada</h6>
                </div>
                <div className="search-flex-box">
                    <h6>Malayalam</h6>
                </div>
                <div className="search-flex-box">
                    <h6>Marathi</h6>
                </div>
                <div className="search-flex-box">
                    <h6>Bengali</h6>
                </div>
                <div className="search-flex-box">
                    <h6>Punjabi</h6>
                </div>
                <div className="search-flex-box">
                    <h6>Gujarati</h6>
                </div>
                <div className="search-flex-box">
                    <h6>Bhojpuri</h6>
                </div>
                <div className="search-flex-box">
                    <h6>Oriya</h6>
                </div>
                <div className="search-flex-box">
                    <h6>Chattisgarhi</h6>
                </div>
                <div className="search-flex-box">
                    <h6>Assamese</h6>
                </div>
                <div className="search-flex-box">
                    <h6>Danish</h6>
                </div>
            </div>
            <Row className="all-movies-row">
                {data.map((mov) =>
                    <Col onClick={() => window.location.href = "/" + mov._id} key={mov.id} id={mov.id} xs={6} md={4} lg={3} style={{ padding: "2%" }}>
                        <img className="sec-2-cards" src={mov.image} alt="card"></img>
                        <h5 className="sec-2-title">{mov.title}</h5>
                        <p className="sec-2-desc">{mov.desc}</p>
                    </Col>
                )}
            </Row>

        </div>
    );
}

export default AllMoviesFetch;

