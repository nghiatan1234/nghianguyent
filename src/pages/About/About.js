import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about-content about-padding about-page">
                <div className="about-container about-padding-32" id="about">
                    <h3 className="about-border-bottom about-border-light-grey about-padding-16">About</h3>
                    <p className="text-data">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div>
                <div className="about-row-padding about-grayscale">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 about-margin-bottom">
                            <img width="400" height="300" src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/33471870_1820372774693257_7190380873957507072_n.jpg?_nc_cat=111&_nc_ht=scontent.fsgn5-3.fna&oh=2f91118fb4deaa5d84b623e1358fa682&oe=5C658EC6" alt="Long" />
                            <h3>Long Nguyen</h3>
                            <p className="about-opacity">Senior Fullstack Developer</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 about-margin-bottom">
                            <img width="400" height="300" src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/15085478_10209445223621916_7660302575220269264_n.jpg?_nc_cat=104&_nc_ht=scontent.fsgn5-4.fna&oh=90065b50a18f3f7c8db548677e22ee93&oe=5CB110FC" alt="Hieu" />
                            <h3>Hieu Nguyen</h3>
                            <p className="about-opacity">Solution Architect</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 about-margin-bottom">
                            <img width="400" height="300" src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/26219515_847011508793293_2806574557466973305_n.jpg?_nc_cat=104&_nc_ht=scontent.fsgn5-4.fna&oh=c2223036b9d15660beab8e06bca73a9c&oe=5CA6DDD3" alt="Phuc" />
                            <h3>Phuc Le</h3>
                            <p className="about-opacity">Senior Fullstack Developer</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 about-margin-bottom">
                            <img width="400" height="300" src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/16003264_1095507367227027_4762150063735911526_n.jpg?_nc_cat=104&_nc_ht=scontent.fsgn5-4.fna&oh=30cb7a3ff830460972bfa4bd6f232123&oe=5CAE4919" alt="Nghia" />
                            <h3>Nghia Nguyen</h3>
                            <p className="about-opacity">Senior Frontend</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
