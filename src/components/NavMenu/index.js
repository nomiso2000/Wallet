import "./index.css";
import home from "../../img/home.svg";
import graph from "../../img/graph.svg";
import usd from "../../img/usd.svg";

function Main() {
  return (
    <main>
      <section className="main1">
        <div className="nav">
          <div className="nav-MD">
            <img src={home} alt="home" className="nav-home" />
            <p>Главная</p>
          </div>
          <div className="nav-MD">
            <img src={graph} alt="graph" className="nav-graph" />
            <p>Статистика</p>
          </div>
          <img src={usd} alt="usd" className="nav-usd" />
        </div>
      </section>
      <section className="main2"></section>
    </main>
  );
}

export default Main;