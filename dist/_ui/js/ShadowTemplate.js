(function() {
  var ShadowTemplate;

  HTMLElement.prototype.createShadowRoot = HTMLElement.prototype.createShadowRoot || HTMLElement.prototype.webkitCreateShadowRoot || function() {};

  ShadowTemplate = (function() {
    function ShadowTemplate(hostSelector, templateSelector) {
      var shadowHost, shadowHosts, shadowRoot, shadowTmpl, _i, _len;
      shadowHosts = document.querySelectorAll(hostSelector);
      for (_i = 0, _len = shadowHosts.length; _i < _len; _i++) {
        shadowHost = shadowHosts[_i];
        shadowTmpl = shadowHost.parentNode.querySelector(templateSelector);
        shadowRoot = shadowHost.createShadowRoot();
        shadowRoot.appendChild(shadowTmpl.content.cloneNode(true));
      }
    }

    return ShadowTemplate;

  })();

  window.ShadowTemplate = ShadowTemplate;

}).call(this);
