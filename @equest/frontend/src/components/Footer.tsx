import React from 'react';
import Link from 'next/link';


interface Props { };

const Footer: React.FC<Props> = () => {
  return (
    <div>
        {/* <div className="container pt-5">
            <div className="row row-pb-md">
                <div className="col-md-3 colorlib-widget">
                    <h4>Copyright </h4>
                    <p>Equest staff nor the University of Central Oklahoma own or claim to own any data that comes from video games. We claim no responsibility for the misuse of data.</p>
                    <ul className="colorlib-social-icons">
                        <li><a href="#"><i className="icon-twitter"></i></a></li>
                        <li><a href="#"><i className="icon-facebook"></i></a></li>
                        <li><a href="#"><i className="icon-linkedin"></i></a></li>
                        <li><a href="#"><i className="icon-dribbble"></i></a></li>
                    </ul>
                </div>
                <div className="col-md-3 colorlib-widget">
                    <h4>Information</h4>
                    <ul className="colorlib-footer-links">
                        <li><a href="#"><i className="icon-check"></i> About</a></li>
                        <li><a href="#"><i className="icon-check"></i> Privacy</a></li>
                        <li><a href="#"><i className="icon-check"></i> Terms &amp; Condition</a></li>
                        <li><a href="#"><i className="icon-check"></i> Contact</a></li>
                    </ul>
                </div>

                <div className="col-md-3 colorlib-widget">
                    <h4>Recent</h4>
                    <div className="f-blog">
                        <a href="blog.html" className="blog-img">
                        </a>
                        <div className="desc">
                            <h2><a href="blog.html">Become an Esports Researcher</a></h2>
                            <p className="admin"><span>20 March 2018</span></p>
                        </div>
                    </div>
                    <div className="f-blog">
                        <a href="blog.html" className="blog-img">
                        </a>
                        <div className="desc">
                            <h2><a href="blog.html">How can esports and gaming data be used?</a></h2>
                            <p className="admin"><span>20 March 2018</span></p>
                        </div>
                    </div>
                    <div className="f-blog">
                        <a href="blog.html" className="blog-img">
                        </a>
                        <div className="desc">
                            <h2><a href="blog.html">UCO announces arena open for business</a></h2>
                            <p className="admin"><span>20 March 2018</span></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 colorlib-widget">
                    <h4>Contact Info</h4>
                    <ul className="colorlib-footer-links">
                        <li><a href="mailto:info@yoursite.com"><i className="icon-envelope"></i> info@equest.pro</a></li>
                        <li><a href="http://equest.pro"><i className="icon-location4"></i> equest.pro</a></li>
                    </ul>
                </div>
            </div>
        </div> */}
        <div className="copy">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            <small className="block">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</small>      
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
