import classes from "./index.module.scss";
import Image from "next/image";
export default function Home() {
  return (
    <main className={classes.mainPage}>
      <div>
        <div>
          <h3 className={classes.title}>Hello</h3>
          <h4>
            My name is Maksym Mezenstev, I am a software engineer, and this is
            my practice project!
          </h4>
        </div>
        <div className={classes.info}>
          <p>
            It includes "Shop" with some items, "Add Item" page, as well,
            checkout page and page with checks.
          </p>
          <p>
            I used such technoliges as React, Redux, Next.js, Redux-persist for
            localstorage and more
          </p>
        </div>
      </div>
      <div className={classes.imagesContainer}>
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          }
          width={250}
          height={200}
          alt="react-logo"
        ></Image>
        <Image
          src={"https://www.quanle.me/wp-content/uploads/2021/07/nextjs.png"}
          width={250}
          height={200}
          alt="next-logo"
        ></Image>
        <Image
          src={"https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"}
          width={250}
          height={200}
          alt="redux-logo"
        ></Image>
      </div>
    </main>
  );
}
