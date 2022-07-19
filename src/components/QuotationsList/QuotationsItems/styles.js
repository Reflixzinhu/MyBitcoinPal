import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContent: {
    width: '95%',
    height: 'auto',
    // backgroundColor: '#ffffff',
    // marginLeft: '3%',
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  contextLeft: {
    width: '36%',
    alignItems: 'flex-start',
  },
  logoBitcoin: {
    width: 40,
    height: 40,
  },
  boxLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dailyQuotation: {
    fontSize: 16,
    paddingLeft: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  contextRight: {
    width: '64%',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 16,
    paddingLeft: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default styles;
