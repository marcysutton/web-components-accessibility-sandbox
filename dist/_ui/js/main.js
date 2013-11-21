(function() {
  document.addEventListener('DOMContentLoaded', function(event) {
    var el, elDropdowns, shadowTemplate, _i, _len, _results;
    shadowTemplate = new ShadowTemplate('template', '.link-list');
    elDropdowns = document.querySelectorAll('.custom-dropdown');
    _results = [];
    for (_i = 0, _len = elDropdowns.length; _i < _len; _i++) {
      el = elDropdowns[_i];
      _results.push(new CustomDropdown(el));
    }
    return _results;
  });

}).call(this);
