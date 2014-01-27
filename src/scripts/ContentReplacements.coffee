class ContentReplacements

  constructor: () ->
    tacoButtonText = 'Give me tacos'
    tacoButtonSelector = '.taco-button'

    tacoBtnHost = document.querySelector(tacoButtonSelector)
    tacoBtnRoot = tacoBtnHost.createShadowRoot()
    tacoBtnRoot.textContent = tacoButtonText

    nameTag = document.querySelector('.name-tag')
    nameTagShadow = nameTag.createShadowRoot()
    nameTagShadow.applyAuthorStyles = true

    nameTagTmpl = document.querySelector('#name-tag-template')
    nameTag.textContent = 'Speedy'
    nameTagShadow.appendChild nameTagTmpl.content
    nameTagTmpl.remove()

module.exports = ContentReplacements
