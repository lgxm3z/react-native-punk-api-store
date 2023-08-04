import Beer from '../interfaces/Beer';

type RootStackParamList = {
  ProductList: undefined;
  ProductDetails: {item: Beer};
};

export default RootStackParamList;
