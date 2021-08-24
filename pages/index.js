import Head from 'next/head'
import Main from '../container/main'

import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <title>ATSports</title>
      </Head>
      <div className='container'>
        <img className='text' src="/atSportsTEXT.svg" width='85px' alt="" />
        <img className='t-rex' src="/t-rex.svg" width='85px' alt='t-rex-logo' />
        <img className='sore' src="/sore.svg" alt="sore" width='85px' />
        <img className='fword' src="/fword.svg" width='85px' alt="" />
        <img className='club' src="/club.svg" width='85px' alt="club" />
        <img className='mini' src="/atSportsMini.svg" width='85px' alt="" />
      </div>
      <Main />
      <style jsx>{`
        .container {
          display: grid;
          position: absolute;
          top: 65px;
          left: 0;
          width: 100%;
          height: 455px;
          bottom:0;
          z-index: 1;
          right: 0;
          background: transparent;
          grid-template-rows: repeat(5, 1fr); 
          grid-template-columns: repeat(6, 1fr);
        }
        .t-rex {
          place-self: center;
          grid-column: 1;
          grid-row: 1;
        }
        .text {
          place-self: center;
          grid-column: 1;
          grid-row: 5;
        }  
        .sore {
          place-self: center;
          grid-row: 1;
          grid-column: 6;
        }
        .fword {
          grid-column:6;
          place-self: center;
          grid-row: 5;
        }
        .club {
          grid-column: 1;
          place-self: center;
          grid-row: 3;
        }
        .mini {
          grid-column: 6;
          place-self: center;
          grid-row:3;
        }



        //*ANIMATIONS*//
        @keyframes rex {
          0% {
          opacity: 0;
          grid-column: 1;
          grid-row: 1;
          }
          50% { 
          opacity: 1;
          }
          100% {
          opacity: 0;
          grid-column: 6;
          grid-row: 3;
          }
        }
        @keyframes atSportsText {
          0% {
          opacity: 0;
          grid-column: 1;
          grid-row: 5;
          }
          50% { 
          opacity: 1;
          }
          100% {
          opacity: 0;
          grid-column: 6;
          grid-row: 1;
          }
        }
        @keyframes sore {
          0% {
          opacity: 0;
          grid-column: 6;
          grid-row: 1;
          }
          50% { 
          opacity: 1;
          }
          100% {
          opacity: 0;
          grid-column: 1;
          grid-row: 5;
          }
        }
        @keyframes club {
          0% {
          opacity: 1;
          grid-column: 1;
          grid-row: 3;
          }
          50% { 
          opacity: 0;
          }
          100% {
          opacity: 1;
          grid-column: 6;
          grid-row: 5;
          }
        }
        @keyframes fword {
          0% {
          opacity: 1;
          grid-column: 6;
          grid-row: 5;
          }
          50% { 
          opacity: 0;
          }
          100% {
          opacity: 1;
          grid-column: 1;
          grid-row: 3;
          }
        }
        @keyframes mini {
          0% {
          opacity: 1;
          grid-column: 6;
          grid-row: 3;
          }
          50% { 
          opacity: 0;
          }
          100% {
          opacity: 1;
          grid-column: 1;
          grid-row: 1;
          }
        }

        @media only screen and (max-width: 1170px ) {
          .container {
            display: none;
            padding: 0;
          }
        }
      `}
      </style>
    </div >
  )
}
