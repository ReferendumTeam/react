import React from 'react';
import ReactDOM from 'react-dom';

class Referendum extends React.Component {

  state = { tweets: [] };

  componentWillMount() {

  }

  render() {
    return(
      <div className="tweet_box col-md-12 col-xs-12">
        <div className="tweet_img col-md-2 col-xs-12 text-center">
          <img src="" className="img-circle img-responsive" />
        </div>
        <div className="name_profile col-md-10 col-xs-12">
          Nome Profilo
        </div>
        <div className="user_name col-md-5 col-xs-12">@username</div>
        <div className="data_tweet col-md-5 col-xs-12">17 Dicembre 2016</div>

        <div className="text_tweet col-md-12 col-xs-12">
          {this.state.tweets}
        </div>
      </div>
    );
  }
};

ReactDOM.render(<Referendum/>, document.getElementById('yes'));
