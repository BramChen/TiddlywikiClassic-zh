/***
|''Name:''|	EasyEditPlugin.zh-Hans|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Requires:''|EasyEditPlugin|
***/
//{{{
merge(EditorToolbar.buttons,{
	separator: {separator: true},
	bold: {label:"B", toolTip: "粗体"},
	italic: {label:"I", toolTip: "斜体"},
	underline: {label:"U", toolTip: "底线"},
	strikethrough: {label:"S", toolTip: "删除线"},
	insertunorderedlist: {label:"\u25CF", toolTip: "符号清单"},
	insertorderedlist: {label:"1.", toolTip: "数字清单"},
	justifyleft: {label:"[\u2261", toolTip: "左靠"},
	justifyright: {label:"\u2261]", toolTip: "右靠"},
	justifycenter: {label:"\u2261", toolTip: "置中"},
	justifyfull: {label:"[\u2261]", toolTip: "对齐"},
	removeformat: {label:"\u00F8", toolTip: "移除格式"},
	fontsize: {label:"\u00B1", toolTip: "字型大小", prompt: "输入字型大小"},
	forecolor: {label:"C", toolTip: "字型颜色", prompt: "输入字型颜色"},
	fontname: {label:"F", toolTip: "字型", prompt: " 输入字型名称"},
	heading: {label:"H", toolTip: "标题格式", prompt: "输入标题格式 (例如，h1, h2, ...)"},
	indent: {label:"\u2192[", toolTip: "缩排"},
	outdent: {label:"[\u2190", toolTip: "取消缩排"},
	inserthorizontalrule: {label:"\u2014", toolTip: "插入分隔线"},
	insertimage: {label:"\u263C", toolTip: "插入图档", prompt: "输入图档网址"},
	createlink: {onCreate: EditorToolbar.createLinkButton, label:"L", toolTip: "设置鍊结", prompt: "输入连结网址"}
});

if (config.browser.isGecko) {
	merge(EditorToolbar.buttons,{
		increasefontsize: {onCreate: EditorToolbar.createButton, label:"A", toolTip: "字型放大"},
		decreasefontsize: {onCreate: EditorToolbar.createButton, label:"A", toolTip: "字型缩小"},
		insertparagraph: {label:"P", toolTip: "段落"}
	});
}

merge(config.commands.easyEdit,{
	text: "快速编辑",
	tooltip: "使用“所见即所得”模式编辑此文",
	readOnlyText: "检视",
	readOnlyTooltip: "检视此文章源码"});

//}}}