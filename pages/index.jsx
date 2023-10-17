import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <div className="b-example-divider"></div> */}

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://brunmk.github.io/portfolio/mockup-pine.jpg"
            className="d-block mx-lg-auto img-fluid"
            alt="mockup Banco Pine"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold lh-1 mb-3">Banco Pine</h2>
          <p className="lead">
            Agile business bank, with skills to develop profitable and long-term
            relationships.
            <br />
            Responsive site developed using Bootstrap, the world most popular
            front-end open source toolkit, responsive grid system, styling with
            Sass, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a
              href="https://ri.pine.com/Default.aspx?linguagem=en"
              target="_blank"
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Live
            </a>
            <a
              href="https://github.com/brunmk/websites/tree/main/banco-pine"
              target="_blank"
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Code
            </a>
          </div>
        </div>
      </div>

      {/* <div className="b-example-divider"></div> */}
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold lh-1 mb-3">Patrimar</h2>
          <p className="lead">
            Patrimar Group is among the country largest construction companies.
            <br />
            Responsive site developed using Bootstrap, the world most popular
            front-end open source toolkit, responsive grid system, styling with
            Sass, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a
              href="https://ri.patrimar.com.br/default.aspx?linguagem=en"
              target="_blank"
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Live
            </a>
            <a
              href="https://github.com/brunmk/websites/tree/main/patrimar"
              target="_blank"
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Code
            </a>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://brunmk.github.io/portfolio/mockup-patrimar.jpg"
            className="d-block mx-lg-auto img-fluid"
            alt="mockup Patrimar"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
      </div>

      {/* <div className="b-example-divider"></div> */}
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://brunmk.github.io/portfolio/mockup-habita.jpg"
            className="d-block mx-lg-auto img-fluid"
            alt="mockup Habitat"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold lh-1 mb-3">
            Habitat Capital Partners
          </h2>
          <p className="lead">
            It is an asset manager authorized by the CVM that focuses
            exclusively on the Real Estate Funds market, with R$555 million
            currently under management.
            <br />
            Responsive site developed using Bootstrap, the world most popular
            front-end open source toolkit, responsive grid system, styling with
            Sass, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a
              href="https://habt11.habitatcp.com.br/"
              target="_blank"
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Live
            </a>
            <a
              href="https://github.com/brunmk/websites/tree/main/habitat"
              target="_blank"
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      {/* <div className="b-example-divider"></div> */}

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold lh-1 mb-3">Repo Nextjs 13</h2>
          <p className="lead">
            This is a mini app showing some of the newest features of Nextjs 13
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a
              href="https://github.com/brunmk/github-repos"
              target="_blank"
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Code
            </a>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://brunmk.github.io/portfolio/next.png"
            className="d-block mx-lg-auto img-fluid"
            alt="mockup next"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
