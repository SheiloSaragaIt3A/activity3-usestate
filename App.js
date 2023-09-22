import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import React, { useState } from 'react';

//Flashlight
const Flight = ({ onBackPress }) => {
  const [isOn, setIsOn] = useState(true); // State to track flashlight status

  const toggleFlashlight = () => {
    setIsOn(!isOn); // Toggle the flashlight status
  };

  return (
    <View style={{ flexDirection: 'column', alignSelf: 'center', columnGap: 20 }}>
      <View style={{ marginBottom: 30, marginTop: 30 }}>
        {isOn ? (
          <Image source={require('./assets/src/off.jpg')}
           style={{ height: 500, width: 300}} />
        ) : (
          <Image source={require('./assets/src/on.png')}
           style={{height: 500, width:300}} />
        )}
      </View>

      <View style={{ marginBottom: 20 }}>
        <Button title={isOn ? "OFF" : "ON"} onPress={toggleFlashlight} />
      </View>
      <View>
        <Button title="BACK" onPress={onBackPress} />
      </View>
    </View>
  );
};
//counter
const Counter = ({ onBackPress }) => {
  const [number, setNumber] = useState(0);
  const setAdd = () => {
    setNumber(number + 1);
  };
  const setSubtract = () => {
    setNumber(number - 1);
  };

  return (
    <View>
      <Text style={{ fontSize: 300 }}>{number}</Text>
      <View style={{ flexDirection: 'row', height: 60, width: 90, gap: 100 }}>
        <Button title="-1" color="violet" onPress={() => setSubtract()} />
        <Button title="+1" color="orange" onPress={() => setAdd()} />
      </View>
      <View style={{ marginTop: 30 }}>
        <Button title="BACK" onPress={onBackPress} />
      </View>
    </View>
  );
};

export default function App() {
  const [flight, setFlight] = useState(false);
  const [counter, setCounter] = useState(false);

  const toggleFlight = () => {
    setFlight(!flight); // Toggle the flight state
    setCounter(false); // Disable the counter button
  };

  const toggleCounter = () => {
    setCounter(!counter); // Toggle the counter state
    setFlight(false); // Disable the F-LIGHT button
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignContent: 'center', alignSelf: 'center', justifyContent: 'space-between', columnGap: 100 }}>
        <View>
          <Button title="F-LIGHT" onPress={toggleFlight} disabled={flight || counter} />
        </View>
        <View></View>
        <Button title="COUNTER" onPress={toggleCounter} disabled={flight || counter} />
      </View>
      <View>
        {flight && <Flight onBackPress={toggleFlight} />}
      </View>
      <View>
        {counter && <Counter onBackPress={toggleCounter} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    alignContent: 'center',
    flexDirection:'column',
    margin: 40
  },
  
  bottonUpper: {
    color: 'green',
  },
});
