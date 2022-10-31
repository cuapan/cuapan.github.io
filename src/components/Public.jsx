import { ArrowUpLeft, ArrowUpRight } from "react-bootstrap-icons";
import Register from "../features/auth/Register";
import RegisterPublic from "../features/auth/RegisterPublic";
import PublicFooter from "./PublicFooter";
import PublicHeader from "./PublicHeader";

const Public = () => {
  return (
    <>
      <PublicHeader />
      <div class="container">
        <div class="row">
          <div class="col-8 text-center text-lg-start ">
            <h1 class="display-4 fw-bold lh-1">Welcome to the Cuapan App</h1>
            <p class="col-lg-10 fs-4">
              To use the app, start the replit server, then create an account or
              login to an existing one
            </p>
            <a
              href="https://replit.com/@TaufiqIdrus/cuapan-backend"
              target={"_blank"}
              className="btn btn-warning btn-lg"
            >
              Start server <ArrowUpRight />
            </a>
          </div>
          <div class="col-4">
            <RegisterPublic />
          </div>
        </div>
      </div>
      <PublicFooter />
    </>
  );
};
export default Public;
