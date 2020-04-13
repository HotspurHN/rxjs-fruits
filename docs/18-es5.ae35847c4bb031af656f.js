function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{KdnK:function(e,n,t){"use strict";t.r(n),t.d(n,"SkipModule",(function(){return C}));var i=t("tyNb"),r=function e(){_classCallCheck(this,e),this.fruits=["apple","apple","banana","apple"],this.expectedFruits=["banana","apple"],this.code='const fruits = from([\n    "apple",\n    "apple",\n    "banana",\n    "apple"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n',this.minPositionLineNumber=7,this.positionColumnNumber=2},c=t("fXoL"),s=t("VIrA"),a=t("sYmb"),o=t("ofXK"),p=t("OtPg"),u=t("uzYf");function b(e,n){if(1&e&&(c.Pb(0,"div"),c.Pb(1,"p"),c.qc(2,"Auf die ersten zwei Fr\xfcchte k\xf6nnen wir verzichten."),c.Ob(),c.Pb(3,"p"),c.qc(4,"Der "),c.Pb(5,"code",4),c.qc(6,"skip"),c.Ob(),c.qc(7,"-Operator erm\xf6glicht uns das \xdcberspringen unn\xf6tiger Fr\xfcchte. "),c.Pb(8,"a",5),c.qc(9,"(Mehr Infos zu skip)"),c.Ob(),c.Ob(),c.Ob()),2&e){c.bc();var t=c.ic(6);c.Bb(5),c.gc("appTooltip",t)}}function l(e,n){if(1&e&&(c.Pb(0,"div"),c.Pb(1,"p"),c.qc(2,"We can do without the first two fruits. The "),c.Pb(3,"code",4),c.qc(4," skip "),c.Ob(),c.qc(5," operator enables us to skip unnecessary fruit. "),c.Pb(6,"a",5),c.qc(7,"(Learn more about skip)"),c.Ob(),c.Ob(),c.Ob()),2&e){c.bc();var t=c.ic(6);c.Bb(3),c.gc("appTooltip",t)}}var f,h,g,d=[{path:"",component:(f=function(){function e(n,t){_classCallCheck(this,e),this.exerciseService=n,this.translateService=t,this.exerciseTitle="skip",this.skipCode="\n  of(1, 2, 3, 4).pipe(\n    skip(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 2\n  // 3\n  // 4\n  ",this.currentLanguage=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new r),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}]),e}(),f.\u0275fac=function(e){return new(e||f)(c.Mb(s.a),c.Mb(a.d))},f.\u0275cmp=c.Gb({type:f,selectors:[["app-skip"]],decls:11,vars:7,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/skip","target","_blank"]],template:function(e,n){1&e&&(c.Pb(0,"h3"),c.qc(1),c.cc(2,"translate"),c.Ob(),c.pc(3,b,10,1,"div",0),c.pc(4,l,8,1,"div",0),c.Pb(5,"div",1,2),c.Pb(7,"pre"),c.qc(8,"        "),c.Nb(9,"code",3),c.qc(10,"\n    "),c.Ob(),c.Ob()),2&e&&(c.Bb(1),c.tc("",c.dc(2,5,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),c.Bb(2),c.gc("ngIf","de"===n.currentLanguage),c.Bb(1),c.gc("ngIf","en"===n.currentLanguage),c.Bb(5),c.gc("highlight",n.skipCode))},directives:[o.j,p.b,u.a],pipes:[a.c],styles:[""]}),f)}],v=((h=function e(){_classCallCheck(this,e)}).\u0275mod=c.Kb({type:h}),h.\u0275inj=c.Jb({factory:function(e){return new(e||h)},imports:[[i.d.forChild(d)],i.d]}),h),k=t("PCNd"),C=((g=function e(){_classCallCheck(this,e)}).\u0275mod=c.Kb({type:g}),g.\u0275inj=c.Jb({factory:function(e){return new(e||g)},imports:[[k.a,v]]}),g)}}]);