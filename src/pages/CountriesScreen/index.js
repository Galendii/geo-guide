//Packages
import React, { useState, useEffect } from "react";
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
import CountryDataComponent from "../../components/CountryDataComponent";
import MapComponent from "../../components/MapComponent";
//Code

const CountriesScreen = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [simpleDataVisible, setsimpleDataVisible] = useState(false);

  const handleSubmitCountry = async () => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://restcountries.eu/rest/v2/name/${country}`
      ).then((response) => response.json());
      setCountryData(() => [...response]);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log(countryData);
  };

  useEffect(() => {
    console.log(countryData);
    if (countryData.length === 1) {
      setsimpleDataVisible(true);
    }
  }, [countryData]);

  return (
    <Container>
      <TitleContainer>
        <Title>
          Which Country do you want to <TitleAlt>learn more</TitleAlt> about?
        </Title>
      </TitleContainer>
      <FormContainer>
        <CountryInput
          defaultValue={country}
          onChangeText={(country) => setCountry(country)}
          placeholder="Insert the Country name here!"
        />
        <FormButton onPress={handleSubmitCountry}>
          <FormButtonText>Search!</FormButtonText>
        </FormButton>
      </FormContainer>
      {simpleDataVisible && <MapComponent countryData={countryData} />}
      {simpleDataVisible && <CountryDataComponent countryData={countryData} />}

      {/* {countryData.length > 1 && <CountryMultiDataComponent />} */}
      {/* {countryData.length === 0 && <Error />} */}

      <AnimatedLoader
        visible={loading}
        overlayColor="rgba(0,0,0,0.75)"
        source={require("../../assets/loader.json")}
        animationStyle={{ width: 100, height: 100 }}
        speed={1}
      />
    </Container>
  );
};

export default CountriesScreen;
