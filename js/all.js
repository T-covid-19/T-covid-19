var vm = new Vue({
    el: '#mainvue',
    data: {

        presents: [ //介紹
            {
                title: '起源',
                content: 'COVID-19是於2019年12月於中國湖北省武漢市開始爆發，後續於華南海鮮市場向外擴散至全省，且於2020年1月初有外國媒體報導，世界衛生組織當時認為此病毒「可能」有限度人傳人，且當時適逢春節假期各地往來密集，造成中國全省加速擴張，於當月月底開始封鎖部分縣市禁止人民出入，並開始啟動防疫。',
                img: 'img/華南海鮮市場.jpg',
            },
            {
                title: '命名',
                content: '世界衛生組織在2020年1月13日暫時命名為2019新型冠狀病毒(2019-nCoV)，隨後1月30日命名改為2019新型冠狀病毒急性呼吸疾病（2019-n CoVacute espir atory disease），2月11日國際病 毒分類委員會命名「SARS-CoV-2」（嚴重急性呼吸道症候群冠狀病毒2型，Severe Acute Respirat ory Syndrome Coronavirus 2），同日世界衛生組 織後正式正名為2019冠狀病毒病（英語：corona virus disease 2019，縮寫：COVID-19）。',
                img: 'img/譚德賽.jpg',

            },
            {
                title: '來源',
                content: '目前針對來源並沒有定論，中國的醫學團隊普遍認為是由蝙蝠或穿山甲為自然宿主或中間宿主，且由華南海鮮市場的野生動物販賣感染出去；而部分國家研究可能世界各國在2020年11月或更早就開始在外傳播，而中國是最早群聚爆發且被發現的地方，而目前的感染都是經過變異過的版本。',
                img: 'img/蝙蝠.png',
                //https://news.campaign.yahoo.com.tw/lung-health/arti.php?id=65ed8136-c953-3f13-b5eb-029222397ebe
            },



        ],
        Introductions: [ //介紹
            {
                title: 'COVID-19型態',
                content: 'COVID-19是由正鏈單股RNA病毒組成，顆粒的形狀呈圓 形或橢圓形，外層有宿主細胞提供得脂質雙層所包裹， 且有 三種主要蛋白：包膜蛋白（E蛋白）、膜蛋白（M蛋白）和刺 突蛋白（S蛋白）。',
                img: 'img/病毒.png',
            },
            {
                title: 'COVID-19症狀',
                content: 'COVID-19的症狀多變會因人而異，且後續產生許多改變，使得症狀有不明 顯的症狀，甚至有患者是無症狀感染者，且年輕人主要為輕症為主，而老年人 容易引起併發症，導致更嚴重的病症而死亡；且根據《臨床微生物學與感染》 （Clinical Microbiology and Infection）的醫學雜誌在2020年3月到2020年8月在 法國巴黎針對約43000名COVID-19患者的研究，研究表示有85.9%的人出現疲 勞、61.９%的人出現咳嗽、54%的人出現肌肉痠痛、、54%的人出現顫抖、4 9.3%的人出現呼吸急促、48.5%的人出現發燒、36%的人出現腹瀉、31.5%的 人出現味覺喪失。',
                img: '',
            },




        ],

        variants: [ //介紹
            {
                title: '變種病毒介紹',
                content: '歐美的感染者多為無症狀和嗅味覺喪失較多，東亞則為呼吸道症狀較多；但由於有許多無症狀感染者，因無法了解自己已感染病毒，使得其他人感染機率提高；COVID-19比起SARS症狀更輕微，所以傳播性更強，且可以透過唾液、排泄物經由眼睛、鼻腔、口腔進入人體，進而造成感染，有部分人會在檢驗陰性之後又重新感染病毒，也有人感染兩種類型的病毒，而感染兩種以上病毒者，更容易使RNA病毒進行病毒遺傳更優秀基因，使病毒進行突變。<br><br>由於RNA病毒容易突變，目前有全球主要有六種主要型態，目前以第6型為主要流行類型，下表顯示不同型態流行趨勢。',
                img1: 'img/全球類型.PNG',
                img2: 'img/台灣類型.PNG',

            },


            {
                title: '英國（B.1.1.7）',
                content1: '<br>英國變種病毒最早是在2020年9月時在英國肯特郡（Kent）和倫敦發現，並於2020年11月開始散播出去，在英國11月初只占當地新確診數約2%，11月底開始已接近15%，在大約12月21日左右已經占當地新確診數超過50%的數量，並在英國為主要流行病毒，且在2021年1月7日達到最高峰，約有44944例的英國變種病毒，趨勢圖如下。<br><br><img src=',
                img1: 'img/英國/英國變種病毒高峰.PNG',
                content2: '<br>且在同時台灣出現首例的英國變種病毒，並開始在世界散播，成為世界主要變種病毒，且依據美國疾病管制與預防中心（CDC）數據中目前大約有143個國家或地區有英國變種病毒的足跡。',
                img2: 'img/英國/B.1.1.7 全球.PNG',
                content3: '<br>根據瑞士SARS-CoV-2測序協會使用GISAID數據的監測中，可以從下圖看 出，英國變種病毒的趨勢快速的提升，且逐漸成為當地的主要變種病毒株。 （註 台灣比例因主要當時為境外移入且數量不多的，因此有偏差）',
                img3: 'img/英國/B.1.1.7 比例.png',
                content4: '<br>而從美國疾病管制與預防中心（CDC）網站的數據，也可以看出各種病毒的占比，可以發現英國變種病毒（B.1.1.7）逐日的上升。',
                img4: 'img/英國/美國變種病毒趨勢.png',
                content5: '<br>而英國變種病毒也非代表有不同的症狀，根據國際公認四大醫學期刊的《刺 胳針》（The Lancet） 上的研究分析，在英國變種病毒已開始在英國廣為流傳的 情況之下，症狀並沒有明顯的變化其研究效果如下圖所示。',
                img5: 'img/英國/英國變種病毒症狀.png',
                content6: '<br>可得知在英國變種病毒（B.1.1.7）之下並不會產生大規模的症狀改變，因此醫生在進行判斷時，也可依據舊有的症狀來進行分析病況，不至於產生誤診的情況發生。',

            },
            {
                title: '南非（B.1.351）',
                content1: '<br>南非變種病毒最早出現於南非東開省納爾遜·曼德拉灣發現，也迅速的成為南非的主要病毒株，且在非洲開始擴散，且逐步擴散在世界各國，目前超過100多國家有出現B.1.351病毒株。',
                title1: "B.1.351在全球散播情形",
                img1: 'img/南非/B.1.351全球.PNG',
                title2: "B.1.351在全球散播情形",
                img2: 'img/南非/南非病毒比例.PNG',

                content2: '<br>且南非於2021年1月8日達到高峰，有15979例南非變種病毒，後因施打疫苗以及有嚴格管制下，雖變種比例再度升高但尚未爆發嚴重疫情。 ',
                title3: "B.1.351在南非高峰時期",
                img3: 'img/南非/南非變種病毒高峰.PNG',



            },
            {
                title: '巴西（P.1）',
                content1: '<br>巴西變種病毒最早是在巴西亞馬遜州瑪瑙斯發現，當今巴西沒有趨緩跡象，仍是巴西最主要病毒株，且在巴西附近國家例如智利、阿根廷也造成一定比例的擴散，而最近美國以及義大利也加速擴散，尤其義大利最近更甚至突破新增加的確診數超過5成的案例，而全球有大約60多國有出現P.1病毒株。',
                title1: "P.1在全球散播情形",
                img1: 'img/巴西/P.1全球.PNG',
                title2: "P.1在巴西高峰情形",
                img2: 'img/巴西/巴西變種病毒高峰.PNG',
                title3: "P.1在主要散播國家新增比例占比",
                img3: 'img/巴西/P.1變種病毒比例.PNG',

            },
            {
                title: '印度（B.1.617）',
                content1: '<br>印度變種病毒首次在2020年11月發現於印度馬哈拉施特拉邦，且從2021年2月開始肆虐印度造成極大的疫情，也造成全球大約有近50個國家遭受波及。',
                title1: "B.1.617在全球散播情形",
                img1: 'img/印度/B.1.617.PNG',
                content2: '<br>且目前有三個子系，分別是B.1.617.1、B.1.617.2、B.1.617.3，且當前印度變種病毒占印度的占比如下',
                title2: "B.1.617在印度子系比例",
                img2: 'img/印度/印度子系變種.PNG',
                content3: '<br>也造成全世界的緊張，包含本來英國首相強生和日本首相菅義偉都推辭掉原先到印度的參訪，許多國家紛紛禁止有印度旅遊史的旅客，台灣也在5月4日暫緩入境，而世界衛生組織（WHO）在2021年5月10日也將印度變種病毒列為『全球等級疑慮』，而也被同列此等級還有英國變種（B.1.1.7）、南非變種（B.1.351）、巴西變種（P.1）<br><br>此波疫情造成印度醫療量能嚴重不足，且當地衛生習慣較差，使當地確診數 屢破新高，最高峰甚至突破單日40萬人確診(不限病毒株) ， 使得死亡數也提高 ， 目前最高單日死亡數破4000人，且數值仍在升高，雖目前B.1.617類型在印度有趨 緩，但仍至少有5、6成的比例。',
                title3: "B.1.617在印度變種病毒高峰",
                img3: 'img/印度/印度變種病毒高峰.PNG',
                title4: "B.1.617在主要散播國家新增比例占比",
                img4: 'img/印度/印度病毒比例.PNG'
            },




        ],
        Medicals: [
            {/*0*/
                title: "檢測方式",
                content1: '根據目前調查潛伏期為1~19天，中位數為5天，但有部分個案潛伏期可長達27天，且在發病前幾天即有傳染能力，因此提早檢測出來可防止疫情擴散，以及可以來方便篩檢出確診的病患，而檢驗方式可以透過1.核酸分子檢測（RT-PCR檢測）2.核衣殼、棘狀蛋白質檢測（抗原快篩）3.人體產生抗體檢測（抗體快篩）。',
            },
            {/*1*/
                title: "核酸分子檢測（RT-PCR檢測）",

                content1: '是透過遺傳物質的核酸做為檢測標準，檢驗時間較長數小時或可長達一天，準確率最高，為解隔離標準，且能找到正在被感染者，但技術高，測驗後有Ct值來當作檢測數值，Ct值全名『Cycle threshold （Ct） value』中文名『循環數閥值』，大約意思是病毒基因被放大2的N次方，即可被檢驗出來，而N為Ct值的數值，例如Ct值20代表病毒基因被放大2的20次方就被檢驗出來，因此Ct值20比Ct值30更為有傳染力，目前因本土疫情擴散，醫療量能不足且數據上Ct值30以上已經降低感染能力，所以台灣設定Ct值超過30即可回家，而PCT檢測有可能會因病毒量少而產生陰性結果，採檢方法為採上、下呼吸道的病菌，實驗需在專業人士和特殊儀器才能檢測。'
            },
            {/*2*/
                title: "核衣殼、棘狀蛋白質檢測（抗原快篩）",

                content1: '是透過人體中的病毒抗原（蛋白質）做為檢測標準，檢驗時間約半小時，具有單一性，採檢方法為採檢咽喉上的病菌，可快速檢驗，但快篩無法量化數值大小，只能看出是否為陽性或陰性，所以會出現偽陽性、偽陰性，所以只有陽性率較大、疫情較為嚴重的地方使用，否則偽陽性、偽陰性都會造成防疫破口，因此在台灣本土爆發之後，各縣市政府開始使用快篩來快速重點地區檢測，來迅速抓出潛在病患，再把陽性結果的患者，做一次PCR檢測以求正確，準確度最低。',
            },
            {/*3*/
                title: "人體產生之抗體檢測（抗體快篩）",

                content1: '是透過人體產生的抗體做為檢測標準，檢驗時間約半小時，採檢方法為抽血，且由於技術門檻較低、操作簡單、安全，但需等到人體已感染數天且產生抗體才能檢測，主要功用是為了疫情追蹤使用。',
            },
            {/*4*/
                title: "藥物",
                content1: 'COVID-19目前並沒有特效藥，現今通常針對輕度患者給予症狀的紓解藥物，重症病患才考率使用其他藥物醫療。',
            },
            {/*5*/
                title: "瑞德西韋",

                content1: '瑞德西韋（英語：Remdesivir），是由美國吉利德科學公司新開發的抗病毒藥物，原本用來針對伊波拉病毒和抑制SARS和MERS的複製，台灣中研院、國衛院也合成出瑞德西韋，並開始進行實驗階段，目前台灣和美國有簽訂臨床試驗。<br><br>但是在世界衛生組織（WHO）的官網上，刊登了一篇在中國早期的研究，發現在237名病患當中，讓158人進行用藥、79人對照組，但發現使用瑞德西韋的患者死亡率為13.9%，比沒有用藥的12.8%來得高，且158人當中有18人出現嚴重的副作用，隨後WHO刪除此篇報告，而藥廠也表示「該研究收案人數不足而提前終止，因此沒有足夠的數據得出具統計學意義的結論」。',

            },
            {/*6*/
                title: "法匹拉韋",

                content1: '法匹拉韋（英語：Favipiravir），由日本富山大學醫學部白木公康教授與富士膠片富山化學共同研發的抗病毒藥物，該藥原本是抗流感和抗RNA病毒的藥物，目前日本、印度、俄羅斯等國接受使用此藥物治療，目前此藥物正在進行大規模的臨床實驗。',

            },
            {/*7*/
                title: "奎寧",

                content1: '奎寧（法語：quinine），是一種用於治療與預防瘧疾且可治療焦蟲症的藥物，但由於取得較為容易，且有可能導致嚴重的心律問題等副作用，所以加拿大、美國等國對此藥的用藥提出警告，可能讓吃藥的人因副作用導致死亡，之後各國都開始禁止使用該藥品，以免因副作用死亡。',

            },
            {/*8*/
                title: "疫苗介紹",

                content1: '目前世界各國都主力開發疫苗，有許多國家以及廠商皆投入龐大資源與人力，希望可以讓疫情趨緩，目前國際上有3個主要疫苗分別為1.BNT疫苗2.AZ疫苗3.Moderna疫苗，台灣國內也有業者在研發疫苗，也進入實驗階段；但並非施打疫苗及能馬上發揮功用，有些需要等到第二劑施打後再過1至2週時間才有保護力，孩童以及孕婦等較高風險身分者不建議施打疫苗。',
                title1: '現今疫苗注意事項表',
                img1: 'img/注意事項表.PNG',
                title2: '變種病毒對疫苗的影響',
                img2: 'img/變種病毒疫苗.PNG',

            },
            {/*9*/
                title: "疫苗原理",

                content1: '據其製造原理分別有mRNA疫苗以及腺病毒載體疫苗兩大類；mRNA疫苗含有一段可轉譯成SARS-CoV-2病毒棘蛋白（病毒結構蛋白之一，為目前SARS-CoV-2疫苗選定之疫苗抗原）的mRNA，接種後在人體細胞質內製造棘蛋白此疫苗抗原並釋出細胞外，進而刺激免疫系統產生對抗SARS-CoV-2棘蛋白的細胞免疫力與體液免疫力；病毒載體疫苗則是利用攜帶有SARS-CoV-2 棘蛋白核酸序列（DNA核酸序列）的腺病毒，接種後在人體細胞內製造SARS-CoV-2棘蛋白此疫苗抗原並自人體細胞釋出，誘發人體免疫系統產生保護力對抗病毒入侵。',

            },
            {/*10*/
                title: "BNT疫苗",

                content1: 'BNT疫苗全名（PfizerBioNTech COVID-19 Vaccine） 俗稱輝瑞疫苗，是由全球最大製藥公司輝瑞企業研發而成，施打必須施打2劑，兩劑之間間隔時間最短約3星期，施打目前預估保護力95%，但是針對南非變異病毒防禦能力有下降，我國目前積極向COVAX爭取疫苗，目前期盼能購入50萬劑，但先前有傳出可購買但卻一一破局，因此BNT疫苗仍取得上較為困難。',
            },
            {/*11*/
                title: "AZ疫苗",

                content1: 'AZ疫苗全名（COVID-19 Vaccine AstraZeneca） ，是由AstraZeneca公司和英國牛津大學共同研發而成，施打必須施打2劑，兩劑之間間隔時間最長約2個月，施打保護力並不高約70-80%，針對目前流行變異病毒皆防禦能力有所下降，且因部分民眾施打後產生血栓症狀，部分國家停止使用或限制年齡層使用，我國目前已透過COVAX採購31萬劑，第二批疫苗於2021年5月19日抵台，大約有41萬劑，但因民眾害怕血栓現象等因素，因此指揮中心指揮官兼衛生福利部部長陳時中帶頭施打疫苗，後因台灣本土疫情爆發，使得疫苗施打率快速提高，截至5月23止施打數量約30.2萬劑。',
                title1: '陳時中帶頭施打AZ疫苗',
                img1: 'img/其他/帶頭施打.jpg',
            },
            {/*12*/
                title: "Moderna疫苗",

                content1: 'Moderna疫苗全名（Moderna COVID-19 Vaccine） 俗稱莫德納疫苗，事由美國莫德納公司研發而成，施打保護力95%，目前研究認為施打3劑以上可對抗變種病毒有更佳效果，我國目前已向藥廠購入505萬劑疫苗，期盼可以5月可以到貨。',
            },
            {/*13*/
                title: "國產疫苗",

                content1: '而台灣也有公司開始研發本土疫苗，目前有兩家公司積極研發，分別為高端疫苗和聯亞生技，兩家皆已完成二期實驗，力拼6月底申請國內緊急使用授權，讓台灣民眾可以施打本土疫苗，且希望能在今年年底能有500萬劑的量提供施打。',
            },


        ],
        itemList: [
            { day: "2019年12月1日", content: "中國湖北省武漢市的華南海鮮批發市場，開始爆發以及傳播新種肺炎", id: "1" },
            { day: "2019年12月31日", content: "中國向WHO(世界衛生組織)通報有27例不明肺炎案例，7人病危，同時台灣在針對中國武漢直航入境的班機，加強登機篩檢", id: "2" },
            { day: "2020年1月7日", content: "WHO命名為2019新型冠狀病毒（Novel coronavirus, 2019-nCoV）", id: "3" },
            { day: "2020年1月13日", content: "泰國出現首例病例，已開始向全球傳播", id: "4" },
            { day: "2020年1月20日", content: "中國呼吸病學專家認為病毒可以人傳人，同時台灣衛生福利部疾病管制暑成立嚴重特殊傳染性肺炎中央流行疫情指揮中心", id: "5" },
            { day: "2020年1月23日", content: "中國宣布武漢封城，世界各國也開始停飛，WHO認為疫情尚未構成全球緊急情況，沒證據顯示可以人傳人", id: "6" },
            { day: "2020年1月31日", content: "WHO宣布將新冠肺炎列為國際公共衛生緊急事件", id: "7" },
            { day: "2020年2月2日", content: "台灣高中職以下延後開學兩週", id: "8" },
            { day: "2020年2月3日", content: "宣布2/6日起口罩販售實名制，可持健保卡到藥局購買，並進行購買人流控管，7天2片", id: "9" },
            { day: "2020年2月8日", content: "全面暫停兩岸航線", id: "10" },
            { day: "2020年2月11日", content: "台灣將港澳、新加玻、泰國旅遊警示提高", id: "11" },
            { day: "2020年2月12日", content: "WHO將武漢肺炎更名為COVID-19", id: "12" },
            { day: "2020年2月15日", content: "埃及出現首例案例，開始擴散到非洲", id: "13" },
            { day: "2020年2月22日", content: "日韓疫情升溫，台灣為此升級兩國的旅遊警示至第二級；伊朗義大利也開始加速傳播", id: "14" },
            { day: "2020年3月9日", content: "台灣宣布口罩可透網路預購超商取貨；世界各國疫情狀況也開始急速升溫也提高國內管制", id: "15" },
            { day: "2020年3月12日", content: "WHO宣布COVID-19為全球大流行疾病；運動賽事受到影響 中華職棒宣布延期 美國NBA宣布無限期暫停", id: "16" },
            { day: "2020年3月14日", content: "美國宣布進入國家緊急狀態並撥500億美元進行對抗疫情，台灣對美國部分州提升旅遊疫情警示，指揮中心將全球皆列為第一級警示", id: "17" },
            { day: "2020年3月15日", content: "美國聯準會宣布降息至接近0利率，並用7000億美元進行量化寬鬆(QE)政策", id: "18" },
            { day: "2020年3月17日", content: " 法國宣布禁止戶外逗留且關閉和歐盟各國的邊境；菲律賓股市今年起重跌30%，因此關閉股市；日本奧運副主席確診引發討論是否延期奧運", id: "19" },
            { day: "2020年3月24日", content: "政院宣布個人所得稅可延期繳納，或分3年繳納；日本首相、東奧主席、國際奧委會主席宣布東京奧運延期，於2021年夏天舉辦", id: "20" },
            { day: "2020年3月27日", content: "英國首相強生確診", id: "21" },
            { day: "2020年4月2日", content: "政院通過第二階段紓困，追加1500億，總計達到1兆500億元進行紓困，且禁止探病但可陪病1人，疫情提升速度加快，美國失業人數提高，失業率為6%，原先0.6%", id: "22" },
            { day: "2020年4月7日", content: "日本宣布將部分行政區發布緊急狀態宣言", id: "23" },
            { day: "2020年4月9日", content: "全球感染人數超過150萬人", id: "24" },
            { day: "2020年4月11日", content: "全球死亡人數超過10萬人", id: "25" },
            { day: "2020年4月15日", content: "民間人士發起#ThisAttackComesFromTaiwan並登紐約時報頭版，要求台灣必須加入WHO，WHO為此回應認為WHO沒有排出和台灣交流；美國總統川普停止捐助WHO", id: "26" },
            { day: "2020年4月18日", content: "台灣敦睦艦隊爆發首起軍艦確診，曾停靠泊流", id: "27" },
            { day: "2020年4月20日", content: "因各國禁航和封城等原因，原油需求下滑，期貨交易首次跌至負數，美國西德州中級原油跌至每桶價格-37.63美元", id: "28" },
            { day: "2020年4月22日", content: "美國簽暑暫時禁止移民入境美國", id: "29" },
            { day: "2020年4月28日", content: "東奧主席表示若明年仍有疫情可能取消東奧，日本政府無償提供法匹拉韋給部分國家；紐西蘭解除封城", id: "30" },
            { day: "2020年5月18日", content: "WHA(世界衛生大會)用視訊方式舉行，台美共同發表聲明認為無法邀請台灣餐與WHA表示遺憾，同時美國向WHO要求30天內具體改革，不然可能凍結會費或退出WHO", id: "31" },
            { day: "2020年5月29日", content: "美國退出WHO，並不給予資金", id: "32" },
            { day: "2020年6月19日", content: "巴西確診人數超過100萬人成為繼美國超過百萬確診第二個國家", id: "33" },
            { day: "2020年6月28日", content: "全球感染人數超過1000萬人；歐盟預計有限度重啟邊界", id: "34" },
            { day: "2020年7月7日", content: "巴西總統波索納洛確診", id: "35" },
            { day: "2020年7月8日", content: "美國不滿WHO和中國，宣布正式退出WHO", id: "36" },
            { day: "2020年7月13日", content: "印度確診數第三個確診數超過100萬", id: "37" },
            { day: "2020年8月10日", content: "美國衛生與公共服務部部長阿札爾率團訪台，並簽下醫衛合作了解備忘錄，為1979年台美斷交以來最高層級訪台：非洲奈及利亞出現變種病毒Lineage B.1.1.207，是第一個開始受關注的變異病毒", id: "38" },
            { day: "2020年8月20日", content: "世界銀行總裁警告疫情可能使1億人口陷入極端貧窮", id: "39" },
            { day: "2020年9月1日", content: "日本宣布開放台灣等國入境以色列也將台灣列入免須隔離名單；英國變種病毒株B.1.1.7開始在英格蘭散波", id: "40" },
            { day: "2020年9月14日", content: "經濟合作暨發展組織（OECD）14日表示，G20國家第2季GDP萎縮6.9%，在2009年金融海嘯是1.6%", id: "41" },
            { day: "2020年9月18日", content: "以色列實行3星期全國封鎖", id: "42" },
            { day: "2020年9月29日", content: "全球死亡數突破100萬人", id: "43" },
            { day: "2020年10月1日", content: "美國總統川普和夫人梅蘭妮雅確診，為國際以及美國政壇投下震撼彈，且當時為美國大選前一個月", id: "44" },
            { day: "2020年10月18日", content: "捷克首都布拉格爆發暴力示威，抗議政府防疫措施，捷克警方動用催淚彈、水砲", id: "45" },
            { day: "2020年10月28日", content: "全球疫情惡化過去一周全球確診超過200萬，歐洲疫情加深使部分國家加強禁令", id: "46" },
            { day: "2020年11月1日", content: "歐洲確診超過1000萬例，英國變種病毒開始擴散；澳洲中央銀行降息至0.1%，並擴大購買公債", id: "47" },
            { day: "2020年11月5日", content: "義大利開始宵禁", id: "48" },
            { day: "2020年11月7日", content: "丹麥水貂養殖場爆新型冠狀病毒突變且可感染人類，丹麥下令撲殺1080家農場的1500萬隻至1700萬隻水貂，此變異病毒Cluster 5具有抵銷抗體能力，但因丹麥政府處理妥當，現今較無此案例", id: "49" },
            { day: "2020年11月8日", content: "美國確診超過1000萬", id: "50" },
            { day: "2020年11月11日", content: "台灣國內疫苗進入第二期，受試者超過5000人登記", id: "51" },
            { day: "2020年11月24日", content: "韓國疫情再次爆發，首爾禁止10人以上集會、餐廳9點後禁止內用", id: "52" },
            { day: "2020年11月29日", content: "香港第四波疫情且宣布停課", id: "53" },
            { day: "2020年12月8日", content: "部分國家開始施打輝瑞疫苗&BNT疫苗", id: "54" },
            { day: "2020年12月17日", content: "法國總統馬克宏宣布確診:東京都發布年底與年初武漢肺炎特別警報", id: "55" },
            { day: "2020年12月18日", content: "指揮中心因對印尼檢驗報告有疑慮加上入境個案增加，宣布禁止移工入台無限期延長；南非爆發變種病毒株501.V2，傳染性極高", id: "56" },
            { day: "2020年12月25日", content: "馬來西亞出現變種病毒A701V", id: "57" },
            { day: "2020年12月28日", content: "指揮中心宣布加嚴機組人員檢疫規範，機組人員須居家檢疫7天期滿採檢，再7天自主健康管理；未來確診者採檢已1次陰性加上一次核酸檢測Ct值34以上或2次Ct值34以上即可解除隔離", id: "58" },
            { day: "2021年1月7日", content: "日本首相菅義偉針對首都圈發布「緊急事態宣言」，為期一個月", id: "59" },
            { day: "2021年1月9日", content: "部立桃園醫院爆發本土感染", id: "60" },
            { day: "2021年1月17日", content: "指揮中心進駐部桃成立指揮所", id: "61" },
            { day: "2021年1月26日", content: "英國死亡人數破10萬成為歐洲第一個死亡人數超過10萬", id: "62" },
            { day: "2021年1月27日", content: "全球感染人數超過1億", id: "63" },
            { day: "2021年1月29日", content: "美國要求全美2月起搭大眾運輸一律配戴口罩", id: "64" },
            { day: "2021年2月23日", content: "荷蘭宵禁", id: "65" },
            { day: "2021年3月1日", content: "印度開始第二階段接種疫苗，印度總理莫迪帶頭施打；迦納第一個全球受COVAX分配疫苗國家該國總統帶頭接種；", id: "66" },
            { day: "2021年3月3日", content: "首批AZ疫苗11.7萬劑抵台", id: "67" },
            { day: "2021年3月12日", content: "WHO表示AZ和血栓未確定有因果關係，且核准嬌生集團疫苗", id: "68" },
            { day: "2021年3月17日", content: "指揮中心宣布台灣、帛琉旅遊泡泡啟動", id: "69" },
            { day: "2021年3月18日", content: "歐盟表示AZ仍安全有效好處大於風險", id: "70" },
            { day: "2021年3月19日", content: "義大利、法國恢復施打AZ疫苗；英國首相強森帶頭施打AZ疫苗", id: "71" },
            { day: "2021年3月21日", content: "日本解除首都圈緊急事態宣言，東京奧運確定不接受海外觀眾", id: "72" },
            { day: "2021年4月3日", content: "法國宣布全國封城4週，非特別原因，不得離家超過方圓10公里", id: "73" },
            { day: "2021年4月5日", content: "智利宣布全月關閉邊界", id: "74" },
            { day: "2021年4月20日", content: "中華航空、諾富特飯店案爆發", id: "75" },
            { day: "2021年4月30日", content: "亞洲疫情升溫", id: "76" },
            { day: "2021年5月11日", content: "台灣本土疫情大爆發；提升二級警戒", id: "77" },
            { day: "2021年5月14日", content: "萬華設立快篩站", id: "78" },
            { day: "2021年5月15日", content: "雙北升級三級警戒", id: "79" },
            { day: "2021年5月18日", content: "台灣全國停課", id: "80" },
            { day: "2021年5月19日", content: "全國升級三級警戒", id: "81" },




        ],

        presentIndex: 0,
        IntroductionIndex: 0,
        variantIndex: 0,
        MedicalIndex: 0,
    },

    computed: {
        present() {
            return this.presents[this.presentIndex]
        },
        Introduction() {
            return this.Introductions[this.IntroductionIndex]
        },
        variant() {
            return this.variants[this.variantIndex]
        },
        Medical() {
            return this.Medicals[this.MedicalIndex]
        },

    }
    // methods: {
    //     Top() {
    //         const that = this
    //         let timer = setInterval(() => {
    //             let ispeed = Math.floor(-this.scrollTop / 5)
    //             document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
    //             if (this.scrollTop === 0) {
    //                 clearInterval(timer)
    //             }
    //         }, 16)
    //     }
    // }
});
var content = document.getElementsByTagName('body')[0];
var btn = document.getElementsByClassName("btnli");
var imgop = document.getElementsByTagName("img");
var darkmode = document.getElementById('dark-change');
darkmode.addEventListener('click', function () {
    darkmode.classList.toggle('active');
    content.classList.toggle("night");
    btn.classList.toggle('btnchange');
});
darkmode.onclick = function () {
    document.body.classList.toggle("btnchange")
}
$(function () {
    $(".cursorimg").on("click", function () {
        var src = $(this).attr("src");
        $(".cursorimgshow img").attr("src", src);
        $(".cursorimgshow").show()
    });
    $(".cursorimgshow").on("click", function () {
        $(this).hide()
        $(".cursorimgshow img").attr("src", "#");
    });
});


$("header nav a").click(function () {
    $("html,body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
    }, 500);
    return false;
});
// $("#menu img").click(function () {
//     $("#menunav").toggle();
//     $("#menunavbg").show();
// });
$(function () {
    $("#menu").on("click", function () {
        $(".menunavbg").show();
        $("#menunav").show();

    });
    $(".menunavbg").on("click", function () {
        $(this).hide();
        $("#menunav").hide();

    });
    $("#menunav a").on("click", function () {
        $(".menunavbg").hide();
        $("#menunav").hide();

    });
})