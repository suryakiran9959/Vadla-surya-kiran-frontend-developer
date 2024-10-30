import "./one.css";

function One() {
  return (
    <>
      <div className="imageContainer">

             <div className="bodyImage">
                <img src="/assets/body.png" alt="" />
              </div>
              <div className="nav">
                <a href="Features">Features</a>
                <a href="Why us">Why us</a>
                <a href="Tokenomics">Tokenomics</a>
                <a href="Roadmap">Roadmap</a>
              </div>
            <div className="rightNav">
                <span>Log in</span>
                <span className="whitepaper">Whitepaper</span>  
            </div>

            <div className="centerBodyText">
                <p>When Innovation</p>
                <p className="meets">Meets<span className="investment">Investment</span> </p>
                <span className="empowering">Empowering Trading Through Advanced Technology</span> <br />
                <p className="open">Open dApp</p>
            </div>



      </div>
    </>
  );
}

export default One;
