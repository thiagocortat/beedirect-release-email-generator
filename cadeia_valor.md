# Bee2Bee + BeeChannel​
## Discovery ​
* Backlog de produto: tradicionalmente o que vem de iniciativas vem com o timing certo e nivel de infomação​, já com os parceiros os pedidos chegam com alguma urgencia e com timing apertado, não ha nada propriamente a fazer do nosso lado apenas adaptadar​. Os esclarecimentos nem sempre chegam a tempo e entao temos mesmo que ter margem para planear estas questões.​
* Dificuldade em especificar as necessidades de negocio e fazer esse levantamento tendo em conta o dia a dia.​

## Priorização:​
* Existe uma grande dificuldade em perceber quais as prioridades de negocio atencipadamente​
* Tecnicas – saudável no sentido em que temos alguns ajustes a serem feitos conforme a exploração em produção, então pode atrapalhar no planeamento mas faz parte do decorrer normal​
​

## Planeamento:​
* Gestão de dependencias – revisitar conversa e fluxograma que tinhamos anteriormente!!!! Promover meeting PMs Dinis e Rafael SMs​
* * Alem de rever esse processo devemos reavivar as discussoes nas inceptions e refinements para perceber dependencias de USs / features ​
* * Devops existe mas esta tudo ok​

## Desenvolvimento​
* Gestão de bloqueios - comunicação com os parceiros na fase de desenvolvimento requer especial atenção de forma a acomodar já na fase de desenvolvimento essa comunicação que é bloqueante nesta fase.​
* * Ou seja é essencialmente um problema externo, mas recorrente que exige um bom fallback e comunicação e gestao assertiva com os parceiros​

## Review​
* Certificação Técnica – Cabe ao PO decidir como gerir a certificação tecnica – se a equipa dev executa, se o PO articula, se a equipa do tiago a faz​
* Review de produto – pode ficar pesado para o PO criar todo o contexto para a sua review – tbm cordena e apoia-se no DEV ou outros players para criar conforme for necessario ​
* * Pode haver dispensa dessa review e deve ser visto entre dev e po​
* * ACs – os cenarios de teste ou validações que sejam da autoria do PO podem ser documentados de modo a equipa possa atuar e testar por ela propria​

### DOR​

* Inceptions – dev ok​
* * Por vezes é necessario reanalisar por debate da inception, que dificulta o fecho da inception​
* * Antigamente acontecia das inceptions serem mt espaçadas do desenvolvimento entao requeria refazer inception​
* Refinement – dev ok, ​
* * Reflexao durante a meeting: se o PO chega ao nivel de detalhe tecnico ou se a equipa sobe ao nivel funcional – se estamos no sweet spot ou precisamos de rever​
* * * Na realidade ja fazemos a interação tecnica, q permite a equipa perceber o q realmente tem q ser feito a nivel tecnico, escusando o PO de trabalho nao eficiente ou de baixo contributo, se a equipa dev pode resolver, é ela q resolve​

### Issues e Bugs​

* PO serve se dos dev para ajudar nas issues, dificilmente o PO consegue entender se é um problema ou não, o questionamento do N3 vem em volta de "porque é que isto aconteceu"​
* Os casos em que o PO pode responder como  regra de negocio​
* * Os casos que sao passados a equipa devemos passar a tipificar se podemos dar como inconclusivos sem gastos de horas – devemos apenas questionar ao Rafael se os podemos fechar com isso​
* * *Ver com o santos o numero de casos que temos na equipa inconclusivos ou que sejam do tipo falha de mapeamento​
* *Os casos em que a equipa pode anlisar e resolver deve fazer se seguir autonomamente com aprovação do PO​

* Codereview Deploy – gestao das releases e code review quando os desenvolviemntos metem APIs que mais equipas mexem. -temos a solução de dividir as apis para ficarem com scope reduzido e cada equipa poder atuar apenas na api do seu produto​
* * Hoje existe um grande peso​
* * Planning sobre quem pega no que por indicaçao do po – acaba por ser ao contrario, o po tras a necessidade quer seja de analise ou de implementaçao e a equipa decide sobre quem mais apto para realizar a tarefa.​
* Deploy – existe a questao da agenda, que tem que ser sincronizada com os devops e por vezes com outras equipas, mas ainda em discussao no dia de hoje (03 06) sempre que a equipa poder realizar release de forma independente deve executar.​
* QA - não existe figura de QA no entado a equipa Scrum assegura os testes. ​
* * Para os canais existe uma dificuldade maior para testar, visto que nao existe uma sandbox ou um meio facil de execussao de testes. Requer algum apoio do dev ou visualizçao por logs. ​
* * * Existe uma sandbox que a equipa vai mantendo e adicionando canais, mas necessita desse foco e planeamento. ​

### Review ​

* Certificação tecnica ​
* * Temos casos de certificaçao tecnica que exige algum esforço, com prints etc – mas são raros, ja que nao temos novas conexões mas sim melhorias ou novas funcionalidades nos canais existentes. Ver comentario acima​

* Review de produto​
* * ja foi falado ver topico acima​

* Non planned – aka urgencias​
* * Normalmente a equipa consegue acomodar e auto organizar-se para responder de forma eficiente às urgencias quer seja de produção como de novas funcionalidades​

## Rollout​

* Regressao – nao temos​

* Release/ Plano de rollout
* * em b2b exige comunicação com os parceiros liderado pela equipa do tiago ribeiro. E muitas vezes temos tudo pronto mas precisamos dessa comunicaçao com os parceiros. Com consequencia directa naquilo que fica ou nao fechado na meta.​
* * Em channels, quando a funcionalidade afeta todos os canais, implica o deploy de 47 canais faseadamente (sensivelmente) ou seja a alteraçao pode simples e tão facil como uma linha mas com implicação grande de deploy e acompanhamento, ou seja é necessaria a construção do plano de deploy ​

* Certificaçao prod – o desenvolvimento é publicado colocado em produção mas mais uma vez exige coordenaçao com o parceiro e equipa de parceiros deixando o topico em aberto sem termos controlo de quanto tempo será, e ate com implicações de poder voltar para tras e de ser necessarios ajustes, mas tudo muito imprevisivel e com impacto no fecho da meta.​

## Entrega

* meta atual – 100% - Hoje so temos metricas para perceber se o serviço esta on or off, mas pouca ou nenhuma sobre o impacto daquilo que desenvolvemos por utilização ou por revenue​
* So pelas questoes das dependencias​
* Ver questao das releases e datas de release para evitar atrasos desnecessarios


# BeeConnect + PartnersAPI
## Discovery:​
* Há pouco tempo para conseguir foco nesta fase. ​
* Não existe bloqueio a fazer chegar as necessidades ao backlog mas existe alguma dificuldade em ter esclarecimentos necessários, em particular com parceiros.​ *No desenvolvimento é que sim se torna dificil porque precisamos de um nivel de detalhe que se torna dificl de atingir.​
​
## Priorização​
* Nada a declarar​
​
## Planeamento​

* Especificação é feita junto dos parceiros e portanto as necessidades vão sendo descobertas ao longo do desenvolvimento. ​
* Estão a decorrer as iniciativas de discovery (com redes por exemplo) que são futuro e ao mesmo tempo iniciativas de desenvolvimento (e discovery nesta fase) e testes que são presente, que são muito peso para a mesma pessoa​
* Estou a especificar hilton e de repente OHIP é que é urgente, tenho de ir correr especificar OHIP.​
* Análises de issues e bugs não tem problemas. Há poucos.​

​
## Desenvolvimento:​

* Problemas com alterações que os parceiros fazem e têm um grande impacto (ex.: CMNet deixa de enviar paramentro e estraga inventário). Acção: alocar tempo no planeamento para urgencias e definir a meta seguinte com mais antecedencia para puxar caso seja necessário​

* Os projetos anteriores estão sempre presentes e não acabam : Accor, IHG etc. São projetos que não nos deixam seguir em frente . : Acção: deixar mais visivel estes projetos para tentar que a equipa nao tenha tantas iniciativas ao mesmo tempo​

* As certificações feitas junto dos parceiros não têm o detalhe necessário e depois em produção apanham-se os problemas todos. Açao: nos pilotos em produção temos de considerar tempo e foco para testes em AMBIENTE PRODUTIVO. Deixar esta responsabilidade no plano visivel.​

* Demasiados temas ao mesmo tempo. Enquanto ele está a ver as coisas da Hilton estamos de repente a correr atrás da OHIP que são contextos muito ​

* Mudança de prioridade já durante o desenvolvimento. Tinha 1 pax ohip e 2 hilton e depois tive de colocar 3 ohip e 1 hilton. ​

* Conhecimento suficiente para agir numa situação de urgencia está centralizado numa pessoa. Ação: mehorar a documentação dos projetos para passar conhecimento. Acção: Apostar na formação da equipa para pegarem em temas que não conhecem planeando tempo para isso. ​

* * Focamos muito no novo e o que é antigo fica na cabeça de quem já sabia Acção: focar na partners para descontinuar frameworks antigas​
* * Alinhar Tiago Ribeiro / N2 que as urgencias devem sempre primeiro ser analisadas pelo N3 antes de chegar à equipa​

* Merges e deploy tem sempre problemas. Acabamos tudo mas falta sempre o merge e o deploy. Por vezes nao terminamos o merge e depoy na sprint passa para a proxima sprint. Não tem grande questão.​

* Os code reviews passam todos pelo TL e por isso muitas vezes nao sao feitos na propria iteração e passa a proxima sprint. Se fizer só code review nao faço outra coisa​
**Podemos delegar alguns code reviews para outros membros. Podemos tambem usar o copilot para fazer review. Terá sempre alguem de fazer mas já ajuda.​

* Os ambientes têm problemas porque às vezes estamos a tentar testar alguma coisa e precisamos de devops para ligar e desligar serviço.​
* * O ambiente de cert por exemplo precisamos sempre de pedir para ligar certos serviços. Podemos logo no inicio do projeto avisar devops . Ou então precisamos de ter em cert sempre tudo ligado​
* * O caso dos parceiros que nao tenham ambiente de certificação não podem funcionar em cert. Cuidado com o s acessos a cert uma vez que esteja tudo ligado e a funcionar porque temos de ter cuidado com quem acede a este ambiente.​

* Não temos QA. Usamos um mock de testes para os projetos. Este mock deve fazer parte do DoD.​

* A review do PO é feita só para parte das features. Precisamos de criar alguns cenários de teste e causa algum transtorno criar todos os mapeamentos e configurações especificas para o teste em si.​
* * Contratar um BA para ajudar nestas configurações e tetses.​

​
## Notas finais:​

* Ter menos iniciativas ao mesmo tempo​
* Rever a equipa e o numero de pessoas na equipa (juniors vs seniors)​
* Focar a equipa num projeto e deixar claro que mesmo estando o projeto em piloto ele nao acaba e não abre espaço para novo projeto​
* Será que preciso de ter mais pessoas de produto um para olhar para futuro (discovery) e outro para acompanhar desenvolviemnto?​
* Será que teremos de estruturar melhor a equipa? Existem vários os contextos: iniciativas produto a decorrer, manutenção, inciativas de produto em piloto, iniciaitivas de produto novas​
* Usar copilot para ajudar nas code reviews​
* Deixar uma task, US, feature propria para a certificação técnica ou negócio ou pilotos. O epico nao termina enquanto nao terminar essa fase.​
* O ambiente de cert deve ser mais sério e deve ter mais recursos para que esteja sempre com serviços ligados​
* Cada equipa deve ter o seu DoD e o seu DoR


# Beehive

## Discovery​

* Não existe um backlog claro. Existe muita coisa registada que não sabemos se vamos fazer ou quando vamos fazer. Poderíamos distinguir o que é uma ideia do que é um backlog que realmente traz valor. Se eu tivesse um backlog mais oficial e com mais informação especifica sobre o valor que cada item traz ao produto  e a aceitação de que deverá ser feito eu conseguiria melhor levar a priorização itens relevantes.​
* * Ex.: portal de ideias​

* A localização da listagem de features técnicas pode ser ambígua e deve ser mais claro e formal como encontrar  o backlog técnico. ​
* * Action: alinhar a listagem de features técnicas . Deverá ser o PO a criar as features que a equipa pede e equipa pode criar US no TFS. ​

## Prriorização​

* Temos prioridades de negócio a curto prazo. Mas não temos a médio prazo concretamente as prioridades. Não consigo ter as metas prontas a tempo porque preciso de especificar o que é da próxima meta.​
* * Action: fechar ASAP o âmbito da meta 4. ​
* * Ex.: sei que na meta 4 vou fazer o corporativo que é um tema muito lato. Precisava de ter sabido antes para poder preparar melhor para conseguir ter inceptios e refinement durante a meta 3.​

* A: Deve haver um momento em que o PO se junta com o TL para avaliar o que está no backlog tecnico e justificar que determinada feature técnica é importante na meta ​

​
## Planeamento​

### Gestão de dependencias:​
* * Devops: ok​
* * * Devops no horario brasil para quando há problemas nos ambientes nao produtivos. (considerado). QA tem muitas pessoas no horario Brasil.​
* * Outras equipas: os juniors deviam ter começado no beehive. O problema está quando a feature chega à equipa.​
* * * Não é igual feito por todas as equipas. No WL correu bem (com pull exemplo). Equipas mudam.​
* * * A: Pascoal tem feito um planeamento do epico com a gestão das dependencias entre equipas que pode resultar.​
* DoR – Produto: OK, já com planos em acao​
* * Inceptions: as features estão estipuladas para cada equipa mas as 2 beehives estão a fazer inceptions em conjunto​
* * * As inceptions nao podem ser tão detalhadas, mas já temos uma estrategia e acção  a decorrer: ​
* * * * caso seja necessária análise é feita uma pré-análise e a inception é feita já com mais informação e preparação (aplicado nas inceptions e refinements)​
* * * * Caso hajam apenas features para uma das equipas é informado o Tech lead da outra equipa que é opcional participar​
* * * Design é apresentado com componentes e estilos que nao estão feitos. Mas a expetativa é que o componente seja feito noutra iniciativa.
* * * * O QA não entende afinal qual o design a ser aplicado. ​
* * * * A: o designer vai participar nas refinements e inceptions.​
* * * * A: Os designers vão passar a aprovar os PR.​
* * * * A: avaliar a utilização do storybook. A equipa de UI sabe todos os planos de alteração aos componentes. Tlvz esta equipa devesse ter essa informação tb. A: encontrar forma de fluir essa info.​
* * * * A: enconrar soluções junto dos designers.​
### DoR - Técnico: ok​
* Issues e bugs estão noutra equipa. É pouco ter apenas uma pessoa apenas só numa equipa ​
* * Há muita análise para fazer. ​
* * * A: se o N3 não conseguiu entender o problema então precisamos de identificar que logs faltam e adicioná-los. Se o N3 poderia ter encontrado, então é enviar para o N3.​
* * * A: documentar as boas práticas ​
* * O N3 não analisa o suficiente. Só depois de dev analisar é que nos apercebemos que o N3 poderia ter encontrado a resposta​
* * * A: chamar à atenção dos issues que podiam ter tido melhor análise no N3.​
* * * Muda a equipa, não tem logs, nao tem conhecimento. A altura em que funcionou melhor era quando o N3 tinha um dev que eles podiam recorrer.​
* * * A: elementos mais novos ou com mais dificuldade devem ser acompanhados por um elemento mais senior.​
* * * A: Se temos de ir ao código para entender o problema então falta logs.temos de criar feature tecnica para adicionar logs.​
* * * A: usar uma boa documentação e um bot AI para apoiar o N3.​

## Desenvolvimento:​

### Plano da Sprint 
* A forma como a sprint está organizada pode ser um problema. ​
* * As sprints são curtas para desenvolver, testar e entregar. O desenvolvimento termina no final da sprint e o QA tem de fazer testes e produto review na sprint seguinte​
* * * Esta questão pode ser uma conseguencia de outros problemas que têm os seus planos de ação. Ex.: testes automaticos na regressao (ver ponto Regressão)​

* * Temos 5 dias para desenvolver e testar porque a regressão foi incorporada dentro da sprint​
* * * A: ao partir a OB.API conseguimos mitigar melhor o problema de bloqueio das branches​
* * A equipa não precisa do PO para a planning, mas facilita o PO estar na planning para poder estar inteirado das decsões que a equipa tomou sobre quem faz QA, que tasks estao contempladas etc.​
* * A: E se planearmos a meta com 3 sprints e deixar a 4a sprint fica para terminar QAs e reviews do que foi migrando e o que sobrar pode ser usado para bugs e issues.​
* * * Terminar QA da sprint anterior​
* * * Resolver bugs do backlog de produção​
* * * Resolver issues não criticos​
* * * Documentação​
* * * Puxar USs tecnicas ou de negocio da proxima meta​
* * * Dar um forcing para cerimónias (inceptions refinement) necessários para a meta seguinte​

### Desenvolvimento: ​

* Logs e monitorização: ​
* * A : precisamos de ter em conta os logs que o N3 precisa em novas features​
* * A: melhorar os logs quando detetamos que os que existem nao sao suficientes pelos issues.​
* Code Review: Quando é necessário code review dos arquitetos ou de equipas externas demora a concluir​
* * O desenvolvimento não cumpre sempre os ACs e QA quando testa encontra problemas basicos​
* * * Os juniors precisam de acompanhamento porque eles fazem algumas funcionalidades mais complexas e entram neste ping pong e gasta o tempo de toda a equipa.​
* * * A: identificar estes casos e o responsavel (Tech lead) deve dar um aviso.​
* * Integration Tests: Em tempos criámos vários, mas deixámos de fazer. Está no SOAPUI e usa um hotel de dev que e for alterado estraga o resultado dos integrations tests​
* * * A: Devíamos dar mais atenção aos integration tests, criar sempre como fazemos com unit tests, correr no seu container com os seus dados e com  um report próprio.​
* * Merges: vamos mudar todos os repositorios para GIT. Esta controlado mas a iniciativa deve continuar​
* * Deploy: se o ambiente de certificação é CERT, teremos de rever os deploys. Se faz deploy antes ou depois de produção.​

### QA​

* A: Features que exigem integração com serviços externos devem implementar mock services para que seja possivel fazer testes completos.​
* Temos falta de pessoas para testar. O Dev quando for testar será que se lembra de outros cenários que não foram previamente registados?​
* * Será possível que alguém mais senior de QA poderia estar mais presente na construção dos ACs, no entanto nao temos neste momento disponibilidade na equipa.​
* Os QAs precisariam de ter maior profundidade no produto e no negócio para poderem trazer maior valor nos seus testes​
* * A: formação em produto e negócio. A construção dos ACs em conjunto pode ajudar tb​
* * A: as formações de produto em modelo "pílula" na plataforma de elearning online​
* Testes automaticos: A: ter os QAs a criar testes automáticos e apoiarem na tarefa de aumentar o numero de testes automaticos​
* Os Whitelabels têm de estar disponíveis para fazer testes, tanto QA, como review e ate testes automatizados​
* * A: ter em ambiente de QA sempre uma extranet, um CRS além do Omnibees para fazer testes e regressão​

### Review​

* Há um gargalo em produto pois as entregas de desenvolvimento acumulam todas numa só pessoa.​
* A review nunca é na sprint onde foi efetuado o desenvolvimento. Se QA já só consegue atuar na sprint seguinte, review de produto por vezes só é feita 2 ou 3 sprints a seguir​
* O PO é só um. Quando o PO vai de férias não existe forma de ter um PO sombra que tenha o mesmo conhecimento do PO da equipa para a prepraração da proxima meta ( inception, refinements) e finalização da meta atual( reviews)​
* * O PO desta equipa fica muito sobrecarregada ("tem sido uma loucura") e precisa de um apoio contínuo (contratar Um BA?) .​
* Existe uma dificuldade em fazer testes completos entre sistemas:​
* * A: Ter um ambiente formal para integrar com Bee2pay, Niara e Hsystem – CeRT​
* * A: o ambiente de certificação tem de ser sério, ter um owner e deve ser facilitado o deploy para cert quando necessário.

### Urgências​

* E as urgencias? Vão sempre existir. Teremos de ser capazes de replanear a meta deixando visibilidade dos replaneamentos. A: deixar visibilidade de replaneamentos​
* * O que precisamos de evitar é que uma sprint seja replaneada. ​
* * Action: deixar sempre margem na iteração e na meta para urgencias de issues e bugs. Se não houver issues e bugs podemos gastar esse tempo noutras coisas.​
* Deviamos deixar espaço para corrigir bugs de backlog na sprint das duas equipas. O problema é que tanto os issues como os bugs de backlog estão a acumular.​

## Rollout​

* Regressão: há muito esforço de regressão​
* * A: tentar aumentar o numero de testes automáticos para reduzir os testes manuais. A cada sprint incluir mais um ou 2 ecras​
* * A: todos os QAs vão ter formação na parte de automação​

* Release: a eficiencia dos release managers não é igual entre todos os release managers. Cada release é um caso diferente.​
* * A: o objetivo é que a cada feature se possa subir a produção - uma release com cada  feature (separação da OB.API). Assim os release manager nao tem o trabalhao de juntar todos os desenvolvimentos e garantir que funciona.​
* * * A!:Iniciar ja a separação da OB.API​

### Plano de rollout​

* Falhou o rollout de uma feature que tem dependencia de outra equipa. A gestao de dependencias correu mal aqui. Inda nao conseguimos subir porque há questões a resolver na outra equipa​
* * Tem de se decidir logo na gestao da dependencia que testes devem ser feitos, em que fases e quem fica responsável.​
* Migração de dados que estão a demorar podem implicar alterações nos scripts​
* * CVC​
* * Extranets falsas​
* O plano de rollout acontece muito em produto e o unico motivo para nao levar a equipa é nao sobrecarregar com mais reunioes. Mas são bem-vindos.​
* Tarifas multi-property: ​
* * Quando subiu ninguém quis usar e agora quando chegar o momento vao usar todos ao mesmo tempo e vão chega os problemas todos de uma vez (em Setembro/ outubro)​
* * A: na meta de setembro / outubro deixar margem para absorver os pontos que vão surgir de multiproperty)

# Beehive UI

## Priorização​

* Problema em priorizar porque os temas recebidos pelos departamentos nao encaixam no roadmap 2025 e por isso nao são priorizadas. São necessidades já antigas.​
* O que tem pronto e especificado não é para fazer e o que é para fazer nao está pronto e tenho de correr para incpetions e refinements.​
* Técnicas: perdemos oportunidades de melhorar coisas​
* ACTION: encontrar uma forma fácil de defender as features técnicos​
​
## Planeamento​

* Gestão de Dependências: DevOps - Este item foi marcado pela falta de transparência que temos do progressão dos tickets, se estão planeados para a sprint deles, quantos tickets estão na frente​
* Features tecnicas precisam de ser especificadas de forma a que qas e produto entenda e mais detalhadas​
* Backend sao consumidos nas features e nao conseguem analisar issues. Muitas issues nao resultam em nada.​
* Temos de limitar um maximo de tempo para analisar issues & implementar meios para parametrização futura​
Concentração da análise de issues em uma equipa e considerar para o fecho da Meta que a capacidade de membros da equipa estarão alocados com análise de issues​
* ACTION; A atribuicao de issues deve ser distribuida e deve ser alocado tempo suficiente. Devemos perceber porque o heitor demora tanto tempo num issue​
* Devemos trazer sugestoes de logs ou outras ferramentas que ajudem na analise de issues​
​
## Desenvolvimento​

* Code review for a da sprint demora e acaba impactando (code reviews que são "externos" e vão para outras equipas)​
* Plano da sprint: aparecem coisas nao planeadas (ex.: beelite)​
* Logs de monitorização: nao foi ativado o telemetry. O clarity podia beneficiar com isso​
Falta da implementação de logs para a parametrização​
* Merges/Deploy - A falta, principalmente, dos desenvolvimentos de back não estarem em git e com PRs, algumas vezes pode vir a impactar a release caso seja esquecido de fazer o rollback (ex.: última release beehive, 09/04)​
* QA: tem dificuldade em testar features tecnicas. Casos de Testes - relacionado  a itens técnicos, que muitas vezes, não fica claro para os QAs o que será feito na FT técnica e o que deverá ser testado (principalmente por conta da especificação das mesmas - linkado com o DoR - Técnico)​
* Urgencias: o MFE nao era urgente. Falta de alinhamento porque dar acesso ao franco ao codigo acabou por trazer problemas. Relacionado às urgências vindas do Beelite, que causa desalinhamentos e, muita das vezes, não seguem um "fluxo estabelecido" ​
* Regressão: o esforço da regressão é muito grande para a quantidade de trabalho produzido na sprint - Com uma Sprint de 2 Semanas e fazendo todo o fluxo de regressão, o tempo planeado para desenvolvimento acaba sendo de poucos dias úteis. E, também, como os QAs despendem ainda mais tempo, algumas coisas que são lançadas para teste no final da sprint acaba tendo que avançar para a sprint +1​

* Release: Este ponto está linkado com o ponto anterior, da regressão, e não em relação à release em si

​
# BeeDirect

## Discovery ​

* Tipicamente é trazido pelo PM então os POs tinham pouca envolvência nesta fase​
* * Telefone "estragado"​ (telefone sem fio)
* * Pouca autonomia​
* * Informação centralizada numa pessoa​
* * * Dificuldade em chegar e ter as respostas​
* * Previsibilidade e clareza na visão do produto​
* * * Dispariadade entre necessidades do "brasil" e "pintar ecras"​
* * Backlog deve contemplar o trabalho total – isto é de modo a que quem dá continuidade aos trabalhos nao fique bloqueado​
* * * Fazer a construção juntamente com a equipa com a de conectividade e parceiros​
* * Justificação de necessiade de negocio:​
* * * Analitics de modo que seja visivel quais as acções e necessidades de negocio​
* * * * De modo tbm a constuir inceptions e refinements mt mais produtivas e que não sejam trazidas para para a responsabilidade da equipa​
* * Comunicação e entendimento basico da arquitetura é importante para melhor visualização das necessidades de negocio e de como elas se podem traduzir​
* * Tecnologia – promover ainda mais a comunicação com arquitetura e TL para as ditas "conversas de café" para que possam clarificar e fazer brainstorming​
* * Features tecnicas – como vai ser introduzida no backlog de produto as necessidades tecnicas. ​
​
## Priorização 
### Prioridade tecnica​
* * Curto e medio prazo – existe uma disparidade entre aquilo que a equipa tem capacidade de fazer e aquilo que vai permitir ​
* * * Problemas em gerir aquilo que é a capacidade da equipa versus aquilo que sao as necessidades de produto que agora tem mais scope​
* * * Inceptions e Refinements que tocam MyHotel, trazer eventualmente Rafael, Felipe e Duarte​

## Planeamento
### Gestão de Dependências ​
* * Devops – planos de acções implementados e a decorrer ao longo do tempo tem ajudado a tornar esta dependencia menos problematica​

​
### DoR - Produto​
* * Paradigma que os devs tem mais conhecimento do produto (por terem acesso ao codigo que é la que existe a regra)​
* * Esta felizmente a ser melhorado mas exige tempo de TechLead e Arq​uiteto
* * Com consequências de Isssues e bugs de produção que basicamente implica apenas a equipa chegar a regra de negocio​
​​

### DoR - Tecnico​
* * Depende da disponibilidade que o produto ve na meta para estes desenvolvimentos​
* * * Inception – pode ser dispensada caso nao seja necessario dar mais entendimento​
* * * Refinement – po pode ser dispensado, e workitem segue como outro item qqr​

​
### Análise de Issuese Bugs​
* * Temos uma pessoa com elevada capacidade o que acaba por ser mais facil fechar - ​
* * * Issues com negocio (be) – ja nem chegam ao desenvolvimentos​
* * * Issues com negocio php – passa por analise do dev, muitas vezes sem N3, segue directamente por N2, ​
* * * Issues de implementaçao - nem tras analise do n3​
* * * Ja existe uma tread paralela para SLAs severidade – podemos retomar aqui

## Desenvolvimento​

### Plano da sprint​

* Encaixar o numero de meetings ao longo da sprint​
* Como o sprint goal acrescenta ou fará parte do plano estrategico para o produto/equipa​
* Operacionalizar o trabalho para a equipa, de modo a guiar os elementos da equipa tendo em conta o numero de horas planeavel para o TL​
* Falta de foco do TL e Arq pelo numero de reunioes programadas, e nao programadas mais urgencias, muitas das vezes em detrimento de apoios à equipa e o trabalho de desenvolvimento em si​
* Equipa heterogena em nivel de maturidade e de stacks, dificultando o planeamento das USs que impliquem varios skills sets.​
* Paradigma do scope para a equipa alterou, os objectivos sao mais distribuidos entre front e back – entao teremos que equilibrar tbm a equipa​
* * Pontos das retros: sao levantados os pontos e retiradas as metricas mas o followup parece inexistente​
* Existem alguns projectos que a forma de planear nomeadamente com scrum não ajuda a garantir a sua conclusao e deveria ser considerado outra metologia PM para a sua realização​
* Blackfriday – evento acaba por ser muito importante para o clientes e acaba por ser feito apenas em cima da hora. ​

### Desenvolvimento​

* Programação - scope da equipa alargada, sem passagem de conhecimento. Alem disso temos que capacitar a equipa para essas areas. O facto de termos o front em php tras um risco acrescido em termos de gestao da equipa, caso existam saidas vamos ter dificuldade na empresa de substituir esses elementos.  ​
* * Elevada divida tecnica, novas features acabam por ficar impactadas em termos de custos de implementação.​
* Logs e monitorização 
* * temos que revisitar e planear a melhor forma de implementar logs uteis e que sirvam para despistar melhor os problemas de prod. ​
* * Não podemos estar as cegas em cada release. 
* Documentação - temos dificuldade em produzir com qualidade e respeitando o DoD a documentação como deveria​

### Unit test​
* Não estamos em condições no momento de fazer testes unitários no php. É um trabalho que precisa ser feito aos poucos. ​
* Para haver testes unitários precisamos reestruturar o php. Precisa haver um trabalho para acabar com classes estáticas. ​
### Merges​
* Merges em php funcionam bem. ​
* Existem 3 versões de nuggets. O ideal seria haver 1.  Causa conflitos com muita frequencia. ​
### Deploys​
* Existem sempre as dependência dos DevOps. Plano de ação: Bruno e Rainho começarem a fazer os deploys (existem ressalvas – scripts, ver no docs).​
* Também temos liberdade de deploy sem ser do BE, mas precisa ser coordenado e monitorizar. ​
* Resolução do problema de depoy dos ambientes (Dev e QA)​

## QA​
### Caso de Teste: ​
* Não existem casos de testes para todas as situações. Sensação que os casos de teste não cobrem todos os cenários​
* Deveria haver cenários para testar todas as condições de teste. Não usar o mesmo hotel para todos os cenários.  ​
* Estabilização dos hotéis. ​
* Analisar a iniciativa do Beehive sobre testes automáticos. ​
* Necessitávamos ter uma cópia dos hotéis de produção em QA. ​
* * Criar todos os hotéis com as gateways para os cenários. (Abrir task no planeamento para QA)​
* * Bruno: Fazer follow up sobre reunião com Adriana sobre automação.​
* * Documentar qual hotel está com qual gateway.  ​
* * Execução de teste: ​
* * QA precisa ir além do que é os critérios de aceito. ​
* * Precisa pensar em cenários não previstos. Exemplos: Textos começando com letra miníscula...​
* * Regressão Manual e de grande esforço. ​
​
## Review:​
### Certificação Técnica​
* Estamos realizando alinhamentos com time de Connectivity para ajustar o processo.  ​
* Se possível, não trabalhar com datas, ou trabalhar com datas previstas. ​
* Releases necessários de certificação entrar em ambiente próprio de certificação. (Necessário trocar o pipeline) (Entender quais credenciais são usadas) ​
* Necessário entender melhor este processo. ​

### Review de Produto (PP):​
* Não temos a confiabilidade que os pacotes foram a mesma maneira de QA para PP. ​
* Migração para git pode ajudar​
* Sugestão: usar somente 1 pacote nugget​
* Imagens não carregadas e erros 500. ​


