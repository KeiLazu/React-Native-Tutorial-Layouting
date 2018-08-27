import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import FixedDimension from './components/FixedDimension';
import FlexDimension from './components/FlexDimension';
import FlexBoxRowDimension from './components/FlexBoxRowDimension';
import FlexBoxColumnDimension from './components/FlexBoxColumnDimension';
import AlignedFlexBoxColumnDimension from './components/AlignedFlexBoxColumnDimension';

export default class App extends React.Component {
  render() {
    return ( 
    <View style={{flex: 1}}>
      {/* < FixedDimension /> */}
      {/* < FlexDimension /> */}
      {/* <FlexBoxRowDimension /> */}
      {/* <FlexBoxColumnDimension /> */}
      <AlignedFlexBoxColumnDimension />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});