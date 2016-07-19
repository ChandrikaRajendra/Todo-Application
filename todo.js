var todoWindow =(function(){
	var todoWindowInstance;
	var rotated = false;
	function closetodo(){
		$(this).parent().remove();
		$(this).css("transform","rotate(180deg)");
	}

	function infoToDo(){
		$(this).css( "background-color", "red");			
	}

	function init(){
		var todoTemplate = $("#todoWindowTemplate");
		var todoBoxSpace = $(".todo-place");
		return {
			todoDomExtract : function(){
				var todoDom = todoTemplate.html();
				$(todoDom).appendTo(todoBoxSpace);
				$(".close").click(closetodo);
				$(".info").click(infoToDo);
				}
			};
	};
	return {
		createInstance : function(){
			if(!todoWindowInstance){
				todoWindowInstance = init();
			}
			return todoWindowInstance;
		}
	}
})();

var todo={};
todo.events={
	addListenerToDoApp : function(){
		$('#plusIm').click(todo.events.addTodo);	
		$('#minusIm').click(todo.events.showClose);
	},
	addTodo:function(){
		var newTodo = todoWindow.createInstance();
		newTodo.todoDomExtract();
	},
	showClose: function(){
		$(".close").show();
		$(".info").show();
	}
};

$(document).ready(function(){
	todo.events.addListenerToDoApp();	
});


