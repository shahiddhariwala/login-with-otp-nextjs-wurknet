import homeStyles from "../../styles/Home.module.css";
import Head from "next/head";
import { CompanyLogo, Footer } from "..";
import styles from "../../styles/LoginSuccess.module.css";

const RawStepData = [
  {
    title: "Pick a Topic",
    subtitle: "Tweets-Articles-Objectives",
    desc: `Saw a news article you want to discuss? Or perhaps a tweet? Maybe you have an objective you need to fulfill. Just pick the topic & get started.`,
  },
  {
    title: "Our AI Matches you",
    subtitle: "Matches made in Ml",
    desc: `Our algorithm then looks at your profile, interests & tons of other data points to find you the best match.
        `,
  },
  {
    title: "Meet Virtually",
    subtitle: "All you have to do is join",
    desc: `Your conversation is set up, an introduction is sent & all you have to do now is join.`,
  },
];
const LoginSuccess = () => {
  return (
    <>
      <div className={homeStyles.container}>
        <Head>
          <title>Welcome Back Shahid Dhariwala!</title>
          <link
            rel="icon"
            href="https://uploads-ssl.webflow.com/img/favicon.ico"
          />
        </Head>
        <main className={styles.pageContent}>
            <CompanyLogo/>
          <div className={styles.nameUserTitle}>
            Hi, <span className={styles.gradeintSpan}>Shahid Dhariwala</span>{" "}
            Welcome Back {"😎"}
          </div>
          <div className={styles.introHeading}>
            Networking has never been so easy. Insightful conversations, with
            like-minded people, a click away.
          </div>
          <div className={styles.stepsContainer}>
            {RawStepData.map((data, index) => {
              return (
                <div className={styles.stepsCard}>
                  <p className={styles.stepTitle}>{`${index+1}. `}{data.title}</p>
                  <p className={styles.stepSubTitle}>{data.subtitle}</p>
                  <p>{data.desc}</p>
                </div>
              );
            })}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LoginSuccess;
