/** @jsx React.DOM */

function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function randFloatRange( minNum, maxNum) {
  return (Math.random() * (maxNum - minNum + 1) + minNum);
}





var GameArea = React.createClass({
  getInitialState: function() {
    return ({speed: 5});
  },
  incrementSpeed: function() {
    this.setState({'speed': this.state.speed-1});
  },
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
  componentWillMount: function(){
    var tid = setInterval(this.incrementSpeed, 10000);
    var gameTimer = setTimeout(this.endGame(tid), 60000);
  },
  endGame: function(timerId) {
    clearTimeout(timerId);
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
    var spanStyle = {
      left: randRange(0,900),
      WebkitAnimationDuration: String(randFloatRange(1,4))+'s'
    }
    return (
      <div style={spanStyle} className={classes}>
        <span className="content">{this.props.message}</span>
      </div>
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
