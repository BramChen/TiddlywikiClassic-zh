/***
|''Name:''|NewHerePlugin.zh-Hans|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|[[NewHerePlugin|http://mptw.tiddlyspot.com/#NewHerePlugin]]|
***/

//{{{
merge(config.commands,{
	newHere: {
		text: "创建文章",
		tooltip: "创建以本文章标题为标签的文章"},
	newJournalHere: {
		text: "创建日志",
		dataFormat: "YYYY年0MM月0DD日",
		tooltip: "创建以本文章标题为标签的日志"}
});
//}}}