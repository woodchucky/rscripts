$(document).ready(function() {
    $("div.lede img[alt!='']").each(function(idx) {
	// Create a new img element and copy the target image's attributes
	// There's probably a better way to do this ...
	var $img = $("<img/>");
	var attributes = $(this).prop("attributes");
	$.each(attributes, function() {
	    $img.attr(this.name, this.value);
	});

	// Create a new container div to hold art and caption
	var $div = $("<div/>", {"class": "art detail with-caption", width: $(this).attr("width")})
	           .append($img)
	           .append($("<small/>", {text: $(this).attr("alt")}));

	// Float container div depending on which side the target image is aligned
	if ($(this).attr("style") == "float: left;") {
	    $div.addClass("left");
	} else if ($(this).attr("style") == "float: right;") {
	    $div.addClass("right");
	}

	$(this).replaceWith($div);
    });
});
