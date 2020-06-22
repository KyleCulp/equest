import React from 'react';


interface Props { };

const Intro: React.FC<Props> = () => {
return (
    <div>
        <div className="viewcontainer first">
            <div className="colorlib-intro">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="intro">
                                <h1><span className="white-text">Esports</span> and <span className="white-text">Gaming</span> Data Experts</h1>
                                <p>The most accurate and easy to use esports and gaming data brought to you by the University of Central Oklahoma EQuest project</p>
                                <p> <a href="#" className="btn btn-primary btn-outline btn-md">Lean more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="colorlib-showcase">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="showcase-images">
                                <div className="image-div">
                                    <img id="showcase-img" className="small-logo img-fluid" src="../images/1152px-University_of_Central_Oklahoma_logo.svg.png" alt=""></img>
                                </div>
                                <div className="image-div">
                                    <img id="showcase-img" className="small-logo img-fluid" src="../images/FullLogoLight.png" alt=""></img>
                                </div>
                                <div className="image-div">
                                    <img id="showcase-img" className="small-logo img-fluid" src="../images/1489177465371.NAC_Logo1_Approved_Logo_9-1-16.png" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
        .viewcontainer {
            height: 80vh;
        }
        .viewcontainer hr {
            width: 50%;
            border-color: #f8931f;
        }

        .white-text {
            color: #f1f1f1;
        }

        .showcase-images {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .image-div {
            margin: 5px;
        }

        @media (min-width: 768px) { 
            .image-div {
                margin: 0 30px 0 30px;
            }
        }

        h1 {
            color: #f8931f;
            font-weight: 900;
            // text-shadow: 2px 2px #000000;
            font-family: "Poppins", Arial, sans-serif;
            line-height: 1.3;
            font-size: 36px;

        }
        p {
            margin: 20px 0 20px 0;
        }

        .btn {
            margin-right: 4px;
            margin-bottom: 4px;
            font-weight: 400;
            padding: 8px 20px;
        }
        .btn-md {
            padding: 12px 20px!important;
        }
        .btn-lg {
            padding: 18px 36px!important;
        }
        .btn:hover, .btn:active, .btn:focus {
            box-shadow: none!important;
            outline: none!important;
        }
        .btn-primary {
            background: #f8931f;
            color: #fff;
            border: 2px solid #f8931f;
        }
        .btn-primary:hover, .btn-primary:focus, .btn-primary:active {
            background: #f8931f!important;
            border-color: #f8931f!important;
        }
        .btn-outline {
            background: transparent;
            color: #f8931f;
            border: 2px solid #f8931f;
        }
        .btn-outline:hover, .btn-outline:focus, .btn-outline:active {
            background: #f8931f;
            color: #fff;
        }

        .colorlib-intro {
            padding-bottom: 5em;
        }

        #colorlib-showcase .container {
            margin-top: 50px;
            width: 100%;
            display: flex;
            justify-content: center;
        }
        #colorlib-showcase .container ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        #colorlib-showcase .container ul li {
            display: inline;
            margin: 0 50px 0 50px;
        }

        #showcase-img {
            width: 120px;
            height: auto;
            -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
            filter: grayscale(100%);
            opacity: 50%;
        }
    `}</style>
    </div>
  );
};

export default Intro;
