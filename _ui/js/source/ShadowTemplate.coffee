HTMLElement.prototype.createShadowRoot =
  HTMLElement.prototype.createShadowRoot ||
  HTMLElement.prototype.webkitCreateShadowRoot ||
  () ->

class ShadowTemplate

  constructor: (templateSelector, hostSelector) ->
    shadowHost = document.querySelector(hostSelector)
    shadowTmpl = document.querySelector(templateSelector)

    shadowRoot = shadowHost.createShadowRoot()
    shadowRoot.appendChild shadowTmpl.content.cloneNode(true)

window.ShadowTemplate = ShadowTemplate
