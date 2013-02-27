/*
	anchoring
	jQuery Plugin to automatically add anchors to elements to make them linkable.
	(c) 2013 Small Improvements GmbH
	Author: Timur Çelikel
	Version: 0.1
	License: MIT - http://www.opensource.org/licenses/mit-license.php
*/

(function($) {

    $.fn.anchoring = function(options) {

        var settings = $.extend( {
            linkText: '#',
            containingClass: 'anchoring',
            linkClass: 'anchor',
            excludeClass: 'noAnchoring',
            scrollOffset: 0,
            maxLength: 100,
            maxWords: 0

        }, options);

        var newIDs = new Array();

        this.each(function(){
            $this = $(this);

            if ($this.hasClass(settings.excludeClass)) return;

            var currentID = $this.attr('id'),
                newID;

            if (currentID == undefined) {

                newID = $this.text();

                if (settings.maxWords) {
                    var spaces = 0;

                    for (var i in newID) {

                        if(newID[i] == " ")
                            spaces++;

                        if(spaces == settings.maxWords) {
                            newID = newID.substring(0,i);
                            break;
                        }
                    }
                }

                // transforming it to a valid & readable ID:
                // http://stackoverflow.com/questions/9635625/javascript-regex-to-remove-illegal-characters-from-dom-id
                newID = newID.replace(/\s/g, '-').replace(/^[^a-z]+|[^\w:-]+/gi, '');

                if (settings.maxLength)
                    newID = newID.substring(0,settings.maxLength);

                var suffix = '';

                while (newIDs.indexOf(newID + suffix) + 1)
                    suffix = (suffix === '') ? 1 : suffix + 1;

                newID = newID + suffix;

                $this.attr('id', newID);
                newIDs.push(newID);

            }

            var anchor = $("<a class='" + settings.linkClass + "'/>")
                .attr('href', (newID) ? '#' + newID : '#' + currentID)
                .text(settings.linkText);

            if(settings.scrollOffset) {

                anchor.click(function(e) {
                    if (window.history.pushState) {
                        e.preventDefault();
                        window.history.pushState(null, null, '#' + newID);
                        $('html, body').scrollTop((anchor.offset().top + settings.scrollOffset));
                    } else {
                        setTimeout(function(){
                            $('html, body').scrollTop((anchor.offset().top + settings.scrollOffset));
                        },20)
                    }
                });

            }

            $this
                .prepend(anchor)
                .addClass(settings.containingClass);

        });

        if($(window.location.hash).length) {

            $(window).bind('load', function(){

                var scrollToPosition = $(window.location.hash).offset().top + settings.scrollOffset;

                // there seems to be no nice way to find out when scrolltop works properly so i try as often
                // as it takes. if there is a better way please tell me: github.com/timurc
                var timer = setInterval(function(){
                    $(window).scrollTop(scrollToPosition);
                    if (scrollToPosition + ' vs. ' + $(window).scrollTop()) clearInterval(timer);
                },100);

            });

        }

        return this;
    };
})(jQuery);