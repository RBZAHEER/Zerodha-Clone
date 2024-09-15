import React from "react";
function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center ">
        <img
          src="media/images/homeHero.png"
          alt="heroImg"
          className="mb-5"
          // style={outerWidth}
        ></img>
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds,and
          more
        </p>
        <button
          type="button"
          class="btn btn-primary"
          style={{ width: "30%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
