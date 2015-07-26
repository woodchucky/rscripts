(function() {
    // Very naive "does it fit?" logic.
    var articleHeight = $("#article .article-body section").last().height();
    var belowHeights =  $("#article .module-authors").outerHeight() + $("#article .module-related").outerHeight() + 350;

    if (articleHeight < belowHeights) {
        $("body").addClass("article-below-conflicts");
        $("#ad-boxbottom").remove();
    }

    $(".article-tools a[data-toggles]").on("click", function(e) {
        e.preventDefault();

        $($(this).data('toggles')).toggleClass("active");
        $(this).toggleClass("active");
    });
})();

(function () {
    $(".authors-about a").on("click",
        function(e) {
            e.preventDefault();
            window.location = $(this).attr("href");
        });
})();

/**
 * Slider for native and circ ads.
 */

window.Atlantic = window.Atlantic || {};

/**
 * @param {[object]} options
 * Expects:
 *     $el (element wrapping the ad)
 *     pos (ad position)
 *     threshold (pageYOffset where the ad will appear)
 */
Atlantic.AdSlider = function(options) {
    this.$el = options.$el;
    this.pos = options.pos;
    this.threshold = options.threshold;

    this.bindEvents();
};

Atlantic.AdSlider.prototype.bindEvents = function() {
    this.$el.on("click", ".close", this.hide.bind(this));

    this._interval = setInterval(this.checkPosition.bind(this), 1000);
};

/**
 * Load the deferred ad, show when ready.
 */
Atlantic.AdSlider.prototype.loadAd = function() {
    var beginsWithPos = RegExp("^"+this.pos);
    Atlantic.Ad.sizeListener(beginsWithPos, function($ad, size){
        if (size) {
            this.show();
        }
    }.bind(this));

    googletag = window.googletag || {};
    googletag.cmd = googletag.cmd || [];

    var self = this;
    googletag.cmd.push(function(){
        // Don't refresh the ad, if it's adSlots has been deleted (such as for AB test control groups)
        var slot = Atlantic.Ad.manager.adSlots["ad-" + self.pos];
        if (slot) {
            googletag.pubads().refresh([slot], {changeCorrelator: false});
        }
    });

};

Atlantic.AdSlider.prototype.hide = function(e) {
    this.$el.removeClass("open");
    e.stopPropagation();
    e.preventDefault();
};

Atlantic.AdSlider.prototype.show = function() {
    this.$el.addClass("open");
};

Atlantic.AdSlider.prototype.checkPosition = function() {
    if (window.pageYOffset > this.threshold) {
        this.loadAd();
        clearInterval(this._interval);
    }
};

// Because footerjs loads before the GPT, the slider
// element probably isn't in the DOM yet.
$(document).on("ready", function(){
    Atlantic.adslider = new Atlantic.AdSlider({
        $el: $(".native-promo-slider"),
        pos: "slider",
        threshold: $("#article").height() / 2
    });
});
