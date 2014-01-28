;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ContentReplacements;

ContentReplacements = (function() {
  function ContentReplacements() {
    var nameTag, nameTagSelector, nameTagShadow, nameTagTemplateSelector, nameTagText, nameTagTmpl, tacoBtnHost, tacoBtnRoot, tacoButtonSelector, tacoButtonText;
    tacoButtonText = 'Give me tacos';
    tacoButtonSelector = '.taco-button';
    nameTagSelector = '.name-tag';
    nameTagTemplateSelector = '#name-tag-template';
    nameTagText = 'TACOCAT';
    tacoBtnHost = document.querySelector(tacoButtonSelector);
    tacoBtnRoot = tacoBtnHost.createShadowRoot();
    tacoBtnRoot.textContent = tacoButtonText;
    nameTag = document.querySelector(nameTagSelector);
    nameTagShadow = nameTag.createShadowRoot();
    nameTagTmpl = document.querySelector(nameTagTemplateSelector);
    nameTag.textContent = nameTagText;
    nameTagShadow.appendChild(nameTagTmpl.content);
  }

  return ContentReplacements;

})();

module.exports = ContentReplacements;


},{}],2:[function(require,module,exports){
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

module.exports = CustomDropdown;


},{}],3:[function(require,module,exports){
var CustomDropdown, ShadowDropdown, ShadowTemplate,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ShadowTemplate = require('./ShadowTemplate');

CustomDropdown = require('./CustomDropdown');

ShadowDropdown = (function(_super) {
  __extends(ShadowDropdown, _super);

  function ShadowDropdown(shadowHost) {
    this.shadowCreatedCallback = __bind(this.shadowCreatedCallback, this);
    ShadowDropdown.__super__.constructor.apply(this, arguments);
  }

  ShadowDropdown.prototype.shadowCreatedCallback = function() {
    ShadowDropdown.__super__.shadowCreatedCallback.apply(this, arguments);
    this.shadowChildEl = this.clone.querySelector('.custom-dropdown');
    new CustomDropdown(this.shadowChildEl);
    return this.attachClone();
  };

  ShadowDropdown.prototype.attachClone = function() {
    return ShadowDropdown.__super__.attachClone.apply(this, arguments);
  };

  return ShadowDropdown;

})(ShadowTemplate);

module.exports = ShadowDropdown;


},{"./CustomDropdown":2,"./ShadowTemplate":5}],4:[function(require,module,exports){
var ShadowElement, ShadowTemplate,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ShadowTemplate = require('./ShadowTemplate');

ShadowElement = (function(_super) {
  __extends(ShadowElement, _super);

  function ShadowElement(shadowHost, templateSelector) {
    this.shadowCreatedCallback = __bind(this.shadowCreatedCallback, this);
    ShadowElement.__super__.constructor.apply(this, arguments);
  }

  ShadowElement.prototype.shadowCreatedCallback = function() {
    ShadowElement.__super__.shadowCreatedCallback.apply(this, arguments);
    return this.attachClone();
  };

  ShadowElement.prototype.attachClone = function() {
    return ShadowElement.__super__.attachClone.apply(this, arguments);
  };

  return ShadowElement;

})(ShadowTemplate);

module.exports = ShadowElement;


},{"./ShadowTemplate":5}],5:[function(require,module,exports){
var ShadowTemplate,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

HTMLElement.prototype.createShadowRoot = HTMLElement.prototype.createShadowRoot || HTMLElement.prototype.webkitCreateShadowRoot || function() {};

ShadowTemplate = (function() {
  ShadowTemplate.prototype.el = null;

  function ShadowTemplate(hostSelector, templateSelector) {
    var shadowProto;
    if (templateSelector == null) {
      templateSelector = 'template';
    }
    this.shadowCreatedCallback = __bind(this.shadowCreatedCallback, this);
    this.shadowHost = document.querySelector(hostSelector);
    this.shadowTmpl = this.shadowHost.parentNode.querySelector(templateSelector);
    shadowProto = Object.create(HTMLElement.prototype);
    shadowProto.createdCallback = this.shadowCreatedCallback();
  }

  ShadowTemplate.prototype.shadowCreatedCallback = function() {
    this.shadowRoot = this.shadowHost.createShadowRoot();
    this.shadowRoot.applyAuthorStyles = true;
    return this.clone = this.shadowTmpl.content.cloneNode(true);
  };

  ShadowTemplate.prototype.attachClone = function() {
    return this.shadowRoot.appendChild(this.clone);
  };

  return ShadowTemplate;

})();

module.exports = ShadowTemplate;


},{}],6:[function(require,module,exports){
var ContentReplacements, CustomDropdown, ShadowDropdown, ShadowElement, ShadowTemplate, supportsCustomElements;

ShadowTemplate = require('./ShadowTemplate');

ShadowDropdown = require('./ShadowDropdown');

CustomDropdown = require('./CustomDropdown');

ShadowElement = require('./ShadowElement');

ContentReplacements = require('./ContentReplacements');

document.addEventListener('DOMContentLoaded', function(event) {
  var buttonProto, customButton, customDivButton, customDropdown, divButtonProto, dropdownProto, el, elDropdowns, shadowArticleName, shadowButtonName, shadowDivButtonName, shadowDropdownName, shadowTemplate, tacoArticle, tacoArticleProto, _i, _len, _results;
  new ContentReplacements();
  shadowArticleName = 'taco-article';
  shadowTemplate = 'template.taco-article';
  shadowDropdownName = 'shadow-dropdown';
  shadowDivButtonName = 'div-button';
  shadowButtonName = 'button-button';
  if (supportsCustomElements()) {
    tacoArticleProto = Object.create(HTMLElement.prototype, {
      createdCallback: {
        value: function() {
          return new ShadowElement(shadowArticleName, shadowTemplate);
        }
      }
    });
    dropdownProto = Object.create(HTMLElement.prototype, {
      createdCallback: {
        value: function() {
          return new ShadowDropdown(shadowDropdownName);
        }
      }
    });
    customDropdown = document.registerElement(shadowDropdownName, {
      prototype: dropdownProto
    });
    divButtonProto = Object.create(HTMLElement.prototype, {
      createdCallback: {
        value: function() {
          return new ShadowElement(shadowDivButtonName);
        }
      }
    });
    buttonProto = Object.create(HTMLElement.prototype, {
      createdCallback: {
        value: function() {
          return new ShadowElement(shadowButtonName);
        }
      }
    });
    tacoArticle = document.registerElement(shadowArticleName, {
      prototype: tacoArticleProto
    });
    customDivButton = document.registerElement(shadowDivButtonName, {
      prototype: divButtonProto
    });
    customButton = document.registerElement(shadowButtonName, {
      prototype: buttonProto
    });
  }
  elDropdowns = document.querySelectorAll('.custom-dropdown');
  _results = [];
  for (_i = 0, _len = elDropdowns.length; _i < _len; _i++) {
    el = elDropdowns[_i];
    _results.push(new CustomDropdown(el));
  }
  return _results;
});

supportsCustomElements = function() {
  return 'registerElement' in document;
};


},{"./ContentReplacements":1,"./CustomDropdown":2,"./ShadowDropdown":3,"./ShadowElement":4,"./ShadowTemplate":5}]},{},[1,2,3,4,5,6])
;