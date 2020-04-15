const FollowToggle = require('./follow_toggle');

const setEventHandlers = () => {
  let $follow_buttons = $("button.follow-toggle");
  $follow_buttons.each(function(index) {
    new FollowToggle(this);
  }); 
}




$(setEventHandlers);