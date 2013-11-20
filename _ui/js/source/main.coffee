document.addEventListener 'DOMContentLoaded', (event) ->

  shadowTemplate = new ShadowTemplate('template', '.link-list')

  customDropdown = new CustomDropdown()

  document.addEventListener 'click', (event) ->
    console.log event.target
