import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          fill={true}
          className={styles.img}
          src="https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            explicabo et porro laudantium sunt cum? Eaque quod sit et incidunt
            eligendi dolore libero inventore asperiores, minima molestias fugit
            repellendus impedit perferendis sint labore? Fugiat omnis culpa,
            optio eaque dolor blanditiis tempora eligendi qui minus, saepe
            similique, nesciunt temporibus vitae unde dolorum odio accusamus
            totam!
            <br />
            <br />
            Quia dolores ut perspiciatis sint, soluta quos beatae labore a
            mollitia eum praesentium aut veniam doloribus similique minima. In
            ut odio deleniti. Repellat aliquam, omnis iure aperiam vero iusto
            voluptas sed quaerat animi beatae dolore suscipit eius corporis
            tenetur ex facere eos fugit, harum perspiciatis ab.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt a
            sint corrupti sunt, molestiae odio nam. Quasi voluptatum facilis
            animi dolorem exercitationem tempora expedita fugiat pariatur at
            officia vero incidunt id corrupti ab voluptates, quam dolores
            asperiores voluptatem accusamus. Dolorem fuga doloremque est non
            expedita, tenetur animi officia nemo magnam.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
