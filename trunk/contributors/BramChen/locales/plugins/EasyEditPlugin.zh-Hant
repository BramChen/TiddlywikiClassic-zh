/***
|''Name:''|	EasyEditPlugin.zh-Hant|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Requires:''|EasyEditPlugin|
***/
//{{{
merge(EditorToolbar.buttons,{
	separator : {separator : true},
	bold : {label:"B", toolTip : "粗體"},
	italic : {label:"I", toolTip : "斜體"},
	underline : {label:"U", toolTip : "底線"},
	strikethrough : {label:"S", toolTip : "刪除線"},
	insertunorderedlist : {label:"\u25CF", toolTip : "符號清單"},
	insertorderedlist : {label:"1.", toolTip : "數字清單"},
	justifyleft : {label:"[\u2261", toolTip : "左靠"},
	justifyright : {label:"\u2261]", toolTip : "右靠"},
	justifycenter : {label:"\u2261", toolTip : "置中"},
	justifyfull : {label:"[\u2261]", toolTip : "對齊"},
	removeformat : {label:"\u00F8", toolTip : "移除格式"},
	fontsize : {label:"\u00B1", toolTip : "字型大小", prompt: "輸入字型大小"},
	forecolor : {label:"C", toolTip : "字型顏色", prompt: "輸入字型顏色"},
	fontname : {label:"F", toolTip : "字型", prompt: " 輸入字型名稱"},
	heading : {label:"H", toolTip : "標題格式", prompt: "輸入標題格式 (例如，h1, h2, ...)"},
	indent : {label:"\u2192[", toolTip : "縮排"},
	outdent : {label:"[\u2190", toolTip : "取消縮排"},
	inserthorizontalrule : {label:"\u2014", toolTip : "插入分隔線"},
	insertimage : {label:"\u263C", toolTip : "插入圖檔", prompt: "輸入圖檔網址"},
	createlink: {onCreate: EditorToolbar.createLinkButton, label:"L", toolTip: "設定鍊結", prompt: "輸入連結網址"}
});

if (config.browser.isGecko) {
	merge(EditorToolbar.buttons,{
		increasefontsize: {onCreate : EditorToolbar.createButton, label:"A", toolTip : "字型放大"},
		decreasefontsize: {onCreate : EditorToolbar.createButton, label:"A", toolTip : "字型縮小"},
		insertparagraph: {label:"P", toolTip : "段落"}
	});
}

merge(config.commands.easyEdit,{
	text: "快速編輯",
	tooltip: "使用「所見即所得」模式編輯此文",
	readOnlyText: "檢視",
	readOnlyTooltip: "檢視此文章源碼"});

//}}}