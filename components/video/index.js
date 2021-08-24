
export default function Video() {
  return <>
    <section className='video'>
      <img src="/atSportsTEXT.svg" width={300} alt="club ATsports" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eveniet placeat reprehenderit nam maiores cupiditate, repudiandae praesentium, iusto, mollitia quo excepturi consequatur dolore ad voluptatem ex consectetur consequuntur voluptate voluptatum.</p>
      <video src='/figmaAndres.mp4' type="video/mp4" controls>
      </video>
    </section>
    <style jsx>{`
      
  .video {
    background-color: var(--andres-color);
    width: 100%;
    padding: 1rem 0 5rem 0;
    margin: 0 auto;
    text-align: center;
  }
  .video p {
    width: 450px;
    margin: 0 auto;
    padding-bottom: 2rem;
    line-height: 2;
  }
  .video img {
    display: block;
    margin:0 auto;
    padding: 2rem 0 1.7rem 0;
  }

  .video video {
    width: 700px;
    margin: 0 auto;
  }
  
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .video p {
      width: 90%;
      line-height: 1.5;
      padding: 5px;
      margin-bottom: 2rem;
    }
    .video video {
      width: 100%;
      margin:0;
      padding: 0;
    }
}
  @media only screen and (min-width: 478px) and (max-width: 768px) {
    .video video {
      width: 100%;
      margin:0;
      padding: 0;
    }
  }
  


    `}</style>
  </>
}