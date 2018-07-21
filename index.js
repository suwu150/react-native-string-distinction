/**
 * Created by jkwu on 2018/5/28.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

export default class StringDistinction extends Component {
  static propTypes = {
    delimiter: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    style: {
      alignItems: 'flex-end'
    },
  };

  render() {
    const { value, delimiter, style, frontStyle, delimiterStyle, behindStyle } = this.props;
    let frontValue = '';
    let behindValue = '';
    const splits = value && delimiter && value.split(delimiter);

    if (splits && splits.length) {
      frontValue = splits[0];
      behindValue = splits[1];
    }

    if (!delimiter) {
      return (
        <View style={[{ flexDirection: 'row' }, style]}>
          <Text style={frontStyle}>{value}</Text>
        </View>
      );
    }

    return (
      <View style={[{ flexDirection: 'row' }, style]}>
        <Text style={frontStyle}>{frontValue}</Text>
        <Text style={delimiterStyle}>{delimiter}</Text>
        <Text style={behindStyle}>{behindValue}</Text>
      </View>
    );
  }
}
