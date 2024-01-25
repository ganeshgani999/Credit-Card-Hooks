// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  CreditCardContainer,
  PaymentContainer,
  Heading,
  CreditCardItem,
  CardNumber,
  CardTitle,
  CardName,
  InputContainer,
  InputHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [num, setNum] = useState('')
  const [name, setName] = useState('')

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeNum = event => {
    setNum(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardContainer data-testid="creditCard">
        <Heading>Credit Card</Heading>
        <CreditCardItem>
          <CardNumber>{num}</CardNumber>
          <CardTitle>CARDHOLDER NAME</CardTitle>
          <CardName>{name}</CardName>
        </CreditCardItem>
      </CreditCardContainer>
      <PaymentContainer>
        <InputContainer>
          <InputHeading>Payment Method</InputHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={num}
            onChange={onChangeNum}
          />
          <Input
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeName}
          />
        </InputContainer>
      </PaymentContainer>
    </AppContainer>
  )
}
export default CreditCard
