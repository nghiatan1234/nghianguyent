import React, { Component } from 'react';
import './ArticleDetail.css';
import Slider from "react-slick";

class ArticleDetail extends Component {


    render() {
        var settings = {
            dots: true,
            infinite: true,
            arrow: false,
            speed: 500,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        };
        return (
            <div className="article-detail">
                <Slider {...settings}>
                    <div>
                        <img src="https://salt.tikicdn.com/cache/550x550/ts/product/07/56/49/d45d9887e53ea330eea1fea516313dd4.jpg" />
                    </div>
                    <div>
                        <img src="https://salt.tikicdn.com/cache/550x550/ts/product/2e/eb/ad/9558a365adde6688d4c71a200d78310c.jpg" />
                    </div>
                    <div>
                        <img src="https://salt.tikicdn.com/cache/550x550/ts/product/3b/68/ac/59cd4f094ff3cb23364037690556e456.jpg" />
                    </div>
                    <div>
                        <img src="https://salt.tikicdn.com/cache/550x550/media/catalog/product/c/o/con_cho_nho_bia_thuong_bia_1_1.jp" />
                    </div>
                    <div>
                        <img src="https://salt.tikicdn.com/cache/550x550/media/catalog/product/o/n/one_piece_art_book.png" />
                    </div>
                </Slider>
            </div>
        )
    }
}

export default ArticleDetail;
