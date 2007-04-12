/***
|''Name:''|ArchivedTimeline.zh-Hans|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|[[ArchivedTimeline]]|
***/
//{{{
if (typeof config.macros.archivedTimeline != "undefined"){
	merge(config.macros.archivedTimeline, {
		tooltips: "归档顺序: ",
		orderBy: {modified: "修改日期", created: "创建日期"},
		monthFormat: "YYYY年0MM月",
		dateFormat: "YYYY年0MM月0DD日"
	});
}
//}}}