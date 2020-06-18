function _defineProperties(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,a){return n&&_defineProperties(e.prototype,n),a&&_defineProperties(e,a),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{LCGD:function(e,n,a){"use strict";a.r(n),a.d(n,"MergeModule",(function(){return C}));var t=a("iInd"),i=function e(){_classCallCheck(this,e),this.fruits=["apple","apple","old-apple","apple","old-apple","banana","old-banana","old-banana","banana","banana"],this.expectedFruits=["apple","apple","apple","banana","banana","banana"],this.code='const apples = from([\n    "apple",\n    "apple",\n    "old-apple",\n    "apple",\n    "old-apple"]);\n\nconst bananas = from([\n    "banana",\n    "old-banana",\n    "old-banana",\n    "banana",\n    "banana"]);\n\nEMPTY.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n',this.minPositionLineNumber=14,this.positionColumnNumber=1},r=a("8Y7J"),c=a("VIrA"),o=a("TSSN"),s=a("SVse"),b=a("dJsq"),p=a("uzYf");function l(e,n){if(1&e&&(r.Pb(0,"div"),r.Pb(1,"p"),r.qc(2,"Jetzt m\xfcssen wir zwei Lieferungen Zusammenfassen."),r.Ob(),r.Pb(3,"p"),r.qc(4,"Unser Fr\xfcchte Lieferant musste uns die Fr\xfcchte separat liefern. Die "),r.Pb(5,"code",4),r.qc(6,"merge"),r.Ob(),r.qc(7,"-Funktion kann unterschiedliche Observables zu einem Observable vereinen. Anschlie\xdfend k\xf6nnen wir dann mit der Pipe-Funktion, nur frische Fr\xfcchte auf das Flie\xdfband legen. "),r.Pb(8,"a",5),r.qc(9,"(Mehr Infos zu merge)"),r.Ob(),r.Ob(),r.Ob()),2&e){r.bc();var a=r.ic(8);r.Bb(5),r.gc("appTooltip",a)}}function u(e,n){if(1&e&&(r.Pb(0,"div"),r.Pb(1,"p"),r.qc(2,"Now we have to combine two deliveries."),r.Ob(),r.Pb(3,"p"),r.qc(4,"Our fruit supplier had to deliver the fruit to us separately. The "),r.Pb(5,"code",4),r.qc(6,"merge"),r.Ob(),r.qc(7," function can combine different observables into one observable. Then we can use the pipe function to put only fresh fruit on the conveyor belt. "),r.Pb(8,"a",5),r.qc(9,"(Learn more about merge)"),r.Ob(),r.Ob(),r.Ob()),2&e){r.bc();var a=r.ic(8);r.Bb(5),r.gc("appTooltip",a)}}function f(e,n){if(1&e&&(r.Pb(0,"div"),r.Pb(1,"p"),r.qc(2,"\u73b0\u5728\u6211\u4eec\u9700\u8981\u5408\u5e76\u4e24\u4e2a\u4f9b\u5e94\u5546\u3002"),r.Ob(),r.Pb(3,"p"),r.qc(4,"\u6c34\u679c\u4f9b\u5e94\u5546\u5fc5\u987b\u5355\u72ec\u9001\u8d27\u7ed9\u6211\u4eec\u3002 "),r.Pb(5,"code",4),r.qc(6,"merge"),r.Ob(),r.qc(7," \u64cd\u4f5c\u7b26\u53ef\u4ee5\u5c06\u4e0d\u540c\u7684 observable \u5408\u5e76\u4e3a\u4e00\u4e2a observable \u3002\u7136\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 pipe \u51fd\u6570\u53ea\u628a\u65b0\u9c9c\u7684\u6c34\u679c\u653e\u5230\u4f20\u9001\u5e26\u4e0a\u3002 "),r.Pb(8,"a",5),r.qc(9,"\uff08\u4e86\u89e3\u5173\u4e8e merge \u64cd\u4f5c\u7b26\u7684\u66f4\u591a\u4fe1\u606f\uff09"),r.Ob(),r.Ob(),r.Ob()),2&e){r.bc();var a=r.ic(8);r.Bb(5),r.gc("appTooltip",a)}}function d(e,n){if(1&e&&(r.Pb(0,"div"),r.Pb(1,"p"),r.qc(2,"\u0422\u0435\u043f\u0435\u0440\u044c \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0434\u0432\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438."),r.Ob(),r.Pb(3,"p"),r.qc(4,"\u041d\u0430\u0448 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a \u0444\u0440\u0443\u043a\u0442\u043e\u0432 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u043b \u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0430\u043c \u0444\u0440\u0443\u043a\u0442\u044b \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e. \u0424\u0443\u043d\u043a\u0446\u0438\u044f "),r.Pb(5,"code",4),r.qc(6,"merge"),r.Ob(),r.qc(7," \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u044b\u0435 \u0432 \u043e\u0434\u043d\u0443 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u0443\u044e. \u0417\u0430\u0442\u0435\u043c \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \xab\u0442\u0440\u0443\u0431\u0430\xbb, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u043d\u0430 \u043a\u043e\u043d\u0432\u0435\u0439\u0435\u0440 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0432\u0435\u0436\u0438\u0435 \u0444\u0440\u0443\u043a\u0442\u044b. "),r.Pb(8,"a",5),r.qc(9,"(\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e merge)"),r.Ob(),r.Ob(),r.Ob()),2&e){r.bc();var a=r.ic(8);r.Bb(5),r.gc("appTooltip",a)}}var g,h,v,m=[{path:"",component:(g=function(){function e(n,a){_classCallCheck(this,e),this.exerciseService=n,this.translateService=a,this.exerciseTitle="merge",this.mergeCode="\n  const first = of(1, 2, 3)\n  const second = of(4, 5, 6);\n\n  merge(first, second).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  // 4\n  // 5\n  // 6\n  ",this.currentLanguage=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new i),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}]),e}(),g.\u0275fac=function(e){return new(e||g)(r.Mb(c.a),r.Mb(o.d))},g.\u0275cmp=r.Gb({type:g,selectors:[["app-merge"]],decls:13,vars:9,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/index/function/merge","target","_blank"]],template:function(e,n){1&e&&(r.Pb(0,"h3"),r.qc(1),r.cc(2,"translate"),r.Ob(),r.pc(3,l,10,1,"div",0),r.pc(4,u,10,1,"div",0),r.pc(5,f,10,1,"div",0),r.pc(6,d,10,1,"div",0),r.Pb(7,"div",1,2),r.Pb(9,"pre"),r.qc(10,"        "),r.Nb(11,"code",3),r.qc(12,"\n    "),r.Ob(),r.Ob()),2&e&&(r.Bb(1),r.tc("",r.dc(2,7,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),r.Bb(2),r.gc("ngIf","de"===n.currentLanguage),r.Bb(1),r.gc("ngIf","en"===n.currentLanguage),r.Bb(1),r.gc("ngIf","zh_CN"===n.currentLanguage),r.Bb(1),r.gc("ngIf","ru"===n.currentLanguage),r.Bb(5),r.gc("highlight",n.mergeCode))},directives:[s.j,b.b,p.a],pipes:[o.c],styles:[""]}),g)}],P=((h=function e(){_classCallCheck(this,e)}).\u0275mod=r.Kb({type:h}),h.\u0275inj=r.Jb({factory:function(e){return new(e||h)},imports:[[t.d.forChild(m)],t.d]}),h),O=a("PCNd"),C=((v=function e(){_classCallCheck(this,e)}).\u0275mod=r.Kb({type:v}),v.\u0275inj=r.Jb({factory:function(e){return new(e||v)},imports:[[O.a,P]]}),v)}}]);