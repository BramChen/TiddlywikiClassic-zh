/***
!CommentPlugin.zh-Hant
Note: CommentPlugin modified by BramChen is required.
***/
//{{{
if (typeof config.CommentPlugin != 'undefined'){
	merge(config.CommentPlugin, {
 		CPlingo:{
			CommentInTitle: " 回響 ",
			comments:"回響",
			add:"回應 »",
			edit:"編輯",
			tooltips:"發表關於此文的相關意見",
			Title: '%0_CommentInTitle_%1'
		}
	});
	CPlingo = config.CommentPlugin.CPlingo;
}
//}}}