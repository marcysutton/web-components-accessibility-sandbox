// Generated by CoffeeScript 1.6.3
(function() {
  document.addEventListener('DOMContentLoaded', function(event) {
    var customDropdown, shadowTemplate;
    shadowTemplate = new ShadowTemplate('template', '.link-list');
    customDropdown = new CustomDropdown();
    return document.addEventListener('click', function(event) {
      return console.log(event.target);
    });
  });

}).call(this);