/***
|''Name:''|NewHerePlugin.zh-Hant|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|[[NewHerePlugin|http://mptw.tiddlyspot.com/#NewHerePlugin]]|
***/
//{{{
merge(config.macros,{
	newHere: {
		label: "新增文章",
		prompt: "新增以本文章標題為標籤的文章"},
	newJournalHere: {
		label: "新增日誌",
		dateFormat: "YYYY年0MM月0DD日",
		prompt: "新增以本文章標題為標籤的日誌"}
});
//}}}