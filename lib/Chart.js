import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KeenDataviz from 'keen-dataviz';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    console.log('moun', props);
  }

  componentDidUpdate() {
    console.log('up', this.props);
    this.keenDataviz.destroy();
    this.keenDataviz = new KeenDataviz({
      container: this.el,
      ...this.props,
    });
  }

  componentWillUnmount() {
    this.keenDataviz.destroy();
  }

  handleRef = (el) => {
    if (el) {
      this.el = el;
      this.keenDataviz = new KeenDataviz({
        container: this.el,
        ...this.props,
      });
    }
  }

  render() {
    return <div ref={this.handleRef} style = {{height: '100%', width: '100%'}}/>;
  }
}

// default config: https://github.com/keen/keen-dataviz.js/blob/master/lib/index.js#L27
Chart.propTypes = {
  type: PropTypes.string,
  showDeprecationWarnings: PropTypes.bool,
  showLoadingSpinner: PropTypes.bool,
  theme: PropTypes.string,
  dateFormat: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
  legend: PropTypes.shape({
    show: PropTypes.bool,
    position: PropTypes.string,
    label: PropTypes.shape({
      textMaxLength: PropTypes.number,
    }),
    pagination: PropTypes.shape({
      offset: PropTypes.number,
      limit: PropTypes.number,
    }),
    tooltip: PropTypes.shape({
      show: PropTypes.bool,
      pointer: PropTypes.bool,
    }),
    sort: PropTypes.string,
  }),
  colors: PropTypes.arrayOf(PropTypes.string),
  colorMapping: PropTypes.objectOf(PropTypes.string),
  labelMapping: PropTypes.objectOf(PropTypes.string),
  labelMappingRegExp: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  labelMappingDimension: PropTypes.string,
  errorMapping: PropTypes.objectOf(PropTypes.string),
  showErrorMessages: PropTypes.bool,
  labels: PropTypes.arrayOf(PropTypes.string),
  sortGroups: PropTypes.string,
  sortIntervals: PropTypes.string,
  stacking: PropTypes.string,
  table: PropTypes.shape({
    columns: PropTypes.arrayOf(PropTypes.string),
    pagination: PropTypes.shape({
      limit: PropTypes.number,
    }),
    mapValues: PropTypes.func,
  }),
  renderOnVisible: PropTypes.bool,
  results: PropTypes.any,
  previousResults: PropTypes.shape({
    result: PropTypes.number,
  }),
  funnel: PropTypes.shape({
    lines: PropTypes.bool,
    resultValues: PropTypes.bool,
    percents: PropTypes.shape({
      show: PropTypes.bool,
      countingMethod: PropTypes.string,
      decimals: PropTypes.number,
    }),
    hover: PropTypes.bool,
    marginBetweenSteps: PropTypes.bool,
    effect3d: PropTypes.string,
  }),
  stacked: PropTypes.bool,
  indexBy: PropTypes.string,
  library: PropTypes.string,
  timezone: PropTypes.string,
  padding: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
  tooltip: PropTypes.shape({
    show: PropTypes.bool,
    grouped: PropTypes.bool,
    format: PropTypes.shape({
      title: PropTypes.func,
      name: PropTypes.func,
      value: PropTypes.func,
    }),
    position: PropTypes.func,
    contenss: PropTypes.func,
  }),
  partialIntervalIndicator: PropTypes.shape({
    show: PropTypes.bool,
    className: PropTypes.string,
  }),
  showTitle: PropTypes.bool,
  notes: PropTypes.string,
  axis: PropTypes.any,
  color: PropTypes.any,
  point: PropTypes.any,
  transition: PropTypes.any,
  data: PropTypes.any,
  grid: PropTypes.any,
};
