import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const QuotationsItems = () => {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logoBitcoin}
            source={require('../../../img/bitcoinimage.png')}
          />
          <Text style={styles.dailyQuotation}>18/07/2022</Text>
        </View>
      </View>

      <View style={styles.contextRight}>
        <Text style={styles.price}>$ 53331.052</Text>
      </View>
    </View>
  );
};

export default QuotationsItems;
