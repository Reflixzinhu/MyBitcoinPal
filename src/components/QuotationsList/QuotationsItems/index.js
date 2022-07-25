import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const QuotationsItems = (props) => {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logoBitcoin}
            source={require('../../../img/bitcoinimage.png')}
          />
          <Text style={styles.dailyQuotation}>{props.data}</Text>
        </View>
      </View>

      <View style={styles.contextRight}>
        <Text style={styles.price}>$ {props.valor}</Text>
      </View>
    </View>
  );
};

export default QuotationsItems;
