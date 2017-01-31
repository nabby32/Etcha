$(document).ready(function() {

for(var a = 0; a < 15; a++) {
$("#wrapper > :first-child").after("<div class='block16'></div>");
};

$(".block16").mouseenter(function () {
	$(this).fadeTo("slow", 0.01);
});

$(".block16").mouseleave(function () {
	$(this).fadeTo(300, 1)
});

});