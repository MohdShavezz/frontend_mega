import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1f2937" }}
      >
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section className="">
            <div className="row">
              {/* Company column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Company name
                </h6>
                <p className="text-sm font-medium">
                Proficient software developer skilled in designing and developing real-time applications using advanced technologies for optimal solutions.
                </p>
              </div>

              {/* Products column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Products
                </h6>
                {["MDBootstrap", "MDWordPress", "BrandFlow", "Bootstrap Angular"].map(
                  (product, index) => (
                    <p key={index}>
                      <a href="#!" className="text-white text-sm font-medium">
                        {product}
                      </a>
                    </p>
                  )
                )}
              </div>

              {/* Contact column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p className="text-sm font-medium">
                  <i className="fa fa-home mr-3"></i> Lucknow 226003, IND
                </p>
                <p className="text-sm font-medium">
                  <i className="fa fa-envelope mr-3"></i> shaveza493@gmail.com
                </p>
                <p className="text-sm font-medium">
                  <i className="fa fa-phone mr-3"></i> + 91 896 036 0768
                </p>
                <p className="text-sm font-medium">
                  <i className="fa fa-print mr-3"></i> + 91 896 036 0768
                </p>
              </div>

              {/* Follow Us column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Follow us
                </h6>
                {[
                  { platform: "facebook", color: "#3b5998", icon: "fa fa-facebook" },
                  { platform: "twitter", color: "#55acee", icon: "fa fa-twitter" },
                  { platform: "google", color: "#dd4b39", icon: "fa fa-google" },
                  { platform: "instagram", color: "#ac2bac", icon: "fa fa-instagram" },
                   // { platform: "linkedin", color: "#0082ca", icon: "fab fa-linkedin-in" },
                  { platform: "github", color: "#333333", icon: "fa fa-github" },
                ].map(({ platform, color, icon }, index) => (
                  <a
                    key={index}
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: color }}
                    href="#"
                    role="button"
                    aria-label={platform}
                  >
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Copyright */}
        <div
          className="text-center p-3 text-md font-medium"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:{" "}
          <a className="text-white" href="#">
            Manxxshavez
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
