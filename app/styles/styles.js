import styled, {css} from 'styled-components/native';
import * as colors from './../colors';

//Styled SafeAreaView
export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.primaryColor};
`;

//Styled View
export const Content = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.View`
  margin-top: 80px;
`;

export const StyledCard = styled.View`
border-radius: 15px;
padding:15px;
background: ${colors.primaryColor};
shadow-color: #000;
shadow-offset: {
  width: 0px,
  height: 8px,
};
shadow-opacity: 1;
shadow-radius: 3.84px;
elevation: 5;  
  `;
export const ButtonContainer = styled.View`
  height: 50px;
  align-items: center;
  margin: 28px 0px;
  flex-direction: ${(props) => (props.dir ? props.dir : 'column')};
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};
  shadow-color: #000000
  shadow-offset: {
    width: 2px,
    height: 2px,
  };
  shadow-opacity: 0.7;
  shadow-radius: 3.84px;
  elevation: 5; 
`;

export const SectionContainer = styled.View`
  margin-top: 32px;
  padding: 0px 28px;
`;

export const DashedBorderBG = styled.View`
  padding: 16px;
  border: 1px dashed black;
  margin-top: 16px;
  border-radius: 10px;
  justify-content: space-between;
`;

export const AddToDoContainer = styled(DashedBorderBG)`
  justify-content: center;
  margin: 8px;
`;

export const StyledButton = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 14px 10px;
  background: ${colors.secondaryColor};
  ${(props) =>
    props.disabled &&
    css`
      background: gray;
    `}
  justify-content: center;
  align-items: center;
`;

//Styled Model
export const StyledModel = styled.Modal`
  margin: 20px;
  background: ${colors.primaryColor};
  padding: 35px;
  border-radius: 20px;
  align-items: center;
  shadow-color: black;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

//Styled Text
export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.primaryTextColor};
`;

export const StyledText = styled(Title)`
  font-size: ${(props) => (props.fsize ? props.fsize : 24)}px;
  text-align: center;
  color: ${(props) =>
    props.titleColor ? props.titleColor : colors.primaryTextColor};
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

//Styled TextInput
export const Input = styled.TextInput`
  height: 50px;
  margin: 8px 0 10px 0;
  padding: 6px 8px;
  border: 3px solid #ddd;
`;
