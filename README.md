# Keen charts react component

## Install with NPM

```ssh
npm install keen-react-chart --save
```

## Usage

Use this component to create chart of data from Keen. Chart expects a results prop of the response from the query or a raw object. All the configurations can be passed by props.

## Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'keen-react-chart';
import KeenAnalysis from 'keen-analysis';
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
    };
  }

  componentDidMount() {
    const client = new KeenAnalysis({
      projectId: 'YOUR_PROJECT_ID',
      readKey: 'YOUR_READ_KEY'
    })
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
  }


  render() {
    return (
      <Chart {...this.state} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```

## Configuration

Charts configurations You can check here: [keen-dataviz.js](https://github.com/keen/keen-dataviz.js/)
