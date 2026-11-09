DELF.chapter({
id:'pe-p1', part:'pe', stage:'preparer', num:1, order:1,
title:'Comprendre le sujet', tr:{ko:'주제 이해하기', en:'Understanding the topic'},
intro:{ko:'지시문을 분석해 <b>누가, 누구에게, 무엇을, 왜</b> 쓰는지 파악하고, 주제의 <b>핵심 문제(problématique)</b>를 정의하는 연습을 합니다.', en:'Analyse the instructions (who writes, to whom, what, why) and define the central question of a topic.', fr:'Analyser la consigne (qui écrit ? à qui ? quoi ? pourquoi ?) et définir la problématique d’un sujet.'},
blocks:[
{type:'note', kind:'method', title:'Comprendre la consigne : les questions à se poser', tr:{ko:'지시문 분석: 스스로 던질 질문', en:'Questions to ask yourself'}, toc:true, html:
'<table><tr><th>Question</th><th>Exemples de réponses</th></tr>'+
'<tr><td><b>Qui écrit ?</b> (누가)</td><td>un citoyen, un internaute, un employé, un lecteur, un candidat, un client</td></tr>'+
'<tr><td><b>À qui ?</b> (누구에게)</td><td>une directrice, un maire, le courrier des lecteurs, un forum, un service client</td></tr>'+
'<tr><td><b>De quoi parle-t-on ?</b> (무엇을)</td><td>le thème, les mots clés</td></tr>'+
'<tr><td><b>Quel type d’écrit ?</b></td><td>débat : forum, courrier des lecteurs — lettre formelle : plainte, réclamation, protestation, réponse, motivation, proposition de projet, demande de renseignements</td></tr>'+
'<tr><td><b>J’écris pour…</b> (목적)</td><td>faire une réclamation, faire une demande officielle, participer à un débat, exprimer une conviction, convaincre, contester un fait, refuser quelque chose, proposer une alternative</td></tr>'+
'<tr><td><b>J’écris parce que…</b> (동기)</td><td>je suis choqué(e), je veux alerter, je ne suis pas satisfait(e)…</td></tr></table>'},

{type:'ex', id:'e1', title:'Activité 1', consigne:'Lisez le sujet et posez-vous les questions : Qui écrit ? À qui ? Quoi ? Pourquoi ? Retrouvez ces informations dans la consigne.', tr:{ko:'주제를 읽고 누가, 누구에게, 무엇을, 왜 쓰는지 지시문에서 찾으세요.', en:'Read the topic and find who writes, to whom, what and why.'},
 html:'<div style="border:1px solid #ccc;padding:8px;border-radius:6px"><b>Sujet :</b> Vous décidez d’écrire au courrier des lecteurs d’un magazine de sport pour donner votre opinion sur l’usage des montres connectées qui mesurent en permanence nos performances. Vous racontez votre propre expérience et vous insistez sur les avantages et les inconvénients. (250 mots environ)</div>',
 items:[
 {type:'mcq', q:'Vous êtes…', options:['un journaliste sportif','un lecteur du magazine','un vendeur de montres'], answer:1, explain:'« écrire au courrier des lecteurs » → 독자입니다.'},
 {type:'mcq', q:'À qui écrivez-vous ?', options:['Au courrier des lecteurs d’un magazine de sport','Au fabricant de la montre','À un ami sportif'], answer:0},
 {type:'mcq', q:'Vous écrivez parce que…', options:['vous voulez être remboursé','vous participez à un débat','vous cherchez un emploi'], answer:1},
 {type:'mcq', q:'Vous écrivez pour…', options:['donner votre opinion dans un journal / magazine','commander un produit','demander des renseignements'], answer:0},
 {type:'multi', q:'Quels éléments la consigne vous demande-t-elle d’inclure ?', options:['votre expérience personnelle','les avantages','les inconvénients','le prix exact des montres','une interview d’un champion'], answer:[0,1,2], explain:'« faites part de votre expérience », « avantages et inconvénients ».'}
]},

{type:'ex', id:'e2', title:'Activité 2', consigne:'Lisez les sujets suivants et complétez le tableau d’après l’exemple du sujet 1.', tr:{ko:'다음 주제들을 읽고 주제 1의 예를 참고하여 표를 완성하세요.', en:'Read the topics and complete the table using topic 1 as a model.'},
 html:'<div style="border:1px solid #ccc;padding:8px;border-radius:6px;margin-bottom:6px"><b>Sujet 1 :</b> Vous êtes employé(e) dans une agence francophone de communication. Depuis quelques mois, votre responsable vous envoie des messages sur une messagerie instantanée tard le soir et le week-end, et vous reproche de ne pas répondre immédiatement. Vous commencez tôt, vous finissez tard et votre charge de travail ne cesse d’augmenter. Vous écrivez une lettre de protestation à la directrice de l’agence pour lui expliquer la situation. Vous rappelez votre poste, vous exprimez vos inquiétudes sur le risque d’épuisement professionnel et sur la disparition de la frontière entre vie privée et vie professionnelle, et vous proposez des solutions. Vous exposez votre point de vue dans un texte argumenté et illustré d’exemples précis. (240 à 260 mots)</div>'+
 '<div style="border:1px solid #ccc;padding:8px;border-radius:6px;margin-bottom:6px"><b>Sujet 2 :</b> Vous voulez donner votre position sur la mode qui consiste à se filmer en permanence pour publier sa journée en vidéo sur les réseaux sociaux. Vous êtes persuadé(e) que cette pratique révèle surtout un besoin d’attention et un culte de soi. Vous écrivez un message à publier sur un forum en expliquant votre opinion dans un texte argumenté et illustré d’exemples précis. (250 mots environ)</div>'+
 '<div style="border:1px solid #ccc;padding:8px;border-radius:6px"><b>Sujet 3 :</b> Vous avez lu dans un quotidien une enquête choquante sur une marque de cosmétiques très chère qui se présente comme « naturelle » mais qui utilise en réalité des ingrédients de synthèse bon marché et fait travailler de nombreux stagiaires sans les payer. Vous écrivez au courrier des lecteurs du journal pour partager votre indignation et proposer des solutions. Vous exposez votre point de vue dans un texte argumenté et illustré d’exemples précis. (250 mots environ)</div>'+
 '<table style="margin-top:6px"><tr><th></th><th>Sujet 1 (exemple)</th></tr><tr><td>Qui écrit ?</td><td>un employé</td></tr><tr><td>Pour qui ?</td><td>la directrice</td></tr><tr><td>De quoi parle-t-on ?</td><td>l’absence de limites entre vie privée et vie professionnelle</td></tr><tr><td>Type d’écrit</td><td>lettre de protestation</td></tr><tr><td>Mots clés</td><td>privé / professionnel, dangers / solutions, épuisement</td></tr><tr><td>J’écris pour…</td><td>faire une réclamation, proposer une alternative</td></tr><tr><td>J’écris parce que…</td><td>je souhaite alerter ma hiérarchie et proposer des solutions</td></tr></table>',
 items:[
 {type:'match', q:'Qui écrit ?', left:['Sujet 2','Sujet 3'], right:['Un internaute','Un lecteur de quotidien / un citoyen','Un candidat pour un poste','Un client'], answer:[0,1]},
 {type:'match', q:'Pour qui ?', left:['Sujet 2','Sujet 3'], right:['La directrice','Les membres d’un forum','Le courrier des lecteurs du journal','La marque de cosmétiques'], answer:[1,2]},
 {type:'match', q:'Type d’écrit ?', left:['Sujet 2','Sujet 3'], right:['Lettre de motivation','Débat : message sur un forum','Débat : courrier des lecteurs','Demande de renseignements'], answer:[1,2]},
 {type:'short', q:'Sujet 2 — Relevez des mots clés.', answer:'se filmer, réseaux sociaux, besoin d’attention, culte de soi, mode', keywords:[['filmer','vidéo'],['réseau'],['attention','culte de soi','soi','égo']], need:2},
 {type:'short', q:'Sujet 3 — Relevez des mots clés.', answer:'cosmétiques « naturels », ingrédients de synthèse bon marché, stagiaires non payés, indignation, solutions', keywords:[['cosmétique','marque'],['synthèse','bon marché','naturel'],['stagiaire'],['solution','indign']], need:2},
 {type:'multi', q:'Sujet 2 — J’écris pour… (plusieurs réponses)', options:['participer à un débat','exprimer une conviction','faire une réclamation','demander un remboursement'], answer:[0,1]},
 {type:'multi', q:'Sujet 3 — J’écris pour… (plusieurs réponses)', options:['exprimer une conviction','proposer une alternative','présenter ma candidature','refuser une invitation'], answer:[0,1]},
 {type:'match', q:'J’écris parce que…', left:['Sujet 2','Sujet 3'], right:['je suis choqué(e) et je veux proposer une solution','je souhaite partager ma conviction et alerter sur une pratique','je veux mettre fin à un contrat'], answer:[1,0]}
]},

{type:'note', kind:'tip', title:'Éviter le hors-sujet', tr:{ko:'주제 이탈 피하기', en:'Avoid going off topic'}, html:'<p>Pour éviter d’être <b>hors sujet</b> et identifier le type de texte attendu, la compréhension de la consigne est essentielle. Posez-vous toujours les six questions : qui ? à qui ? quel thème ? quelle forme ? pour quoi faire ? pour quelle raison ?</p><p>주제에서 벗어나면 점수가 크게 깎입니다. 항상 6가지 질문을 던지세요.</p>'},

{type:'ex', id:'e3', title:'Activité 3', consigne:'Lisez le sujet et répondez aux questions.', tr:{ko:'주제를 읽고 질문에 답하세요.', en:'Read the topic and answer the questions.'},
 html:'<div style="border:1px solid #ccc;padding:8px;border-radius:6px"><b>Sujet :</b> Vous n’êtes plus satisfait(e) de votre salle de sport. Vous écrivez au service clientèle pour résilier votre abonnement et vous expliquez les raisons de votre déception. (250 mots environ)</div>',
 items:[
 {type:'short', q:'1. Qui écrit ?', answer:'Un client (un abonné de la salle de sport).', keywords:[['client','abonné','adhérent']]},
 {type:'short', q:'2. À qui ?', answer:'Au service clientèle de la salle de sport.', keywords:[['service client','service clientèle','clientèle']]},
 {type:'short', q:'3. Quel est le thème ?', answer:'Les relations commerciales entre un client et une entreprise (la qualité d’un service).', keywords:[['relation','commerc','service','qualité','client']]},
 {type:'mcq', q:'4. Quelle forme doit prendre votre texte ?', options:['Un message sur un forum','Une lettre formelle (lettre de réclamation / de résiliation)','Un article de presse'], answer:1},
 {type:'short', q:'5. Vous écrivez pour…', answer:'mettre fin au contrat (résilier l’abonnement).', keywords:[['résili','mettre fin','annul','arrêt']]},
 {type:'short', q:'6. Vous écrivez parce que…', answer:'vous n’êtes plus satisfait(e) des services et des prestations proposés.', keywords:[['satisf','déçu','décep','mécontent']]}
]},

{type:'note', kind:'method', title:'Définir une problématique', tr:{ko:'핵심 문제(problématique) 정의하기', en:'Defining the central question'}, toc:true, html:'<p>La <b>problématique</b> est la question centrale que pose le sujet. Pour la trouver, cherchez d’abord les mots clés (<b>Quoi ? Qui ? Quand ?</b>), puis demandez-vous : <i>Quel est le problème soulevé ? Quelle est l’idée générale ?</i></p><p>Problématique = 글 전체가 답해야 할 중심 질문. 보통 의문문 형태로 씁니다. 예 : <span class="say">Est-il encore nécessaire de… ?</span> <span class="say">Pourquoi… ?</span> <span class="say">Faut-il… ?</span></p>'},

{type:'text', id:'t4', label:'Activité 4', title:'Un tee-shirt aux couleurs du lycée ?', source:'Document adapté pour la classe', box:true, paras:[
'De retour d’un déplacement officiel à Tokyo mardi, la ministre de l’Éducation a fait l’éloge des tenues scolaires japonaises, qu’elle considère comme « un outil de cohésion ». Elle n’envisage pas pour autant d’imposer un costume strict : elle imagine plutôt un simple polo portant le logo de l’établissement. Chaque chef d’établissement serait libre de l’adopter ou non.',
'Cette proposition a provoqué une avalanche de commentaires sur le site d’un grand quotidien régional. Une très large majorité des lecteurs s’y déclare favorable, en particulier au nom de l’égalité entre les élèves.']},
{type:'ex', id:'e4', title:'Activité 4', consigne:'Lisez le texte. Cherchez les mots clés qui répondent aux questions « Quoi ? Qui ? Quand ? ». Cochez le thème traité, puis la question centrale.', tr:{ko:'글을 읽고 무엇/누가/언제에 해당하는 핵심어를 찾은 뒤, 다루는 주제와 핵심 질문을 고르세요.', en:'Find the key words, then tick the theme and the central question.'}, items:[
 {type:'short', q:'Mots clés : Qui ? Quoi ? Quand ?', answer:'Qui : la ministre de l’Éducation, les lecteurs. Quoi : une tenue / un polo aux couleurs de l’établissement, l’égalité entre les élèves. Quand : mardi, au retour de Tokyo.', keywords:[['ministre'],['polo','tenue','uniforme'],['mardi','tokyo'],['égalité']], need:3, lines:2},
 {type:'mcq', q:'1. Quel est le thème traité ?', options:['L’intégration des étrangers','L’égalité dans les écoles','L’histoire de l’uniforme'], answer:1, explain:'« au nom de l’égalité entre les élèves »'},
 {type:'mcq', q:'2. Quelle est la question centrale du sujet ?', options:['Est-il encore nécessaire de porter une tenue commune à l’école aujourd’hui ?','L’uniforme est-il un choix politique ?','Quelle est l’histoire de l’uniforme au Japon ?'], answer:0}
]},

{type:'text', id:'t5', label:'Activité 5', title:'La semaine de quatre jours : pourquoi si peu d’entreprises ?', source:'Document adapté pour la classe', box:true, paras:[
'Les salariés français se disent très attirés par la semaine de quatre jours. « Un jour de plus pour sa famille, c’est moins de stress et plus de motivation », affirment-ils, ou encore : « On travaille plus intensément et on se déplace moins, c’est bon pour la planète. »',
'Sur le papier, cette organisation ne présente que des atouts : moins d’absences, meilleure concentration, image moderne de l’entreprise, recrutement facilité et économies d’énergie dans les bureaux. Expérimentée depuis plusieurs années et désormais possible dans le cadre légal, elle reste pourtant rare. Alors comment expliquer que moins de 10 % des entreprises l’aient adoptée ?']},
{type:'ex', id:'e5', title:'Activité 5', consigne:'Lisez le texte. Cherchez les mots clés qui répondent aux questions « Quoi ? Qui ? Quand ? ». Dites quel est le thème traité et identifiez la problématique.', tr:{ko:'글을 읽고 핵심어를 찾아 주제와 핵심 문제를 밝히세요.', en:'Find the key words, the theme and the central question.'}, items:[
 {type:'short', q:'Mots clés', answer:'semaine de quatre jours, salariés français, entreprises, atouts / avantages, rare', keywords:[['quatre jours','4 jours'],['salarié','entreprise'],['atout','avantage','rare']], need:2},
 {type:'mcq', q:'Thème', options:['Les transports en commun','L’organisation du temps de travail','Le recrutement des jeunes'], answer:1},
 {type:'short', q:'Problématique (formulez une question)', answer:'Pourquoi la semaine de quatre jours, si appréciée des salariés, reste-t-elle si peu répandue en France ?', keywords:[['pourquoi','comment'],['quatre jours','4 jours'],['rare','peu','répand','adopt']], need:3, lines:2}
]},

{type:'ex', id:'e6', title:'Activité 6', consigne:'Lisez le sujet. Relevez les mots clés, le thème et les actes de parole attendus. Répondez à la question « Pourquoi dois-je écrire ? ».', tr:{ko:'주제를 읽고 핵심어, 주제, 요구되는 언어 행위를 찾고 「왜 써야 하는가?」에 답하세요.', en:'Find the key words, theme and expected speech acts. Why must I write?'},
 html:'<div style="border:1px solid #ccc;padding:8px;border-radius:6px"><b>Sujet :</b> Vous décidez de donner votre opinion sur l’interdiction des trottinettes électriques sur les trottoirs de votre ville. Vous écrivez un message à publier sur un forum en exprimant vos sentiments dans un texte argumenté et en précisant les raisons de votre position. (250 mots environ)</div>',
 items:[
 {type:'short', q:'Mots clés', answer:'trottinettes électriques, trottoirs, interdiction, ville', keywords:[['trottinette'],['trottoir'],['interdi']], need:2},
 {type:'mcq', q:'Thème', options:['La réglementation des déplacements urbains et le partage de l’espace public','Le prix des trottinettes','Le sport en ville'], answer:0},
 {type:'multi', q:'Actes de parole attendus', options:['exprimer ses sentiments (colère, inquiétude, satisfaction…)','exprimer son opinion / sa conviction','justifier sa position','raconter une histoire imaginaire','demander un remboursement'], answer:[0,1,2]},
 {type:'mcq', q:'Type de texte attendu', options:['Une lettre de motivation','Un message (post) sur un forum','Une lettre de réclamation'], answer:1},
 {type:'short', q:'Pourquoi dois-je écrire ?', answer:'Pour participer à un débat public : donner et justifier mon opinion sur l’interdiction des trottinettes sur les trottoirs.', keywords:[['débat','opinion','avis','position'],['justif','raison','argument','convaincre']], need:1, lines:2}
]}
]});
