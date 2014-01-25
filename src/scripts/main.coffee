ShadowTemplate = require './ShadowTemplate'
ShadowDropdown = require './ShadowDropdown'
CustomDropdown = require './CustomDropdown'
ShadowElement = require './ShadowElement'

document.addEventListener 'DOMContentLoaded', (event) ->

  shadowArticleName = 'taco-article'
  shadowDropdownName = 'shadow-dropdown'
  shadowDivButtonName = 'div-button'
  shadowButtonName = 'button-button'

  if supportsCustomElements()
    tacoArticleProto = Object.create HTMLElement.prototype,
      createdCallback:
        value: ->
          new ShadowElement(shadowArticleName)

    dropdownProto = Object.create HTMLElement.prototype,
      createdCallback:
          value: ->
            new ShadowDropdown(shadowDropdownName)

    customDropdown = document.registerElement shadowDropdownName, prototype: dropdownProto

    divButtonProto = Object.create HTMLElement.prototype,
      createdCallback:
        value: ->
          new ShadowElement(shadowDivButtonName)

    buttonProto = Object.create HTMLElement.prototype,
      createdCallback:
        value: ->
          new ShadowElement(shadowButtonName)

    tacoArticle = document.registerElement shadowArticleName, prototype: tacoArticleProto
    customDivButton = document.registerElement shadowDivButtonName, prototype: divButtonProto
    customButton = document.registerElement shadowButtonName, prototype: buttonProto

  elDropdowns = document.querySelectorAll('.custom-dropdown')
  new CustomDropdown(el) for el in elDropdowns

supportsCustomElements = ->
  'registerElement' of document
