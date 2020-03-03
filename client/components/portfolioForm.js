import React, { Component } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../store/transaction";

class PortfolioForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = event => {
    console.log("Listening");
    event.preventDefault();
    let input = {
      ticker: event.target.ticker.value,
      quantity: event.target.quantity.value,
      type: "BUY"
    };
    console.log("input", input);
    console.log("props", this.props);
    this.props.addTransaction(input);
  };

  render() {
    console.log("Props==>", this.props);
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div>
            <label htmlFor="ticker">Ticker: </label>
            <input type="text" name="ticker" placeholder="Ticker" />
          </div>
          <div>
            <label htmlFor="quantity">Quantity: </label>
            <input
              type="number"
              name="quantity"
              placeholder="1"
              defaultValue={1}
            />
          </div>
          <div>
            <button type="submit">BUY</button>
          </div>
          {this.props.error && <div> {this.props.error.Error} </div>}
        </form>
      </div>
    );
  }
}

const mapState = state => {
  console.log("Trans==>", state.transaction);
  return {
    error: state.transaction.error
  };
};

const mapDispatch = dispatch => {
  return {
    addTransaction: input => dispatch(addTransaction(input))
  };
};

export default connect(mapState, mapDispatch)(PortfolioForm);
