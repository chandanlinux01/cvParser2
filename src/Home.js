import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import cv from "./assets/img/cv3.png";
import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import owl_1 from "./assets/img/owl_1.png";
import owl_2 from "./assets/img/owl_2.png";
import owl_3 from "./assets/img/owl_3.png";
import logoss from "./assets/img/profile_img.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import cvParser from "./assets/img/cutter_3.png";
import logo from "./assets/img/profileGenerator.png";

function Home({ authorized }) {
  const history = useHistory();

  useEffect(() => {
    (() => {
      const openNavMenu = document.querySelector(".open-nav-menu"),
        closeNavMenu = document.querySelector(".close-nav-menu"),
        navMenu = document.querySelector(".nav-menu"),
        menuOverlay = document.querySelector(".menu-overlay"),
        mediaSize = 991;

      openNavMenu.addEventListener("click", toggleNav);
      closeNavMenu.addEventListener("click", toggleNav);
      // close the navMenu by clicking outside
      menuOverlay.addEventListener("click", toggleNav);

      function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
      }

      navMenu.addEventListener("click", (event) => {
        if (
          event.target.hasAttribute("data-toggle") &&
          window.innerWidth <= mediaSize
        ) {
          // prevent default anchor click behavior
          event.preventDefault();
          const menuItemHasChildren = event.target.parentElement;
          // if menuItemHasChildren is already expanded, collapse it
          if (menuItemHasChildren.classList.contains("active")) {
            collapseSubMenu();
          } else {
            // collapse existing expanded menuItemHasChildren
            if (navMenu.querySelector(".menu-item-has-children.active")) {
              collapseSubMenu();
            }
            // expand new menuItemHasChildren
            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          }
        }
      });
      function collapseSubMenu() {
        navMenu
          .querySelector(".menu-item-has-children.active .sub-menu")
          .removeAttribute("style");
        navMenu
          .querySelector(".menu-item-has-children.active")
          .classList.remove("active");
      }
      function resizeFix() {
        // if navMenu is open ,close it
        if (navMenu.classList.contains("open")) {
          toggleNav();
        }
        // if menuItemHasChildren is expanded , collapse it
        if (navMenu.querySelector(".menu-item-has-children.active")) {
          collapseSubMenu();
        }
      }

      window.addEventListener("resize", function () {
        if (this.innerWidth > mediaSize) {
          resizeFix();
        }
      });
    })();
  }, []);

  const moveToSignIn = () => {
    history.push("/signin");
  };

  const moveToSignUp = () => {
    history.push("/signup");
  };

  const userName = JSON.parse(localStorage.getItem("userName"));

  return (
    <>
      <header className="header">
        <div className="navigation_menu">
          <div className="header-main">
            <div className="logo">
              <img src={logo} alt="" srcset="" width="150" height="150" />
            </div>

            <div className="menu-overlay"></div>

            <nav className="nav-menu">
              <div className="close-nav-menu"></div>
              <ul className="menu navigation_menu_home">
                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    About Profilgenerator ?
                  </a>
                </li>

                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    Features
                  </a>
                </li>

                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    Resources
                  </a>
                </li>

                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    Company
                  </a>
                </li>
              </ul>
            </nav>

            <div className="home_navigation_btn">
              {/* Button 1 */}

              <button className="home_navigation_getDemo">Get Started</button>

              {/* Button 2 */}
              <button className="home_navigation_signIn" onClick={moveToSignIn}>
                {userName ? "Dashboard" : "Sign In"}
              </button>
            </div>

            <div className="open-nav-menu">
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <section className="home-section">
        {/* Candidate Profiles Easily Generated */}
        <Container className="home_section_1">
          <Row>
            <Col
              className="wow animate__animated animate__fadeInLeft"
              data-wow-offset="150"
              data-wow-delay="0.2s"
            >
              <div className="star_ratings">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                <span className="rating_color_txt_1">
                  Based on <span className="rating_color_txt_2">10,000+</span>
                  reviews
                </span>
              </div>
              <h1 className="home_section_1_heading">
                Candidate Profiles Easily Generated
              </h1>
              <p className="home_section_1_para">
                Profile generator creates a professional candidate profile from
                the cv of your candidates fully automatically
              </p>

              <Row className="home_section_1_row">
                <Col>
                  <p className="home_section_1_para_2">
                    <span>|</span> Start work efficiently with ProfilGenerator
                  </p>
                </Col>

                <Col>
                  <button className="home_profile_btn">
                    Get Started For Free
                  </button>
                </Col>
              </Row>

              <Row className="home_section_1_row_2">
                <Col
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-offset="50"
                  data-wow-delay="1.6s"
                >
                  Logo-1
                </Col>
                <Col
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-offset="50"
                  data-wow-delay="1.8s"
                >
                  Logo-2
                </Col>
                <Col
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-offset="50"
                  data-wow-delay="2s"
                >
                  Logo-3
                </Col>
              </Row>
            </Col>

            <Col
              className="wow animate__animated animate__fadeInRight"
              data-wow-offset="150"
              data-wow-delay="0.5s"
            >
              <img
                src={cv}
                alt=""
                width="450"
                style={{ display: "block", margin: "auto" }}
              />
            </Col>
          </Row>
        </Container>

        {/* This is How it works */}

        <Container className="home_section_2">
          <div className="container">
            <div className="row">
              <div className="section-head col-sm-12">
                <h4
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-offset="150"
                >
                  <span>This is how Profilgenerator works</span>
                </h4>
                <p
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-offset="150"
                  data-wow-delay="0.5s"
                >
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's
                  <br />
                  standard dummy text ever since the 1500s, when an unknown
                  book.
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <img
                  src={cvParser}
                  alt=""
                  width="400"
                  style={{ display: "block", marginRight: "auto" }}
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-offset="150"
                  data-wow-delay="0.5s"
                />
              </div>

              <div className="col-lg-6 col-md-6 " style={{ margin: "auto 0" }}>
                <Row
                  style={{ marginBottom: "15px" }}
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-offset="150"
                  data-wow-delay="1s"
                >
                  <div className="col-sm-2">
                    <div className="home_section_2_number_box">1</div>
                  </div>
                  <div className="col-sm-9 home_section_2_content_box">
                    Drop in the CV of your candidate
                  </div>
                </Row>

                <Row
                  style={{ marginBottom: "15px" }}
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-offset="140"
                  data-wow-delay="1.5s"
                >
                  <div className="col-sm-2">
                    <div className="home_section_2_number_box_txt">2</div>
                  </div>
                  <div className="col-sm-9 home_section_2_content_box">
                    Choose the template that suits for your business
                  </div>
                </Row>

                <Row
                  style={{ marginBottom: "15px" }}
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-offset="140"
                  data-wow-delay="2s"
                >
                  <div className="col-sm-2">
                    <div className="home_section_2_number_box_txt">3</div>
                  </div>
                  <div className="col-sm-9 home_section_2_content_box">
                    Select the type of file you want to generate
                  </div>
                </Row>

                <Row
                  style={{ marginBottom: "15px" }}
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-offset="130"
                  data-wow-delay="2.5s"
                >
                  <div className="col-sm-2">
                    <div className="home_section_2_number_box_txt">4</div>
                  </div>
                  <div className="col-sm-9 home_section_2_content_box">
                    Click on generate and receive your profile
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </Container>

        {/* Choose from over 10+ */}

        <Container>
          <Row style={{ paddingTop: "100px", paddingBottom: "50px" }}>
            <Col md={8}>
              <h4
                style={{
                  color: "#fff",
                  fontFamily: "Nunito Sans",
                  fontWeight: "700",
                  margin: "0px",
                  fontSize: "35px",
                }}
              >
                Choose from over 10+ cutting edge products
              </h4>
            </Col>

            <Col md={4}>
              <Button
                variant="success"
                className="nav_upgrade_btn"
                style={{
                  fontWeight: "bold",
                  display: "block",
                  marginLeft: "auto",
                }}
              >
                See All Products
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <OwlCarousel
                className="owl-theme"
                items={4}
                loop
                margin={10}
                autoplayTimeout={2000}
                dots={false}
                autoplay={true}
                nav
              >
                <div class="item">
                  <img src={owl_1} alt="" srcset="" height="350px" />
                </div>
                <div class="item">
                  <img src={owl_2} alt="" srcset="" height="350px" />
                </div>
                <div class="item">
                  <img src={owl_3} alt="" srcset="" height="350px" />
                </div>
                <div class="item">
                  <img src={owl_1} alt="" srcset="" height="350px" />
                </div>
                <div class="item">
                  <img src={owl_2} alt="" srcset="" height="350px" />
                </div>
                <div class="item">
                  <img src={owl_3} alt="" srcset="" height="350px" />
                </div>
                -
              </OwlCarousel>
              ;
            </Col>
          </Row>
        </Container>

        {/* Here's what our customer has to say */}
        <Container className="home_section_3">
          <Row>
            <Col>
              <h2
                className="wow animate__animated animate__fadeInUp home_section_3_h2"
                data-wow-offset="150"
              >
                Here's what our{" "}
                <span className="home_section_3_span"> Customer </span>
                <br /> has to say
              </h2>
              <button
                className="wow animate__animated animate__fadeInUp home_section_3_btn"
                data-wow-offset="150"
              >
                Read Customer Stories
              </button>
            </Col>
          </Row>

          {/*  2*4 sections */}
          <Row
            style={{ paddingTop: "30px" }}
            className="gx-5 wow animate__animated animate__fadeInUp"
            data-wow-offset="150"
          >
            <Col className="review_1">
              <h6 className="customer_review_h6">
                <span style={{ color: "#fff", fontSize: "30px" }}>&#8220;</span>{" "}
                Super accurate, i can only recommend{" "}
                <span style={{ color: "#fff", fontSize: "30px" }}>&#8221;</span>
              </h6>
              <p className="customer_review_p">
                Creating candidate profiles with Profilegenerator is a breeze.
                The profile generator feature is fast and accurate, and it has
                saved me so much time and effort.
              </p>
              <div className="client_name_div">
                <img
                  src={logoss}
                  alt=""
                  srcset=""
                  width="50"
                  style={{ borderRadius: "50px" }}
                />
                <h6 className="client_name">
                  Dan Silverstone
                  <span className="client_designation">
                    CEO Top Talent Search
                  </span>
                </h6>
              </div>
            </Col>

            <Col className="review_2">
              <h6 className="customer_review_h6">
                <span>&#8220;</span> Amazing tool! Saved me months{" "}
                <span>&#8221;</span>
              </h6>
              <p className="customer_review_p">
                I highly recommend Profilegenerator for creating candidate
                profiles. The profiles are always top-notch, and it has made the
                recruitment process so much easier for me.
              </p>

              <div className="client_name_div">
                <img
                  src={logoss}
                  alt=""
                  srcset=""
                  width="50"
                  style={{ borderRadius: "50px" }}
                />
                <h6 className="client_name">
                  Gil Poster
                  <span className="client_designation">
                    Management, Talent Hunters Inc
                  </span>
                </h6>
              </div>
            </Col>
          </Row>

          <Row
            className="gx-5 wow animate__animated animate__fadeInUp"
            data-wow-offset="150"
            style={{ padding: "0px 0" }}
          >
            <Col className="review_2">
              <h6 className="customer_review_h6">
                <span>&#8220;</span>
                The first one, that really works
                <span>&#8221;</span>
              </h6>
              <p className="customer_review_p">
                Using Profilegenerator to create candidate profiles has been a
                game changer for me.The automation feature saves me so much
                time, and the profiles are always professional and informative.
              </p>
              <div className="client_name_div">
                <img
                  src={logoss}
                  alt=""
                  srcset=""
                  width="50"
                  style={{ borderRadius: "50px" }}
                />
                <h6 className="client_name">
                  Thorben Winter
                  <span className="client_designation">
                    Director Hiringtalentside
                  </span>
                </h6>
              </div>
            </Col>

            <Col className="review_1">
              <h6 className="customer_review_h6">
                <span style={{ color: "#fff", fontSize: "30px" }}>&#8220;</span>{" "}
                More time for important tasks{" "}
                <span style={{ color: "#fff", fontSize: "30px" }}>&#8221;</span>
              </h6>
              <p className="customer_review_p">
                Thanks to Profilegenerator, creating detailed and accurate
                candidate profiles has never been easier. Now we can cocentrate
                on more important tasks.
              </p>
              <div className="client_name_div">
                <img
                  src={logoss}
                  alt=""
                  srcset=""
                  width="50"
                  style={{ borderRadius: "50px" }}
                />
                <h6 className="client_name">
                  Noel Fuchs
                  <span className="client_designation">CEO Plantside</span>
                </h6>
              </div>
            </Col>
          </Row>
        </Container>

        {/* PricingTable */}
        <Container fluid>
          <div id="generic_price_table">
            <section className="home_section_4">
              <div class="container">
                <div class="row">
                  <div
                    className="col-md-12 wow animate__animated animate__fadeInUp"
                    data-wow-offset="150"
                  >
                    <div class="section-head col-sm-12">
                      <h4>
                        <span>Our Affordable Plans </span>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting industry. Lorem Ipsum has been the
                        industry's
                        <br />
                        standard dummy text ever since the 1500s, when an
                        unknown book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div
                    class="col-lg-3 col-md-6 
                  wow animate__animated animate__fadeInUp"
                    data-wow-offset="150"
                    data-wow-delay="0.2s"
                  >
                    <div class="generic_content clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <div class="head_bg"></div>
                          <div class="head">
                            <span>Starter</span>
                          </div>
                        </div>

                        <div class="generic_price_tag clearfix">
                          <span class="price">
                            <span class="currency">FREE</span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list">
                        <ul>
                          <li>
                            <FaCheckCircle className="pricing_icon" />{" "}
                            <span className="pricing_icon_text_span">
                              5 Profiles Per Month{" "}
                            </span>
                          </li>
                          <li>
                            <FaCheckCircle className="pricing_icon" />{" "}
                            <span className="pricing_icon_text_span">
                              1 User Access{" "}
                            </span>
                          </li>
                          <li style={{ visibility: "hidden" }}>
                            <span>12</span> Accounts
                          </li>
                          <li style={{ visibility: "hidden" }}>
                            <span>7</span> Host Domain
                          </li>
                          <li style={{ visibility: "hidden" }}>
                            <span>24/7</span> Support
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link onClick={moveToSignUp}>Get Starter Plan</Link>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-lg-3 col-md-6
                  wow animate__animated animate__fadeInUp"
                    data-wow-offset="150"
                    data-wow-delay="0.4s
                  "
                  >
                    <div class="generic_content active clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <div class="head_bg"></div>
                          <div class="head">
                            <span> Essential</span>
                          </div>
                        </div>

                        <div class="generic_price_tag clearfix">
                          <span class="price">
                            <span class="currency">
                              $ 48.90 /{" "}
                              <span style={{ color: "#405cf5" }}>Month</span>{" "}
                            </span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list">
                        <ul>
                          <li>
                            <FaCheckCircle className="pricing_icon" />{" "}
                            <span className="pricing_icon_text_span">
                              25 Profiles Per Month
                            </span>
                          </li>
                          <li>
                            <FaCheckCircle className="pricing_icon" />{" "}
                            <span className="pricing_icon_text_span">
                              Your Branding
                            </span>
                          </li>
                          <li>
                            <FaCheckCircle className="pricing_icon" />{" "}
                            <span className="pricing_icon_text_span">
                              Removed Watermark
                            </span>
                          </li>
                          <li>
                            <FaCheckCircle className="pricing_icon" />{" "}
                            <span className="pricing_icon_text_span">
                              2 Users
                            </span>
                          </li>
                          <li style={{ visibility: "hidden" }}>
                            <span>24/7</span> Support
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link onClick={moveToSignUp}>Get Essential Plan</Link>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-lg-3 col-md-6
                  wow animate__animated animate__fadeInUp"
                    data-wow-offset="150"
                    data-wow-delay="0.6s
                  "
                  >
                    <div class="generic_content clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <div class="head_bg"></div>
                          <div class="head">
                            <span>Pro</span>
                          </div>
                        </div>

                        <div class="generic_price_tag clearfix">
                          <span class="price">
                            <span class="currency">
                              $ 87.90 /{" "}
                              <span style={{ color: "#405cf5" }}>Month</span>{" "}
                            </span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list">
                        <ul>
                          <li>
                            <FaCheckCircle className="pricing_icon" />{" "}
                            <span style={{ color: "#fff" }}>
                              50 Profiles per month
                            </span>
                          </li>
                          <li>
                            <FaCheckCircle className="pricing_icon" />{" "}
                            <span style={{ color: "#fff" }}>Your branding</span>
                          </li>
                          <li>
                            <FaCheckCircle className="pricing_icon" />{" "}
                            <span style={{ color: "#fff" }}>
                              Removed Watermark
                            </span>
                          </li>
                          <li>
                            <FaCheckCircle className="pricing_icon" />{" "}
                            <span style={{ color: "#fff" }}>4 Users</span>
                          </li>
                          <li style={{ visibility: "hidden" }}>
                            <span>24/7</span> Support
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link onClick={moveToSignUp}>Get Pro Plan</Link>
                      </div>
                    </div>
                  </div>

                  <div
                    class="col-lg-3 col-md-6
                  wow animate__animated animate__fadeInUp"
                    data-wow-offset="150"
                    data-wow-delay="0.8s
                  "
                  >
                    <div class="generic_content active clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <div class="head_bg"></div>
                          <div class="head">
                            <span>Ultimate</span>
                          </div>
                        </div>

                        <div class="generic_price_tag clearfix">
                          <span class="price">
                            <span class="currency">
                              $ 99.90 /{" "}
                              <span style={{ color: "#405cf5" }}>Month</span>{" "}
                            </span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list">
                        <ul>
                          <li>
                            <FaCheckCircle className="pricing_icon" />{" "}
                            <span style={{ color: "#fff" }}>
                              Unlimited Profiles
                            </span>
                          </li>
                          <li>
                            <FaCheckCircle className="pricing_icon" />{" "}
                            <span style={{ color: "#fff" }}>Your Branding</span>
                          </li>
                          <li>
                            <FaCheckCircle className="pricing_icon" />{" "}
                            <span style={{ color: "#fff" }}>
                              Removed Watermark
                            </span>
                          </li>
                          <li>
                            <FaCheckCircle className="pricing_icon" />{" "}
                            <span style={{ color: "#fff" }}>8 Users</span>
                          </li>
                          <li style={{ visibility: "hidden" }}>
                            <span>24/7</span> Support
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <Link onClick={moveToSignUp}>Get Ultimate Plan</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Container>

        {/* Save Time and Money*/}

        <Container>
          <div class="pt-5 pb-5">
            <div class="container">
              <div class="row">
                <div
                  class="section-head col-sm-12 wow animate__animated animate__fadeInUp"
                  data-wow-offset="150"
                >
                  <h4>
                    <span>Why Choose Us?</span>{" "}
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. Lorem Ipsum has been the industry's
                    <br />
                    standard dummy text ever since the 1500s, when an unknown
                    book.
                  </p>
                </div>
                <div
                  class="col-lg-4 col-sm-6  wow animate__animated animate__fadeInUp"
                  data-wow-offset="150"
                  data-wow-delay="0.4s"
                >
                  <div class="save_time_card">
                    {" "}
                    <span class="icon feature_box_col_one">
                      <i class="fa-solid fa-clock"></i>
                    </span>
                    <h6>Save Time</h6>
                    <p>
                      With our website,Save time by fully automating the
                      creation of your candidate profile.
                    </p>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-sm-6  wow animate__animated animate__fadeInUp"
                  data-wow-offset="150"
                  data-wow-delay="0.6s"
                >
                  <div class="save_time_card">
                    {" "}
                    <span class="icon feature_box_col_two">
                      <i class="fa-solid fa-dollar"></i>
                    </span>
                    <h6>Save Money</h6>
                    <p>
                      Since time is money, you can put your new free resources
                      into things that will move your company forward
                    </p>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-sm-6  wow animate__animated animate__fadeInUp"
                  data-wow-offset="150"
                  data-wow-delay="0.8s"
                >
                  <div class="save_time_card">
                    {" "}
                    <span class="icon feature_box_col_three">
                      <i class="fa-solid fa-circle-xmark"></i>
                    </span>
                    <h6>No Errors</h6>
                    <p>
                      Due to our ki with spelling improvement, errors in data
                      transfer are no longer possible
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Footer Design */}

        <div className="container-fluid home_section_5">
          <footer className="text-center text-lg-start text-white">
            <section className="d-flex justify-content-between p-4 home_section_5_section">
              <div className="me-5">
                <span>Gets connected with us on social networks:</span>
              </div>
              <div>
                <a href="" className="text-white m-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="text-white m-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="text-white m-2">
                  <i className="fab fa-google"></i>
                </a>
                <a href="" className="text-white m-2">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="text-white m-2">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="" className="text-white m-2">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </section>
            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">
                      Profile Generator
                    </h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto footer_hr" />
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Products</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto footer_hr" />
                    <p>
                      <a href="#!" className="text-white">
                        Products-1
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-white">
                        Products-2
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-white">
                        Products-3
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-white">
                        Products-4
                      </a>
                    </p>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto footer_hr" />
                    <p>
                      <a href="#!" className="text-white">
                        Link-1
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-white">
                        Link-2
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-white">
                        Link-3
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-white">
                        Link-4
                      </a>
                    </p>
                  </div>
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold">Contact</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto footer_hr" />
                    <p style={{ textAlign: "left" }}>
                      <i className="fas fa-home mr-3"></i> New York, NY 10012,
                      US
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <i className="fas fa-envelope mr-3"></i> info@example.com
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <i className="fas fa-print mr-3"></i> + 01 234 567 89
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div
                    className="col-md-12 
                wow animate__animated animate__fadeInUp"
                    data-wow-offset="0"
                    data-wow-delay="0.8s "
                  >
                    <p className="text-muted">
                      Copyright © 2023 ProfileGenerator
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </footer>
        </div>
      </section>
    </>
  );
}

export default Home;
