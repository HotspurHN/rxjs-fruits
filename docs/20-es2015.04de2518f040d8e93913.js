(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{olly:function(e,t,n){"use strict";n.r(t),n.d(t,"SubscribeNextModule",(function(){return f}));var i=n("PCNd"),r=n("tyNb");class s{constructor(){this.fruits=["apple","banana","cherry"],this.expectedFruits=["apple","banana","cherry"],this.code='const fruits = from([\n    "apple",\n    "banana",\n    "cherry"]);\n\nfruits.subscribe(fruit => );\n',this.minPositionLineNumber=5,this.positionColumnNumber=27}}var c=n("fXoL"),a=n("VIrA"),o=n("sYmb"),b=n("ofXK"),u=n("OtPg"),l=n("uzYf");function p(e,t){if(1&e&&(c.Pb(0,"div"),c.Pb(1,"p"),c.qc(2,"Jetzt ist es an der Zeit, ein paar Fr\xfcchte auf das Flie\xdfband zu legen!"),c.Ob(),c.Pb(3,"p"),c.qc(4,"Die from-Funktion erzeugt aus einem Array ein Observable. Dieses liefert die Daten nacheinander, wie eine foreach-Schleife."),c.Ob(),c.Pb(5,"p"),c.qc(6,"Die "),c.Pb(7,"code",4),c.qc(8,"subscribe"),c.Ob(),c.qc(9,"-Funktion erwartet eine Callback-Funktion als Parameter. Diese erh\xe4lt die Daten vom Observable \xfcber die Parameter."),c.Ob(),c.Ob()),2&e){c.bc();const e=c.ic(6);c.Bb(7),c.gc("appTooltip",e)}}function h(e,t){if(1&e&&(c.Pb(0,"div"),c.Pb(1,"p"),c.qc(2,"Now it's time to put some fruits on the conveyor belt!"),c.Ob(),c.Pb(3,"p"),c.qc(4,"The from function creates an observable from an array. This delivers the data one after the other, like a foreach loop."),c.Ob(),c.Pb(5,"p"),c.qc(6,"The "),c.Pb(7,"code",4),c.qc(8,"subscribe"),c.Ob(),c.qc(9," function expects a callback function as a parameter. This receives the data from the observable via the parameters."),c.Ob(),c.Ob()),2&e){c.bc();const e=c.ic(6);c.Bb(7),c.gc("appTooltip",e)}}const g=[{path:"",component:(()=>{class e{constructor(e,t){this.exerciseService=e,this.translateService=t,this.exerciseTitle="subscribe-next",this.subscibeNextCode='\n  const messages = from(["Hello", "World"]);\n  messages.subscribe(message => console.log(message));\n\n  // Logs:\n  // Hello\n  // World\n  ',this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new s),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(a.a),c.Mb(o.d))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-subscribe-next"]],decls:11,vars:7,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"]],template:function(e,t){1&e&&(c.Pb(0,"h3"),c.qc(1),c.cc(2,"translate"),c.Ob(),c.pc(3,p,10,1,"div",0),c.pc(4,h,10,1,"div",0),c.Pb(5,"div",1,2),c.Pb(7,"pre"),c.qc(8,"        "),c.Nb(9,"code",3),c.qc(10,"\n    "),c.Ob(),c.Ob()),2&e&&(c.Bb(1),c.tc("",c.dc(2,5,"EXERCISES.EXERCISETITLE"),": ",t.exerciseTitle,""),c.Bb(2),c.gc("ngIf","de"===t.currentLanguage),c.Bb(1),c.gc("ngIf","en"===t.currentLanguage),c.Bb(5),c.gc("highlight",t.subscibeNextCode))},directives:[b.j,u.b,l.a],pipes:[o.c],styles:[""]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(t){return new(t||e)},imports:[[r.d.forChild(g)],r.d]}),e})(),f=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(t){return new(t||e)},imports:[[i.a,d]]}),e})()}}]);