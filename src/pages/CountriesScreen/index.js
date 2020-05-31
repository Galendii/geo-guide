//Packages
import React, { useState, useEffect } from "react";
import { Keyboard } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import Toast from "react-native-root-toast";

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
import CountryMultiDataComponent from "../../components/CountryMultiDataComponent";
import ErrorComponent from "../../components/ErrorComponent";
import MapComponent from "../../components/MapComponent";
//Code

const CountriesScreen = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [simpleDataVisible, setsimpleDataVisible] = useState(false);
  const [emptyData, setEmptyData] = useState(false);

  const handleSubmitCountry = async () => {
    setLoading(true);
    Keyboard.dismiss();
    try {
      let response = await fetch(
        `https://restcountries.eu/rest/v2/name/${country}`
      ).then((response) => response.json());
      console.log(response);
      if (response.status !== 404) {
        setCountryData(() => [...response]);
      } else {
        setEmptyData(true);
        setTimeout(() => setEmptyData(false), 3000);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);

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

      {countryData.length > 1 && (
        <CountryMultiDataComponent countryData={countryData} />
      )}
      <Toast
        visible={emptyData}
        position={-5}
        shadow={false}
        hideOnPress={true}
        backgroundColor="#ff0000"
        textColor="#fff"
      >
        Country not found, please check your input...
      </Toast>
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
