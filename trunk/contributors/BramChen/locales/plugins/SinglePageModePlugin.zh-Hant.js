/***
!SinglePageModePlugin.zh-Hant
***/
//{{{
if (config.options.chkSinglePageMode==undefined) config.options.chkSinglePageMode=false;
config.shadowTiddlers.AdvancedOptions = config.shadowTiddlers.AdvancedOptions.replace(/Display one tiddler at a time/,"單頁顯示");

if (config.options.chkTopOfPageMode==undefined) config.options.chkTopOfPageMode=false;
config.shadowTiddlers.AdvancedOptions = config.shadowTiddlers.AdvancedOptions.replace(/Always open tiddlers at the top of the page/,"開啟文章於頁面最上方");
//}}}
/***