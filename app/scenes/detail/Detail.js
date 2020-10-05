import React from 'react';
import {
  Content,
  StyledText,
  Container,
  ButtonContainer,
  StyledCard,
} from '../../styles/styles';
import * as colors from './../../colors';
import {CustomButton} from '../../components/CustomButton';

const Detail = (props) => {
  const {route, navigation} = props;
  const {item} = route.params;
  console.log('item', item);
  const {message, paymentId} = item;

  return (
    <Container>
      <Content>
        <StyledCard>
          <StyledText titleColor={colors.secondaryTextColor}>
            Payment Detail.
          </StyledText>
          <Content dir="row">
            <StyledText fsize="20" titleColor={colors.secondaryColor}>
              {message}
            </StyledText>
            <StyledText fsize="18" titleColor={colors.secondaryColor}>
              PaymentId : {paymentId}
            </StyledText>
          </Content>
          <ButtonContainer>
            <CustomButton
              title="Go to Home"
              onClick={() => {
                navigation.popToTop();
              }}
            />
          </ButtonContainer>
        </StyledCard>
      </Content>
    </Container>
  );
};

export default Detail;
