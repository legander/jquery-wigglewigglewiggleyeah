(function($) {
  $.fn.wigglewigglewiggleyeah = function(duration) {
    var selectors = [];
    $(this).each(function(i, el) {
      var selector = el.localName;
      if ($(this).attr('class') != undefined || $(this).attr('class') == "") {
        selector += $(this).attr('class').replace(' ', '.');
      }
      selectors.push(`${el.localName}`); 
    });

    selectors = $.unique(selectors);
    cssSelector = selectors.length > 1 ? selectors.join(':hover,') : selectors.join('') + ':hover';


    var styles = `
      <style>
        @keyframes wwwy {
            0%{transform:rotate(0deg);box-shadow: none}
            10%{transform:rotate(10deg)}
            20%{transform:rotate(-10deg)}
            30%{transform:rotate(10deg)}
            40%{transform:rotate(-10deg)}
            50%{transform:rotate(0deg);box-shadow: none}

            80%{transform:scale(1.2);box-shadow: 0 0 50px 10px gold}
            100%{transform:scale(1);box-shadow: none}
        }
        ${cssSelector} {
           display:inline-block;
           animation: wwwy ${duration || 1}s infinite;
        }
      </style>
    `;
    $(document.body).append(styles);
  }
})(jQuery);