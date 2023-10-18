import React from "react";

const UxUi = () => {
  return (
    <div className="py-5">
      <h1>UX/UI</h1>
      <div class="ratio ratio-16x9 my-5">
        <video
          src="https://brunmk.github.io/portfolio/video/inflency-01-edied.mp4"
          autoPlay
          loop
          muted
        ></video>
        <video src="./video/inflency-01-edied.mp4" autoPlay loop muted></video>
      </div>
      <div className="mb-4">
        <h2 className="display-5 fw-bold lh-1 mb-3">Influency.me</h2>
        <p className="lead">
          Part of the team responsible for the biggest influence marketing
          platform in Brazil with more than 300 brands and 5k influencers.
        </p>
      </div>
      <div class="ratio ratio-16x9 my-5">
        <video
          src="https://brunmk.github.io/portfolio/video/canvas.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="mb-4">
        <h2 className="display-5 fw-bold lh-1 mb-3">
          The Value Proposition Canvas
        </h2>
        <p className="lead">
          The Value Proposition Canvas is a tool which can help ensure that a
          product or service is positioned around what the customer values and
          needs.
          <br />
          Every day, companies design products and services to improve their
          customers' lives. However, a significant challenge exists in this
          process, as 72 percent of new product and service innovations fail to
          meet customer expectations. This means that most new products
          introduced to the market do not resonate with customers. Nevertheless,
          there is a solution. Similar to the way businesses create value for
          themselves using the business model canvas, there's a tool called the
          "value proposition canvas" that allows companies to intentionally
          visualise, design, and test how they create value for their customers.
        </p>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        {/* <a
          href="https://brunmk.github.io/portfolio/canvas.jpg"
          target="_blank"
          type="button"
          className="btn btn-primary btn-lg px-4 me-md-2"
        >
          Design System
        </a> */}
        <a
          href="https://github.com/brunmk/i13-ventures"
          target="_blank"
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
        >
          Code
        </a>
      </div>
      <div className="my-5">
        <h2>Design System</h2>
        <p className="lead">Featuring colors, typography, buttons and forms.</p>
        <img
          src="https://brunmk.github.io/portfolio/canvas.jpg"
          className="d-block mx-lg-auto img-fluid"
          alt="mockup canvas"
        />
      </div>
    </div>
  );
};

export default UxUi;
