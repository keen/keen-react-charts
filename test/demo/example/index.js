import React from 'react';
import ReactDOM from 'react-dom';
import Chart from '../../../lib/Chart';
import client from './analysis';

/*
  Webpack users: to include CSS files in your project - install
  https://github.com/webpack-contrib/css-loader
  https://github.com/webpack-contrib/style-loader
  Here's an example: https://github.com/keen/keen-dataviz-webpack-boilerplate
*/
import 'keen-dataviz/dist/keen-dataviz.css';
import './styles/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'funnel',
      title: 'Funnel Chart',
      title: 'Actions and purchases',
      labelMapping: {
        pageviews: 'Pageviews',
        banner_visibility: 'Banner visibility',
        banner_clicks: 'Banner clicks',
        signups: 'Signups',
      },
      funnel: {
        lines: false,
        percents: {
          show: true,
        },
        resultValues: false
      },
      renderOnVisible: true
    }
  }

  componentDidMount() {
    client
      .query({
        analysis_type: 'funnel',
        steps: [
          {
            event_collection: 'pageviews',
            actor_property: 'user.uuid',
            timeframe: {
              start: '2019-03-13T00:00:00.000Z',
              end: '2019-08-14T00:00:00.000Z'
            }
          },
          {
            event_collection: 'banner_visibility',
            actor_property: 'user.uuid',
            timeframe: {
              start: '2019-03-13T00:00:00.000Z',
              end: '2019-08-14T00:00:00.000Z'
            }
          },
          {
            event_collection: 'banner_clicks',
            actor_property: 'user.uuid',
            timeframe: {
              start: '2019-03-13T00:00:00.000Z',
              end: '2019-08-14T00:00:00.000Z'
            }
          },
          {
            event_collection: 'signups',
            actor_property: 'user.uuid',
            timeframe: {
              start: '2019-03-13T00:00:00.000Z',
              end: '2019-08-14T00:00:00.000Z'
            }
          }
        ],
      })
      .then((results) => {
        this.setState({
          results: results,
        });
      });
  }


  render() {
    return (
      <Chart {...this.state} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
