/***
|''Name:''|SinglePageModePlugin.zh-Hant|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Author:''|BramChen (bram.chen (at) gmail (dot) com)|
|''License:''|[[Creative Commons Attribution-ShareAlike 2.5 License|http://creativecommons.org/licenses/by-sa/2.5/]]|
|''Require:''|[[SinglePageModePlugin|http://www.tiddlytools.com/#SinglePageModePlugin]]|
***/
//{{{
if (config.options.chkSinglePageMode==undefined) config.options.chkSinglePageMode=false;
config.shadowTiddlers.AdvancedOptions = config.shadowTiddlers.AdvancedOptions.replace(/Display one tiddler at a time/,"單頁顯示");

if (config.options.chkTopOfPageMode==undefined) config.options.chkTopOfPageMode=false;
config.shadowTiddlers.AdvancedOptions = config.shadowTiddlers.AdvancedOptions.replace(/Always open tiddlers at the top of the page/,"開啟文章於頁面最上方");
//}}}