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
			excerpts:   "顯示摘要",
			noexcerpts: "隱藏摘要"
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
			numCols:	"更改顯示之欄位數"
		}
	}
});
//}}}