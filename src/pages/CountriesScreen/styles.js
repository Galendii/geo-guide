import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const TitleContainer = styled.View`
  margin: 40px 10px;
  width: 100%;
  align-items: center;
`;

export const FormContainer = styled.View`
  width: 100%;
`;

export const InputLabel = styled.Text`
  font-style: italic;
  font-weight: 900;
  font-size: 16px;
  color: #a32c2c;
`;

export const TitleAlt = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #a32c2c;
`;

export const CountryInput = styled.TextInput.attrs({
  placeholderTextColor: "#333",
})`
  padding: 5px;
  margin: 10px 5px;
  background: #e3e3e3;
`;

export const FormButton = styled.TouchableOpacity`
  align-self: center;
  background: rgb(163, 44, 44);
  padding: 5px 5px;
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
