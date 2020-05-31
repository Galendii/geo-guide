import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  background: #111;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

export const TitleContainer = styled.View`
  margin: 40px 10px;
  padding: 0px 20px;
  width: 100%;
  text-align: center;
`;

export const FormContainer = styled.View`
  padding: 0px 10px;
  width: 100%;
`;

export const InputLabel = styled.Text`
  font-style: italic;
  font-weight: 900;
  font-size: 16px;
  color: #d55b6a;
`;

export const TitleAlt = styled.Text`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: #d55b6a;
`;

export const CountryInput = styled.TextInput.attrs({
  placeholderTextColor: "#fff",
})`
  padding: 5px;
  margin: 10px 5px;
  border-bottom-width: 1px;
  border-bottom-color: #e3e3e3;
  font-size: 20px;
  text-align: center;
  color: #fff;
`;

export const FormButton = styled.TouchableOpacity`
  align-self: center;
  background: #d55b6a;
  border-radius: 10px;
  padding: 10px 5px;
  width: 150px;
  margin: 10px 25px;
  text-align: center;
`;

export const FormButtonText = styled.Text`
  color: #eee;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
