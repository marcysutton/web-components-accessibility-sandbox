HTMLElement.prototype.createShadowRoot =
  HTMLElement.prototype.createShadowRoot ||
  HTMLElement.prototype.webkitCreateShadowRoot ||
  () ->

class ShadowTemplate

  constructor: (shadowHost) ->
    shadowTmpl = shadowHost.parentNode.querySelector('template')

    shadowRoot = shadowHost.createShadowRoot()
    clone = shadowTmpl.content.cloneNode(true)

    shadowRoot.appendChild(clone)

window.ShadowTemplate = ShadowTemplate
