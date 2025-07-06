import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const LoginOTP = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);

  const handleSendOTP = () => {
    // Here you would send the OTP to the user's phone number
    // For the sake of this example, let's just generate a random OTP
    const generatedOTP = Math.floor(100000 + Math.random() * 900000);
    setOTP(generatedOTP.toString());
    Alert.alert('OTP', `Your OTP is: ${generatedOTP}`);
    setIsOTPSent(true);
  };

  const handleLogin = () => {
    // Here you would verify the OTP entered by the user
    if (otp === enteredOTP) {
      Alert.alert('Success', 'Logged in successfully');
    } else {
      Alert.alert('Error', 'OTP verification failed');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Enter Phone Number"
        keyboardType="numeric"
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
      />
      {!isOTPSent ? (
        <Button title="Send OTP" onPress={handleSendOTP} />
      ) : (
        <>
          <TextInput
            placeholder="Enter OTP"
            keyboardType="numeric"
            style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
            onChangeText={(text) => setOTP(text)}
            value={otp}
          />
          <Button title="Login" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

export default LoginOTP;
