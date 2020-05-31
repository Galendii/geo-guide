import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Toast from "react-native-root-toast";

// import { Container } from './styles';

const ErrorComponent = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
    setTimeout(
      () =>
        this.setState({
          visible: false,
        }),
      5000
    ); // hide toast after 5s
  }, []);
  return (
    <Toast visible={visible} position={50} shadow={false} hideOnPress={true}>
      This is a message
    </Toast>
  );
};

export default ErrorComponent;
