//Packages
import React, { useState } from "react";
import { View, Text } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

//Styles
import {
  Container,
  Title,
  TitleAlt,
  TitleContainer,
  FormButton,
  FormButtonText,
  FormContainer,
  InputLabel,
  CountryInput,
} from "./styles";

//Pages and Components

//Code

const CountriesScreen = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitCountry = async () => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://restcountries.eu/rest/v2/name/${country}`
      ).then((response) => response.json());
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>
          Which Country do you want to <TitleAlt>learn more</TitleAlt> about?
        </Title>
      </TitleContainer>
      <FormContainer>
        <InputLabel>Country Name</InputLabel>
        <CountryInput
          defaultValue={country}
          onChangeText={(country) => setCountry(country)}
          placeholder="Ex: Brazil"
        />
        <FormButton onPress={handleSubmitCountry}>
          <FormButtonText>Search!</FormButtonText>
        </FormButton>
      </FormContainer>

      <AnimatedLoader
        visible={loading}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("../../assets/loader.json")}
        animationStyle={{ width: 100, height: 100 }}
        speed={1}
      />
    </Container>
  );
};

export default CountriesScreen;
