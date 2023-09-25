import img1 from "../assets/images/firstProject.png";
import img2 from "../assets/images/randomPWGen.png";
import img3 from "../assets/images/codingQuiz.png";
import img4 from "../assets/images/workdayScheduler.png";
import img5 from "../assets/images/weatherDashboard.png";
import img6 from "../assets/images/flavorImper.png";

//add img3,.... here
import PortfolioCards from "../components/portfolioCards";
import styles from "./portfolio.module.css";

// add correct images and web and git addresses
export default function Portfolio() {
  return (
    <div className={styles.box1}>
      <PortfolioCards
        img={img1}
        title="Horiseon Website Debugged"
        web="https://christina2208.github.io/Horiseon-Website-Debugged/"
        git="https://github.com/Christina2208/Horiseon-Website-Debugged"
      ></PortfolioCards>

      <PortfolioCards
        img={img2}
        title="Random Password Generator"
        web="https://christina2208.github.io/Random-Password-Generator/"
        git="https://github.com/Christina2208/Random-Password-Generator"
      ></PortfolioCards>

      <PortfolioCards
        img={img3}
        title="Coding Quiz"
        web="https://christina2208.github.io/Code-Quiz/"
        git="https://github.com/Christina2208/Code-Quiz"
      ></PortfolioCards>

      <PortfolioCards
        img={img4}
        title="Workday Scheduler"
        web="https://christina2208.github.io/Work-Day-Scheduler/"
        git="https://github.com/Christina2208/Work-Day-Scheduler"
      ></PortfolioCards>

      <PortfolioCards
        img={img5}
        title="Weather Dashboard"
        web="https://christina2208.github.io/Weather-Dashboard/"
        git="https://github.com/Christina2208/Weather-Dashboard"
      ></PortfolioCards>

      <PortfolioCards
        img={img6}
        title="Flavor Impersonator"
        web="https://flavor-impersonator-2e87d3d63575.herokuapp.com/"
        git="https://github.com/ltuckr/flavor-impersonator"
      ></PortfolioCards>
    </div>
  );
}