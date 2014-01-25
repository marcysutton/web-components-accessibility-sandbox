ShadowTemplate = require './ShadowTemplate'
ShadowDropdown = require './ShadowDropdown'
CustomDropdown = require './CustomDropdown'
ShadowButton = require './ShadowButton'

document.addEventListener 'DOMContentLoaded', (event) ->

  shadowDropdownName = 'shadow-dropdown'
  shadowDivButtonName = 'div-button'
  shadowButtonName = 'button-button'

  if supportsCustomElements()
    dropdownProto = Object.create HTMLElement.prototype,
      createdCallback:
          value: ->
            new ShadowDropdown(shadowDropdownName)

    customDropdown = document.registerElement shadowDropdownName, prototype: dropdownProto

    divButtonProto = Object.create HTMLElement.prototype,
      createdCallback:
        value: ->
          new ShadowButton(shadowDivButtonName)

    buttonProto = Object.create HTMLElement.prototype,
      createdCallback:
        value: ->
          new ShadowButton(shadowButtonName)

    customDivButton = document.registerElement shadowDivButtonName, prototype: divButtonProto
    customButton = document.registerElement shadowButtonName, prototype: buttonProto

  elDropdowns = document.querySelectorAll('.custom-dropdown')
  new CustomDropdown(el) for el in elDropdowns

supportsCustomElements = ->
  'registerElement' of document
