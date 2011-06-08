/***
|''Name:''|TagglyTaggingPlugin.zh-Hant|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|[[TagglyTaggingPlugin|http://mptw.tiddlyspot.com/#TagglyTaggingPlugin]]|
***/
//{{{
merge(config.taggly,{
	lingo: {
		labels: {
			asc:		"\u2191", // 向下箭號
			desc:		"\u2193", // 向上箭號
			title:		"文章標題",
			modified:	"更新日期",
			created:	"建立日期",
			show:		"+",
			hide:		"-",
			normal:		"一般",
			group:		"分群",
			commas:		"逗點",
			sitemap:	"導覽",
			numCols:	"欄數\u00b1", // 加減號
			label:		"標籤 '%0':",
			exprLabel:	"Matching tag expression '%0':",
			excerpts:	"顯示摘要",
			descr:		"說明",
			slices:		"所有段落",
			contents:	"內容",
			sliders:	"下拉式",
			noexcerpts:	"隱藏摘要",
			noneFound:	"(none)"
		},

		tooltips: {
			title:		"依文章標題排序",
			modified:	"依文章更新日期排序",
			created:	"依文章建立日期排序",
			show:		"顯示 tagging 列表",
			hide:		"隱藏 tagging 列表",
			normal:		"不分群顯示",
			group:		"依標籤分群顯示",
			sitemap:	"改以站台導覽風格顯示",
			commas:		"改以逗點區隔列表",
			numCols:	"更改顯示之欄位數",
			excerpts:	"點擊以顯示摘要",
			descr:		"點擊以顯示說明段落",
			slices:		"點擊以顯示所有段落",
			contents:	"點擊以顯示 tiddler內容",
			sliders:	"點擊以下拉式顯示 tiddler 內容",
			noexcerpts:	"點擊以隱藏摘要，僅顯示標題"
		},

		tooDeepMessage: "* //sitemap too deep...//"
	}
});
//}}}