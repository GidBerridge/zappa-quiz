(this.webpackJsonpzappaQuiz=this.webpackJsonpzappaQuiz||[]).push([[0],[,,,function(e,t,a){},,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(4),o=a.n(s),i=(a(11),a(1)),c=(a(12),a(5)),l=a.n(c);var u=function(e){var t=["Dumb all over","Jesus Thinks You're A Jerk","Dancin' fool","Cosmik Debris","Shut up 'n play your guitar","The Meek Shall Inherit Nothing","Tryin' To Grow A Chin","Rudy Wants To Buy Yez A Drink","Wowie Zowie","Wild love","The man from Utopia!"];return n.a.createElement(l.a,null,n.a.createElement("div",{className:"card-container card-container__score"},n.a.createElement("div",{className:"card card__score"},n.a.createElement("p",{style:{margin:"auto 0 auto auto"}},"You scored"),n.a.createElement("div",{className:"number fadeIn"},e.totalScore()),n.a.createElement("p",{style:{margin:"auto auto auto 0"}},"out of ",e.qAmount)),n.a.createElement("div",{className:"card card__score--comment fadeIn"},t[e.totalScore()]),n.a.createElement("div",{className:"card card__try-again",onClick:function(){window.location.reload(!1)}},"Try again?")))},m=(a(3),function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"subheading"},n.a.createElement("div",{className:"subheading__text fadeOut_1"},"Are you the Man from Utopia or a Dancin' Fool?"),n.a.createElement("div",{className:"subheading__text fadeOut_2"},"Test your Zappa knowledge")))});a(14);var d=function(e){var t=[{questionText:"Which of these does Frank Zappa have named after him?",answerOptions:[{answerText:"A comet - Zappa 421a",isCorrect:!1},{answerText:"A dinosaur - Zappasaurus",isCorrect:!1},{answerText:"A type of bacteria that causes acne - P. Acnes type Zappae",isCorrect:!0},{answerText:"An element of the periodic table - Zapponium (Za)",isCorrect:!1}]},{questionText:"Which famous guest bass player played on the title track of Apostrophe?",answerOptions:[{answerText:"Greg Lake",isCorrect:!1},{answerText:"Jack Bruce",isCorrect:!0},{answerText:"Lemmy",isCorrect:!1},{answerText:"Bill Wyman",isCorrect:!1}]},{questionText:'In January 1990, which country appointed Zappa as "Special Ambassador to the West on Trade, Culture and Tourism\u201d?',answerOptions:[{answerText:"Czech Republic",isCorrect:!0},{answerText:"Poland",isCorrect:!1},{answerText:"Belarus",isCorrect:!1},{answerText:"Hungary",isCorrect:!1}]},{questionText:"What was Franks middle name?",answerOptions:[{answerText:"Harold",isCorrect:!1},{answerText:"Bob",isCorrect:!1},{answerText:"David",isCorrect:!1},{answerText:"Vincent",isCorrect:!0}]},{questionText:"In 1991, Zappa considered running for President. Who did he want as his vice president?",answerOptions:[{answerText:"Bill Clinton",isCorrect:!1},{answerText:"Jello Biafra (from the Dead Kennedys)",isCorrect:!1},{answerText:"Captain Beefheart",isCorrect:!1},{answerText:"Texas billionaire Ross Perot",isCorrect:!0}]},{questionText:"Where was Frank born?",answerOptions:[{answerText:"Los Angeles, California",isCorrect:!1},{answerText:"Baltimore, Maryland",isCorrect:!0},{answerText:"Cleveland, Ohio",isCorrect:!1},{answerText:"Lancaster, California",isCorrect:!1}]},{questionText:"Who was 'The Indian of the band'?",answerOptions:[{answerText:"Ian Underwood",isCorrect:!1},{answerText:"Scott Thunes",isCorrect:!1},{answerText:"Jimmy Carl Black",isCorrect:!0},{answerText:"Captain Beefheart",isCorrect:!1}]},{questionText:"Which Zappa album features an excerpt from 'Run Home Slow', a theme tune Frank recorded for a Cowboy film in the 1960s?",answerOptions:[{answerText:"Lumpy Gravy",isCorrect:!0},{answerText:"We're only in it for the money",isCorrect:!1},{answerText:"One size fits all",isCorrect:!1},{answerText:"Broadway the Hardway",isCorrect:!1}]},{questionText:"Which composer did Frank often say was his biggest influence as a teenager?",answerOptions:[{answerText:"Vivaldi",isCorrect:!1},{answerText:"Pierre Boulez",isCorrect:!1},{answerText:"Edgard Varesse",isCorrect:!0},{answerText:"Igor Stravinsky",isCorrect:!1}]},{questionText:"What instrument did Frank play in his first band 'The Blackouts'?",answerOptions:[{answerText:"Guitar",isCorrect:!1},{answerText:"Drums",isCorrect:!0},{answerText:"Double Bass",isCorrect:!1},{answerText:"Alto Sax",isCorrect:!1}]}],a=Object(r.useState)(0),s=Object(i.a)(a,2),o=s[0],c=s[1],l=Object(r.useState)(!1),m=Object(i.a)(l,2),d=m[0],p=m[1],w=Object(r.useState)(0),T=Object(i.a)(w,2),h=T[0],x=T[1];return n.a.createElement("div",{className:"card-container"},(console.log("test"),void fetch("https://api.airtable.com/v0/apppqTCPQGmQOEoi7/zappaQuiz?api_key=4EHjHf99psrakN").then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))),d?n.a.createElement(u,{qAmount:t.length,totalScore:function(){return h}}):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"card card__question fadeIn"},n.a.createElement("div",{className:"question-section"},n.a.createElement("div",{className:"question-count"},n.a.createElement("span",null,"Question ",o+1),"/",t.length),n.a.createElement("div",{className:"question-text"},t[o].questionText)),n.a.createElement("div",{className:"answer-section"},t[o].answerOptions.map((function(e){return n.a.createElement("button",{onClick:function(){return function(e){e&&x(h+1);var a=o+1;a<t.length?c(a):p(!0)}(e.isCorrect)}},e.answerText)}))))))},p=function(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),a=t[0],s=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"header"},"ZappaQuiz"),void setTimeout((function(){s(!1)}),3500),a?n.a.createElement(m,null):n.a.createElement(d,null))};var w=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,null))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.cd14717f.chunk.js.map