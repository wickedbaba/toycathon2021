import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import { PageHeader, MessageBox, BoxMessage, CloseCross } from "../MasterCss";
import jsPDF from "jspdf";

import sampleCertificate from "../../images/sampleCertificate.png";
import certificateTemplate from "../../images/certificateTemplate.png";

const FunFactsBox = styled.div`
  background-image: linear-gradient(#21b2d3, #7abefd);
  padding: 2em;
  position: fixed;
  width: 90vw;
  height: 85vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  z-index: 3000;
  border-radius: 25px;
  border: 2px solid #08345c;
  filter: drop-shadow(4px 4px 4px #08345c);
  text-align: center;
  overflow: hidden;
`;

const FormGroup = styled.div`
  color: palevioletred;
  margin: 150px;
  margin-bottom: 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 1em;
  line-height: 28px;
  color: black;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

const Flexy = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
`;

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const generatePDF = (name) => {
  if (name) {
    name = toTitleCase(name);
    var doc = new jsPDF({
      orientation: "landscape",
    });
    doc.addFont("helvetica", "normal");
    doc.setFontSize(60);
    doc.addImage(certificateTemplate, "JPEG", 0, 0, 298, 210);
    doc.text(75, 105, name);
    doc.save("kanchan-certificate.pdf");
  } else {
    alert("Please enter name");
  }
};

const CertificateModal = ({ handleClose }) => {
  const [name, updateName] = useState("");
  return (
    <FunFactsBox>
      <CloseCross onClick={handleClose} />
      <PageHeader>Certificate of Appreciation</PageHeader>
      <MessageBox primary>
        <BoxMessage>
          <Flexy>
            <FormGroup>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  generatePDF(name);
                }}
                id="certificate-form"
              >
                <label htmlFor="name">
                  Enter your name :
                  <Input
                    id="name"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => updateName(e.target.value)}
                  />
                </label>
              </form>
            </FormGroup>
            <img src={sampleCertificate} alt="certificate" height="400px" />
          </Flexy>
        </BoxMessage>
      </MessageBox>

      <Button
        primary
        handleClick={() => generatePDF(name)}
        form="certificate-form"
        label="Download"
      ></Button>
    </FunFactsBox>
  );
};

export default CertificateModal;
