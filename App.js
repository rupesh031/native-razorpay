import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RazorpayCheckout from 'react-native-razorpay';

export default function App() {
  const makePay = () => {
    var options = {
      description: 'Credits towards consultation',
      // image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_992u5W3qjzMuK8', // Your api key
      amount: '5050',
      name: 'Rupesh',
      // prefill: {
      //   email: 'void@razorpay.com',
      //   contact: '9191919191',
      //   name: 'Razorpay Software',
      // },
      theme: {color: '#F37254'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        console.log(data);
        console.log(options);
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        console.log('error');
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Payment" onPress={makePay} />
    </View>
  );
}

const styles = StyleSheet.create({});
