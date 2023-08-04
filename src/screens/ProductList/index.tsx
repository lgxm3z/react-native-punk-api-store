import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchBeersRequest} from '../../actions';
import styles from './styles';
import Beer from '../../interfaces/Beer';
import Layout from '../../components/Layout';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import ListItem from './ListItem';
import RootStackParamList from '../../interfaces/RootStackParamList';

interface Props {
  beers: Beer[];
  fetchBeers: (page: number) => void;
}

const ProductList: React.FC<Props> = ({beers, fetchBeers}) => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'ProductList'>>();
  const [page, setPage] = useState(1);
  const [reloading, setReloading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (reloading && page === 1) {
      setReloading(false);
    }
    fetchBeers(page);
  }, [fetchBeers, page, reloading]);

  useEffect(() => {
    if (beers?.length) {
      setInitialLoading(false);
    }
  }, [beers]);

  const handleLoadMore = () => setPage(page + 1);
  const reload = () => {
    setReloading(true);
    setPage(1);
  };

  const handleItemPress = (item: Beer) =>
    navigation.navigate('ProductDetails', {item});

  if (initialLoading) {
    return renderLoading();
  }
  if (!beers?.length) {
    return renderNoBeers(reloading, reload);
  }

  return (
    <Layout>
      <FlatList
        data={beers}
        keyExtractor={(item, index) => `beer-${item.id}-${index}`}
        onEndReached={handleLoadMore}
        style={styles.listStyle}
        renderItem={({item}) => (
          <ListItem item={item} onPress={() => handleItemPress(item)} />
        )}
      />
    </Layout>
  );
};

const renderLoading = () => (
  <Layout>
    <View style={styles.centerContainer}>
      <ActivityIndicator
        testID="loading-indicator"
        style={styles.activityIndicator}
        size="large"
        color="#0000ff"
      />
    </View>
  </Layout>
);

const renderNoBeers = (reloading: boolean, reload: () => void) => (
  <Layout>
    <View style={styles.centerContainer}>
      {reloading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color="#0000ff"
        />
      ) : (
        <>
          <Text>No beers found</Text>
          <TouchableOpacity onPress={reload}>
            <Text style={styles.reloadText}>Click here to reload</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  </Layout>
);

const mapStateToProps = (state: any) => ({
  beers: state.beers.items || [],
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchBeers: (page: number) => dispatch(fetchBeersRequest(page)),
});

export const UnconnectedProductList = ProductList;

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
