import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  listItemContainer: {
    flexDirection: 'row',
    margin: 15,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 5,
  },
  imageStyle: {
    width: '30%',
    height: 120,
    borderRadius: 120 * 2,
    margin: 5,
    marginLeft: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  nameText: {
    fontSize: 22,
    fontWeight: '800',
    color: 'black',
  },
  taglineText: {
    fontSize: 18,
    color: 'black',
  },
  descriptionText: {
    fontSize: 12,
    marginRight: 8,
    color: 'black',
  },
  additionalInfoContainer: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-evenly',
    borderRadius: 18,
    marginHorizontal: 10,
  },
  additionalInfoTextVol: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFD100',
    marginTop: 4,
    backgroundColor: '#1f1a0f',
    padding: 8,
    borderRadius: 8,
  },
  additionalInfoTextIBU: {
    fontSize: 12,
    fontWeight: '600',
    color: '#b4fc6a',
    marginTop: 4,
    backgroundColor: '#1f1a0f',
    padding: 8,
    borderRadius: 8,
  },
  additionalInfoTextEBC: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fa624d',
    marginTop: 4,
    backgroundColor: '#1f0f0f',
    padding: 8,
    borderRadius: 8,
  },
  normalWeightText: {
    fontWeight: 'normal',
  },
  flatListStyle: {
    width: '100%',
    height: '100%',
  },
  activityIndicator: {
    margin: 10,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reloadText: {
    color: 'blue',
  },
  listStyle: {
    width: '100%',
    height: '100%',
  },
});
