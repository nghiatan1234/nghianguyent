import React, { Component } from 'react';
import Article from '../Article/Article';


class Articles extends Component {
    state = {
        articles: [
            {
                "id": "1",
                "name": "Sherlock Holmes",
                "author": "Sir Arthur Conan Doyle",
                "desciption": "",
                "price" : 50,
                "image": "https://salt.tikicdn.com/cache/550x550/ts/product/07/56/49/d45d9887e53ea330eea1fea516313dd4.jpg"
            },
            {
                "id": "2",
                "name": "Đắc nhân tâm",
                "author": "Dale Carnegie",
                "desciption": "",
                "price" : 100,
                "image": "https://salt.tikicdn.com/cache/550x550/ts/product/2e/eb/ad/9558a365adde6688d4c71a200d78310c.jpg"
            },
            {
                "id": "3",
                "name": "Thám tử lừng danh Conan",
                "author": "Gosho Aoyama",
                "desciption": "",
                "price" : 10,
                "image": "https://salt.tikicdn.com/cache/550x550/ts/product/3b/68/ac/59cd4f094ff3cb23364037690556e456.jpg"
            },
            {
                "id": "4",
                "name": "Con Chó Nhỏ Mang Giỏ Hoa Hồng",
                "author": "Nguyễn Nhật Ánh",
                "desciption": "Con Chó Nhỏ Mang Giỏ Hoa Hồng",
                "price" : 34,
                "image": "https://salt.tikicdn.com/cache/550x550/media/catalog/product/c/o/con_cho_nho_bia_thuong_bia_1_1.jpg"
            },
            {
                "id": "5",
                "name": "Artbook One Piece Color Walk",
                "author": "Eiichiro Oda",
                "desciption": "Artbook One Piece Color Walk",
                "price" : 34,
                "image": "https://salt.tikicdn.com/cache/550x550/media/catalog/product/o/n/one_piece_art_book.png"
            },
            {
                "id": "6",
                "name": "Bão Lửa U23 – Thường Châu Tuyết Trắng",
                "author": "Nhiều Tác Giả",
                "desciption": "Bão Lửa U23 – Thường Châu Tuyết Trắng",
                "price" : 8,
                "image": "https://salt.tikicdn.com/cache/550x550/ts/product/f9/0a/43/f8a1df0c1150ef7cabeb77e6fc27f03d.jpg"
            }
        ]
    };
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {
                            this.state.articles.map((article, index) => {
                                return (
                                    <Article
                                        key={index}
                                        name={article.name}
                                        image={article.image}
                                        author={article.author}
                                        price={article.price}
                                        index={article.id}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Articles;
