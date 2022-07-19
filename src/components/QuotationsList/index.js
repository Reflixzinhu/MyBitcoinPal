import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ButtonQuery = ({ time }) => {
  return (
    <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
      <Text style={styles.textButtonQuery}>{time}</Text>
    </TouchableOpacity>
  );
};

const QuotationsList = () => {
  return (
    <>
      <View style={styles.filters}>
        <ButtonQuery time={'7D'} />
        <ButtonQuery time={'15D'} />
        <ButtonQuery time={'1M'} />
        <ButtonQuery time={'3M'} />
        <ButtonQuery time={'6M'} />
      </View>
      {/* <ScrollView></ScrollView> */}
    </>
  );
};

export default QuotationsList;
