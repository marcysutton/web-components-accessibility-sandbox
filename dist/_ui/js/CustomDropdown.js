(function() {
  var CustomDropdown,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  CustomDropdown = (function() {
    CustomDropdown.prototype.elCustomDropdown = null;

    CustomDropdown.prototype.elCustomDropdownUl = null;

    CustomDropdown.prototype.accessLabelExpanded = 'collapsed';

    CustomDropdown.prototype.accessLabelCollapsed = 'expanded';

    function CustomDropdown($el, shadow) {
      if (shadow == null) {
        shadow = false;
      }
      this.customDropdownToggle = __bind(this.customDropdownToggle, this);
      this.escapeKeyHandler = __bind(this.escapeKeyHandler, this);
      this.elCustomDropdown = $el;
      if ($el) {
        this.elDropdownTrigger = this.elCustomDropdown.querySelector('button');
        this.elCustomDropdownUl = this.elCustomDropdown.querySelector('ul');
        this.elFirstSelectItem = this.elCustomDropdownUl.querySelector('a');
        this.elAccessLabel = this.elCustomDropdown.querySelector('.accessLabel');
        console.log(this.elCustomDropdown);
        this.updateAccessLabel(this.accessLabelCollapsed);
        this.elCustomDropdown.addEventListener('click', this.customDropdownToggle);
        document.addEventListener('keydown', this.escapeKeyHandler);
      }
    }

    CustomDropdown.prototype.updateAccessLabel = function(string) {
      return this.elAccessLabel.textContent = "" + string + " ";
    };

    CustomDropdown.prototype.escapeKeyHandler = function(event) {
      if (event.keyCode === 27) {
        return customDropdownToggle(event);
      }
    };

    CustomDropdown.prototype.customDropdownToggle = function(event) {
      var ddClasslist;
      console.log('customDropdownToggle');
      ddClasslist = this.elCustomDropdown.classList;
      if (ddClasslist.contains('active')) {
        ddClasslist.remove('active');
        this.elCustomDropdownUl.setAttribute('aria-hidden', true);
        return this.updateAccessLabel(this.accessLabelExpanded);
      } else {
        ddClasslist.add('active');
        this.elFirstSelectItem.focus();
        this.elCustomDropdownUl.setAttribute('aria-hidden', false);
        return this.updateAccessLabel(this.accessLabelCollapsed);
      }
    };

    return CustomDropdown;

  })();

  window.CustomDropdown = CustomDropdown;

}).call(this);
