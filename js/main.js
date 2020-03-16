$(function() {
  $(".selectColor").each(function() {
    $this = $(this);
    $this.css("color", $this.attr("data-color"));
  });
  clipboard = new Clipboard(".selectColor", {
    text: function(trigger) {
      return trigger.getAttribute("data-color");
    }
  });
  clipboard.on("success", function(e) {
    $(e.trigger)
      .animate({ opacity: "0.8" }, 80)
      .animate({ opacity: "1" }, 80);
  });
});
