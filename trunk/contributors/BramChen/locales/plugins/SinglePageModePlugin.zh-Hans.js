/***
!SinglePageModePlugin.zh-Hant
***/
//{{{
if (config.options.chkSinglePageMode==undefined) config.options.chkSinglePageMode=false;
config.shadowTiddlers.AdvancedOptions = config.shadowTiddlers.AdvancedOptions.replace(/Display one tiddler at a time/,"单页显示");

if (config.options.chkTopOfPageMode==undefined) config.options.chkTopOfPageMode=false;
config.shadowTiddlers.AdvancedOptions = config.shadowTiddlers.AdvancedOptions.replace(/Always open tiddlers at the top of the page/,"开启文章于页面最上方");
//}}}
/***