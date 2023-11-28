import { useEffect, useState } from "react";

function Newsletter() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailValue, setEmailValue] = useState("email@company.com");
    const [imageSrc, setImageSrc] = useState(
      "images/illustration-sign-up-desktop.svg"
    );

  useEffect(() => {

    function handleResize() {
      const newImageSrc =
        window.innerWidth <= 995
          ? "images/illustration-sign-up-mobile.svg"
          : "images/illustration-sign-up-desktop.svg";

      setImageSrc(newImageSrc);
    }

    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []); 

  function handleChange(event) {
    setEmailValue(event.target.value);
  }

  function handleDissmiss() {
    setIsSuccess(false);
  }

  function handleSubmit() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();
    const error = document.getElementById("error");
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue) {
      error.style.display = "block";
      emailInput.style.outline = ".4px solid red";
      emailInput.style.background = "#FFE8E6";
      emailInput.style.color = "red";
      return;
    }

    if (!emailRegex.test(emailValue)) {
      error.style.display = "block";
      emailInput.style.outline = ".4px solid red";
      emailInput.style.background = "#FFE8E6";
      emailInput.style.color = "red";
      return;
    }

    setIsSuccess(true);
  }

  return (
    <main>
      {isSuccess ? (
        <div className="succes-message">
          <div id="checkmark"></div>
          <h2>Thanks for Subscribing</h2>
          <p>
            A confirmation email has been sent to <strong>{emailValue}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
          <button id="dissmiss-button" onClick={handleDissmiss}>
            Dismiss message
          </button>
        </div>
      ) : (
        <div id="flex">
          <div className="box1">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="menu">
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li> And much more!</li>
            </ul>
            <div className="form">
              <div className="input-container">
                <label htmlFor="email">Email address</label>
                <span id="error">Valid email required</span>
                <input
                  type="email"
                  id="email"
                  required
                  onChange={handleChange}
                  value={emailValue}
                />
              </div>
              <button onClick={handleSubmit}>
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
          <div className="box2">
            <img
              src={imageSrc}
              alt="illustration"
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default Newsletter;