var OutputList = React.createClass({
  render: function() {
    var createItem = function(itemText, index) {
      return <li key={index + itemText}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var Morse = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  sortLetters: function(input){
    var result=input.split("").sort().join("");
    return(result);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({items:this.state.items.concat(this.sortLetters(this.state.text)),text:''});
  },

  render: function() {
    return (
      <div>
      	<h1>Find Anagrams</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Submit'}</button>
        </form>
        <OutputList items={this.state.items} />
      </div>
    );
  }
});

React.render(<Morse/>, document.body);
