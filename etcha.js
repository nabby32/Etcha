$(document).ready(function() {

for(var a = 0; a < 15; a++) {
$("#wrapper > :first-child").after("<div class='block'></div>");
};

$(".block").mouseenter(function () {
	$(this).fadeTo("slow", 0.1);
});

$(".block").mouseleave(function () {
	$(this).fadeTo("slow", 1)
});

});