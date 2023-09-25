import styles from "./aboutMe.module.css";
import images from "../assets/images/imageMain.jpg";

export default function AboutMe() {
  return (
    <>
    
      <div className={styles.mainBox}>
        <div className={styles.box}>
          <img src={images} alt="Profile Image" className={styles.mainImage} />
          <div className={styles.content}>
            <p>
            My name is Christina Feland. I was born in Columbus, Ohio, but I grew up in Arizona. I'm working towards getting my Full Stack Web Development certificate from UNCC. After I finish my time in the course, I'd like to spend more time studying about the subject to build a more in depth understanding of what I'm working on. I will be putting my effort towards the front end side of web development for now but may continue to expand my knowledge with backend down the line. {" "}
            </p>
            <p>
            So far, I have worked two customer service jobs. I learned many valuable skills from these. I've learned how to manage my time more effciently, grow and connect with customers, and even problem solve with all parties best interests in mind. Some of my skills now include HTML, CSS, Javascript, MERN stack and more. I'm a hard worker, always looking for the opportunity to learn more. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}