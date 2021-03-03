import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {
  handleRemoveQuote = (id) => {
    this.props.removeQuote(id)
  }

  handleUpvote = (id) => {
    this.props.upvoteQuote(id)
  }

  handleDownvote = id => {
    this.props.downvoteQuote(id)
  }

  renderQuoteCards = () => {
    return this.props.quotes.map(quote => <QuoteCard key={ quote.id } quote={ quote } handleRemoveQuote={ this.handleRemoveQuote } handleUpvote={ this.handleUpvote } handleDownvote={ this.handleDownvote } />)
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              { this.renderQuoteCards() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
