import React from 'react';
import Link from 'next/link';


interface Props { };

const Section: React.FC<Props> = () => {
  return (
    <div>
        <div id="colorlib-services" className="first">
			<div className="container-md">
				<div className="row">
                    <div className="col-sm-12 colorlib-heading">
                        <h2>Up to the Minute on Data and Analytics</h2>
                    </div>
                    <div className="col-sm-12 colorlib-text">
                        <p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu rutrum est. Curabitur et commodo erat. Morbi ullamcorper enim sed pharetra hendrerit. Donec pulvinar non leo quis porttitor. Morbi tincidunt metus a luctus porttitor. Aenean ut justo sem. Nulla fringilla pretium sem, ut consectetur tellus lacinia eu. Duis vel faucibus odio. Aenean et eleifend risus. Sed efficitur diam in nibh maximus, vel tincidunt dolor gravida. Integer euismod sem justo, ut lacinia urna pharetra vitae. Duis a lobortis lectus, sollicitudin eleifend eros. Vestibulum eu elementum nisl. Vestibulum bibendum vel orci id pulvinar. Mauris nec tortor diam. Curabitur sodales dictum vestibulum. Donec volutpat massa mauris, quis varius metus placerat id. Pellentesque ut pharetra nibh.
						</p>
                    </div>
				</div>
			</div>
		</div>
        <style jsx>{`
        #colorlib-services {
            padding-bottom: 10em;
            background: inherit;
            // padding-left: 10em;
            // padding-right: 10em;
        }

        .colorlib-heading h2 {
            font-size: 40px;
            font-weight: 700;
            margin-bottom: 30px;
        }
        .colorlib-text p {
            margin: 0 0 10px;
        }


        h2,p,h3,h4 {
            text-align: left;
        }

        h2 {
            color: #f8931f;
        }
        
        #colorlib-services .container {
            min-height: 400px;
            
        }
        #colorlib-services .container .sec-img {
            width: 500px;
            height: 100%;
            position: relative;
            display: inline-block;
            overflow: hidden;
            margin: 0;
        }

        #colorlib-services .container #section-img {
            display: block;
            width: 100%;
            height: auto;
            object-fit: contain;
            opacity: 90%;
            // box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.1);
        }
        
      `}</style>
    </div>
  );
};

export default Section;
