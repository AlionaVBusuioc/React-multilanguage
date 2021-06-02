import React, {Fragment, FC} from "react";
import Header from "../components/Header";
import aboutImg from "../assets/about.jpg";

interface AboutProps {
    translate: (key: string) => string
}

const About: FC<AboutProps> = ({translate}) => {
    return(
        <Fragment>
          <Header/>
          <section className="about">
              <div className="container">
                  <h1>{translate("greeting")}</h1>
                  <h1>{translate("question")}</h1>
              </div>
          </section>
        </Fragment>
    );
}
export default About;