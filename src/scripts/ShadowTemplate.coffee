HTMLElement.prototype.createShadowRoot =
  HTMLElement.prototype.createShadowRoot ||
  HTMLElement.prototype.webkitCreateShadowRoot ||
  () ->

class ShadowTemplate

  constructor: (hostSelector, templateSelector) ->
    shadowHosts = document.querySelectorAll(hostSelector)
    
    for shadowHost in shadowHosts
      
      shadowTmpl = shadowHost.parentNode.querySelector(templateSelector)
  
      shadowRoot = shadowHost.createShadowRoot()
      shadowRoot.appendChild shadowTmpl.content.cloneNode(true)

window.ShadowTemplate = ShadowTemplate
