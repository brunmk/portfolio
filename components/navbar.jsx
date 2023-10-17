import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const classLink =
    "nav-link text-decoration-underline link-offset-3 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover";
  return (
    <>
      <aside className="side-menu">
        <nav className="nav flex-lg-column mb-4 pb-3 pb-md-2 pe-lg-2">
          <Link
            className={pathname == "/" ? classLink + " active" : classLink}
            // className="nav-link text-decoration-underline link-offset-3 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="/"
          >
            Home
          </Link>
          <Link
            className={
              pathname == "/about-me" ? classLink + " active" : classLink
            }
            // className="nav-link text-decoration-underline link-offset-3 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="/about-me"
          >
            About me
          </Link>
          <Link
            className={pathname == "/ux-ui" ? classLink + " active" : classLink}
            // className="nav-link text-decoration-underline link-offset-3 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="/ux-ui"
          >
            UX/UI Design
          </Link>
        </nav>
        <nav className="nav flex-lg-column mb-0 pb-3 pb-md-2 pe-lg-2">
          <a
            target="_blank"
            className="nav-link text-decoration-underline link-offset-3 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="https://www.linkedin.com/in/bruno-kobayashi/"
          >
            Linkedin
          </a>
          <a
            target="_blank"
            className="nav-link text-decoration-underline link-offset-3 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="https://github.com/brunmk"
          >
            Github
          </a>
          <a
            target="_blank"
            className="nav-link text-decoration-underline link-offset-3 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="mailto:brunmk@gmail.com"
          >
            Email
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
