var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');
var Table = require('./components/Table.jsx');

ReactDOM.render(<List />, document.getElementById('ingredients'));
ReactDOM.render(<Table />, document.getElementById('cities'));

