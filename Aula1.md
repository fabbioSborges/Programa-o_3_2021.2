# Aula 01 - Introdução a Programação WEB

## Motivação
O mercado de trabalho de tecnologia continua em amplo crescimento, com inúmeras oportunidades disponíveis e alta demanda por bons profissionais. 
Dentro desse contexto, as pessoas programadoras são peça chave para o sucesso de startups e o desenvolvimento de novas tecnologias em empresas consolidadas.


## Construindo meu primeiro site
É muito trabalhoso criar um site profissional, então se você é um iniciante em desenvolvimento web, começe pelo básico para depois avançar em tecnologias mais complexas

**Para construir um site existe muitas ferramentas e diferentes linguagens**

## Algumas dicas

### Instalando os programas básicos

Quando se trata de ferramentas para construir um site, há muito a se escolher.
1. Um computador rodando Windows, macOS ou Linux.
2. Um editor de texto, para escrever código. Visual Studio Code, Notepad++, Sublime Text, Atom
3. Navegadores web, para testar os códigos. Atualmente os navegadores mais usados são Firefox, Chrome, Opera, Safari, Internet Explorer e Microsoft Edge. Você também deve testar o desempenho do seu site em dispositivos móveis e navegadores antigos que seu público-alvo ainda esteja usando (como o IE 8–10). 
4. Um editor gráfico, como o GIMP, Paint.NET , Photoshop, XD , FIGMA
5. Um sistema de controle de versão, para gerenciar arquivos em servidores, colaborar em um projeto com uma equipe, compartilhar códigos e ativos, e evitar conflitos de edição. 
6. Templates, bibliotecas, frameworks, etc., para acelerar a funcionalidade da escrita.
Além de mais ferramentas!
7. Ferramentas para Teste

### Primeiramente Planejamento
Como será o seu site? 
Discute o trabalho de planejamento e design que você precisa fazer para o seu site antes de escrever o código

"Quais informações meu site oferece?"

"Quais fontes e cores eu quero?" 

"O que meu site faz?"

Para começar, você deve responder às seguintes questões:

1. Sobre o que é seu site?
2. Que informação você está apresentando sobre o assunto?
3. Como será seu site, em termos simples. Qual é a cor de fundo? Qual é o tipo de fonte apropriado: formal, desenhado, negrito e gritante, sutil?

### Padrões

Um site consiste de muitos arquivos: conteúdo em texto, código, folhas de estilo, conteúdo em mídia e por aí vai. Ao criar um site, você precisa reunir esses arquivos em uma certa estrutura no computador local, certificar-se de que eles possam se comunicar e obter todo o conteúdo antes de enviá-los para o servidor.

#### Referencias
> https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web

## História da Internet
[![Watch the video](https://redelan.files.wordpress.com/2013/01/guerreiros_internet_destaque.png)](https://www.youtube.com/watch?v=pKxWPo73pX0)

## Como a Web funciona

Computadores conectados à web são chamados clientes e servidores. Um diagrama simplificado de como eles interagem pode ter essa aparência:
![image](https://user-images.githubusercontent.com/56282530/121830650-d6c27f00-cc9b-11eb-970c-252884119505.png)
* Clientes são os típicos dispositivos conectados à internet dos usuários da web (por exemplo, seu computador conectado ao seu Wi-Fi ou seu telefone conectado à sua rede móvel) e programas de acesso à Web disponíveis nesses dispositivos (geralmente um navegador como Firefox ou Chrome).
* Servidores são computadores que armazenam páginas, sites ou aplicativos. Quando o dispositivo de um cliente quer acessar uma página, uma cópia dela é baixada do servidor para a máquina do cliente para ser apresentada no navegador web do usuário.

![Como a internet funciona](https://www.youtube.com/watch?v=7_LPdttKXPc)

### O  que acontece, exatamente?

1. O navegador vai para o servidor de **DNS** e encontra o endereço verdadeiro de onde o site está hospedado.
2. O navegador manda uma mensagem de **requisição HTTP para o servidor**, pedindo que envie uma cópia do site ao cliente. Esta mensagem e todos os outros dados enviados entre o cliente e o servidor são enviados pela sua conexão à **internet usando TCP/IP**.
3. Se o servidor aprovar a requisição do cliente, o servidor enviará ao cliente uma mensagem "200 OK", que significa "Claro que você pode ver esse site! Aqui está" e então começa a enviar os **arquivos do site para o navegador** como uma série de pequenos pedaços chamados pacotes de dados 
4. O navegador monta os pequenos pedaços em um site completo e o mostra a você.

#### Rede de Computadores

Quando dois computadores precisam se comunicar, você precisa conectá-los, seja fisicamente
![image](https://mdn.mozillademos.org/files/8441/internet-schema-1.png)

Uma rede não é limitada a dois computadores. Você pode conectar quantos computadores desejar. 
![image](https://mdn.mozillademos.org/files/8443/internet-schema-2.png)

isto se torna complicado. Para resolver este problema, cada computador na rede está conectado à um pequeno computador especial chamado de roteador. Este roteador tem um único trabalho: como um sinalizador em uma estação de trem, ter certeza de que a mensagem enviada por um determinado computador chege ao computador destinatário corretamente. 

![image](https://mdn.mozillademos.org/files/8445/internet-schema-3.png)

**Uma rede de redes
![image](https://mdn.mozillademos.org/files/8449/internet-schema-5.png)

Precisamos conectar essa rede com o resto do mundo!!!
 Para fazer isto, vamos precisar conectar nossa rede a um Provedor de Serviço de Internet (ISP, em inglês). Um ISP é uma compania que gerencia alguns roteadores especiais que são conectados e pode também acessar roteadores de outros ISPs.
 ![image](https://mdn.mozillademos.org/files/8453/internet-schema-7.png)
 
#### Pilha de Protocolo TCP/IP

> conjunto de protocolos encarregado de realizar o envio e o recebimento de dados dentro da internet. De uma forma mais simples, esse protocolo é considerado o principal comando na internet. Sem ele, o envio e o recebimentos de dados MS não seria possível.
![image](https://testarportasabertas.com.br/wp-content/uploads/2018/04/modelo-TCP-IP.png)

As camadas são divididas em funções e classificadas de acordo com as funções mais importantes da rede.
* Camada de aplicação: SMTP (email); HTTP (navegação na internet); FTP (transferência de arquivos)
* Camada de transporte: tarefas executadas são relacionadas ao envio e recebimento de dados.
* Camada de rede: dividem os dados em pacotes e os envia para a camada interface. Recebem o carimbo do remetente e do destinatário, como se fosse uma entrega de cartas. Esse carimbo nada mais é do que o endereço virtual (IP)
* Camada fisica.

![image](https://weeklyti.files.wordpress.com/2013/04/protocolos-tcpip.png)

#### DNS
Servidor de Nome de Domínio (Domain Name Servers) são como um catálogo de endereços para sites. Quando você digita um endereço web no seu navegador, o navegador procura no servidor de DNS para localizar o endereço real do site, antes que ele possa recuperar o site. O navegador precisa encontrar em qual servidor web a página está hospedada para que ele possa mandar mensagens HTTP ao lugar certo
.
Qualquer computador conectado na Internet pode ser alcançado através de um endereço IP público.
Endereços de IP são difíceis de lembrar e podem mudar com o tempo. Para resolver todos esses problemas nós usamos endereços legíveis chamados domain names.
Estrutura dos domain names
> Um "nome de domínio" tem uma estrutura simples feita de várias partes (pode ser apenas uma parte, duas, três...), separados por pontos e lidos da direita para a esquerda

Os servidores DNS são servidores especiais que relacionam o endereço da web que você digita no seu navegador (como "mozilla.org") com o endereço real do site (IP).
Sites podem ser acessados diretamente pelo seu endereço IP. Você pode encontrar o endereço IP de um site, digitando seu domínio em uma ferramenta como o ![IP Checker](https://ipinfo.info/html/ip_checker.php)


![image](https://mdn.mozillademos.org/files/8405/dns-ip.png)

#### HTTP

Protocolo de Transferência de Hypertexto (Hypertext Transfer Protocol) é um protocolo de aplicação que define uma linguagem para clientes e servidores se comunicarem entre si. 

O HTTP é uma sigla de HyperText Transfer Protocol que em português significa “Protocolo de Transferência de Hipertexto”. É um protocolo de comunicação entre sistemas de informação que permite a transferência de dados entre redes de computadores, principalmente na World Wide Web (Internet).
 
O HTTP é o protocolo utilizado para transferência de páginas HTML do computador para a Internet. Por isso, os endereços dos websites (URL) utilizam no início a expressão “http://”, definindo o protocolo usado. 

![image](http://wiki.ixcsoft.com.br/images/8/8a/FuncionamentoWeb2.png)

Servidores Web são responsáveis por armazenar e trocar informações com outras maquinas. Para se ter um Servidor Web é necessário ter pelo menos dois participantes em cada troca de informações: um cliente, que solicita informações, e um servidor, que atende a esses pedidos.

O servidor web é a peça mais importante da infraestrutura de um site na internet. Ele é um programa que usa o HTTP (Hypertext Transfer Protocol) para servir os arquivos que formam páginas da web para os usuários, em resposta aos seus pedidos, que são encaminhadas pelos clientes HTTP de seus computadores.

Cada lado exige um programa especializado para negociar a troca de dados. No caso do cliente, é usado um browser, como o Google ou Firefox. No lado do servidor é necessário obter um software para negociar transferência de dados entre clientes e servidores via HTTP. O software depende do sistema operacional para seu funcionamento. 

#### Servidor WEB
Um servidor web nada mais é que um computador hospedando um ou mais websites. "Hospedar" significa que todas as páginas web e seus arquivos auxiliares estão disponíveis a partir daquele computador. O servidor web enviará qualquer página web a partir do website que está hospedado nele para o navegador de qualquer usuário que o tenha requisitado (feito uma requisição).

1. No lado do hardware, um servidor da web é um computador que armazena o software do servidor da web e os arquivos de componentes de um site. (por exemplo, documentos HTML, imagens, folhas de estilo CSS e arquivos JavaScript) Um servidor da web se conecta à Internet e oferece suporte ao intercâmbio de dados físicos com outros dispositivos conectados à web.
2. No lado do software, um servidor da web inclui várias partes que controlam como os usuários da web acessam os arquivos hospedados. No mínimo, este é um servidor HTTP .

![image](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server/web-server.svg)

#### Intenet e WEB são as mesmas coisas
A Internet é uma infraestrutura técnica que permite conectar bilhões de computadores. A Internet é a infraestrutura, enquanto a Web é um serviço construído sob esta infraestrutura. Vale a pena notar que existem diversos outros serviços que funcionam na Internet, tais como email

### Página WEB
Uma página web é simplesmente um documento que é renderizado ("mostrado") por um navegador. Tais documentos são escritos com uso da linguagem de marcação HTML . Uma página web pode possuir uma variedade de diferentes tipos de recursos incorporados a ela, como:

informação de estilo — controlando como a página se apresenta e se comporta (look-and-feel)
scripts — os quais são responsáveis por adicionar interatividade à página
mídia — imagens, sons e vídeos.

https://codepen.io/pen/

#### HTML
HTML não é uma linguagem de programação; é uma linguagem de marcação, usada para definir a estrutura do seu conteúdo. HTML consiste de uma série de elementos, que você usa para delimitar ou agrupar diferentes partes do conteúdo para que ele apareça ou atue de determinada maneira.
![image](https://i.imgur.com/rgZBXCd.png)


#### CSS
Linguagem de folhas de estilos. Isso significa que o CSS permite aplicar estilos seletivamente a elementos em documentos HTML. 
![image](https://mdn.mozillademos.org/files/9461/css-declaration-small.png)

#### JAVASCRIPT
JavaScript é a linguagem de programação usada para adicionar interatividade ao seu site (por exemplo: jogos, respostas quando botões são pressionados ou dados são inseridos em formulários, estilo dinâmico, animações). 
JavaScript em si é bastante compacto, mas muito flexível. Os desenvolvedores escreveram uma grande variedade de ferramentas sobre a linguagem JavaScript principal, desbloqueando uma grande quantidade de funcionalidades extras com o mínimo de esforço. Essas incluem:

* Interfaces de programação de aplicativos no navegador (APIs) - APIs integradas em navegadores da Web, fornecendo funcionalidade como criar dinamicamente HTML e definir estilos CSS, coletar e manipular um fluxo de vídeo da webcam do usuário ou gerando gráficos 3D e amostras de áudio.
* APIs de terceiros  — Permitem que os desenvolvedores incorporem funcionalidades em seus sites de outros provedores de conteúdo, como o Twitter ou o Facebook.
* Estruturas e bibliotecas de terceiros — você pode aplicá-las ao seu HTML para permitir que você crie rapidamente sites e aplicativos.

## Exemplo
![Prática](https://codepen.io/fabbioborges000/pen/XWMyZYo) 
