!function(){try{var _="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},E=Error().stack;E&&(_._sentryDebugIds=_._sentryDebugIds||{},_._sentryDebugIds[E]="75d1139f-1b25-4561-b451-0ccff3b9ce6e",_._sentryDebugIdIdentifier="sentry-dbid-75d1139f-1b25-4561-b451-0ccff3b9ce6e")}catch(_){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"57ca87d6"};"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2149],{43940:function(_,E,O){O.d(E,{s:function(){return L}});var I=O(85893);O(67294);var C=O(39873),N=O(28900),n=O(66377);function L(){let _=(0,C.O)();return(0,I.jsx)(n.D,{onLogUserIsAuthenticated:function(E){_.log((0,N.cR)(E))},onNonMemberSessionStarted:function(){_.log((0,N.MP)())},onLoginModalRequest:function(){_.log((0,N.lg)())},onLoginModalDismiss:function(){_.log((0,N.eA)())},onLoginModalEmailCTAClick:function(){_.log((0,N.rB)())},onLoginModalSocialButtonClick:function(E){_.log((0,N.CJ)(E))},onThirdPartyMemberRegistered:function(){_.log((0,N.FP)())}})}},5247:function(_,E,O){O.d(E,{v:function(){return n}});var I=O(18446),C=O.n(I),N=O(67294);let n=(_,E)=>{let O=(0,N.useRef)();return O.current&&C()(E,O.current.key)||(O.current={key:E,value:_()}),O.current.value}},36281:function(_,E,O){var I,C,N,n,L,T,e,R,A,t,r,u,S,D;O.d(E,{CF:function(){return C},WT:function(){return n},Zd:function(){return T},ci:function(){return I},e5:function(){return e},fQ:function(){return L},j2:function(){return N}}),(R=I||(I={}))[R.OVERLAY_TOGGLE=6454]="OVERLAY_TOGGLE",(A=C||(C={}))[A.ENTRY_POINT=740]="ENTRY_POINT",A[A.CLOSE_EVENT=741]="CLOSE_EVENT",A[A.TYPE=742]="TYPE",(t=N||(N={}))[t.GALLERY=1]="GALLERY",t[t.ROOM_TYPE=2]="ROOM_TYPE",t[t.MAP=3]="MAP",t[t.ITEM_OVERLAY_GALLERY=4]="ITEM_OVERLAY_GALLERY",t[t.ITEM_OVERLAY_INFO=5]="ITEM_OVERLAY_INFO",t[t.ITEM_OVERLAY_DEALS=6]="ITEM_OVERLAY_DEALS",(r=n||(n={}))[r.MAIN_IMAGE=1]="MAIN_IMAGE",r[r.SLIDEOUT_IMAGE=2]="SLIDEOUT_IMAGE",r[r.MAP_CARD_MAIN_IMAGE=3]="MAP_CARD_MAIN_IMAGE",r[r.SEO_CARD_IMAGE=4]="SEO_CARD_IMAGE",r[r.ROOM_ITEM=10]="ROOM_ITEM",r[r.ROOM_SECTION=11]="ROOM_SECTION",r[r.MAP_EXPAND_BUTTON=20]="MAP_EXPAND_BUTTON",(u=L||(L={}))[u.OPEN=1]="OPEN",u[u.CLOSE=2]="CLOSE",(S=T||(T={}))[S.CLOSE_CLICK=1]="CLOSE_CLICK",S[S.OUTSIDE_CLICK=2]="OUTSIDE_CLICK",(D=e||(e={}))[D.ITEM_OVERLAY_GALLERY=1]="ITEM_OVERLAY_GALLERY",D[D.ITEM_OVERLAY_INFO=2]="ITEM_OVERLAY_INFO",D[D.ITEM_OVERLAY_DEALS=3]="ITEM_OVERLAY_DEALS"},28900:function(_,E,O){O.d(E,{CJ:function(){return t},FP:function(){return T},MP:function(){return L},Pg:function(){return N},Wp:function(){return n},cR:function(){return C},eA:function(){return R},lg:function(){return e},rB:function(){return A}});var I=O(28684);let C=_=>({pageId:I.mU.USER_IS_LOGGED_IN,reference:parseInt(_),details:[{key:I.TY.ACCOUNT_TYPE,value:I.cK.REGISTERED_USER}]}),N=()=>({pageId:I.mU.PROFILE_AND_ACCOUNT_MANAGEMENT,reference:13}),n=()=>({pageId:I.mU.PROFILE_AND_ACCOUNT_MANAGEMENT,reference:16}),L=()=>({pageId:I.mU.NON_MEMBER_SESSION_STARTED}),T=()=>({pageId:I.mU.THIRD_PARTY_MEMBER_REGISTERED});function e(){return{pageId:I.Oy.LOG_IN_MODAL_IMPRESSION}}function R(){return{pageId:I.Oy.LOG_IN_MODAL_INTERACTIONS,reference:I.ZB.LOGIN_MODAL_CLOSED}}function A(){return{pageId:I.Oy.LOG_IN_MODAL_INTERACTIONS,reference:I.ZB.LOGIN_AND_CREATE_CLICKED}}function t(_){let E={GOOGLE:I.ZB.GOOGLE_LOGIN_CLICKED,FACEBOOK:I.ZB.FACEBOOK_LOGIN_CLICKED,APPLE:I.ZB.APPLE_LOGIN_CLICKED};return{pageId:I.Oy.LOG_IN_MODAL_INTERACTIONS,reference:E[_]}}},28684:function(_,E,O){var I,C,N,n,L,T,e,R,A,t,r,u,S,D,M,o;O.d(E,{Oy:function(){return e},Q2:function(){return n},TY:function(){return L},ZB:function(){return R},aX:function(){return N},cK:function(){return T},mU:function(){return I},tW:function(){return C}}),(A=I||(I={}))[A.PROFILE_AND_ACCOUNT_MANAGEMENT=2472]="PROFILE_AND_ACCOUNT_MANAGEMENT",A[A.USER_IS_LOGGED_IN=2544]="USER_IS_LOGGED_IN",A[A.NON_MEMBER_SESSION_STARTED=6437]="NON_MEMBER_SESSION_STARTED",A[A.FAVORITES_ENTRY_POINT=6099]="FAVORITES_ENTRY_POINT",A[A.THIRD_PARTY_MEMBER_REGISTERED=6511]="THIRD_PARTY_MEMBER_REGISTERED",(t=C||(C={}))[t.UPDATE_PERSONAL_INFORMATION_CLICKED=50]="UPDATE_PERSONAL_INFORMATION_CLICKED",t[t.DELETE_ACCOUNT_LINK_CLICKED=51]="DELETE_ACCOUNT_LINK_CLICKED",t[t.DELETE_ACCOUNT_BUTTON_CLICKED=52]="DELETE_ACCOUNT_BUTTON_CLICKED",t[t.CANCEL_ACCOUNT_DELETION=53]="CANCEL_ACCOUNT_DELETION",t[t.ACCOUNT_DELETION_ACKNOWLEDGEMENT_CLICKED=54]="ACCOUNT_DELETION_ACKNOWLEDGEMENT_CLICKED",t[t.UPDATE_PASSWORD_CLICKED=55]="UPDATE_PASSWORD_CLICKED",t[t.HEADER_MENU_CLICKED=1]="HEADER_MENU_CLICKED",t[t.BACK_ARROW_TO_CLOSE_MENU_CLICKED=2]="BACK_ARROW_TO_CLOSE_MENU_CLICKED",t[t.HEADER_BACK_BUTTON_CLICKED=3]="HEADER_BACK_BUTTON_CLICKED",t[t.ACCOUNT_SETTINGS_CLICKED=17]="ACCOUNT_SETTINGS_CLICKED",t[t.BOOKING_OVERVIEW_CLICKED=18]="BOOKING_OVERVIEW_CLICKED",t[t.HELP_AND_SUPPORT_CLICKED=40]="HELP_AND_SUPPORT_CLICKED",t[t.CIRCLE_LANDING_PAGE_CLICKED=48]="CIRCLE_LANDING_PAGE_CLICKED",t[t.RECENTLY_VIEWED_CLICKED=24]="RECENTLY_VIEWED_CLICKED",t[t.CUSTOMISATION_SURVEY_BANNER_CLICKED=58]="CUSTOMISATION_SURVEY_BANNER_CLICKED",t[t.FAVORITES_IN_MEMBER_AREA_CLICK=14]="FAVORITES_IN_MEMBER_AREA_CLICK",(r=N||(N={}))[r.HELP_AND_SUPPORT=2674]="HELP_AND_SUPPORT",(u=n||(n={}))[u.LOGIN_SIGN_UP_LINK=1]="LOGIN_SIGN_UP_LINK",u[u.LOGGED_OUT_HELP_CENTER_LINK=2]="LOGGED_OUT_HELP_CENTER_LINK",u[u.FULL_CONTACT_FORM_LINK=10]="FULL_CONTACT_FORM_LINK",u[u.HELP_CENTER_LINK=11]="HELP_CENTER_LINK",u[u.SELECT_NO_BOOKING_CONFIRMATION=12]="SELECT_NO_BOOKING_CONFIRMATION",u[u.SELECT_PAYMENT_ISSUE=13]="SELECT_PAYMENT_ISSUE",u[u.SELECT_CANCEL_BOOKING=14]="SELECT_CANCEL_BOOKING",u[u.SELECT_ERROR_ON_TRIVAGO=15]="SELECT_ERROR_ON_TRIVAGO",u[u.TRIVAGO_INFO_LINK=30]="TRIVAGO_INFO_LINK",u[u.CANCEL_BOOKING_READMORE_LINK=35]="CANCEL_BOOKING_READMORE_LINK",u[u.NO_BOOKING_CONFIRMATION_READMORE_LINK=36]="NO_BOOKING_CONFIRMATION_READMORE_LINK",u[u.CONTACT_BOOKING_SITE_LINK=31]="CONTACT_BOOKING_SITE_LINK",u[u.BOOKING_CONFIRMATION_INFO_LINK=33]="BOOKING_CONFIRMATION_INFO_LINK",u[u.TAXES_AND_FEES_INFO_LINK=32]="TAXES_AND_FEES_INFO_LINK",u[u.ERROR_ON_TRIVAGO_LINK=34]="ERROR_ON_TRIVAGO_LINK",u[u.SUPPORT_FORM_SELECT_INCORRECT_HOTEL=60]="SUPPORT_FORM_SELECT_INCORRECT_HOTEL",u[u.SUPPORT_FORM_SELECT_INCORRECT_LOCATION=61]="SUPPORT_FORM_SELECT_INCORRECT_LOCATION",u[u.SUPPORT_FORM_SELECT_INCORRECT_HOTEL_DETAILS=62]="SUPPORT_FORM_SELECT_INCORRECT_HOTEL_DETAILS",u[u.SUPPORT_FORM_SELECT_INCORRECT_DATES=63]="SUPPORT_FORM_SELECT_INCORRECT_DATES",u[u.SUPPORT_FORM_BOOKING_CONFIRMATION_INFO_LINK=64]="SUPPORT_FORM_BOOKING_CONFIRMATION_INFO_LINK",u[u.SUPPORT_FORM_SUBMIT=65]="SUPPORT_FORM_SUBMIT",u[u.SUPPORT_FORM_REQUEST_SUCCESS=66]="SUPPORT_FORM_REQUEST_SUCCESS",u[u.SUPPORT_FORM_REQUEST_FAILURE=67]="SUPPORT_FORM_REQUEST_FAILURE",(S=L||(L={}))[S.ACCOUNT_TYPE=588]="ACCOUNT_TYPE",(D=T||(T={}))[D.REGISTERED_USER=1]="REGISTERED_USER",(M=e||(e={}))[M.LOG_IN_MODAL_IMPRESSION=6467]="LOG_IN_MODAL_IMPRESSION",M[M.LOG_IN_MODAL_INTERACTIONS=6468]="LOG_IN_MODAL_INTERACTIONS",(o=R||(R={}))[o.LOGIN_AND_CREATE_CLICKED=1]="LOGIN_AND_CREATE_CLICKED",o[o.GOOGLE_LOGIN_CLICKED=2]="GOOGLE_LOGIN_CLICKED",o[o.FACEBOOK_LOGIN_CLICKED=3]="FACEBOOK_LOGIN_CLICKED",o[o.APPLE_LOGIN_CLICKED=4]="APPLE_LOGIN_CLICKED",o[o.LOGIN_MODAL_CLOSED=5]="LOGIN_MODAL_CLOSED"},80268:function(_,E,O){O.d(E,{O:function(){return C}});var I=O(93534);function C(_){let E=(0,I.s$)()?"":_;return E?{key:1,value:E}:null}},2684:function(_,E,O){O.d(E,{B:function(){return N}});var I=O(80268);let C=!1;function N(_){let E=(0,I.O)(_);return E&&!C?(C=!0,E):null}},11818:function(_,E,O){var I,C,N,n;O.d(E,{xY:function(){return r},Gi:function(){return R},pB:function(){return t},Gu:function(){return A},_h:function(){return L},RX:function(){return e},$Y:function(){return T}}),(N=I||(I={}))[N.YCLID=191]="YCLID",N[N.SEM=52]="SEM",N[N.CIP_EXT=178]="CIP_EXT",N[N.GCLID=151]="GCLID",N[N.CIP_TC=110]="CIP_TC",N[N.CIP=29]="CIP",(n=C||(C={}))[n.ID=487]="ID";let L=(_,E)=>[{key:C.ID,value:_},...E],T=_=>({key:I.YCLID,value:_}),e=_=>({key:I.SEM,value:_}),R=_=>({key:I.CIP_EXT,value:_}),A=_=>({key:I.GCLID,value:_}),t=_=>({key:I.CIP_TC,value:_}),r=_=>({key:I.CIP,value:String(_)})},17141:function(_,E,O){O.d(E,{K:function(){return R}});var I=O(11163),C=O(67294),N=O(5247),n=O(11818),L=O(69859),T=O(3736),e=O(11390);let R=()=>{let{query:_}=(0,I.useRouter)(),E=(0,N.v)(()=>(0,T.Q)(_),[_]),O=E[L.wE.YCLID],R=E[L.wE.GCLID],A=E[L.wE.CIP_TC],t=E[L.wE.CIP_EXT],r=E[L.wE.CIP];return(0,C.useMemo)(()=>{let _=[];return(0,e.l)(E)&&_.push((0,n.RX)((0,T.$)(E))),O&&_.push((0,n.$Y)(O)),R&&_.push((0,n.Gu)(R)),A&&_.push((0,n.pB)(A)),t&&_.push((0,n.Gi)(t)),r&&_.push((0,n.xY)(Number(r.split("?")[0]))),_},[r,t,A,E,R,O])}},53712:function(_,E,O){O.d(E,{mH:function(){return N},tG:function(){return C}});var I=O(69859);let C=[I.fq.DEA,I.fq.SEO,I.fq.SEM,I.fq.BRANDED],N=["sem_creativeid","sem_matchtype","sem_keyword","sem_network","sem_device","sem_placement","sem_target","sem_adposition","sem_param1","sem_param2","sem_campaignid","sem_adgroupid","sem_targetid","sem_location"]},3736:function(_,E,O){O.d(E,{$:function(){return C},Q:function(){return N}});var I=O(53712);let C=_=>I.mH.map(E=>_[E]||"").join(),N=_=>Object.keys(_).reduce((E,O)=>{let I=_[O]||"";return Array.isArray(I)?E[O]=I[I.length-1]:E[O]=I,E},{})},11390:function(_,E,O){O.d(E,{l:function(){return C}});var I=O(53712);let C=_=>Object.keys(_).find(_=>-1!==I.mH.indexOf(_))}}]);
//# sourceMappingURL=2149-727ad65ddbf794b0.js.map