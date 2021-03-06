import React, {Component} from 'react';
import '../App.css';

class Image extends Component {

    constructor(props) {
        super(props);
    }

// yellow FFF2CC   red: F8CECC
    render() {
      var backColor = "";
      var quality = "";
      if(this.props.prediction.score >= 0.9 && this.props.prediction.label === "positive") {
        backColor = {backgroundColor: "#D5E8D4", color: "#4E4E4E"};
        quality = "Good";
      } else if(this.props.prediction.score >= 0.75 && this.props.prediction.label === "positive") {
        backColor = {backgroundColor: "#FFF2CC", color: "#4E4E4E"};
        quality = "Fair";
      } else {
        backColor = {backgroundColor: "#F8CECC", color: "#4E4E4E"};
        quality = "Bad";
      }
        return (
          <div>
            <div className='col-md-2'>
              <img alt={this.props.text} className="img-responsive img" src={this.props.prediction.url} onClick={() => {this.props.select(this.props.prediction)}}></img>
              <p style={backColor}>{quality}</p>
            </div>
          </div>
        );
    }
}
export default Image;
