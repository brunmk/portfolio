import React from "react";

const UxUi = () => {
  return (
    <div className="py-5">
      <h1>UX/UI</h1>
      <div class="ratio ratio-4x3">
        <video
          src="https://brunmk.github.io/portfolio/video/canvas.mp4"
          autoPlay
          loop
          muted
        ></video>
        <video src="./video/canvas.mp4" autoPlay loop muted></video>
      </div>
      <div className="mb-4">
        <h2 className="display-5 fw-bold lh-1 mb-3">
          The Value Proposition Canvas
        </h2>
        <p className="lead">
          The Value Proposition Canvas is a toll which can help ensure that a
          product or service is positioned around what the customer values and
          needs.
          <br />
          Design system and prototype.
        </p>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <a
          href="https://brunmk.github.io/portfolio/canvas.jpg"
          target="_blank"
          type="button"
          className="btn btn-primary btn-lg px-4 me-md-2"
        >
          Design System
        </a>
        <a
          href="https://github.com/brunmk/i13-ventures"
          target="_blank"
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default UxUi;
