import React from "react";
// import ladelin_logo_2 from "./public/images"

const AboutWrapper = () => {
  return (
    <>
      <section className="awrapper" id='sobre'>
        <div className="container awrapper-grid">
          <div className="box flex">
            <div className="img">
              <img src="images/ladelin_logo_2.webp" alt="" />
            </div>
            <div className="text">
              <h2>O Ladelin</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. "At vero eos et accusamus et iusto odio
                dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias
                excepturi.. “
              </p>
              <div className="dflex">
                <button>SAIBA MAIS</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutWrapper;
