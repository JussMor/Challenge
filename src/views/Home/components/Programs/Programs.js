import React, { Component } from "react";
import HeaderSections from "../../../../components/common/HeaderSection/HeaderSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Tabs, Tab } from "react-bootstrap";
import styles from "./Programs.module.scss";

const times = <FontAwesomeIcon icon={faTimes} />;
const check = <FontAwesomeIcon icon={faCheck} />;

export default class Programs extends Component {
  state = {
    provenance: [
      { id: 1, list: "Legend of the origin of coffee." },
      { id: 2, list: "- Chronicle of the spread of the coffee tree" },
      { id: 3, list: "- What is coffee?" },
      { id: 4, list: "- The structure of the coffee berry" },
      { id: 5, list: "- Arabica and Robusta" },
      { id: 6, list: "- Coffee Belt land" },
      { id: 7, list: "- Fruiting coffee tree" },
      { id: 8, list: "- Seven steps of the coffee plantation to the consumer" },
      { id: 9, list: "- Breeding and hybridization of coffee tree" },
    ],
    production: [
      { id: 10, list: "- Methods for collecting coffee berries" },
      { id: 12, list: "- Processing collected berries" },
      { id: 13, list: "- Calibration and sorting" },
      {
        id: 14,
        list: "- Some methods of classification and labeling of coffee beans.",
      },
      { id: 15, list: "- Formation of grade names." },
      { id: 16, list: "- Storage of green (not fried) Coffee" },
    ],
    roasting: [
      { id: 17, list: "- The technology of roasting coffee beans." },
      { id: 18, list: "- Changes in the beans." },
      { id: 19, list: "- Stages and types of roasting." },
      { id: 20, list: "- Roasted coffee. Monosorta and hood." },
      { id: 21, list: "- Decaffeination of coffee" },
      { id: 22, list: "- Flavoring" },
      { id: 23, list: "- Storage roasted coffee" },
    ],
    table: [
      {
        id: 24,
        icon: check,
        list: "Coffee machine and grinder - practice - types of coffee machines and coffee grinders",
      },
      {
        id: 25,
        icon: check,
        list: "What makes professional coffee machines and coffee grinders.",
      },
      {
        id: 26,
        icon: times,
        list: "Main components of coffee machines and coffee-Lathes, autolathes. Their purpose",
      },
      {
        id: 27,
        icon: times,
        list: "How to choose a coffee machine and coffee grinder",
      },
      {
        id: 28,
        icon: times,
        list: "The structure of the machine. How to maintain, clean and customize coffee machine",
      },
      {
        id: 29,
        icon: times,
        list: "The structure of the grinders. How to maintain, clean and customize coffee Molko",
      },
      {
        id: 30,
        icon: check,
        list: "Making beverages - praktika- machines and espresso rules",
      },
      { id: 31, icon: times, list: "Technology and regulations frothed milk" },
      { id: 32, icon: times, list: "Terms of tasting coffee" },
      {
        id: 33,
        icon: times,
        list: "Terms of preparation of standard drinks line: espresso, cappuccino, latte and others.",
      },
      {
        id: 34,
        icon: times,
        list: "Latte Art - Features practice and the importance of Latte Art in business and the barista",
      },
      { id: 35, icon: times, list: "1 views Latte Art - Pitching" },
      { id: 36, icon: times, list: "2 views Latte Art - topping" },
      { id: 37, icon: times, list: "3 views Latte Art - Etching" },
      {
        id: 38,
        icon: times,
        list: "4 views Latte Art - chocolate chip stencils",
      },
      { id: 39, icon: times, list: "5 views Latte Art - Espresso with milk" },
      { id: 40, icon: times, list: "6 views Latte Art - Mixed" },
    ],
  };

  render() {
    const star = <FontAwesomeIcon icon={faStar} />;

    const provenance = this.state.provenance.map((item) => (
      <li key={item.id}>{item.list}</li>
    ));
    const production = this.state.production.map((item) => (
      <li key={item.id}>{item.list}</li>
    ));
    const roasting = this.state.roasting.map((item) => (
      <li key={item.id}>{item.list}</li>
    ));
    const table = this.state.table.map((item) => (
      <article key={item.id}>
        <div className={styles.icon}>{item.icon}</div>
        <div className={styles.list}>
          <span>{item.list}</span>
        </div>
      </article>
    ));
    return (
      <>
        <section id="programs" className={styles.programs}>
          <img
            src={this.props.coffe1}
            alt="Coffe Make"
            className={styles.coffe1}
          />
          <img
            src={this.props.coffe2}
            alt="Coffe Make"
            className={styles.coffe2}
          />
          <div className={styles.programsContent}>
            <HeaderSections
              classes={styles.header}
              icon={star}
              title="Programs"
              subtitle="We share their experience and professional barista championships multiple winners"
            />
            <div className={`tab-slider-nav ${styles.tabSliderNav}`}>
              <div className={`tab-slider ${styles.tabSlider}`}>
                <Tabs
                  fill
                  className="justify-content-center  "
                  defaultActiveKey="basic"
                  id="uncontrolled-tab"
                >
                  <Tab eventKey="basic" title="Basic">
                    <div className={styles.nameBackground}>basic</div>
                    <div className={styles.top}>
                      <div className={styles.imgContainer}>
                        <img
                          src={this.props.img}
                          alt="Coffe Make"
                          className={styles.img}
                        />
                      </div>
                      <div className={styles.content}>
                        <h3>Beginners Course</h3>
                        <ul>
                          <li>
                            <img
                              src={this.props.certificate}
                              alt="Coffe Make"
                              className={styles.img}
                            />
                            Certificate
                          </li>
                          <li>
                            <img
                              src={this.props.clock}
                              alt="Coffe Make"
                              className={styles.img}
                            />
                            240 minets
                          </li>
                        </ul>
                        <p>1500usd</p>
                        <button type="button" className={styles.button}>
                          registration
                        </button>
                      </div>
                    </div>
                    <div className={styles.middle}>
                      <div>
                        <h4>
                          Provenance <br />
                          coffee and basic concepts:
                        </h4>
                        <ul>{provenance}</ul>
                      </div>
                      <div>
                        <h4>coffee production technology:</h4>
                        <ul>{production}</ul>
                      </div>
                      <div>
                        <h4>
                          roasting Technology <br />
                          bean. and Stage <br />
                          types of roasting.
                        </h4>
                        <ul>{roasting}</ul>
                      </div>
                    </div>
                    <div className={styles.bottom}>
                      <h4>The course also includes:</h4>
                      <div className={styles.table}>{table}</div>
                    </div>
                  </Tab>
                  <Tab eventKey="premium" title="Premium"></Tab>
                  <Tab eventKey="platinum" title="Platinum"></Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

Programs.defaultProps = {
  img: require("../../../../resources/images/img_basic.webp"),
  certificate: require("../../../../resources/images/certificate.webp"),
  clock: require("../../../../resources/images/clock.webp"),
  coffe1: require("../../../../resources/images/coffe_1.webp"),
  coffe2: require("../../../../resources/images/coffe_2.webp"),
};
