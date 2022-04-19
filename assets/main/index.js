System.register("chunks:///_virtual/testing.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,i,s;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t._decorator,s=t.Component}],execute:function(){var o;n._RF.push({},"c4b94iR3LtJxoQnVWgXYZsy","testing",void 0);var c=i.ccclass;i.property,t("testing",c("testing")(o=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var i=n.prototype;return i.start=function(){},i.intentButton=function(){var t=new huawei.agc.applinking.AppLinking,e=new huawei.agc.applinking.SocialCardInfo;e.setDescription("this is a test case"),e.setImageUrl("http://url1.com/pic1.jpg"),e.setTitle("AppLinking Test"),t.setSocialCardInfo(e)},i.buttonClick=function(){var t=encodeURI("https://twitter.com/intent/tweet?text=super custom message;via=TwitterAccount"),e=document.createElement("a");e.classList.add("twitter-share-button"),e.href=t,e.target="_blank",e.id="twitter-intent",window.open(t,"_blank","location=yes,height=370,width=520,scrollbars=yes,status=yes"),console.log("call API")},n}(s))||o);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./testing.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});