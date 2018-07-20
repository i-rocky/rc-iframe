const React = require('react');
const ReactDOM  = require('react-dom');
const createReactClass = require('create-react-class');

module.exports = createReactClass({
    render: function () {
        const frameProps = this.props.frameProps || {};
        return React.createElement('iframe', frameProps, null);
    },
    componentDidMount: function () {
        this.iframe = ReactDOM.findDOMNode(this);
        this.document = this.iframe.contentDocument;
        this.window = this.iframe.contentWindow;
        this.el = this.document.createElement('div');
        this.document.body.appendChild(this.el);
        this.updateIFrameContents();
    },
    componentDidUpdate: function () {
        this.updateIFrameContents();
    },
    updateIFrameContents: function () {
        ReactDOM.render(this.props.children, this.el);
    },
});
