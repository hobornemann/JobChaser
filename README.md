# VECKANS TEORETISKA FRÅGOR

##  Vad menas med Reacts ekosystem? 

Reacts ekosystem refererar till en samling av bibliotek, verktyg och ramverk som kompletterar och utvidgar Reacts möjligheter att skapa stabila, skalbara och snabba Javascript-applikationer som dessutom är lätta att underhålla och uppgradera. 


## Nämn några andra viktiga bibliotek i Reacts ekosystem förutom React Router och React Hook Form.

Det finns många viktiga bibliotek som kompletterar React. För fullständighetens skull, tar jag med React Router och React Hook Form i listan:

1.	React Router: Populärt routing-bibliotek som möjliggör navigering och rendering inom React (som skapar en Single Page applikation) genom att använda URL:er. Man kallar dessa element för 'sidor' men i själva verket är de komponenter. 
2.	Redux: Ett state management bibliotek för att hantera applikationens states. Redux är speciellt lämpat att hantera komplexa applikations states. 
3.	React Hook Form: Ett bibliotek som gör det enkelt att skapa och underhålla webbformulär. Biblioteket innehåller effektiv validering,state-hantering, minmerar om-renderingar, är oberoende av andra bibliotek och är litet.  
4.	Babel:  En JavaScript kompilator som gör det möjligt för utvecklare att använda de senaste ECMAScript features och JSX syntax i sina React applikationer.
5.	Axios / Fetch API: Bibliotek som gör det enkelt att göra HTTP-förfrågningar till en server eller ett API.
6.	Jest / React Testing: Bibliotek för att underlätta testandet av React-komponenter och -applikationer. 
7.	CSS-Bibliotek: Bibliotek såsom Styled Components, Emotion, Tailwind och CSS Modules gör det möjligt att skriva CSS direkt i JavaScript koden. På det sättet blir stylingen mer modulär och komponent-baserad.
8.	Next.js / Gatsby: Ramverk som bygger på React och som som skapar möjlighet att bygga server-renderade React applikationer (Next.js) respektive statiska webbsidor (Gatsby).  
9.	Storybook: En utvecklingsmiljö för att bygga UI-komponenter och att kunna dokumentera dessa med exempel.
10.	Create React App: Ett terminalverktyg som hjälper utvecklaren att snabbt sätta upp ett nytt React-projekt med standardinställningar. 
11. Webpack: En module-bundler som ofta används för att bunta ihop JavaScript filer och andra assets vid produktionssättning.


## Vad är fördelen med att använda React Hook Form?

React Hook Form har ett antal fördelar:

1. Minimal boiler-plate kod: React Hook Form biblioteket minimerar utvecklarnas arbete med att skriva kod för att sätta upp och konfigurera ett webbformulär.

2. Performance optimering: React Hook Form minimerar om-renderingar genom att dra fördel av Reacts memoization- och batch-processer.  

3. Enkelt API: React Hook Form gör det enkelt för utvecklaren att hantera formulärets state och validering. 

4. Flexibilitet: Biblioteket erbjuder möjligheten att hantera många olika typer av formulär. 

5. Validering: En av de viktigaste egenskaperna med biblioteket är dess inbyggda stöd för valideringsregler och felmeddelanden. React Hook Form klarar av både synkron och asynkron validering, vilket är en fördel vid större och mer komplexa formulär.

6. Stor community: Ett väletablerat bibliotek med bra dokumentation och många aktiva användare gör biblioteket populärt.



## Vad är syftet med useContext? Vilket problem med props löser den?

UseContext värdeskapande ligger i att biblioteket gör det möjligt att skapa objekt som är tillgängliga globalt eller regionalt i applikationen. På så sätt kan man minimera både kod-skrivande, risken för fel och komplicerat/tidskrävande underhåll, speciellt när props annars behöver skickas genom flera nivåer i komponent-trädet (prop drilling).

UseContexts värdeskapade blir extra tydligt när det är många komponenter som behöver ha access till samma state eller konfiguration. Koden blir mindre omfattande, renare och enklare att underhålla.  



## Vilka fördelar finns det att använda Tailwind / nackdelar? 

Fördelar:

1. Snabbare styling: Tailwinds utility-klasser gör det möjligt att skapa styles genom att ange klassnamnen för respektive style direkt i jsx-filen när man definierar html-elementet.  

2. Konsistent styling: Användandet av utility-klasser ökar chansen att utvecklare använder samma styles (klasser) och att man därigenom uppnår en god konsistens. Dock vilar ett ansvar på varje utvecklare att inkludera alla överenskomna style-klasser på de olika elementen enligt den gemensamma designen.  

3. Flexibilitet: Tailwind erbjuder möjligheten att skapa att skapa egna eller modifierade utility-klasser, styling-themes etc. 

4. Performance: Vid produktionssättning inkluderar Tailwind enbart de utility-klasser som används i projektet. På det sättet minimeras storleken på biblioteket och optimeras performancen. 

Nackdelar:

1. Learning curve: Det tar lite tid att lära sig Tailwinds benämningar för de olika utility-klasserna och hur man skapar kundspecifika utility-klasser respektive sätter upp styling-themes. 

2. Kladdig kod: Även om det kan upplevas som snabbt att inkludera ett antal utility-klasser direkt i koden istället för att ange dem i ett separat css-dokument, så har det nackdelen att det kan bli väldigt många utility-klasser som måste anges direkt i koden och att koden därför blir mera svårläst.

3. Begränsad designfrihet: Även om det finns möjlighet att avvika från de förspecificerade utility-klasserna, upplever vissa personer att Tailwind kan vara lite begränsande. 

4. Behöver PostCSS eller Webpack: För att Tailwind ska fungera på ett effektivt sätt, så är biblioteket beroende av att enderas PostCSS eller Webpack är installerat.