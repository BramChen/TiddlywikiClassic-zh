// zh-Hant Tweaks 
merge(config.options,{
	txtFsEncode: "BIG5"});

merge(config.shadowTiddlers,{
	MarkupPreHead: "<!--{{{-->\n<link rel='shortcut icon' href='favicon.ico' />\n<link rel='alternate' type='application/rss+xml' title='RSS' href='ptwe.xml' />\n<!--}}}-->\n<!--{{{-->\n<!-- WikiEdit -->\n<link rel='stylesheet' type='text/css' href='./wikiedit/wikiedit.css' />\n<script type='text/javascript' src='./wikiedit/wikiedit_zh-Hant.js'></script>\n<!-- End of WikiEdit -->\n<!--}}}-->\n",
	MarkupPreBody: "<!--{{{-->\n<!-- WikiEdit -->\n<script type='text/javascript' src='./wikiedit/WikiEditPlugin.js'></script>\n<!-- End of WikiEdit -->\n<!--}}}-->\n",
	StyleSheet: "[[StyleSheetLayoutAdjustZH]]",
	StyleSheetLayoutAdjustZH: "/***\n	''Title:'' StyleSheetLayoutAdjustZH\n	''Usage:'' Add {{{[[StyleSheetLayoutAdjustZH]]}}} to StyleSheet\n***/\n/*{{{*/\n#sidebarOptions {\n	font-size: 1.1em;\n}\n#sidebarOptions a {\n font-style: normal;\n}\n#sidebarOptions .sliderPanel {\n	font-size: .95em;\n}\n.viewer table.listView {\n	font-size: .95em;\n}\n/*}}}*/",
	AdvancedOptions: config.shadowTiddlers.AdvancedOptions +"\n檔案系統編碼：<<option txtFsEncode>>\n<<<\n使用Gecko based的瀏覽器（如：Firefox）時，\n指定正確系統環境編碼（BIG5、GBK、SHIFT-JIS、EUC-KR....等），\n可支援儲存文件於非 ASCII 路徑及檔名。\n<<<", 
	ViewTemplate: "<div class='toolbar' macro='toolbar closeTiddler closeOthers +editTiddler permalink references jump'></div>\n<div class='title' macro='view title'></div>\n<div class='subtitle'><span macro='view modifier link'></span>, <span macro='view modified date YYYY0MM0DD'></span> (<span macro='message views.wikified.createdPrompt'></span> <span macro='view created date YYYY0MM0DD'></span>)</div>\n<div class='tagging' macro='tagging'></div>\n<div class='tagged' macro='tags'></div>\n<div class='viewer' macro='view text wikified'></div>\n<div class='tagClear'></div>"
});
// -End of Tweak
