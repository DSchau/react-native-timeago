import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import distanceAgo from 'date-fns/distance_in_words';

export class TimeAgo extends Component {
  static propTypes = {
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    containerStyle: PropTypes.object,
    interval: PropTypes.number,
    prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    style: PropTypes.object,
    suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    time: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date)
    ]).isRequired
  };

  static defaultProps = {
    className: '',
    containerClassName: '',
    containerStyle: {},
    interval: 1000 * 60, // one minute
    prefix: '',
    style: {},
    suffix: 'ago'
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.setState({
      now: Date.now()
    });

    this.timer = setInterval(() => {
      this.setState({
        now: Date.now()
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { now } = this.state;
    const {
      className,
      containerClassName,
      containerStyle,
      prefix,
      style,
      suffix,
      time
    } = this.props;
    return (
      <View className={containerClassName} style={containerStyle}>
        <Text className={className} style={style}>
          {typeof prefix === 'string' && `${prefix} `}
          {distanceAgo(time, now)}
          {typeof suffix === 'string' && ` ${suffix}`}
        </Text>
      </View>
    );
  }
}
