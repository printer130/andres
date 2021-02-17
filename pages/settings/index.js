import { Repair } from '../../components/icons/Repair'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { uploadPhotoProfile } from '../../firebase/client'

export default function Settings() {
  const [task, setTask] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {

    if (task) {
      let onProgress = () => { }
      let onError = () => { }
      let onComplete = () => {
        task.snapshot.ref.getDownloadURL()
          .then(setImageUrl)
      }

      task.on('state_changed',
        onProgress,
        onError,
        onComplete
      )
    }
  }, [task])

  const handleOnDropFile = (e) => {
    console.log('Drop', e);
  }
  const handleChangeFile = (e) => {
    console.log("Target", e.target.files[0]);
    console.log("NativeEvent", e.nativeEvent.target.files[0]);
    // const file = e.target.files[0]
    const file = e.nativeEvent.target.files[0]
    console.log(file);
    const task = uploadPhotoProfile(file)
    setTask(task)
  }

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