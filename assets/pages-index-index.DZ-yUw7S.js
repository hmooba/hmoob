import{d as e,w as s,v as t,o as i,c as o,a,b as l,e as n,r as c,f as p,i as g,g as d,h as r,t as h,j as f,k as w,F as u,l as A,m as x,S as y}from"./index-C-rY8XDr.js";const m=(e,s)=>{const t=e.__vccOpts||e;for(const[i,o]of s)t[i]=o;return t};const C=m(e({emits:["close","clickMask"],data:()=>({isShow:!1,isOpen:!1}),props:{maskClick:{type:Boolean,default:!0}},watch:{isShow:{handler(e=null){e&&0==this.isOpen&&(this.isOpen=!0)},immediate:!0},isOpen:{handler(e=null){e&&0==this.isShow&&(this.isShow=!0)},immediate:!0}},methods:{open(){this.isOpen=!0},clickMask(){1==this.maskClick&&(this.$emit("clickMask"),this.close())},close(){this.isOpen=!1,this.$emit("close")},hiden(){this.isShow=!1},show(){this.isShow=!0}}}),[["render",function(e,d,r,h,f,w){const u=g;return f.isOpen?s((i(),o(u,{key:0,class:"popup-root",onClick:w.clickMask},{default:a((()=>[l(u,{onClick:d[0]||(d[0]=n((()=>{}),["stop"]))},{default:a((()=>[c(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["onClick"])),[[t,f.isShow]]):p("",!0)}],["__scopeId","data-v-794af0af"]]);const k=e({data:()=>({autoplaySelect:!0,downShow:!0,message:"",scrollTop:0,oldScrollTop:0,scrollLeft:0,showScrollbar:!1,configData:{appName:"Hmoob真美丽",appLogo:"/static/images/logo.jpg",score:1.8,grade:4.5,age:"18+",developer:"Hmoob INC",appInfo:"",images:["/static/images/1.jpg","/static/images/2.jpg","/static/images/3.jpg","/static/images/4.jpg"]},type:1}),onLoad(){this.isAppleMobileDevice()?(this.type=2,/MicroMessenger/.test(window.navigator.userAgent)||/AlipayClient/.test(window.navigator.userAgent)?(this.$nextTick((()=>{this.$refs.popup&&this.open()})),this.downShow=!1):this.isSafari()?this.downShow=!0:(this.message="使用系统自带浏览器safari打开!",this.$nextTick((()=>{this.$refs.popup&&this.open()})),this.downShow=!1)):this.isAndroid()?(this.type=1,/MicroMessenger/.test(window.navigator.userAgent)||/AlipayClient/.test(window.navigator.userAgent)?(this.$nextTick((()=>{this.$refs.popup&&this.open()})),this.downShow=!1):this.downShow=!0):(this.message="请使用安卓或ios移动设备打开!",this.$nextTick((()=>{this.$refs.popup&&this.open()})),this.downShow=!1)},methods:{open:function(){this.$refs.popup.open("top")},iosopen:function(){this.$refs.iospopup.open("top")},close:function(){this.$refs.popup.close()},iosclose:function(){this.$refs.iospopup.close()},downloadFile:function(){1==this.type?window.location.href="/static/app/android.apk":(window.location.href="/static/app/ios.mobileconfig",setTimeout((()=>{this.$nextTick((()=>{this.$refs.iospopup&&this.iosopen()}))}),2e3))},isAppleMobileDevice:function(){const e=navigator.userAgent,s=/iPad|iPhone|iPod/i.test(e),t=e.includes("like Mac OS X"),i=/Safari/i.test(e)&&s;return s||t||i},isAndroid:function(){const e=navigator.userAgent,s=/Android/i.test(e),t=navigator.userAgent.includes("wv"),i=/Chrome/i.test(navigator.userAgent)&&s;return s||t||i},isSafari:function(){return/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/CriOS/.test(navigator.userAgent)}}}),E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAALLklEQVR4nO3d23ET2RbG8dUqm9cRESAiGBEBcgT4RICIAKnKl8fRPPpSJRMBIoLBEViOABEBcgTIr8hlnW+BeorxDNuWtK/L369q124/nFOjy9+ru2WbSojolxgIkQMDIXJgIEQODITIgYEQOTAQIgcGQuTAQIgcGAiRAwMhcmAgRA4MhMiBgRA5MBAiBwZC5MBAiBwYCJEDAyFyYCBEDgyEyIGBEDkwkEwcHx+3q6p6hkNZLBZXBwcHExxSYgwksdPT093b29shDlvyT9NGo9Hf29v7iGNKpMKiRDA1uiLyHsvlDabJSCgJBpII4mhj+4R1L5x67ezv74+FomMgiSCQC2wdeZgppshz7BRZhUWRnZycdHAhroGsgqdaCTCQBFacHrUJAnmBnSJiIJGtOT2+47VIfAwksjWnR22MKbKDnSKpsCiSTaZHjVMkLgYS0YbTo8YpElGFRRH4mB41TpF4GEgknqZHjVMkkgqLAvM5PWqcInEwkAg8T48ap0gEFRYFFGJ61DhFwmMggQWaHjVOkcAqLAok5PSocYqExUACQiAjBPIahyFxigRUYVEAw+GwNZ/Pv+AwOE6RcBhIIJGmR41TJJAKizyLOT1qnCJhMJAAIk+PGqdIABUWeZRietQ4RfxjIJ4lmh41ThHPKizyJOX0qG1vbz/v9/tTIS8YiEeJp8d3OM36gNOsrpAXDMSTHKZHjVPEHwbiSQ7To8Yp4g8D8SCn6VHjFPGDgXiQ0/SocYr4wUA2lOP0qHGKbI6BbCjH6VHjFNkcA9lAztOjximyGQaygZynR41TZDMMZE0lTI8ap8j6GMiaSpgeNU6R9TGQNWB6NJfTo4lVBE6R9TCQNRwdHQ3wXfkPHBYD/72cImtgICsqcXrUOEVWx0BWVOL0qOG/m1NkRQxkBSVPjxqnyGoYyApKnh41/PdziqyAgTyQhelRwxR52u/3ZzikezCQB7IwPWr4/ObPw8PDgdC9GMgDYHrop+afcNjEMgFThNciD8BA7oE49NTqAodtLEsmiGQHkcxwTL/AQBxOfvx19iEO21gWTXDa2MdF+1joPzGQJUwKPY16hsM23jQthNERHGM9BlM85o94zFNBNJgsV5gsU6HHFQgi0NOl3xuNhgagSwNoyeMJYVUTrBniGeO5muH40cVTYZnyiwiaWB0hnyZYd+P53Dd2TVNsIMfHxy/x4jRx2MYL1MbexOoI5WAsP+KZYE1vb2+npcaTdSB3ImiJSEtwjNXEojKNpaB4KqykEEEbT9T3i2NG8KjNsCZYesNgKjjG+2F2cHBwieNkKqzgNAJsv+GBdwRvfDxw/bolPxbRfWZYE6zo8VRYQZyenr7G+OwKrwsoLA1nhFjeYffOeyDLu0h/4bAjRPHoXbQd39cy3gPB6dQnbG0sotgmmCQvsHvjNRDE0RWR91hEqbxBJCPxxHcgYxF5iUWUyiUC6YgnvgNZYCNKCoF4e197+z9SDIRykHMgUxF5hkWUyjUCaWL3wncgZ9jeYhGl8g6B9LB74TWQ5WcgU8Gn5lhEsV3js5A2PguZiideA1HL38K7wCFRVFVV7fj+7UjvgSicanVF5AyLk4RieYNTq5F4FiQQhUja2MbCSCisa0yOXd+ToxYsEMVIKLBrrA4mxwR7EEEDUYyEAgkehwoeiGIk5FmUOFSUQBQjIU+ixaGiBaIYCW0oahwqaiCKkdCaosehogeiGAmtKEkcKkkgipHQAyWLQyULRGkk+JBntFgsfseXRHcljUMlDUTpDzje3NyMGQn9DN84P29tbe36/MHDdSQPRDES+tkyjg7imOHLpLIIRDESUjnFobIJRDGSxy23OFRWgShG8jjlGIfKLhDFSB6XXONQWQaiGMnjkHMcKttAFCOxLfc4VNaBKEZiUwlxqOwDUctIzhDJa3xJhSslDlVEILWTk5MRIykb4viAOHolxKGKCkQxknJpHPv7+10pSHGBKEZSnhLjUEUGohhJOUqNQxUbiGIk+Ss5DlV0IIqR5Kv0OFTxgShGkh8LcSgTgShGkg8rcSgzgShGkp6lOJSpQNTxj78s/x6LIrMWhzIXiMIk6WGSDHFI8Xj9l51yYTIQhUnyEdsrLArvHHHsYjfHbCDD4bA1n8+/4JAC297eft5P/NdHQjEbiMIUGYvISywKBNcdn3Hd0cahSdYDOcP2FosCQSDmLsx/ZjqQo6OjAV7AP3BI4Vzi+qMjRpkOBBNkLDzFCo2BlAqBfMHWEgpphkCeYjepwjILgSywUWC4i/W0X8hvCK7KbCD4sLCDDwsvcEiB4TpvBxfqYzHIbCCYHl3hj5xEgUD6COQMh+ZYDkRfMN7ijeMdrkN62M2xHMhYeAcrFrN3siwH8hVbE4siQCAm30smH9RwOGzO53MNhCLBnSyTP49lMhDewYoPF+om72RZDYS/DxIZnu8/Dw8PB2KMyUBw/XGG7S0WRYIJ8gETpCvGWA1kLLyDFZvJO1lWA/mKrYlFESEQc+8ncw8Id7D4m4SJWLyTZS4QXKB3cMF4gUOKrNFo/G9vb+8jDs0wFwh/SSodfGMydyfLXCCYICO8UK9xSPGd4zpkF7sZ5gLBBfpYeAcrlQkCeYHdDIuBLLBRIgjE1HvK1IPhHawsvEAkE+wmmAoE1x8dXH9c4JASsXYny1QgvIOVHr5BmbqTZSoQXH/od65XWJTOOU6xdrGbYC2QT9jaWJTOFIE8x25ChWUGAllgo8QQiJn3lZkHgjh0cugEocRwHbizb+SXp8wEcnp6unt7e/sXDim9N5giIzHATCC8g5UPS3eyzASCU6yP2F5hleoKayo/tETkGVapLjFBOmJAhWUCAvmErY1VmkusHt5QE+x/w+NpYxtImdFP8XieYy9ehWUC3lALbCW5rKpqcN/F7PKnAwZS2A9gIhAT7y0TD2L5JrrAYQkuqweEcdfyMQ6kkFDwGE3cyTIRCKZHV/L/Q9VXjUajt+nPKS3v1p3h8BlWzt5gioykcCYCyfwO1hXWwPebZflNYSD5hvIOj7mHvWgVVvHwZhlLfqce11h68T2SgPDYuyJyhvUbVk4u8dg7UjgrgXzB1pI8XONa4ezJkydn/Uj/6tJwOGx++/athynaw5e5hDJDIE+xF63CKh4CWWBLLXoYd+UWyraBf5qt+ECWd3cucJgM3pAftra2erm8GTSU+Xw+kMR/fhXPS/F3sooPBNOjK4nuYOENoGEMEMZUMoRQWjc3NwN8A3mNL6PD81P8P81WfCCJ7mCd4/RBJ8ZUCpAwlOLvZBUfCCbIWOLdwbqs1viQLxfL09GBRHy+EEhHCmYhkK/YmlghXVYFh3FXxFCKv5NVdCA4ddCLUQ0kFC+ffudqGcpIAn7YiFPRov+gddGBLF/gCxz6doXl/dPvXGEKdwWPVwKEgslb9J2sCqtYyxf2PZYv11i9xxLGXcvncyAeQ8E3sKJ/earoQDzewUr+IV8u9LTV54eNeF4ZSCoeTrEYxi/4CgX/e55ipYTTghm2lV9AvHD6IV+PYbhpKLgRMpD1PpW/xkV6q+TnuPhAMEVW+iefl2EM8KJNhR4Moaz8YSOea36SngNEMnrAC3eO72Y6MaZCa3toKIjjA+LoSuFMBKJwqtWV/74Dc44X6wwv1ljIGzzfbWwD+fcflbjCMnOLvMIyRV84BNHEoeBUasqJERYmShMTpY1DwVSZIYwJDs0wFwiRTwyEyIGBEDkwECIHBkLkwECIHBgIkQMDIXJgIEQODITIgYEQOTAQIgcGQuTAQIgcGAiRAwMhcmAgRA4MhMiBgRA5MBAiBwZC5MBAiBz+D919eBTpOvQpAAAAAElFTkSuQmCC";const I=m(k,[["render",function(e,s,t,n,c,m){const k=A,I=x,S=g,B=y,M=(D=d("uni-popup"),T=C,"string"==typeof D?T:D);var D,T;return i(),o(S,null,{default:a((()=>[l(S,{style:{display:"flex","flex-direction":"row","align-items":"center",padding:"50upx","border-bottom":"1upx solid #CFCFCF","margin-left":"30upx","margin-right":"30upx","margin-top":"20upx"}},{default:a((()=>[l(k,{class:"logo",src:c.configData.appLogo},null,8,["src"]),l(S,{style:{"margin-bottom":"50upx"}},{default:a((()=>[l(S,{style:{"margin-left":"40upx"}},{default:a((()=>[l(I,{style:{"font-size":"20px"}},{default:a((()=>[r(h(c.configData.appName),1)])),_:1})])),_:1}),c.downShow?(i(),o(S,{key:0,onClick:s[0]||(s[0]=e=>m.downloadFile()),style:{height:"48px",width:"70px",display:"flex","flex-direction":"column","align-items":"center","justify-content":"center","margin-top":"20px","margin-left":"20px"}},{default:a((()=>[l(k,{src:"/assets/down-CPmabbqA.png",mode:"",style:{width:"25px",height:"25px"}}),l(I,{style:{"font-size":"13px",color:"darkgreen","font-weight":"bold"}},{default:a((()=>[r("")])),_:1})])),_:1})):p("",!0)])),_:1})])),_:1}),l(S,{style:{display:"flex","flex-direction":"row","justify-content":"space-between","border-bottom":"1upx solid #CFCFCF","margin-left":"30upx","margin-right":"30upx"}},{default:a((()=>[l(S,{class:"middle"},{default:a((()=>[l(I,{class:"title"},{default:a((()=>[r(h(c.configData.score)+"万个评分",1)])),_:1}),l(I,{class:"title2"},{default:a((()=>[r(h(c.configData.grade),1)])),_:1}),l(S,{style:{display:"flex","flex-direction":"row",margin:"10upx"}},{default:a((()=>[l(k,{src:E,style:{width:"15px",height:"15px"}}),l(k,{src:E,style:{width:"15px",height:"15px"}}),l(k,{src:E,style:{width:"15px",height:"15px"}}),l(k,{src:E,style:{width:"15px",height:"15px"}}),l(k,{src:"/assets/xingxing2-BL5BEyXa.png",style:{width:"14px",height:"14px"}})])),_:1})])),_:1}),l(S,{class:"middle"},{default:a((()=>[l(I,{class:"title"},{default:a((()=>[r("年龄")])),_:1}),l(I,{class:"title2"},{default:a((()=>[r(h(c.configData.age),1)])),_:1}),l(S,{class:"title3"},{default:a((()=>[r("岁")])),_:1})])),_:1}),l(S,{class:"middle"},{default:a((()=>[l(I,{class:"title"},{default:a((()=>[r("开发者")])),_:1}),l(k,{src:"/assets/kaifazhe-LCbT29U5.png",style:{height:"24px",width:"24px",margin:"10upx"}}),l(S,{class:"title3"},{default:a((()=>[r(h(c.configData.developer),1)])),_:1})])),_:1})])),_:1}),l(S,null,{default:a((()=>[l(B,{class:"scroll-view_H",direction:"horizontal",onScroll:e.scroll,onScrollend:e.end,"scroll-left":c.scrollLeft,"show-scrollbar":c.showScrollbar},{default:a((()=>[(i(!0),f(u,null,w(c.configData.images,((e,s)=>(i(),o(k,{src:e,mode:"aspectFill",class:"descImage"},null,8,["src"])))),256))])),_:1},8,["onScroll","onScrollend","scroll-left","show-scrollbar"])])),_:1}),l(S,{style:{margin:"20upx"}},{default:a((()=>[l(I,{style:{"line-height":"1.8",margin:"10upx"}},{default:a((()=>[r(h(c.configData.appInfo),1)])),_:1})])),_:1}),l(S,null,{default:a((()=>[l(S,{class:"appInfoView"},{default:a((()=>[l(I,{style:{color:"darkgrey","font-size":"14px"}},{default:a((()=>[r("大小")])),_:1}),l(I,{style:{"font-size":"14px"}},{default:a((()=>[r("2.0M")])),_:1})])),_:1}),l(S,{class:"appInfoView"},{default:a((()=>[l(I,{class:"infoLeft"},{default:a((()=>[r("类别")])),_:1}),l(I,{class:"infoRight"},{default:a((()=>[r("办公")])),_:1})])),_:1}),l(S,{class:"appInfoView"},{default:a((()=>[l(I,{class:"infoLeft"},{default:a((()=>[r("版权")])),_:1}),l(I,{class:"infoRight"},{default:a((()=>[r("@Hmoob")])),_:1})])),_:1}),l(S,{class:"appInfoView"},{default:a((()=>[l(I,{class:"infoLeft"},{default:a((()=>[r("兼容性")])),_:1}),l(I,{class:"infoRight"},{default:a((()=>[r("安卓/ios")])),_:1})])),_:1}),l(S,{class:"appInfoView"},{default:a((()=>[l(I,{class:"infoLeft"},{default:a((()=>[r("语言")])),_:1}),l(I,{class:"infoRight"},{default:a((()=>[r("简体中文")])),_:1})])),_:1}),l(S,{class:"appInfoView"},{default:a((()=>[l(I,{class:"infoLeft"},{default:a((()=>[r("年龄分级")])),_:1}),l(I,{class:"infoRight"},{default:a((()=>[r("18+")])),_:1})])),_:1})])),_:1}),l(M,{ref:"popup",type:"center",animation:!1,"mask-click":!1,style:{"background-color":"#EEEDEB"}},{default:a((()=>[""==c.message?(i(),o(k,{key:0,src:"/assets/wx-UMu_e8Bl.png",mode:"widthFix",style:{position:"fixed",top:"10px",right:"1%"}})):(i(),o(I,{key:1,style:{color:"darkorange","font-weight":"bold","font-size":"20px"}},{default:a((()=>[r(h(c.message),1)])),_:1}))])),_:1},512),l(M,{ref:"iospopup",type:"top",animation:!1,"mask-click":!1,style:{"background-color":"#EEEDEB"}},{default:a((()=>[l(k,{src:"/assets/close-CsocIEkM.png",style:{width:"30px",height:"30px"},mode:"",onClick:s[1]||(s[1]=e=>m.iosclose())}),l(S,{style:{display:"flex","justify-content":"center","flex-direction":"row","margin-bottom":"100upx","font-size":"18px","font-weight":"bold"}},{default:a((()=>[r("ios安装流程")])),_:1}),l(k,{src:"/assets/ios-C9H8QZfu.png",mode:"widthFix",style:{}})])),_:1},512)])),_:1})}],["__scopeId","data-v-7a5701c3"]]);export{I as default};
