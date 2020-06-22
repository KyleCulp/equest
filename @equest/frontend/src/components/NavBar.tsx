import React from 'react';
import Link from 'next/link';


interface Props { };

const NavBar: React.FC<Props> = () => {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#"><img id="header-logo" src="../images/logo_no_text@2x.png" alt=""></img><span className="white-text">EQuest</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-toggle" aria-controls="nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav-toggle">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Research</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <style jsx>{`
        .navbar {
          padding-top: 2em;
          padding-bottom: 12em;
        }

        a {
          color: rgba(255, 255, 255, 0.3);
          padding: 20px 12px;
          font-size: 15px;
          transition: 0.5s;
          font-weight: 400;
          font-family: "Poppins", Arial, sans-serif;
        }
        a:hover, a:active, a:focus {
            color: #f8931f;
            outline: none;
            text-decoration: none;
        }
        #header-logo {
          width: 45px;
          padding: 0 5px 0 5px;
        }

        .white-text {
          color: #f1f1f1;
        }
      `}</style>
       

    </div>
  );
};

export default NavBar;
