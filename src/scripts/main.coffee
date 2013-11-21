document.addEventListener 'DOMContentLoaded', (event) ->

  shadowTemplate = new ShadowTemplate('template', '.link-list')

  elDropdowns = document.querySelectorAll('.custom-dropdown')
  new CustomDropdown(el) for el in elDropdowns
