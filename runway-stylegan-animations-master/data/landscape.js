//a is the downloaded array from our initial runway landscape image we selected in StyleGAN - this could be any image / values that hold between -1 and 1, and have the shape required by StyleGAN model

let a = [0.11941043429013823,0.06455438810590328,-0.033779678231830146,0.05439895759923947,0.0764801600749877,0.08483714207904738,-0.017124782498640564,-0.007984040859429624,-0.024204618176617843,0.024610340103188924,-0.020893582797358746,-0.04011299789439054,-0.09507234742157968,0.02327395969333896,-0.02568237343569749,0.0020069657981714195,-0.01529716593810673,-0.034986697176280106,-0.0832786304252544,0.001297432380240049,0.011449470284410748,0.01659146015455949,0.002698439917597134,0.21736184346791765,-0.023005665085676585,0.11436136459808002,-0.0786200499806261,0.04794670355184059,-0.15576164153131586,-0.04573165854007016,-0.025460492612718433,0.05626117579856523,0.018453641436318013,0.036864383929419035,0.032433665869328755,0.07624550854282389,0.14345916351448582,-0.020443505499340854,-0.0981090270106152,-0.092739948999543,-0.03148399599808468,-0.09791213297416364,-0.030556817110178946,0.04587306682141136,-0.009731759992937586,0.17137592574964494,-0.00006447615583395419,-0.015126018979065764,-0.05095029300962196,0.14805323293820427,0.0650809250536756,0.02187854890671935,0.005865837084699385,0.03289330283926397,0.0394948981566032,0.022547603189985818,0.03337126231817997,0.01195920938647771,0.02045211684252571,-0.051795786371756254,0.005474868507216974,-0.06237293673493992,-0.09909661510688682,0.10022166907305265,0.0046012051509810884,-0.019774451809107807,0.07249077942501334,0.22650587395012503,-0.03983515678897982,0.02157951943977044,0.11132019825175388,0.0013231297023704944,0.05196602809930907,0.009953640928126025,0.010993491226238071,-0.11371135384044928,0.005292562189415085,-0.0941213366791346,0.022299934098276283,-0.1559678404452478,-0.04007966540007653,0.013544345563316261,-0.1202593615248477,0.014343626110476647,-0.05635329538944952,0.04600481400136323,-0.007695118601331203,0.03725492035030327,0.0884785496291618,-0.05900793050310148,0.0012306143874957556,0.025745402736954852,-0.001575001940532457,0.0010329934250732087,0.04956256789959911,0.03183500421524911,-0.015180477221754904,0.029574277562322372,0.058259592221877286,-0.05552942340340748,0.06874224715605773,0.03218567666550301,0.007242310651283748,0.14301462665369064,0.03690115173701597,-0.1311326826137364,0.023639887524741374,-0.07759200846023033,0.0882377576752156,-0.03317455208531536,0.024516385877443744,-0.082788845744275,-0.11748573902403725,0.046667177695130985,0.05969147510030835,0.0563631729442345,0.1199282476715391,0.04082383864143969,-0.010111536301853241,0.01801250207167407,0.09017237002264336,-0.022111082303396597,-0.05510578878518535,0.07615752927214049,-0.17271217084095258,-0.01318087450603498,0.049819192738663406,-0.08674826725434291,0.14811092712312537,-0.052129962609451325,-0.007153854693327858,-0.08061602462972006,-0.09275647266817472,-0.08030778127411527,-0.027783596106780273,0.04621663343518253,-0.08371543296846644,0.019223249746525978,0.05399485601048941,0.051044049852305894,-0.009348896807719304,0.1008159086516083,-0.019738455068528487,0.07998707843559916,0.014389030062610001,0.06581309276218238,0.08644618274211363,-0.0790362310373434,0.0830739157947066,-0.020084896503394352,-0.12382799619212237,0.05963011514601546,0.15314111968400962,0.0820107760538033,-0.034516893694604964,0.16407602468153298,-0.10433507466331225,0.010495023112681825,0.022280091202148265,0.08074550459006583,0.05509048986055319,0.08592473375473912,-0.008966385209351337,0.04314598342811459,-0.04792068609295952,0.007211508229656466,-0.061156168968292006,0.06097272583118421,0.07197327959787633,-0.011714034347303079,0.04364338175010848,-0.03496891391278327,-0.09118418230846,0.11602722283289618,0.015454401070936583,0.057320464760897256,-0.001590881912138709,0.028807833194146353,0.012187733410931224,-0.0037260872283976995,0.026001925609732773,-0.047348803541898764,0.0844662077090729,-0.018061695875319306,0.021968962341148243,0.0368267300088507,0.14230820377847542,0.01265091702095272,0.034225242567152196,-0.1515624296713845,-0.03280093175969459,-0.18583815024945383,-0.08682671916641485,-0.05945241678220761,-0.09610671347266342,0.15272465124231055,0.1191479154448166,0.013638940784016387,0.015226881170454655,-0.07398758115249296,0.007886197547671468,0.0153157080960898,0.1126840871028279,0.03307750061753139,-0.0319002638929053,0.09867896865368803,0.03417985751883003,-0.01210033625820569,-0.02564727896044406,0.02494859964904988,-0.15902174409373318,0.09398103139508576,0.0622222382558155,0.11722203971212844,0.04989580207996764,-0.129874307123839,-0.03090222070908929,-0.05800333240300056,0.051886594545718756,-0.04275367807449608,-0.047522045809136784,-0.08892602444127964,-0.12190906807385757,0.009913966671773623,-0.04486656923814915,-0.015522438851481385,-0.06198377721121255,0.05079210785122101,0.023107022754744994,0.03619268678394409,0.058112191747367245,-0.07640301292934712,-0.05457521882002999,-0.07274302229016173,-0.05534183362076438,-0.01882700989702294,0.003738543822187485,0.02964863618618123,0.07335721338088137,0.003319129299458559,-0.08254188376358218,-0.08500145189135946,0.08655283965725938,0.0877168303963326,0.053182692516431616,0.0447638681214268,0.04332868889559696,-0.10743960942291403,-0.059209525345712735,0.054674621312829554,0.10363474066058591,-0.08547620779351882,-0.011159154948961953,-0.024977099733374745,-0.03840148586262933,-0.019309392757528215,0.10352509008831855,-0.03916023018130248,-0.059647308178580966,-0.057161520265187955,0.07258137027255258,0.020918256376937214,0.026754086259534023,0.03869798134047035,0.04384295319532364,0.06036781803602219,0.031094112991901596,-0.043815476031866,-0.07873206545182042,0.14038451164227064,0.02968455494913871,0.00885277538801679,-0.023811711430326107,0.020809543829889997,0.09559997681217468,0.05015621978527234,-0.07879862148001154,0.05916744306326443,0.01287512739559539,0.05232178735662865,-0.10531564692794251,-0.004269844041913266,-0.04369131225447269,-0.003677783239000587,-0.01460086427337146,0.07518539706600134,0.07856823521615873,0.017130013992146753,-0.09268874655005795,-0.04978912359515679,0.08003649414502245,-0.0050482135622605916,-0.00245226351308489,-0.047017318506495195,0.022296285806303773,0.08388626834077462,0.07671880894121633,0.04546774725393728,-0.04652648271158248,0.04887062355150765,-0.0459176878974706,0.029361191820058703,-0.04061342186101699,0.07268657957224364,-0.04546099023971276,-0.009066358968450611,-0.024345874530584583,0.0963557975141086,-0.037186846558206976,0.045175189587043356,0.006601234512899347,0.0830598036122309,0.06385123905079562,-0.04177733135767023,-0.10331300663420313,0.12471206714664444,0.043855912475353115,-0.011621877972961207,-0.08492892214525154,0.10288844285684885,-0.003495728525674195,0.07458806242997641,0.0792740694027103,-0.025287426911938908,-0.07459752872517028,0.09296493396667323,-0.036376428939323316,-0.0035697273238127665,-0.01962748795575952,0.18459334659751447,-0.061039354512276225,0.030458910410996767,0.008515326394363715,-0.06745982256304442,-0.08418139506968676,0.017476582987652086,0.08374093105875673,-0.054858138925552954,-0.01885377084862465,-0.10204520578249554,-0.033989768146321236,0.004842037407992529,-0.05498673395420396,0.03196275772732597,0.12456590174385357,-0.004814832939582021,-0.035845834489235034,0.12488354733877097,-0.10126883199622028,0.1092863136723202,0.11136337423350168,-0.021657469563294035,0.05609586121235525,0.07721519062790097,0.06038021912970291,-0.089337377251861,-0.021641951426815756,-0.04209800472497556,0.04445530921219462,0.05858801832410747,-0.05797202247886853,-0.007153954932976277,-0.0035673113466599907,0.0019363681146785175,-0.1542927285281791,0.03364714434198649,0.02423906909399898,-0.008870474513513714,0.15335870011274702,0.017965814921212603,0.005203406826574601,-0.054178708136072506,0.09460440147281497,0.08229794042271445,-0.014649530612214405,-0.021719756703006285,-0.06743003085550002,0.05329493164852946,-0.024496551284035002,0.06140080985040043,0.018258312255150264,0.09454246279250546,-0.021307758935201905,-0.05486130990643334,0.04069059079194094,0.03882015146494654,-0.033490624508214835,0.13380176618929848,0.1424892147246222,0.08912890490619302,0.11401566655194494,-0.07445319144003974,0.09712821090793705,0.04641407789312845,-0.07626127711413315,-0.00974633829889096,0.008621942278512651,-0.057553623756389755,0.08251575962195815,-0.06370331464018414,-0.06407777403919468,-0.08711297491557454,-0.024846984363234723,0.012920433718043106,0.0011036758532448829,-0.0172092520726723,-0.03404635040331863,-0.06461307754915915,-0.13950544330837103,-0.04606733678181961,0.04807914022210674,-0.006312956746050386,0.052808276294891765,0.055962219423458956,0.004490483533207419,0.12949313253269268,0.12124178345578152,-0.018139259196065433,0.005393546947033888,-0.06408520945287353,-0.01102885259273346,-0.0059223947092626045,-0.05955457769807333,-0.05775498240048513,0.06564215047889006,0.09022824341796981,0.1867795479158208,-0.018348979862021643,-0.10116841772480643,-0.011902435265681117,-0.03623290679764944,-0.04712769116764484,0.025374447131863438,0.07092643022471101,0.0044262996853503475,0.013458651234447826,-0.015233574414930777,0.0717857841689949,-0.0020228522087365683,-0.06974022036169661,-0.04790830291125278,0.19791942747291014,-0.1293188057200832,0.03624519370828974,0.11169983916220219,0.05886812584756775,-0.025150871866641184,-0.038061459062275274,-0.03518971106657101,-0.07736362727901873,-0.04747217350976434,-0.013873320664666212,-0.02036409779560542,-0.018835298407361884,-0.08986744792150236,0.039865792778444965,0.012994528553470039,0.16099377815770155,0.02005264167722423,0.028143853385626263,0.01752810690430607,-0.041522584679234226,0.004470500105577928,-0.005728115942395619,0.09093614090826106,-0.15207290118752376,0.10496686462463453,0.008064204639445207,-0.10258862167430051,0.049755186998274525,0.03503579552920642,-0.12009402914540396,0.02228211827162339,0.09398834590355903,-0.023642187195704264,-0.015359707936317107,-0.075212059649365,0.09852182587713887,0.03345222863326336,-0.09425791272809333,-0.07336468626778098,-0.05787221938871086,-0.05121621245169425,-0.13804337152955837,0.06973774437326927,-0.09892101791354539,0.04409095085766419,-0.06277822568010305,0.037085297947202424,-0.04195900444447845,-0.06092246878133401,-0.007992041833029533,-0.0159027720253557,0.09235509025698135,0.1562836604468994,0.053674798069969915,-0.0702082533783074,0.04915260695888345,0.046391017165219976,0.02261564931120829,-0.05088868623343666,0.034216301475074026,0.15318535628320407,-0.002235773524910313,0.06982850924839211,0.015284274563341627,-0.03520783885653645,0.03819449154399385,0.06524604283848429,0.04102789082939656,-0.04818092094938407,-0.09893849877472621]