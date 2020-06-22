import React from 'react';
import Link from 'next/link';


interface Props { };

const DataSection: React.FC<Props> = () => {
  return (
    <div>
        <div className="container data-showcase">
            <div className="row data-cards">
                <div className="card">
                    <img className="card-img-top" src="../images/league.png" alt="Card image cap"></img>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="../images/rocketleague.png" alt="Card image cap"></img>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="../images/csgo.png" alt="Card image cap"></img>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="../images/brain.png" alt="Card image cap"></img>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`

        .data-showcase {
            padding-bottom: 10em;
            background: inherit;
        }
        .data-cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: stretch;
        }
        .card {
            width: 250px;
            background: inherit;
        }

        .card img {
            width: 200px;
            height: 80px;
            margin: auto;
            -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
            filter: grayscale(100%);
            opacity: 50%;
        }
    

        

       
        
      `}</style>
    </div>
  );
};

export default DataSection;
