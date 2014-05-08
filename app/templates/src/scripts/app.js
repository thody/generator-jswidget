/** @jsx React.DOM */
"use strict";

var React = require('react');

var App = React.createClass({
    render: function () {
        return (<div>Hello!</div>)
    }
});

React.renderComponent(<App />, document.getElementById('app-container'));
