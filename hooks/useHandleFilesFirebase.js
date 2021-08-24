
import { useState, useEffect } from 'react'
import { uploadPhotoProfile } from '../firebase/client'

export const useHandleFilesFirebase = () => {

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
    console.log('Drop', e)
  }
  const handleChangeFile = (e) => {
    // console.log("Target", e.target.files[0])
    // console.log("NativeEvent", e.nativeEvent.target.files[0])
    // const file = e.target.files[0]
    const file = e.nativeEvent.target.files[0]
    console.log(file)
    const task = uploadPhotoProfile(file)
    setTask(task)
  }

  return {
    handleOnDropFile,
    handleChangeFile,
    imageUrl
  }
}