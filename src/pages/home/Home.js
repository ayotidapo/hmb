import React from 'react';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';
import './home.css';

class Home extends React.Component {
  state = {
    open: false,
  };

  showDropdown = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  render() {
    const { open } = this.state;
    return (
      <div className="Home">
        <div className="jumbo-div">
          <div className="container_div">
            <div className="navbar_div">
              <div className="logo">
                <img src="/assets/logo.png" alt="logo" />
              </div>
              <div className="links">
                <ul>
                  <li className=" fir_li drop" onClick={this.showDropdown}>
                    Pay &amp; Receive Money
                    <ul className={classnames('drpdown', { show: open })}>
                      <li>Transfer Funds</li>
                      <li>Withdraw Money</li>
                      <li>Deposit Money</li>
                    </ul>
                  </li>
                  <li className="fir_li drop">Pay Bills</li>
                  <li className="fir_li">Contact</li>
                </ul>
                <button className="btn">Login / Register</button>
              </div>
            </div>
            <span className={classnames('rcve_point', { show: open })} />

            <Row className="png_div">
              <Col sm="6" className="text_col1">
                <div className="inner_wrap">
                  <h2>
                    <span>Reimaging</span> your Payment experience
                  </h2>
                  <p>
                    Your one stop App for all kinds of payment Accept and track
                    payments Localy and Internationaly
                  </p>
                  <div className="btndv">
                    <button className="btn lnmor">LEARN MORE</button>
                  </div>
                </div>
              </Col>
              <Col sm="6" className="pep">
                <img src="/assets/people.png" alt="people" />
              </Col>
            </Row>
          </div>
        </div>
        <div className="fluid2">
          <div className="container_div">
            <Row className="row2">
              <Col sm="6" className="pay_div">
                <h1 className="hdng">Pay &amp; Receive Money</h1>
                <p>
                  Your one stop App for all kinds of payment .Accept and track
                  payments localy and internationaly Your one stop App for all
                  kinds of payment Accept and track payments Localy and
                  Internationaly
                </p>
                <button className="btn try">Try it Now</button>
              </Col>
              <Col sm="6" className="oni_div">
                <img alt="transfer-money" src="/assets/money.png" />
              </Col>
            </Row>
          </div>
        </div>
        <div className="fluid3">
          <div className="container_div">
            <Row className="row3">
              <Col sm="6" className="left2div">
                <img alt="transfer-money" src="/assets/hand.png" />
              </Col>
              <Col sm="6" className="f3col2">
                <div style={{ paddingLeft: '50px' }}>
                  <h1 className="hdng">Pay Bills</h1>
                  <p>
                    Your one stop App for all kinds of payment. Accept and track
                    payments Localy and internationaly Your one stop App for all
                    kinds of payment Accept and track payments Localy and
                    Internationaly
                  </p>
                  <button className="btn try">Try it Now</button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="fluid4">
          <div className="container_div">
            <div className="shrnkCol">
              <Row className="row4">
                <Col sm="4" className="cl4">
                  <div className="guta">
                    <div className="ic_bg">
                      <img alt="airtime" src="/assets/airtime.png" />
                    </div>
                    <h4>Buy Airtime</h4>
                    <p>
                      Your one stop App for all kinds of payment Accept and
                      track payments Localy and Internationaly Your one stop App
                      for all kinds of payment Accept and track payments Localy
                      and Internationaly
                    </p>
                  </div>
                </Col>
                <Col sm="4" className="cl4">
                  <div className="guta stoop">
                    <div className="ic_bg">
                      <img alt="wallet" src="/assets/wallet.png" />
                    </div>
                    <h4>Wallet</h4>
                    <p>
                      Your one stop App for all kinds of payment Accept and
                      track payments Localy and Internationaly Your one stop App
                      for all kinds of payment Accept and track payments Localy
                      and Internationaly
                    </p>
                  </div>
                </Col>
                <Col sm="4" className="cl4">
                  <div className="guta">
                    <div className="ic_bg">
                      <img alt="trans" src="/assets/trans.png" />
                    </div>
                    <h4>Transactions</h4>
                    <p>
                      Your one stop App for all kinds of payment Accept and
                      track payments Localy and Internationaly Your one stop App
                      for all kinds of payment Accept and track payments Localy
                      and Internationaly
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="fluid5">
          <div className="container_div">
            <p className="div_slg">
              <span>Reimaging</span> your Payment experience
              <div>
                <button className="btn cr8">CREATE AN ACCOUNT</button>
              </div>
            </p>
          </div>
        </div>
        <div className="fluid6">
          <div className="container_div">
            <Row className="row5">
              <Col sm="4" className="gtcolz">
                <h4>Customers</h4>
                <ul className="ul">
                  <li>Personal</li>
                  <li>Companies</li>
                </ul>
              </Col>
              <Col sm="4">
                <h4>Further Information</h4>
                <ul className="ul-mid">
                  <li>Terms and Condition</li>
                  <li>Privacy Policy</li>
                </ul>
              </Col>
              <Col sm="4" className="gtcol">
                <h4>Company</h4>
                <ul className="ul">
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
              </Col>
            </Row>
            <div className="footr">
              <ul>
                <li className="tweet" />
                <li className="insta" />
                <li className="fbk" />
                <li className="sptf" />
              </ul>
              <p>Copyright &copy; 2019 Hackman Micro Finance Bank</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
