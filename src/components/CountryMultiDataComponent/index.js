import React, { useState } from "react";
import { Animated, Dimensions, Platform, View } from "react-native";

import { PanGestureHandler, State } from "react-native-gesture-handler";
import {
  Container,
  ResponseContainer,
  LabelTitle,
  ResponseText,
  Title,
  ImgHolder,
  WebViewContainer,
  CardBody,
  CardHeader,
} from "./styles";

const countryDataComponent = ({ countryData }) => {
  const [webHeight, setWebHeight] = useState(null);
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    }
  );
  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;
      offset += translationY;
      console.log(translationY);
      if (translationY >= 100) {
        opened = true;
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: opened
          ? -(Dimensions.get("window").height * 0.01)
          : -(Dimensions.get("window").height * 0.7),
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        offset = opened
          ? -(Dimensions.get("window").height * 0.01)
          : -(Dimensions.get("window").height * 0.7);
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }
  function onNavigationChange(event) {
    if (event.title) {
      const htmlHeight = Number(event.title); //convert to number
      setWebHeight(htmlHeight);
    }
  }
  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChanged}
    >
      <Container
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [-(Dimensions.get("window").height * 0.7), 100],
                outputRange: [-(Dimensions.get("window").height * 0.7), 100],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <CardHeader>
          <ResponseContainer>
            <Title>Country not found, did you mean:</Title>
          </ResponseContainer>
        </CardHeader>
        <CardBody
          style={{
            flexGrow: 1,
          }}
        >
          {countryData.map((country) => {
            return (
              <ResponseContainer style={{ width: "100%" }}>
                <LabelTitle>
                  {country.name} ({country.nativeName})
                </LabelTitle>
              </ResponseContainer>
            );
          })}
        </CardBody>
      </Container>
    </PanGestureHandler>
  );
};

export default countryDataComponent;
