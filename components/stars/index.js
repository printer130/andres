export default function Stars() {
  return <>
    <section className='stars-container'>
      <div className="night">
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
      </div>
    </section>
    
    <section className='text'>
      <h3>¡Gracias por unirte a club ATsports!</h3>
      <p>No olvides revisar tu email, nos pondremos en contacto! 🎉👌🍌</p>
    </section>
    <style jsx>{`
    .stars-container {
	 background: radial-gradient(ellipse at bottom, #1b2735 0%, var(--andres-color) 100%);
	 height: 455px;
	 overflow: hidden;
	 display: flex;
   width: 100%;
	 justify-content: center;
	 align-items: center;
}
.text {
  position: relative;
  width: 355px;
  margin:0 auto;
  top: -340px;
}
.text p {
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  padding: 3rem 3rem 0 3rem;
}
 .night {
	 position: relative;
   left: -200px;
	 width: 100%;
	 height: 100%;
	 transform: rotateZ(45deg);
}
 .shooting_star {
	 position: absolute;
	 left: 50%;
	 top: 50%;
	 height: 2px;
	 background: linear-gradient(-45deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
	 border-radius: 999px;
	 filter: drop-shadow(0 0 6px rgba(105, 155, 255, 1));
	 animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
}
 .shooting_star::before {
	 content: '';
	 position: absolute;
	 top: calc(50% - 1px);
	 right: 0;
	 height: 2px;
	 background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
	 transform: translateX(50%) rotateZ(45deg);
	 border-radius: 100%;
	 animation: shining 3000ms ease-in-out infinite;
}
 .shooting_star::after {
	 content: '';
	 position: absolute;
	 top: calc(50% - 1px);
	 right: 0;
	 height: 2px;
	 background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
	 transform: translateX(50%) rotateZ(45deg);
	 border-radius: 100%;
	 animation: shining 3000ms ease-in-out infinite;
	 transform: translateX(50%) rotateZ(-45deg);
}
 .shooting_star:nth-child(1) {
	 top: calc(50% - 182px);
	 left: calc(50% - 24px);
	 animation-delay: 4896ms;
}
 .shooting_star:nth-child(1)::before, .shooting_star:nth-child(1)::after {
	 animation-delay: 4896ms;
}
 .shooting_star:nth-child(2) {
	 top: calc(50% - -143px);
	 left: calc(50% - 85px);
	 animation-delay: 3892ms;
}
 .shooting_star:nth-child(2)::before, .shooting_star:nth-child(2)::after {
	 animation-delay: 3892ms;
}
 .shooting_star:nth-child(3) {
	 top: calc(50% - 90px);
	 left: calc(50% - 36px);
	 animation-delay: 4858ms;
}
 .shooting_star:nth-child(3)::before, .shooting_star:nth-child(3)::after {
	 animation-delay: 4858ms;
}
 .shooting_star:nth-child(4) {
	 top: calc(50% - -18px);
	 left: calc(50% - 38px);
	 animation-delay: 9636ms;
}
 .shooting_star:nth-child(4)::before, .shooting_star:nth-child(4)::after {
	 animation-delay: 9636ms;
}
 .shooting_star:nth-child(5) {
	 top: calc(50% - -35px);
	 left: calc(50% - 53px);
	 animation-delay: 6751ms;
}
 .shooting_star:nth-child(5)::before, .shooting_star:nth-child(5)::after {
	 animation-delay: 6751ms;
}
 .shooting_star:nth-child(6) {
	 top: calc(50% - -12px);
	 left: calc(50% - 115px);
	 animation-delay: 7541ms;
}
 .shooting_star:nth-child(6)::before, .shooting_star:nth-child(6)::after {
	 animation-delay: 7541ms;
}
 .shooting_star:nth-child(7) {
	 top: calc(50% - -194px);
	 left: calc(50% - 188px);
	 animation-delay: 3026ms;
}
 .shooting_star:nth-child(7)::before, .shooting_star:nth-child(7)::after {
	 animation-delay: 3026ms;
}
 .shooting_star:nth-child(8) {
	 top: calc(50% - 49px);
	 left: calc(50% - 73px);
	 animation-delay: 1075ms;
}
 .shooting_star:nth-child(8)::before, .shooting_star:nth-child(8)::after {
	 animation-delay: 1075ms;
}
 .shooting_star:nth-child(9) {
	 top: calc(50% - -74px);
	 left: calc(50% - 93px);
	 animation-delay: 3686ms;
}
 .shooting_star:nth-child(9)::before, .shooting_star:nth-child(9)::after {
	 animation-delay: 3686ms;
}
 .shooting_star:nth-child(10) {
	 top: calc(50% - -188px);
	 left: calc(50% - 278px);
	 animation-delay: 1451ms;
}
 .shooting_star:nth-child(10)::before, .shooting_star:nth-child(10)::after {
	 animation-delay: 1451ms;
}
 .shooting_star:nth-child(11) {
	 top: calc(50% - -133px);
	 left: calc(50% - 162px);
	 animation-delay: 262ms;
}
 .shooting_star:nth-child(11)::before, .shooting_star:nth-child(11)::after {
	 animation-delay: 262ms;
}
 .shooting_star:nth-child(12) {
	 top: calc(50% - 44px);
	 left: calc(50% - 48px);
	 animation-delay: 5463ms;
}
 .shooting_star:nth-child(12)::before, .shooting_star:nth-child(12)::after {
	 animation-delay: 5463ms;
}
 .shooting_star:nth-child(13) {
	 top: calc(50% - -144px);
	 left: calc(50% - 14px);
	 animation-delay: 6893ms;
}
 .shooting_star:nth-child(13)::before, .shooting_star:nth-child(13)::after {
	 animation-delay: 6893ms;
}
 .shooting_star:nth-child(14) {
	 top: calc(50% - -2px);
	 left: calc(50% - 106px);
	 animation-delay: 375ms;
}
 .shooting_star:nth-child(14)::before, .shooting_star:nth-child(14)::after {
	 animation-delay: 375ms;
}
 .shooting_star:nth-child(15) {
	 top: calc(50% - 67px);
	 left: calc(50% - 284px);
	 animation-delay: 3510ms;
}
 .shooting_star:nth-child(15)::before, .shooting_star:nth-child(15)::after {
	 animation-delay: 3510ms;
}
 .shooting_star:nth-child(16) {
	 top: calc(50% - 72px);
	 left: calc(50% - 164px);
	 animation-delay: 4742ms;
}
 .shooting_star:nth-child(16)::before, .shooting_star:nth-child(16)::after {
	 animation-delay: 4742ms;
}
 .shooting_star:nth-child(17) {
	 top: calc(50% - 172px);
	 left: calc(50% - 23px);
	 animation-delay: 3571ms;
}
 .shooting_star:nth-child(17)::before, .shooting_star:nth-child(17)::after {
	 animation-delay: 3571ms;
}
 .shooting_star:nth-child(18) {
	 top: calc(50% - -126px);
	 left: calc(50% - 254px);
	 animation-delay: 2271ms;
}
 .shooting_star:nth-child(18)::before, .shooting_star:nth-child(18)::after {
	 animation-delay: 2271ms;
}
 .shooting_star:nth-child(19) {
	 top: calc(50% - 130px);
	 left: calc(50% - 36px);
	 animation-delay: 9206ms;
}
 .shooting_star:nth-child(19)::before, .shooting_star:nth-child(19)::after {
	 animation-delay: 9206ms;
}
 .shooting_star:nth-child(20) {
	 top: calc(50% - -182px);
	 left: calc(50% - 71px);
	 animation-delay: 8351ms;
}
 .shooting_star:nth-child(20)::before, .shooting_star:nth-child(20)::after {
	 animation-delay: 8351ms;
}
 @keyframes tail {
	 0% {
		 width: 0;
	}
	 30% {
		 width: 100px;
	}
	 100% {
		 width: 0;
	}
}
 @keyframes shining {
	 0% {
		 width: 0;
	}
	 50% {
		 width: 30px;
	}
	 100% {
		 width: 0;
	}
}
 @keyframes shooting {
	 0% {
		 transform: translateX(0);
	}
	 100% {
		 transform: translateX(300px);
	}
}
 @keyframes sky {
	 0% {
		 transform: rotate(45deg);
	}
	 100% {
		 transform: rotate(405deg);
	}
}
     
  `}</style>
  </>
}