/***
!CommentPlugin.zh-Hans
Note: CommentPlugin modified by BramChen is required.
***/
//{{{
if (typeof config.CommentPlugin != 'undefined'){
	merge(config.CommentPlugin, {
 		CPlingo:{CommentInTitle: " 回响 ", comments:"回响",add:"回应 »",edit:"编辑", tooltips:"发表关于此文的相关意见",	Title: '%0_CommentInTitle_%1'
 		},
	});
	CPlingo = config.CommentPlugin.CPlingo;
}
//}}}