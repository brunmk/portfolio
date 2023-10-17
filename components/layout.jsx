import React from "react";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xxl-3">
            <Navbar />
          </div>
          <div className="col-xxl">
            <div className="container vh-100 px-4 py-5">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
