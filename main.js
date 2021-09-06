/* resize grid to match portrait image */
function fixGridSize() {
  var imgHeight = $("#portrait img").outerHeight() + "px";
  $(".cardContainer").css("grid-template-rows", imgHeight + " auto auto");
}

/* rescale about-box font to fit without scrollbars */
function fixFontSize() {
  const fudge = 1.05;
  $("#test").width( $("#about").width() - 20); // account for right-padding
  var fontRescale = Math.sqrt($("#about").height() / $("#test").height());
  fontRescale /= fudge; // apply fudge factor to deal with word-wr  astage
  fontRescale = Math.min(1, fontRescale); // scale down only
  $("#about").css("font-size", 100 * fontRescale + "%");
}

function fixSizes(e) {
  fixGridSize();
  fixFontSize();
}

function pageReady() {
  $("#test").text($("#about").text());
  fixGridSize();
  fixFontSize();
  $(window).resize(fixSizes);
}

$().ready( pageReady );
