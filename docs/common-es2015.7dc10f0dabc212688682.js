(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"87dK":function(e,n,t){"use strict";t.r(n),t.d(n,"conf",(function(){return s})),t.d(n,"language",(function(){return a}));var r="undefined"==typeof monaco?self.monaco:monaco,s={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],onEnterRules:[{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,afterText:/^\s*\*\/$/,action:{indentAction:r.languages.IndentAction.IndentOutdent,appendText:" * "}},{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,action:{indentAction:r.languages.IndentAction.None,appendText:" * "}},{beforeText:/^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,action:{indentAction:r.languages.IndentAction.None,appendText:"* "}},{beforeText:/^(\t|(\ \ ))*\ \*\/\s*$/,action:{indentAction:r.languages.IndentAction.None,removeText:1}}],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"`",close:"`",notIn:["string","comment"]},{open:"/**",close:" */",notIn:["string"]}],folding:{markers:{start:new RegExp("^\\s*//\\s*#?region\\b"),end:new RegExp("^\\s*//\\s*#?endregion\\b")}}},a={defaultToken:"invalid",tokenPostfix:".ts",keywords:["abstract","as","break","case","catch","class","continue","const","constructor","debugger","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","infer","instanceof","interface","is","keyof","let","module","namespace","never","new","null","package","private","protected","public","readonly","require","global","return","set","static","super","switch","symbol","this","throw","true","try","type","typeof","unique","var","void","while","with","yield","async","await","of"],typeKeywords:["any","boolean","number","object","string","undefined"],operators:["<=",">=","==","!=","===","!==","=>","+","-","**","*","/","%","++","--","<<","</",">>",">>>","&","|","^","!","~","&&","||","??","?",":","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=","@"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,regexpctl:/[(){}\[\]\$\^|\-*+?\.]/,regexpesc:/\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,tokenizer:{root:[[/[{}]/,"delimiter.bracket"],{include:"common"}],common:[[/[a-z_$][\w$]*/,{cases:{"@typeKeywords":"keyword","@keywords":"keyword","@default":"identifier"}}],[/[A-Z][\w\$]*/,"type.identifier"],{include:"@whitespace"},[/\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,{token:"regexp",bracket:"@open",next:"@regexp"}],[/[()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/!(?=([^=]|$))/,"delimiter"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/(@digits)[eE]([\-+]?(@digits))?/,"number.float"],[/(@digits)\.(@digits)([eE][\-+]?(@digits))?/,"number.float"],[/0[xX](@hexdigits)n?/,"number.hex"],[/0[oO]?(@octaldigits)n?/,"number.octal"],[/0[bB](@binarydigits)n?/,"number.binary"],[/(@digits)n?/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string_double"],[/'/,"string","@string_single"],[/`/,"string","@string_backtick"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@jsdoc"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],jsdoc:[[/[^\/*]+/,"comment.doc"],[/\*\//,"comment.doc","@pop"],[/[\/*]/,"comment.doc"]],regexp:[[/(\{)(\d+(?:,\d*)?)(\})/,["regexp.escape.control","regexp.escape.control","regexp.escape.control"]],[/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,["regexp.escape.control",{token:"regexp.escape.control",next:"@regexrange"}]],[/(\()(\?:|\?=|\?!)/,["regexp.escape.control","regexp.escape.control"]],[/[()]/,"regexp.escape.control"],[/@regexpctl/,"regexp.escape.control"],[/[^\\\/]/,"regexp"],[/@regexpesc/,"regexp.escape"],[/\\\./,"regexp.invalid"],[/(\/)([gimsuy]*)/,[{token:"regexp",bracket:"@close",next:"@pop"},"keyword.other"]]],regexrange:[[/-/,"regexp.escape.control"],[/\^/,"regexp.invalid"],[/@regexpesc/,"regexp.escape"],[/[^\]]/,"regexp"],[/\]/,{token:"regexp.escape.control",next:"@pop",bracket:"@close"}]],string_double:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],string_backtick:[[/\$\{/,{token:"delimiter.bracket",next:"@bracketCounting"}],[/[^\\`$]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/`/,"string","@pop"]],bracketCounting:[[/\{/,"delimiter.bracket","@bracketCounting"],[/\}/,"delimiter.bracket","@pop"],{include:"common"}]}}},TdF3:function(e,n){e.exports=function(e){var n={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/},t="[A-Za-z$_][0-9A-Za-z$_]*",r={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},s={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:e.C_NUMBER_RE+"n?"}],relevance:0},a={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},i={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,a],subLanguage:"xml"}},o={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,a],subLanguage:"css"}},c={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,a]};a.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,o,c,s,e.REGEXP_MODE];var l=a.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx","mjs","cjs"],keywords:r,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,o,c,e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,s,{begin:/[{,\n]\s*/,relevance:0,contains:[{begin:t+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:t,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+t+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:l}]}]},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:n.begin,end:n.end}],subLanguage:"xml",contains:[{begin:n.begin,end:n.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:t}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:l}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}}}]);