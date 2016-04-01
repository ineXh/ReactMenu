window.MainMenu = React.createClass({
  getInitialState: function() {
        return {hide: true};
  },
  componentDidMount: function(){
  },
  render: function() {
    return (
      <h1>HI</h1>
    );
  }
});

window.myMainMenu = React.createFactory(MainMenu);
window.render_myMainMenu = function() {
  ReactDOM.render(myMainMenu({ foo: 'bar' }), document.getElementById('content'));
}
render_myMainMenu();
