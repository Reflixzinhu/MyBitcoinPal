import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import QuotationsItems from './QuotationsItems';

import styles from './styles';

const ButtonQuery = ({ time, func }) => {
  return (
    <TouchableOpacity style={styles.buttonQuery} onPress={func}>
      <Text style={styles.textButtonQuery}>{time}</Text>
    </TouchableOpacity>
  );
};

const QuotationsList = (props) => {
  const daysQuery = props.filterDay;
  return (
    <>
      <View style={styles.filters}>
        <ButtonQuery time={'7D'} func={() => daysQuery(7)} />
        <ButtonQuery time={'15D'} func={() => daysQuery(15)} />
        <ButtonQuery time={'1M'} func={() => daysQuery(30)} />
        <ButtonQuery time={'3M'} func={() => daysQuery(90)} />
        <ButtonQuery time={'6M'} func={() => daysQuery(180)} />
      </View>
      {/* <ScrollView> */}
      <FlatList
        data={props.listTransactions}
        renderItem={({ item }) => {
          return <QuotationsItems valor={item.valor} data={item.data} />;
        }}
      />
      {/* </ScrollView> */}
    </>
  );
};

export default QuotationsList;
