import Head from 'next/head'
import LoginCard from '../components/LoginCard'
import styles from '../styles/Home.module.css'
import LoginSuccessStyle from "../styles/LoginSuccess.module.css"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WorkNetwork : Login</title>
        <link rel="icon" href="https://uploads-ssl.webflow.com/img/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <CompanyLogo/>
      <div className={styles.introHeading}>
        <div className={styles.introText}>
        Networking has never been so <span className={LoginSuccessStyle.gradeintSpan}>easy</span>. 
        </div>
        <div className={LoginSuccessStyle.introHeading}>
        Insightful conversations, with like-minded people, a click away.
        </div>
          </div>
        <LoginCard/>
      </main>
      <Footer/>
    </div>
  )
}

export const CompanyLogo = () => {
  return (
    <a className={styles.companyLogo}  href="https://www.worknetwork.ai/"
    target="_blank"
    rel="noopener noreferrer">
    WorkNetwork
  </a>
  )
}


export const Footer = () =>{
  return(
    <footer className={styles.footer}>
    <a
      href="https://www.worknetwork.ai/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <span className={styles.logo}>
        WurkNet Private Limited
      </span>
    </a>
  </footer>
  )
}