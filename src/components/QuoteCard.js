import React from 'react';

const QuoteCard = (props) =>
  <div>
    {console.log(props)}
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.quote.content}</p>
          {/* <p>{Render Quote Content}</p> */}
          <footer>{props.quote.author}</footer>
          {/* <footer>- author <cite title="Source Title">{Render Quote Author}</cite></footer> */}
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div>Votes: {Render Quote Votes}</div> */}
        {props.quote.votes}
      </div>
    </div>
  </div>;

//const mapStateToProps = (state) => {
//  return {
//    quote: state.quote
//  }
//}
export default QuoteCard