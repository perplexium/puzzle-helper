var OutputList = React.createClass({
  // render: function() {
  //   var createItem = function(itemText, index) {
  //     return <li key={index + itemText}>{itemText}</li>;
  //   };
  //   return <ul>{this.props.items.map(createItem)}</ul>;
  // }
  render: function() {
    return <div>{this.props.items.join(' ')}</div>;
  }
});
var Morse = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  translate: function(input){
    morse_dictionary={
      "._" : "a",
      "_..." : "b",
      "_._." : "c",
      "_.." : "d",
      "." : "e",
      ".._." : "f",
      "__." : "g",
      "...." : "h",
      ".." : "i",
      ".___" : "j",
      "_._" : "k",
      "._.." : "l",
      "__" : "m",
      "_." : "n",
      "___" : "o",
      ".__." : "p",
      "__._" : "q",
      "._." : "r",
      "..." : "s",
      "_" : "t",
      ".._" : "u",
      "..._" : "v",
      ".__" : "w",
      "_.._" : "x",
      "_.__" : "y",
      "__.." : "z",
      ".____" : "1",
      "..___" : "2",
      "...__" : "3",
      "...._" : "4",
      "....." : "5",
      "_...." : "6",
      "__..." : "7",
      "___.." : "8",
      "____." : "9",
      "_____" : "0"
    };
    return(morse_dictionary[input])
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({items:this.state.items.concat(this.translate([this.state.text])),text:''});
  },

  render: function() {
    return (
      <div>
      	<h1>Decrypt Morse Code</h1>
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
