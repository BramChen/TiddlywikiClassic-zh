/***
!CommentTabPlugin.en
Note: CommentPlugin and CommentTabPlugin modified by BramChen is required.
***/
//{{{
if (typeof config.macros.tiddlerComments != 'undefined'){
	config.shadowTiddlers.TabTimeline = "<<tabs txtTimelineTab Tiddlers Tiddlers TabTimelineTiddlers " + config.CommentPlugin.CPlingo.comments + config.CommentPlugin.CPlingo.CommentInTitle + ' TabTimelineComments>>';
	config.macros.tiddlerComments.dateFormat = "DD MMM YYYY";
}
//}}}