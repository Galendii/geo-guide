import React, { useState } from "react";
import { Animated, Dimensions, Platform } from "react-native";
import AutoHeightWebView from "react-native-autoheight-webview";

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
            <Title>
              {countryData[0].name} ({countryData[0].nativeName})
            </Title>
          </ResponseContainer>
          <ImgHolder
            source={{
              uri: `http://www.countryflags.io/${countryData[0].alpha2Code}/flat/64.png`,
            }}
            style={{ width: 150, height: 100 }}
          />
        </CardHeader>

        <CardBody>
          {/* <SvgUri
            source={{
              uri: countryData[0].flag,
            }}
          /> */}
          <ResponseContainer>
            <LabelTitle>Other Name: </LabelTitle>
            <ResponseText>
              {
                countryData[0].altSpellings[
                  countryData[0].altSpellings.length - 1
                ]
              }
            </ResponseText>
          </ResponseContainer>
          <ResponseContainer>
            <LabelTitle>Capital: </LabelTitle>
            <ResponseText>{countryData[0].capital}</ResponseText>
          </ResponseContainer>
          <ResponseContainer>
            <LabelTitle>Population: </LabelTitle>
            <ResponseText>
              {new Intl.NumberFormat("de-DE").format(countryData[0].population)}
            </ResponseText>
          </ResponseContainer>
          <ResponseContainer>
            <LabelTitle>Area: </LabelTitle>
            <ResponseText>
              {new Intl.NumberFormat("de-DE").format(countryData[0].area)} m²
            </ResponseText>
          </ResponseContainer>
          <ResponseContainer>
            <LabelTitle>Continent: </LabelTitle>
            <ResponseText>
              {countryData[0].region} - {countryData[0].subregion}
            </ResponseText>
          </ResponseContainer>

          <ResponseContainer>
            <LabelTitle>Language: </LabelTitle>
            {countryData[0].languages.map((languageObject) => {
              return (
                <ResponseText>
                  {languageObject.name} ({languageObject.nativeName})
                </ResponseText>
              );
            })}
          </ResponseContainer>
          <ResponseContainer>
            <LabelTitle>Regional Bloc: </LabelTitle>
            {countryData[0].regionalBlocs.map((blocsObject) => {
              return (
                <ResponseText>
                  {blocsObject.name} - {blocsObject.acronym}
                </ResponseText>
              );
            })}
          </ResponseContainer>
        </CardBody>
      </Container>
    </PanGestureHandler>
  );
};

export default countryDataComponent;
