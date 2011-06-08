/***
|''Name:''|TagglyTaggingPlugin.zh-Hans|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|[[TagglyTaggingPlugin|http://mptw.tiddlyspot.com/#TagglyTaggingPlugin]]|
***/
//{{{
merge(config.taggly,{
	lingo: {
		labels: {
			asc:		"\u2191", // 向下箭号
			desc:		"\u2193", // 向上箭号
			title:		"文章标题",
			modified:	"更新日期",
			created:	"创建日期",
			show:		"+",
			hide:		"-",
			normal:		"一般",
			group:		"分群",
			commas:		"逗点",
			sitemap:	"导览",
			numCols:	"栏数\u00b1", // 加减号
			label:		"标签 '%0':",
			exprLabel:	"Matching tag expression '%0':",
			excerpts:   "显示摘要",
			descr:      "说明",
			slices:     "所有段落",
			contents:   "内容",
			sliders:    "下拉式",
			noexcerpts: "隐藏摘要",
			noneFound:	"(none)"
		},

		tooltips: {
			title:		"依文章标题排序",
			modified:	"依文章更新日期排序",
			created:	"依文章创建日期排序",
			show:		"显示 tagging 列表",
			hide:		"隐藏 tagging 列表",
			normal:		"不分群显示",
			group:		"依标签分群显示",
			sitemap:	"改以站台导览风格显示",
			commas:		"改以逗点区隔列表",
			numCols:	"更改显示之栏位数",
			excerpts: "点击以显示摘要",
			descr:    "点击以显示说明段落",
			slices:    "点击以显示所有段落",
			contents: "点击以显示 tiddler内容",
			sliders:  "点击以下拉式显示 tiddler 内容",
			noexcerpts: "点击以隐藏摘要，仅显示标题"
		},

		tooDeepMessage: "* //sitemap too deep...//"
	}
});
//}}}