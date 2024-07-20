import PropTypes from "prop-types";
import Modal from "react-modal";
import axios from "axios";

export default function Footer({ contactModalOpen, setContactModalOpen, contactTitle, setContactTitle, contactBody, setContactBody }) {
  const sendContactRequest = (contactTitle, contactBody) => {
    axios
      .post(
        "https://sam-hodgkinson.co.uk/api/contact/send",
        {
          title: contactTitle,
          body: contactBody,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data); // Correctly access response data
      })
      .catch((err) => console.error("Error:", err.response || err.message));
  };

  return (
    <div className="footer-container" id="footer">
      <Modal
        isOpen={contactModalOpen}
        onRequestClose={() => setContactModalOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "350px",
            width: "400px",
            backgroundColor: "#242424",
            color: "white",
            textAlign: "center",
            borderRadius: "6px",
            border: "1px solid #50515B",
          },
          overlay: {
            backgroundColor: "rgba(1, 1, 1, 0.7)",
            zIndex: "10",
          },
          parent: {},
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
          <input
            placeholder="Enter a title"
            style={{
              marginBottom: "2rem",
              padding: "0.3rem 0.6rem",
            }}
            onChange={(e) => setContactTitle(e.target.value)}
          />
          <textarea
            placeholder="Enter your message"
            style={{
              marginBottom: "2rem",
              padding: "0.3rem 0.6rem",
              height: "50%",
            }}
            onChange={(e) => setContactBody(e.target.value)}
          />
          <div style={{ display: "flex", position: "absolute", bottom: "10px" }}>
            <button
              style={{ height: "2rem", width: "10rem", backgroundColor: "#181818" }}
              onClick={() => {
                sendContactRequest(contactTitle, contactBody);
              }}
            >
              Send
            </button>
            <button style={{ height: "2rem", width: "10rem", backgroundColor: "#FF5555" }} onClick={() => setContactModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <div className="footer-head">
        <h4 className="footer-title">Available for freelance</h4>
        <p>Have an existing project that you need help with?</p>
        <br />
        <p>Have a copletely new software idea?</p>
        <br />
        <p>Send me an email or contact me on LinkedIn</p>
      </div>
      <div className="footer-contact-container">
        <p className="footer-contact">
          <a className="footer-link" href="mailto:samhodgkinson9192@gmail.com">
            Email
          </a>
        </p>
        <p className="footer-contact">
          <a className="footer-link" href="https://www.linkedin.com/in/sam-hodgkinson9192/">
            LinkedIn
          </a>
        </p>
        <p className="footer-contact">
          <a className="footer-link" href="https://github.com/SamHodg1993">
            Github
          </a>
        </p>
        <p className="footer-contact">Phone: 07521 083 378</p>
        <button onClick={() => setContactModalOpen(true)}>Contact form</button>
      </div>
    </div>
  );
}

Footer.propTypes = {
  contactModalOpen: PropTypes.bool.isRequired,
  setContactModalOpen: PropTypes.func.isRequired,
  contactTitle: PropTypes.string.isRequired,
  setContactTitle: PropTypes.func.isRequired,
  contactBody: PropTypes.string.isRequired,
  setContactBody: PropTypes.func.isRequired,
};
