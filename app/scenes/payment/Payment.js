import React, {useState} from 'react';
import {ButtonContainer, Container, CardContainer} from '../../styles/styles';
import {screenTitle, requestMethods, CREATE_PAYMENT} from '../../constants';
import {CustomButton} from '../../components/CustomButton';
import {CreditCardInput} from 'react-native-credit-card-input';
import {networkCall} from '../../services/payment';
import {showToast} from '../../functions';
/* var cardDetails = {
  number: '4242424242424242',
  exp_month: 10,
  exp_year: 21,
  cvc: '888',
}; */
const Payment = (props) => {
  const {navigation} = props;
  const [isCardValid, setIsCardValid] = useState(false);
  const [cardDetails, setCardDetails] = useState(null);

  const createPayment = async () => {
    try {
      const response = await networkCall(
        CREATE_PAYMENT,
        requestMethods.POST,
        {...cardDetails, currency: 'usd'},
        {},
      );

      // check if publishKey is null
      if (response.data) {
        console.log('data= ', response.data);
        navigation.navigate(screenTitle.DETAIL, {
          item: {
            paymentId: response.data.paymentId,
            message: response.data.message,
          },
        });
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  const handleClick = async () => {
    if (cardDetails !== null) {
      createPayment();
    } else {
      setIsCardValid(false);
      showToast({message: 'Please fill Card details'});
    }
  };

  const onCreditCardChanged = (form) => {
    console.log(form);
    setIsCardValid(form.valid);
    if (form.valid) {
      const formData = form.values;
      var fields = formData.expiry.split('/');
      setCardDetails({
        number: formData.number,
        exp_month: fields[0],
        exp_year: fields[1],
        cvc: formData.cvc,
      });
    }
  };
  return (
    <Container>
      <CardContainer>
        <CreditCardInput onChange={onCreditCardChanged} />
      </CardContainer>
      <ButtonContainer>
        <CustomButton
          title="Submit"
          onClick={handleClick}
          disabled={!isCardValid}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Payment;
