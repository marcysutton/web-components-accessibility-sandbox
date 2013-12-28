HTMLElement.prototype.createShadowRoot =
  HTMLElement.prototype.createShadowRoot ||
  HTMLElement.prototype.webkitCreateShadowRoot ||
  () ->

class ShadowTemplate

  el: null,

  constructor: (hostSelector, templateSelector = 'template') ->

    @shadowHost = document.querySelector hostSelector

    @shadowTmpl = @shadowHost.parentNode.querySelector(templateSelector)

    shadowProto = Object.create(HTMLElement.prototype)
    shadowProto.createdCallback = @shadowCreatedCallback()

  shadowCreatedCallback: () =>
    @shadowRoot = @shadowHost.createShadowRoot()
    @clone = @shadowTmpl.content.cloneNode(true)

  attachClone: () ->
    @shadowRoot.appendChild(@clone)

module.exports = ShadowTemplate
