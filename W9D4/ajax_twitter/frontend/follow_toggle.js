const APIUtil = require('./api_util');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user");
    this.followState = this.$el.data("follow");
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState == "following" || this.followState == "unfollowing") {
      this.$el.prop("disabled", true);
    } else {
      this.$el.prop("disabled", false);
    }
    this.$el.text((this.followState === "followed" ? "Unfollow!" : "Follow!"));
  }

  handleClick() {
    this.$el.on("click", (e) => {
      console.log(this);
      e.preventDefault();
      if (this.followState === "unfollowed") {
        this.followState = "following";
        this.render();
        APIUtil.followUser(this.userId)
          .then(() => {
            this.followState = "followed";
            this.render();
          });
      } else {
        this.followState = "unfollowing";
        this.render();
        APIUtil.unfollowUser(this.userId)
          .then(() => {
            this.followState = "unfollowed";
            this.render();
          });
      }
      
    });
  }

  // follow() {
  //   return $.ajax({
  //     method: "POST",
  //     url: `/users/${this.userId}/follow`,
  //     dataType: "JSON",
  //     success: () => {
  //       this.followState = "followed";
  //     }
  //   });
  // }

  // unfollow() {
  //   return $.ajax({
  //     method: "DELETE",
  //     url: `/users/${this.userId}/follow`,
  //     dataType: "JSON",
  //     success: () => {
  //       this.followState = "unfollowed";
  //     }
  //   });
  // }
}

module.exports = FollowToggle;