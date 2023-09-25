import img7 from "../assets/images/resumeImage.jpg";
import styles from "./resume.module.css";

const FILE_URL = "http://localhost:3000/resumeImage.jpg";

export default function Resume() {
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <div className={styles.resumeBox}>
      <h1>My Resume</h1>
      <div className={styles.rBox}>
        <img src={img7} alt="Resume file" className={styles.resumeImage} />
        <div className={styles.resumeContent}>
          <h2>Proficiencies:</h2>
          <ul>
            <li>HTML</li>
            <li>CSS and Bootstrap</li>
            <li>JavaScript</li>
            <li>Mern Stack</li>
            <li>MySQL</li>
            <li>JQuery</li>
          </ul>{" "}
       
        <button
          onClick={() => {
            downloadFileAtURL(FILE_URL);
          }}
          className={styles.resumeBtn}
        >
          {" "}
          Download File
        </button> 
        </div>
      </div>
    </div>
  );
}