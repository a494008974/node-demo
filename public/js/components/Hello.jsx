import React ,{ Component } from 'react';

class Hello extends Component{
  render() {
    return <div>
				<button type="button" className="btn btn-success">Hello World AAAAAAAA </button>
				<button type="button" className="btn btn-default" aria-label="Left Align">
				  <span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
				</button>
				<button type="button" className="btn btn-default btn-lg">
				  <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star
				</button>
			</div>;
  }
}

export default Hello;