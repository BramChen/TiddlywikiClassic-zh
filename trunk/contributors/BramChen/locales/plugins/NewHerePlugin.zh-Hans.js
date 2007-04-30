/***
|''Name:''|NewHerePlugin.zh-Hans|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|[[NewHerePlugin|http://mptw.tiddlyspot.com/#NewHerePlugin]]|
***/

//{{{
merge(config.macros,{
	newHere: {
		label: "创建文章",
		prompt: "创建以本文章标题为标签的文章"},
	newJournalHere: {
		label: "创建日志",
		dateFormat: "YYYY年0MM月0DD日",
		prompt: "创建以本文章标题为标签的日志"}
});
//}}}