ShadowTemplate = require './ShadowTemplate'
ShadowDropdown = require './ShadowDropdown'
CustomDropdown = require './CustomDropdown'

document.addEventListener 'DOMContentLoaded', (event) ->

  shadowDropdownName = 'shadow-dropdown'
  shadowDropdownSelector = ".#{shadowDropdownName}"

  if supportsCustomElements()
    dropdownProto = Object.create HTMLElement.prototype,
      createdCallback:
          value: ->
            new ShadowDropdown(shadowDropdownName)

    customDropdown = document.register shadowDropdownName, prototype: dropdownProto
  else
    customTag = document.querySelector(shadowDropdownName)
    
    parentEl = customTag.parentNode
    newDiv = document.createElement('div')
    newDiv.setAttribute('class', shadowDropdownName)
    parentEl.appendChild(newDiv)

    new ShadowDropdown(shadowDropdownSelector)

  elDropdowns = document.querySelectorAll('.custom-dropdown')
  new CustomDropdown(el) for el in elDropdowns

supportsCustomElements = ->
  'register' of document