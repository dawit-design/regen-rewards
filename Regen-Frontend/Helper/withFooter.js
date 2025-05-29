import React from 'react';
import { View } from 'react-native';
import Footer from '../components/Foooter/Footer'; 

const withFooter = (WrappedComponent) => {
  return (props) => (
    <View style={{ flex: 1, }}> 
      <WrappedComponent {...props} />
      <Footer {...props}/>
    </View>
  );
};

export default withFooter;


