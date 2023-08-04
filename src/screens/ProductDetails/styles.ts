import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
  },
  image: {
    borderRadius: 120 * 2,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignSelf: 'center',
    margin: 20,
  },
  noImageContainer: {
    width: 190,
    height: 190,
    borderRadius: 120 * 2,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignSelf: 'center',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImageText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDetails: {
    fontSize: 16,
    color: 'grey',
  },
});
