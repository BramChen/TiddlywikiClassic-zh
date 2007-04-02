/***
|''Name:''|SinglePageModePlugin.zh-Hans|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Author:''|BramChen (bram.chen (at) gmail (dot) com)|
|''License:''|[[Creative Commons Attribution-ShareAlike 2.5 License|http://creativecommons.org/licenses/by-sa/2.5/]]|
|''Require:''|[[SinglePageModePlugin|http://www.tiddlytools.com/#SinglePageModePlugin]]|
***/
//{{{
if (config.options.chkSinglePageMode==undefined) config.options.chkSinglePageMode=false;
config.shadowTiddlers.AdvancedOptions = config.shadowTiddlers.AdvancedOptions.replace(/Display one tiddler at a time/,"单页显示");

if (config.options.chkTopOfPageMode==undefined) config.options.chkTopOfPageMode=false;
config.shadowTiddlers.AdvancedOptions = config.shadowTiddlers.AdvancedOptions.replace(/Always open tiddlers at the top of the page/,"开启文章于页面最上方");
//}}}