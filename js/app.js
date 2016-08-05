const App = React.createClass({
    getInitialState: function () {
        return {
            isEditor: true,
            elements: []
        }
    },
    toggle: function () {
        this.setState({
            isEditor: !this.state.isEditor
        })
    }
    ,
    render: function () {
        const isEditor = this.state.isEditor;
        return <div>
            <button onClick={this.toggle}>{isEditor ? "Editor" : "Preview"}</button>
            <div className={isEditor?"":"hidden"}>
                <Editor elements={this.state.elements} onAdd={this.addElement}/>
            </div>
        </div>
    }
});
const Editor = React.createClass({
    render: function () {
        return <div>
            <Right onAdd={this.props.onAdd}/>
        </div>
    }
});

ReactDOM.render(<App />, document.getElementById("content"));