(function() {
  (function($) {
    return $(function() {
      var randoms;
      randoms = $("a.random-quote");
      return randoms.each(function() {
        return $(this).click(function(event) {
          var theme;
          event.preventDefault();
          theme = $(this).attr('id').split('-')[2].substr(0, 3);
          return $.ajax({
            'url': 'https://thanksgivingmeal.github.io/StatusQuotatie/quotes/quotes.json',
            'type': 'GET',
            'dataType': 'json'
          }).done((function(_this) {
            return function(json) {
              var filtered_quotes, i, len, quote, randomInt, randomQuoteId, randomQuoteUrl;
              console.log(theme);
              filtered_quotes = [];
              for (i = 0, len = json.length; i < len; i++) {
                quote = json[i];
                if (quote.theme === theme || theme === 'all') {
                  filtered_quotes.push(quote);
                }
              }
              console.log(filtered_quotes);
              randomInt = Math.random();
              randomQuoteId = Math.floor(randomInt * filtered_quotes.length);
              randomQuoteUrl = filtered_quotes[randomQuoteId].url;
              return window.location.href = randomQuoteUrl;
            };
          })(this)).fail(function(xhr, status, errorThrown) {
            return console.log(errorThrown);
          });
        });
      });
    });
  })(jQuery);

}).call(this);
