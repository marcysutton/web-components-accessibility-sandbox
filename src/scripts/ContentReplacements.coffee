class ContentReplacements

  constructor: () ->
    tacoButtonText = 'Give me tacos'
    tacoButtonSelector = '.taco-button'
    nameTagSelector = '.name-tag'
    nameTagTemplateSelector = '#name-tag-template'
    nameTagText = 'TACOCAT'

    tacoBtnHost = document.querySelector(tacoButtonSelector)
    tacoBtnRoot = tacoBtnHost.createShadowRoot()
    tacoBtnRoot.textContent = tacoButtonText

    nameTag = document.querySelector(nameTagSelector)
    nameTagShadow = nameTag.createShadowRoot()

    nameTagTmpl = document.querySelector(nameTagTemplateSelector)
    nameTag.textContent = nameTagText
    nameTagShadow.appendChild nameTagTmpl.content
    nameTagTmpl.remove()

module.exports = ContentReplacements
