HTMLElement.prototype.createShadowRoot =
  HTMLElement.prototype.createShadowRoot ||
  HTMLElement.prototype.webkitCreateShadowRoot ||
  () ->

CustomDropdown = require './CustomDropdown'

class ShadowTemplate

  el: null,

  constructor: (hostSelector, templateSelector) ->
    shadowHosts = document.querySelectorAll(hostSelector)

    for shadowHost in shadowHosts

      @shadowTmpl = shadowHost.parentNode.querySelector(templateSelector)

      shadowProto = Object.create(HTMLElement.prototype)
      shadowProto.createdCallback = @shadowCreatedCallback(shadowHost)

  shadowCreatedCallback: (host) ->
    shadowRoot = host.createShadowRoot()
    clone = @shadowTmpl.content.cloneNode(true)

    # SD widget now works but I'd like to get this code out of here
    dropdown = clone.querySelector('.custom-dropdown')
    if dropdown
      new CustomDropdown(dropdown, true)

    shadowRoot.appendChild(clone)

module.exports = ShadowTemplate
