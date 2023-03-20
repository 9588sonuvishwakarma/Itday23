import React from 'react';
import slide1 from '../../images/slide-01.jpg';
import slide2 from '../../images/slide-02.jpg';
import slide3 from '../../images/slide-03.jpg';
import imgH1 from "../../images/imgH1.jpg";
import imgH from "../../images/imgH1.jpg";
import '.././overAllCss.css';
import Carousel from 'react-bootstrap/Carousel';
import imgH2 from "../../images/imgH2.jpg";
import './Section1_frontView.css';

const Section1_frontView = () => {
    return (
        <div>
            <section className="section1">
                <div className="container-fluid banner_spc_hide">
                    <div className="row">
                        <div className="col-sm-4 p-0">
                            <div className="banner-left">
                                <h4 classname="logoItem">ZFW</h4>
                                <h5 classname="logoItem">Zero Food Wastage</h5>
                                <a href='https://vishwakarmaorder.pythonanywhere.com/app2/form'>Get your Food</a>
                            </div>
                        </div>
                        <div className="col-sm-8 p-0 carousel">
                            <Carousel>
                                <Carousel.Item>
                                    <img src={imgH1} className="d-block " height="100%"></img>
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={imgH1} className="d-block " height="100%"></img>
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={imgH1} className="d-block " height="100%"></img>
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Section1_frontView;