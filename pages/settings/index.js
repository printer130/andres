import { Repair } from '../../components/icons/Repair'
import Head from 'next/head'
import { useHandleFilesFirebase } from '../../hooks/useHandleFilesFirebase.js'

export default function Settings() {
  const { handleOnDropFile, handleChangeFile, imageUrl } = useHandleFilesFirebase()

  return <div>
    <Head><title>⚡</title></Head>
    <title>ATSports - repair</title>
    <h1>
      Estamos trabajando...
  </h1>
    <input
      type='file'
      onChange={handleChangeFile}
      onDrop={handleOnDropFile}
    />
    <img src={imageUrl} alt="loading..." />
    <main>
      <Repair />
    </main>
    <style jsx>
      {`
      div{
        margin-top: 63px;
      }
      h1 {
        text-align: center;
        margin: 1em auto;
      }
      main {
        width: 100%;
        text-align: center;
      }
      input[type='file' i] {
        color:red;
      }
  `}
    </style>
  </div>
}