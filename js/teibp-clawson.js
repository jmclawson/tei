/*function clearPageBreaks(){
	$("pb").css("display","none");
	$(".-teibp-pb").css("display","none");
}
function addPageBreaks(){
	$("pb").css("display","block");	
	$(".-teibp-pb").css("display","block");

}

function init(){
	document.getElementById('pbToggle').onclick = function(){
		if(document.getElementById('pbToggle').checked){
			clearPageBreaks();
		}else{
			addPageBreaks();
		}
	};
	addPageBreaks();
	document.getElementById('pbToggle').checked = false;
}
*/

/* JMC: To modify the toolkbox toggles, add below (1 of 3)*/
function clearStage(){
	$("stage").css("display","none");
	$(".-teibp-stage").css("display","none");
}

function addStage(){
	$("stage").css("display","block");	
	$(".-teibp-stage").css("display","block");

}

function clearSpeech(){
	$("l").css("display","none");
	$(".-teibp-l").css("display","none");
}

function addSpeech(){
	$("l").css("display","block");	
	$(".-teibp-l").css("display","block");

}

function clearMusic(){
	$("[type='music']").css("display","none");
	$(".-teibp-[type='music']").css("display","none");
}

function addMusic(){
	$("[type='music']").css("display","block");	
	$(".-teibp-[type='music']").css("display","block");

}

function clearRhymes(){
	$("rhyme[label='a']").css("font-style","normal");
	$("rhyme[label='a']").css("color","black");
	$(".-teibp-rhyme[label='a']").css("font-style","normal");
	$(".-teibp-rhyme[label='a']").css("color","black");
	$("rhyme[label='b']").css("font-style","normal");
	$("rhyme[label='b']").css("color","black");
	$(".-teibp-rhyme[label='b']").css("font-style","normal");
	$(".-teibp-rhyme[label='b']").css("color","black");
	$("rhyme[label='c']").css("font-style","normal");
	$("rhyme[label='c']").css("color","black");
	$(".-teibp-rhyme[label='c']").css("font-style","normal");
	$(".-teibp-rhyme[label='c']").css("color","black");
}

function addRhymes(){
	$("rhyme[label='a']").css("font-style","italic");
	$("rhyme[label='a']").css("color","red");
	$(".-teibp-rhyme[label='a']").css("font-style","italic");
	$(".-teibp-rhyme[label='a']").css("color","red");
	$("rhyme[label='b']").css("font-style","italic");
	$("rhyme[label='b']").css("color","blue");
	$(".-teibp-rhyme[label='b']").css("font-style","italic");
	$(".-teibp-rhyme[label='b']").css("color","blue");
	$("rhyme[label='c']").css("font-style","italic");
	$("rhyme[label='c']").css("color","green");
	$(".-teibp-rhyme[label='c']").css("font-style","italic");
	$(".-teibp-rhyme[label='c']").css("color","green");
}

function clearEmoji(){
	$("speaker::after").css("font-size","0px");
	$(".-teibp-speaker::after").css("font-size","0px");
	$("speaker").css("text-indent","-9999px");
	$(".-teibp-speaker").css("text-indent","-9999px");
	$("speaker").css("line-height","initial");
	$(".-teibp-speaker").css("line-height","initial");
}

function addEmoji(){
	$("speaker::after").css("font-size","44px");
	$(".-teibp-speaker::after").css("font-size","44px");
	$("speaker").css("text-indent","-9999px");
	$(".-teibp-speaker").css("text-indent","-9999px");
	$("speaker").css("line-height","0");
	$(".-teibp-speaker").css("line-height","0");
}

/* JMC: To modify the toolkbox toggles, add below (2 of 3)*/

function init(){
	document.getElementById('StageToggle').onclick = function(){
		if(document.getElementById('StageToggle').checked){
			clearStage();
			document.getElementById("MusicToggle").checked = true;
			clearMusic();
		}else{
			addStage();
			document.getElementById("MusicToggle").checked = false;
			addMusic();
		}
	};
	document.getElementById('MusicToggle').onclick = function(){
		if(document.getElementById('MusicToggle').checked){
			clearMusic();
		}else{
			addMusic();
		}
	};
	document.getElementById('SpeechToggle').onclick = function(){
		if(document.getElementById('SpeechToggle').checked){
			clearSpeech();
		}else{
			addSpeech();
		}
	};
	document.getElementById('RhymeToggle').onclick = function(){
		if(document.getElementById('RhymeToggle').checked){
			clearRhymes();
		}else{
			addRhymes();
		}
	};
	document.getElementById('EmojiToggle').onclick = function(){
		if(document.getElementById('EmojiToggle').checked){
			clearEmoji();
		}else{
			addEmoji();
		}
	};
/* JMC: To modify the toolkbox toggles, add below (3 of 3)*/
	addStage();
	document.getElementById('StageToggle').checked = false;
	addSpeech();
	document.getElementById('SpeechToggle').checked = false;
	addMusic();
	document.getElementById('MusicToggle').checked = false;
	clearRhymes();
	document.getElementById('RhymeToggle').checked = true;
	clearEmoji();
	document.getElementById('EmojiToggle').checked = true;
}
/*JMC: To modify toolbox toggles, change 3 things above*/

//If W3C event model used, prefer that. Window events are fallbacks
if(document.addEventListener){
	//W3C event model used
	document.addEventListener("DOMContentLoaded", init, false);
	window.addEventListener("load", init, false);
} else if(document.attachEvent){
	//IE event model used
	document.attachEvent( "onreadystatechange", init);
	window.attachEvent( "onload", init);
}

function switchThemes(theme) {
	document.getElementById('customcss').href=theme.options[theme.selectedIndex].value;
}

function showFacs(num, url, id) {
	facsWindow = window.open ("about:blank")
	facsWindow.document.write("<html>")
	facsWindow.document.write("<head>")
	facsWindow.document.write("<title>TEI Boilerplate Facsimile Viewer</title>")
	facsWindow.document.write($('#maincss')[0].outerHTML)
	facsWindow.document.write($('#customcss')[0].outerHTML)
	facsWindow.document.write("<link rel='stylesheet' href='../js/jquery-ui/themes/base/jquery.ui.all.css'>")
	if ($('#teibp-tagusage-css').length) {
	  facsWindow.document.write($('#teibp-tagusage-css')[0].outerHTML)
	}
	if ($('#teibp-rendition-css').length) {
	  facsWindow.document.write($('#teibp-rendition-css')[0].outerHTML)
	}
	facsWindow.document.write("<script type='text/javascript' src='../js/jquery/jquery.min.js'></script>")
	facsWindow.document.write("<script type='text/javascript' src='../js/jquery-ui/ui/jquery-ui.js'></script>")
	facsWindow.document.write("<script type='text/javascript' src='../js/jquery/plugins/jquery.scrollTo-1.4.3.1-min.js'></script>")
	facsWindow.document.write("<script type='text/javascript' src='../js/teibp.js'></script>")
	facsWindow.document.write("<script type='text/javascript'>")
	facsWindow.document.write("$(document).ready(function() {")
	facsWindow.document.write("$('.facsImage').scrollTo($('#" + id + "'))")
	facsWindow.document.write("})")
	facsWindow.document.write("</script>")
	facsWindow.document.write("<script type='text/javascript'>	$(function() {$( '#resizable' ).resizable();});</script>")
	facsWindow.document.write("</head>")
	facsWindow.document.write("<body>")
	facsWindow.document.write($("teiHeader")[0].outerHTML)
	//facsWindow.document.write("<teiHeader>" + $("teiHeader")[0].html() + "</teiHeader>")
	//facsWindow.document.write($('<teiHeader>').append($('teiHeader').clone()).html();)
	
	//facsWindow.document.write($("teiHeader")[0].outerHTML)
	facsWindow.document.write("<div id='resizable'>")
	facsWindow.document.write("<div class='facsImage'>")
	$(".-teibp-thumbnail").each(function() {
		facsWindow.document.write("<img id='" + $(this).parent().parent().parent().attr('id') + "' src='" + $(this).attr('src') + "' alt='facsimile page image'/>")
	})
	facsWindow.document.write("</div>")
	facsWindow.document.write("</div>")
	facsWindow.document.write($("footer")[0].outerHTML)
	
	facsWindow.document.write("</body>")
	facsWindow.document.write("</html>")
	facsWindow.document.close()
}
