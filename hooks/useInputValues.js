import { useState } from 'react'

export const useInputValues = (InitialValue) => {
  const [createNewCustomer, setCreateNewCustomer] = useState(InitialValue)

  const onChange = e => setCreateNewCustomer({
    ...createNewCustomer,
    [e.target.name]: e.target.value
  })

  return {
    username: createNewCustomer.username || '',
    weight: createNewCustomer.weight || '',
    age: createNewCustomer.age || '',
    heigth: createNewCustomer.heigth || '',
    evaluation: createNewCustomer.evaluation || '',
    fat: createNewCustomer.fat || '',
    muscle: createNewCustomer.muscle || '',
    renew: createNewCustomer.renew || '',
    email: createNewCustomer || '',
    onChange
  }
}