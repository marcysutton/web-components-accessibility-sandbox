ShadowTemplate = require './ShadowTemplate'

class ShadowElement extends ShadowTemplate

	constructor: (shadowHost, templateSelector) ->
		super

	shadowCreatedCallback: () =>
		super

		@attachClone()

	attachClone: () ->
		super

module.exports = ShadowElement
