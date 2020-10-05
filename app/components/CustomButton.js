import React from 'react';

import {StyledButton, ButtonText} from '../styles/styles';

export const CustomButton = (props) => {
  const {title, onClick} = props;
  return (
    <StyledButton
      onPress={onClick}
      disabled={props.disabled ? props.disabled : false}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
};
