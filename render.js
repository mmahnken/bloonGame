/** @jsx React.DOM */

var GameArea = React.createClass({
  makeBalloons: function() {
    var balloons = [];
    for (var i=0; i < this.props.data.length; i++) {
      var thisBalloon = this.props.data[i];
      balloons.push(<Balloon
                    color={thisBalloon.color}
                    message={thisBalloon.message} />)
    }
    return balloons
  },
  render: function(){
      var someBloons = this.makeBalloons();
      return (
      <div>
        {someBloons}
      </div>
    );
  }
});

var Balloon = React.createClass({
  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'red': this.props.color==='red',
      'blue': this.props.color==='blue',
      'bloon': true
    });
    return (
    <span className={classes} >{this.props.message}</span>
    );
  }
});

var data = [
            {message: 'def function_name():',
            color: 'blue'},
            {message: 'function functionName() { }',
            color: 'red'},
            {message: 'var cat = 100;',
            color: 'blue'},
            {message: 'cat=100',
            color: 'red'}
          ];

React.renderComponent(<GameArea data={data} />, document.getElementById('game'));
