(function() {
  var elShadowDropdown, shadowDropdown;

  elShadowDropdown = document.querySelector('.shadow-dropdown');

  shadowDropdown = new CustomDropdown(elShadowDropdown, true);

  console.log(elShadowDropdown);

}).call(this);
