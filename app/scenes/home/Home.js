import React from 'react';
import {
  Content,
  StyledText,
  ButtonContainer,
  Container,
  StyledCard,
} from '../../styles/styles';
import * as colors from './../../colors';
import {screenTitle} from '../../constants';
import {CustomButton} from '../../components/CustomButton';

const Home = (props) => {
  const {navigation} = props;
  return (
    <Container>
      <Content>
        <StyledCard>
          <StyledText titleColor={colors.secondaryTextColor}>
            Welcome to Stripe payment Demo.
          </StyledText>
          <ButtonContainer>
            <CustomButton
              title="Go to Payment"
              onClick={() => {
                navigation.navigate(screenTitle.PAYMENT);
              }}
            />
          </ButtonContainer>
        </StyledCard>
      </Content>
    </Container>
  );
};

export default Home;
