import styled from "styled-components/native";
import { Animated, Dimensions } from "react-native";

export const Container = styled(Animated.View)`
  background: #d55b6a;
  padding: 5px 0px;
  height: 100%;
  border: 2px solid #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: absolute;
  top: ${Dimensions.get("window").height * 0.9}px;
  left: 0px;
  right: 0px;
`;
export const CardHeader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const CardBody = styled.ScrollView`
  width: 100%;
  margin-top: 15px;
`;
export const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: #111;
  margin-bottom: 20px;
`;
export const ResponseContainer = styled.View`
  padding: 5px 15px;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const LabelTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #111;
`;
export const ResponseText = styled.Text`
  font-size: 16px;
  color: #111;
`;
export const ImgHolder = styled.Image`
  width: 100%;
  height: auto;
  align-self: center;
`;
export const WebViewContainer = styled.View`
  max-height: 100px;
  width: 150px;
  margin: auto;
`;
