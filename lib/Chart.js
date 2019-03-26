import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KeenDataviz from 'keen-dataviz';
import 'keen-dataviz/dist/keen-dataviz.css';

export default class Chart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.keenDataviz.render(this.props.results);
  }

  componentWillUnmount() {
    this.keenDataviz.destroy();
  }

  handleRef = (el) => {
    if (el) {
      this.keenDataviz = new KeenDataviz({
        container: el,
        ...this.props,
      });
    }
  }

  render() {
    return <div ref={this.handleRef} />;
  }
}

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

Chart.defaultProps = {
  showDeprecationWarnings: true,
  showLoadingSpinner: false,
  title: undefined,
  showTitle: true,
  notes: undefined,
  theme: 'keen-dataviz',
  colors: [
    '#00bbde', '#fe6672', '#eeb058', '#8a8ad6', '#ff855c', '#00cfbb',
    '#5a9eed', '#73d483', '#c879bb', '#0099b6', '#d74d58', '#cb9141',
    '#6b6bb6', '#d86945', '#00aa99', '#4281c9', '#57b566', '#ac5c9e',
    '#27cceb', '#ff818b', '#f6bf71', '#9b9be1', '#ff9b79', '#26dfcd',
    '#73aff4', '#87e096', '#d88bcb',
  ],
  colorMapping: {},
  indexBy: 'timeframe.start',
  labels: [],
  labelMapping: {},
  labelMappingRegExp: undefined,
  errorMapping: {},
  showErrorMessages: true,
  library: 'default',
  sortGroups: undefined,
  sortIntervals: undefined,
  results: undefined,
  // C3 chartOptions
  type: undefined,
  stacked: false,
  dateFormat: undefined,
  legend: {
    show: true,
    position: 'right',
    label: {
      textMaxLength: 12,
    },
    pagination: {
      offset: 0, // start from
      limit: 5, // items per page
    },
    tooltip: {
      show: true,
      pointer: true,
    },
    sort: undefined,
  },
  axis: {},
  color: {},
  padding: {
    top: 15,
  },
  point: {
    focus: {
      expand: {
        enabled: false,
      },
    },
    r: 2,
    show: true,
  },
  tooltip: {
    format: {
      // https://c3js.org/samples/tooltip_format.html
    },
  },
  transition: {
    // duration: 0
  },
  data: {
    selection: {
      enabled: true,
      draggable: true,
      multiple: true,
    },
    order: null,
  },
  grid: {
    y: {
      show: true,
    },
  },
  partialIntervalIndicator: {
    show: undefined,
    className: 'partial-interval-indicator',
  },
  timezone: 'UTC',
  table: {},
  renderOnVisible: false,
  funnel: {
    lines: true,
    resultValues: true,
    percents: {
      show: false,
      countingMethod: 'absolute',
      decimals: 0,
    },
    marginBetweenElements: false,
    hover: true,
    effect3d: 'both-sides',
  },
  stacking: undefined,
  labelMappingDimension: undefined,
  previousResults: undefined,
};
