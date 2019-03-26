import React from 'react';
import ReactDOM from 'react-dom';
import Chart from '../../../lib/Chart';
import KeenAnalysis from 'keen-analysis';

import 'keen-dataviz/dist/keen-dataviz.css';
import './styles/style.css';

const client = new KeenAnalysis({
  projectId: '5c87b64ec9e77c0001cf5b6e',
  readKey: 'FB952962910C97DE3E1C6A25EB2FC6B22FDB1ACA9D572948EA18227287BC4E12'
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'funnel',
      title: 'React Funnel Chart',
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
    };
    /*

    testing updates of component


    setTimeout(() => {
      this.setState({
        title: '123'
      }, () => {
        console.log(this.props);
        console.log(this.state);
      });
    }, 3000);

    setTimeout(() => {

      client
        .query({
          analysis_type: 'funnel',
          steps: [
            {
              event_collection: 'pageviews',
              actor_property: 'user.uuid',
              timeframe: {
                start: '2019-03-11T00:00:00.000Z',
                end: '2019-08-14T00:00:00.000Z'
              }
            },
            {
              event_collection: 'banner_visibility',
              actor_property: 'user.uuid',
              timeframe: {
                start: '2019-03-11T00:00:00.000Z',
                end: '2019-08-14T00:00:00.000Z'
              }
            },
            {
              event_collection: 'signups',
              actor_property: 'user.uuid',
              timeframe: {
                start: '2019-03-11T00:00:00.000Z',
                end: '2019-08-14T00:00:00.000Z'
              }
            }
          ],
        })
        .then((res) => {
          this.setState({
            results: res,
            title: '4',
            funnel: {
              lines: true
            },
          });
        });

    }, 7000);

    */




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
      .then((res) => {
        this.setState({
          results: res,
        });
      });

    /*
      client
        .query({
          analysis_type: 'count',
          event_collection: 'pageviews',
          timeframe: {
            start: '2019-03-13T00:00:00.000Z',
            end: '2019-08-14T00:00:00.000Z'
          },
          interval: 'daily'
        })
        .then((res) => {
          this.setState({
            type: 'area',
            results: res,
          });
        });
              */
  }


  render() {
    return (
      <Chart {...this.state} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
