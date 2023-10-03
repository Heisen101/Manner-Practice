/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import "./ModalPop.css";

import image2 from "../assets/bracelet1.jpg";
const ModalPop = () => {
  useEffect(() => {
    const ebModal = document.getElementById("mySizeChartModal");
    const ebBtn = document.getElementById("mySizeChart");
    const ebSpan = document.getElementsByClassName("ebcf_close")[0];

    const openModal = () => {
      ebModal.style.display = "block";
    };

    const closeModal = () => {
      ebModal.style.display = "none";
    };

    const handleOutsideClick = (event) => {
      if (event.target === ebModal) {
        const userConfirmed = window.confirm(
          "Are you sure you want to cancel the engraving?"
        );

        if (userConfirmed) {
          ebModal.style.display = "none";
        }
      }
    };

    ebBtn.addEventListener("click", openModal);
    ebSpan.addEventListener("click", closeModal);
    window.addEventListener("click", handleOutsideClick);

    return () => {
      ebBtn.removeEventListener("click", openModal);
      ebSpan.removeEventListener("click", closeModal);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const [selectedFont, setSelectedFont] = useState("");
  const [userInput, setUserInput] = useState("");

  const handleFontClick = (font) => {
    setSelectedFont(font);
  };
  const maxCharacterLimit = 15;

  function handleSaveImage() {
    const modalContent = document.querySelector(".ebcf_modal-content");

    const canvas = document.createElement("canvas");
    canvas.width = modalContent.offsetWidth;
    canvas.height = modalContent.offsetHeight;

    html2canvas(modalContent).then((canvas) => {
      const imageDataUrl = canvas.toDataURL();

      const link = document.createElement("a");
      link.href = imageDataUrl;

      link.download = "EngrveImage.png";
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    });
  }
  return (
    <div>
      <button className="btn btn-secondary" id="mySizeChart">
        Add complimentaty engraving
      </button>

      <div id="mySizeChartModal" className="ebcf_modal">
        <div className="ebcf_modal-content">
          <div className="row flex-column flex-sm-row">
            <span className="ebcf_close">&times;</span>
            <div className="col-12 col-sm-6">
              <div style={{ position: "relative" }}>
                <img
                  src={image2}
                  className="font-preview engraveImg"
                  style={{
                    fontFamily: selectedFont,

                    width: "100%",
                    height: "100px",
                  }}
                />
                <p
                  id="customizedText"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontFamily: selectedFont,
                  }}
                >
                  {userInput || "Preview Text"}
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="row">
                <div className="col-4">
                  <button
                    className={`font-button my-3 ${
                      selectedFont === "Helvetica" ? "selected" : ""
                    }`}
                    onClick={() => handleFontClick("Helvetica")}
                  >
                    Classic
                  </button>
                </div>
                <div className="col-4">
                  <button
                    className={`font-button my-3 ${
                      selectedFont === "Charcoal" ? "selected" : ""
                    }`}
                    onClick={() => handleFontClick("Impact")}
                    style={{
                      fontStyle: selectedFont === "Charcoal" ? "selected" : "",
                      fontWeight: "bold",
                    }}
                  >
                    Charcoal
                  </button>
                </div>
                <div className="col-4">
                  <button
                    className={`font-button my-3 ${
                      selectedFont === "Courier New" ? "selected" : ""
                    }`}
                    onClick={() => handleFontClick("Courier New")}
                  >
                    Contemporary
                  </button>
                </div>
              </div>
              <textarea
                placeholder="Enter your text here"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                maxLength={maxCharacterLimit}
                style={{
                  maxHeight: "32px",
                  fontFamily: selectedFont,
                  fontStyle:
                    selectedFont === "Times New Roman" ? "italic" : "normal",
                }}
              />
              {userInput.length >= maxCharacterLimit && (
                <p style={{ color: "grey" }}>
                  You have reached the maximum number of characters.{" "}
                </p>
              )}
              <div className="row my-2">
                <button onClick={handleSaveImage}>Save Image</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPop;
