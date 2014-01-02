ShadowTemplate = require './ShadowTemplate'
ShadowDropdown = require './ShadowDropdown'
CustomDropdown = require './CustomDropdown'
ShadowButton = require './ShadowButton'

document.addEventListener 'DOMContentLoaded', (event) ->

  shadowDropdownName = 'shadow-dropdown'
  shadowButtonName = 'div-button'

  if supportsCustomElements()
    dropdownProto = Object.create HTMLElement.prototype,
      createdCallback:
          value: ->
            new ShadowDropdown(shadowDropdownName)

    customDropdown = document.register shadowDropdownName, prototype: dropdownProto

    buttonProto = Object.create HTMLElement.prototype,
      createdCallback: 
        value: ->
          new ShadowButton(shadowButtonName)

    customButton = document.register shadowButtonName, prototype: buttonProto

  elDropdowns = document.querySelectorAll('.custom-dropdown')
  new CustomDropdown(el) for el in elDropdowns

supportsCustomElements = ->
  'register' of document