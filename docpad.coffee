# DocPad Configuration File
# http://docpad.org/docs/config



# Define the DocPad Configuration
docpadConfig = {
	# port: 8080

	collections:
			quotes: ->
				@getCollection('html').findAllLive
					relativeOutDirPath: 'quotes'
					isQuote: true
	templateData:
		site:
			title: 'StatusQuotatie'
			url: 'http://localhost:9778'
		pageTitle: ->
			if @document.title then "#{@document.title}" else @site.title

		getCss: ->
			[@site.url + '/assets/css/bootstrap.css',@site.url + '/assets/css/screen.css']

		getJs: ->
			[@site.url + '/assets/js/jquery-3.1.1.js',@site.url + '/assets/js/bootstrap.js', @site.url + '/assets/js/site.js']

}

# Export the DocPad Configuration
module.exports = docpadConfig