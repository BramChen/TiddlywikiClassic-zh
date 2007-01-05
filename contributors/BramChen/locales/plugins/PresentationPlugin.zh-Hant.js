/***
!PresentationPlugin.zh-Hant
***/
//{{{
config.macros.author.refresh = function(place,params){
    if (window.lewcideditmode== false)
        return false;
    removeChildren(place);
    var oldMode = window.presentationMode;
    var newMode = (oldMode == "Author")?"":"Author";
    var label = (oldMode == "Author")? "簡報模式":"管理模式";
    var tooltip = label;
	createTiddlyButton(place,label,tooltip,function() {
		applyPresentationMode(oldMode,newMode);
	});
};
//}}}