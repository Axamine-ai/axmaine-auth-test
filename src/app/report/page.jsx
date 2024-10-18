"use client";
import React, { useState } from "react";
import styles from "./report.module.css";
import Head from "next/head";

const Report = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  //function for handling the selected file
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <Head>
        <title>Axamine - Diagnostic Report</title>
        <meta
          name="description"
          content="Upload your image for a diagnostic report from Axamine's AI-powered system."
        />
        <meta
          name="keywords"
          content="Axamine, AI, axamine ai, Henilsinh Raj, axamine , examine  Diagnostic, Healthcare, Technology"
        />
        <link rel="canonical" href="https://www.axamine.in/report" />
      </Head>
      <div className={styles.main}>
        <section id="report">
          <div className={styles.left}>
            <div className={styles.upLoadImageSection}>
              <input
                type="file"
                name="file"
                id="file"
                onChange={handleFileChange}
                accept="image/*" // This will only allow only image files to upload
              />
              <label htmlFor="file">
                <h2 className={styles.heading}>
                  {selectedFile ? selectedFile.name : "Upload Image"}
                </h2>
                <p className={styles.para}>
                  {selectedFile ? "Uploaded" : "click & from your pc"}
                </p>
              </label>
            </div>
            <p className={styles.para}>Uplode Image for diagnoses</p>
          </div>
          <div className={styles.right}>
            <h2 className={styles.mainHeading}>diagnoses Report</h2>
            <div className={styles.content}>
              <h3 className={styles.heading}>Radiographic Findings :</h3>
              <ol className={styles.list} type="1">
                <li className={styles.listHeading}>
                  Location and Size:
                  <ul type="disc">
                    <li>
                      The tumor is located in the upper lobe of the right lung.
                    </li>
                    <li>Its approximate size is 4 cm in diameter.</li>
                  </ul>
                </li>
                <li className={styles.listHeading}>
                  Shape and Margins:
                  <ul>
                    <li>
                      The tumor appears irregular in shape with indistinct
                      margins.
                    </li>
                  </ul>
                </li>
                <li className={styles.listHeading}>
                  Density:
                  <ul>
                    <li>
                      The tumor exhibits increased density compared to
                      surrounding lung parenchyma.
                    </li>
                  </ul>
                </li>
                <li className={styles.listHeading}>
                  Associated Findings:
                  <ul>
                    <li>
                      No pleural effusion or mediastinal lymphadenopathy noted.{" "}
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className={styles.content}>
              <h3 className={styles.heading}>Impression :</h3>
              <p className={styles.para}>
                Based on the radiographic findings, the patient presents with a
                suspicious lung mass located in the upper lobe of the right
                lung. The irregular shape and indistinct margins raise concern
                for malignancy. Further evaluation through computed tomography
                (CT) imaging and biopsy is recommended for definitive diagnosis
                and treatment planning.
              </p>
            </div>
            <div className={styles.content}>
              <h3 className={styles.heading}>Recommendations :</h3>
              <ul>
                <li>
                  Consultation with Pulmonologist, for further assessment and
                  management.
                </li>
                <li>
                  CT chest with contrast to characterize the extent of the mass
                  and evaluate for metastasis.
                </li>
                <li>
                  Percutaneous needle biopsy of the lung mass for
                  histopathological analysis.
                </li>
              </ul>
            </div>
            <div className={styles.content}>
              <h3 className={styles.heading}>Note :</h3>
              <ul>
                <li>
                  This report is based on the interpretation of the provided
                  X-ray image. Clinical correlation and additional
                  investigations are necessary for accurate diagnosis and
                  treatment decisions.
                </li>
              </ul>
            </div>
            <div className={styles.buttons}>
              <button
                className={`${styles.btn} ${styles.demoBtn} buttonWithGradient`}
              >
                Download
              </button>
              <button className={`${styles.btn} buttonWithGradientBorder`}>
                Print
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Report;
