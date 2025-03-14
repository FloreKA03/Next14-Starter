"use client"

import styles from "@/app/contact/contact.module.css";
import Image from "next/image";

const ContactPage = () => {

  console.log("Contact Page");

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="contact image"
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" name="" id="" placeholder="Name and Surname" />
          <input type="text" name="" id="" placeholder="Email Address" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone Number (Optional)"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
