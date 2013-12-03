$(document).ready(function(){
	/*
	$(".assessment-homework #submitAnswersBtn").live("click", function(event) {
		event.preventDefault();
		
		if(false) {
			alert($("#assessmentContents input").val());
			$(this).trigger('click');
		}
		else {
			alert($("#assessmentContents input").val());
//			event.preventDefault();
		}
		
	});*/
	
	//check everything before submitting
	$("#register_button").live("click", function(event) {
		$(".required[value = '']").addClass('red-border');
		$(".required[value != '']").removeClass('red-border');

		if(validate('', 'age', $("#age").val()) && $(".red-border").length == 0)
			return true;
		else {
			event.preventDefault();
		}
	});
  
	$(".course-materials").hide();                  //Initially hide all content
	$("#course-tabs li:first").attr("id","current");//Activate first tab
	$("#course-content div:first").fadeIn();        //Show first tab content
	
	$('#course-tabs a').click(function(e) {
		e.preventDefault();
		if ($(this).closest("li").attr("id") == "current"){ //detection for current tab
			return       
		}
		else {
			$(".course-materials").hide();
			$("#course-tabs li").attr("id","");     //Reset id's
			$(this).parent().attr("id","current");  //Activate this
			$('#' + $(this).attr('name')).fadeIn(); //Show content for current tab
		}
	});
	
	$("#unit-button-4, #unit-button-5").click(function(e) {
		
		if($(this).children("div").hasClass("click-and-show")) {
			$(this).children("div").removeClass("click-and-show");
			$(this).children(".expand-hide").text("+");
			
		}
		else {
			//
			if($(".description").hasClass("click-and-show")) {
				$(".description").removeClass("click-and-show");
				$(".expand-hide").text("+");
			}
			$(this).children("div").addClass("click-and-show");
			$(this).children(".expand-hide").text("-");
		}
	});
});

function checkRequired() {
	if($('input:text[value=""]').length > 0)
		return false;
	else
		return true;
}

function validate(tag, name, value) {
	var check = false;
	switch(name) {
		case "age":
			if(value.match(/^[1-9][0-9]{0,1}$|^$/) != null) {
				$("#age").removeClass('red-border');
				check = true;
			}
			else {
				$("#age").addClass('red-border');
				check = false;
			}
			break;
		default:
			check = false;
			break;
	}
	return check;
}

function show_description(tag, index) {
	$(tag).addClass("selected");
	$(tag).siblings().removeClass("selected");
	$(tag).parent().parent().next().find("li").hide();
	$(tag).parent().parent().next().find("li:eq("+index+")").show();
}