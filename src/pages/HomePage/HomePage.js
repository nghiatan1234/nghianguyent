import React, { Component } from 'react';
import Articles from '../../components/Articles/Articles';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../../components/Menu/Menu';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <section className="bgimage">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                
                            </div>
                        </div>
                    </div>
                </section>
                <Articles />
                <Footer />
            </div>
        );
    }
}

export default HomePage;
