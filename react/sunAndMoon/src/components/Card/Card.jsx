import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = () => {
  const [time, setTime] = useState(0);
  const [icon, setIcon] = useState("sun.svg");
  const [darkMode, setDarkmode] = useState(false);

  const getRandomTime = () => {
    const randomTime = Math.floor(Math.random() * 24);
    setTime(randomTime);
    if (randomTime >= 6 && randomTime <= 17) {
      setIcon("sun.svg");
      setDarkmode(false);
    } else {
      setIcon("moon.svg");
      setDarkmode(true);
    }
  };

  let cardClasses = `${styles.card} ${styles.lightMode}`;
  if (darkMode) {
    cardClasses = `${styles.card} ${styles.darkMode}`;
  }

  return (
    <>
      <div className={cardClasses}>
        <h2>Night or Day?</h2>
        <img src={icon} />
        <h2>{time}</h2>
        <button onClick={getRandomTime}>Got the time?</button>
      </div>
    </>
  );
};

export default Card;
