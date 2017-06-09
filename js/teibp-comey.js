
function addPronouns(){
	$("p").css("font-size","0pt");
	$(".-teibp-p").css("font-size","0px");
	$("seg[type='pronoun']").css("font-size","44pt");
	$(".-teibp-seg[type='pronoun']").css("font-size","44pt");
	$("seg[type='possessive']").css("font-size","30pt");
	$(".-teibp-seg[type='possessive']").css("font-size","30pt");
	$("seg[subtype='masculine']").css("color","red");
	$(".-teibp-seg[subtype='masculine']").css("color","red");
	$("seg[subtype='feminine']").css("color","purple");
	$(".-teibp-seg[subtype='feminine']").css("color","purple");
	$("seg[subtype='self']").css("color","green");
	$(".-teibp-seg[subtype='self']").css("color","green");
}

function clearPronouns(){
	$("p").css("font-size","14pt");
	$(".-teibp-p").css("font-size","14pt");
	$("seg[type='pronoun']").css("font-size","14pt");
	$(".-teibp-seg[type='pronoun']").css("font-size","14pt");
	$("seg[type='possessive']").css("font-size","14pt");
	$(".-teibp-seg[type='possessive']").css("font-size","14pt");
	$("seg[subtype='masculine']").css("color","black");
	$(".-teibp-seg[subtype='masculine']").css("color","black");
	$("seg[subtype='feminine']").css("color","black");
	$(".-teibp-seg[subtype='feminine']").css("color","black");
	$("seg[subtype='self']").css("color","black");
	$(".-teibp-seg[subtype='self']").css("color","black");
}

function addParty(){
	$("sp p").css("border-width","12px");
	$(".-teibp-sp p").css("border-width","12px");
	/*$("sp p").css("margin-left","24em");
	$(".-teibp-sp p").css("margin-left","24em");*/
}

function clearParty(){
	$("sp p").css("border-width","0px");
	$(".-teibp-sp p").css("border-width","0px");
}

function init(){
	document.getElementById('PronounToggle').onclick = function(){
		if(document.getElementById('PronounToggle').checked){
			addPronouns();
		}else{
			clearPronouns();
		}
	};
	document.getElementById('PartyToggle').onclick = function(){
		if(document.getElementById('PartyToggle').checked){
			addParty();
		}else{
			clearParty();
		}
	};
	clearPronouns();
	document.getElementById('PronounToggle').checked = false;
	clearParty();
	document.getElementById('PartyToggle').checked = false;
}

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
