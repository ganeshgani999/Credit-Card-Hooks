// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
`
export const CreditCardContainer = styled.div`
    width: 50%;
    background-color: #3b4b69;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Heading = styled.h1`
    font-family: 'Roboto';
    font-size: 32px;
    border-bottom: 2px solid #ffd773;
    color: #ffffff;
    padding-top: 10%;
`
export const Head = styled.h1`
    font-family: 'Roboto';
    font-size: 32px;
`
export const CreditCardItem = styled.div`
    background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
    background-size: cover;
    width: 70%;
    height: 45%;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 40px;
    margin-top: 50px;
    padding-bottom: 50px;
`
export const CardNumber = styled.h1`
    font-family: 'Roboto';
    font-size: 35px;
    color: #ffffff;
    font-weight: bold;
`
export const CardTitle = styled.p`
    font-family: 'Roboto';
    color: #d3d9e0;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 0px;
    margin-top: 50px;
`
export const CardName = styled.h1`
    font-family: 'Roboto';
    font-size: 32px;
    color: #ffffff;
    font-weight: 500;
    margin-top: 6px;
    margin-bottom: 20px;
`
export const PaymentContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
`
export const InputContainer = styled.div`
  background-color: #ffffff;
  min-width: 90%;
  min-height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 8px 0px #d3d9e0;
  padding-top: 20px;

`
export const InputHeading = styled.h1`
    font-family: 'Roboto';
    font-size: 22px;
    color: #344e7a;
`
export const Input = styled.input`
    height: 35px;
    width: 70%;
    margin-bottom: 20px;
    border: 1px solid #d3d9e0;
    padding-left: 20px;
    padding-top: 7px;
    padding-bottom: 7px;
    font-family: 'Roboto';
    font-size: 13px;
`
