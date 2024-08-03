import React from "react";

export default function Details() {
  return (
    <section className="text-white" id="details">
      <div className="container">
      <div className="row gy-5">
        <div className="col-md-4">
          <div className="text-center d-flex flex-column row-gap-2">
            <h3 className="text-uppercase m-0 p-0">location</h3>
            <p className="m-0 p-0">2215 John Daniel Drive</p>
            <p className="m-0 p-0">Clark, MO 65243</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <h3>AROUND THE WEB</h3>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <div className="icon">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="icon">
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
