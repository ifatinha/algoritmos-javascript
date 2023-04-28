const telefones = ["+55(61)169-515104", "+55(61)203-443485", "+55(61)236-652899",
  "+55(61)619-661182", "+55(61)947-281530", "+55(61)724-490770", "+55(61)167-124242",
  "+55(61)119-948102", "+55(61)103-642620", "+55(61)923-635160", "+55(61)025-019829",
  "+55(61)311-775038", "+55(61)073-346952", "+55(61)932-434427", "+55(61)306-483087",
  "+55(61)975-200995", "+55(61)955-209751", "+55(61)945-583992", "+55(61)714-344334",
  "+55(61)644-174049", "+55(61)896-355744", "+55(61)021-455989", "+55(61)758-276670",
  "+55(61)986-621295", "+55(61)968-014503", "+55(61)410-338905", "+55(61)759-321441",
  "+55(61)105-006467", "+55(61)128-262062", "+55(61)691-524768", "+55(61)698-208944",
  "+55(61)269-085381", "+55(61)485-637004", "+55(61)919-739624", "+55(61)967-875404",
  "+55(61)594-158968", "+55(61)585-559421", "+55(61)315-002642", "+55(61)080-596382",
  "+55(61)280-835787", "+55(61)711-321595", "+55(61)067-117746", "+55(61)798-772350",
  "+55(61)482-514673", "+55(61)549-351025", "+55(61)235-003238", "+55(61)422-683150",
  "+55(61)868-794896", "+55(61)697-298521", "+55(61)656-825131", "+55(61)799-678168",
  "+55(61)157-976729", "+55(61)664-246869", "+55(61)878-746652", "+55(61)240-037609",
  "+55(61)962-487073", "+55(61)627-502167", "+55(61)108-102872", "+55(61)324-673380",
  "+55(61)879-629845", "+55(61)976-786973", "+55(61)575-032370", "+55(61)491-464359",
  "+55(61)086-665353", "+55(61)884-497735", "+55(61)707-944489", "+55(61)701-477903",
  "+55(61)721-161934", "+55(61)225-919367", "+55(61)953-190990", "+55(61)276-482576",
  "+55(61)282-784720", "+55(61)500-810819", "+55(61)426-165313", "+55(61)169-338710",
  "+55(61)668-740731", "+55(61)369-076518", "+55(61)295-139910", "+55(61)976-841825",
  "+55(61)087-985647", "+55(61)303-927829", "+55(61)286-971064", "+55(61)743-542106",
  "+55(61)409-891683", "+55(61)764-451658", "+55(61)154-519729", "+55(61)144-034292",
  "+55(61)501-947102", "+55(61)145-696578", "+55(61)290-703123", "+55(61)883-988699",
  "+55(61)904-464022", "+55(61)849-819232", "+55(61)704-003972", "+55(61)729-166578",
  "+55(61)761-653676", "+55(61)339-749146", "+55(61)246-153801", "+55(61)883-048315",
  "+55(61)984-868873", "+55(62)297-029275", "+55(62)156-186613", "+55(62)528-082545",
  "+55(62)281-094911", "+55(62)620-239900", "+55(62)164-963227", "+55(62)407-606007",
  "+55(62)545-679569", "+55(62)902-409722", "+55(62)165-826436", "+55(62)617-174020",
  "+55(62)901-141114", "+55(62)650-143796", "+55(62)125-842345", "+55(62)444-568779",
  "+55(62)158-172551", "+55(62)834-328653", "+55(62)986-342210", "+55(62)327-245490",
  "+55(62)190-532497", "+55(62)175-719031", "+55(62)453-277726", "+55(62)887-930180",
  "+55(62)526-107000", "+55(62)157-585257", "+55(62)367-051169", "+55(62)653-263074",
  "+55(62)966-715240", "+55(62)446-251478", "+55(62)848-275672", "+55(62)827-599023",
  "+55(62)286-801048", "+55(62)873-701279", "+55(62)878-638540", "+55(62)627-208312",
  "+55(62)019-480517", "+55(62)762-526380", "+55(62)776-497228", "+55(62)586-535586",
  "+55(62)339-692230", "+55(62)770-429142", "+55(62)088-732290", "+55(62)242-202425",
  "+55(62)622-664689", "+55(62)807-771900", "+55(62)924-154397", "+55(62)432-709277",
  "+55(62)752-430630", "+55(62)399-814254", "+55(62)484-665583", "+55(62)009-352315",
  "+55(62)793-675100", "+55(62)143-510179", "+55(62)004-030271", "+55(62)198-565076",
  "+55(62)275-637645", "+55(62)855-359387", "+55(62)785-541148", "+55(62)505-178932",
  "+55(62)910-546484", "+55(62)420-975080", "+55(62)660-177971", "+55(62)113-168716",
  "+55(62)304-402901", "+55(62)975-093780", "+55(62)120-446228", "+55(62)410-950141",
  "+55(62)410-019498", "+55(62)897-832464", "+55(62)694-689694", "+55(62)299-200249",
  "+55(62)070-854000", "+55(62)363-832892", "+55(62)742-672707", "+55(62)074-059450",
  "+55(62)042-425605", "+55(62)333-691861", "+55(62)313-729775", "+55(62)352-505166",
  "+55(62)499-859946", "+55(62)002-474452", "+55(62)355-615131", "+55(62)967-943948",
  "+55(62)496-634189", "+55(62)739-291714", "+55(62)946-741035", "+55(62)998-662080",
  "+55(62)273-102383", "+55(62)822-496500", "+55(62)900-877075", "+55(62)778-099327",
  "+55(62)059-309069", "+55(62)691-778586", "+55(62)837-747679", "+55(62)400-330246",
  "+55(62)532-710568", "+55(62)676-450118", "+55(62)621-655789", "+55(62)158-429476",
  "+55(62)030-686697", "+55(65)582-134938", "+55(65)811-833471", "+55(65)729-736838",
  "+55(65)935-248632", "+55(65)405-599936", "+55(65)943-827401", "+55(65)705-220083",
  "+55(65)373-932825",
  "+55(65)359-732483", "+55(65)106-728737", "+55(65)618-901293", "+55(65)473-447796",
  "+55(65)470-152925", "+55(65)329-110249", "+55(65)333-688457", "+55(65)528-633835",
  "+55(65)196-008033", "+55(65)063-432277", "+55(65)832-696989", "+55(65)304-005819",
  "+55(65)109-542770", "+55(65)888-158757", "+55(65)007-508199", "+55(65)112-067334",
  "+55(65)933-848613", "+55(65)843-504423", "+55(65)455-661395", "+55(65)341-726597",
  "+55(65)264-625067", "+55(65)029-585715", "+55(65)097-160729", "+55(65)111-684190",
  "+55(65)311-370851", "+55(65)824-530513", "+55(65)756-914333", "+55(65)276-403498",
  "+55(65)378-822883", "+55(65)216-908441", "+55(65)845-485824", "+55(65)884-667955",
  "+55(65)784-474319", "+55(65)978-426019", "+55(65)874-341037", "+55(65)754-191623",
  "+55(65)722-575286", "+55(65)359-884998", "+55(65)552-971134", "+55(65)817-174703",
  "+55(65)279-258757", "+55(65)231-439542", "+55(65)912-620190", "+55(65)331-257022",
  "+55(65)842-085940", "+55(65)593-766885", "+55(65)392-517220", "+55(65)199-308893",
  "+55(65)289-565143", "+55(65)366-518341", "+55(65)823-853643", "+55(65)458-315820",
  "+55(65)039-681525", "+55(65)548-924299", "+55(65)932-873466", "+55(65)867-826988",
  "+55(65)449-331761", "+55(65)311-598835", "+55(65)831-524212", "+55(65)666-590776",
  "+55(65)590-650534", "+55(65)824-086418", "+55(65)253-803980", "+55(65)756-821885",
  "+55(65)845-343084", "+55(65)574-864153", "+55(65)118-790879", "+55(65)077-512810",
  "+55(65)051-447952", "+55(65)744-614601", "+55(65)424-275467", "+55(65)080-134830",
  "+55(65)685-147518", "+55(65)739-157703", "+55(65)542-656149", "+55(65)560-174926",
  "+55(65)031-956627", "+55(65)734-909613", "+55(65)491-408991", "+55(65)719-814577",
  "+55(65)847-247209", "+55(65)635-776676", "+55(65)240-221789", "+55(65)279-904624",
  "+55(65)919-487154", "+55(65)371-494572", "+55(65)242-233605", "+55(65)642-591206",
  "+55(65)804-954301", "+55(65)541-865126", "+55(65)322-671702", "+55(65)705-200641",
  "+55(67)824-663631", "+55(67)367-523308", "+55(67)830-578509", "+55(67)689-146409",
  "+55(67)522-285615", "+55(67)648-606566", "+55(67)333-247988", "+55(67)541-779331",
  "+55(67)883-653200", "+55(67)533-867656", "+55(67)418-596529", "+55(67)185-550970",
  "+55(67)762-049814", "+55(67)686-536198", "+55(67)608-163151", "+55(67)598-803794",
  "+55(67)400-053662", "+55(67)795-601027", "+55(67)421-301770", "+55(67)943-959326",
  "+55(67)735-305508", "+55(67)135-376444", "+55(67)730-035967", "+55(67)359-889430",
  "+55(67)626-253907", "+55(67)557-550157", "+55(67)104-192136", "+55(67)633-268659",
  "+55(67)849-504620", "+55(67)115-534848", "+55(67)648-974839", "+55(67)772-633105",
  "+55(67)464-017402", "+55(67)487-285779", "+55(67)574-738159", "+55(67)743-145985",
  "+55(67)199-927494", "+55(67)690-174980", "+55(67)482-897395", "+55(67)077-960710",
  "+55(67)471-588086", "+55(67)719-099728", "+55(67)180-876947", "+55(67)627-785584",
  "+55(67)914-814787", "+55(67)184-271966", "+55(67)739-407066", "+55(67)866-357736",
  "+55(67)983-300597", "+55(67)645-696492", "+55(67)417-043826", "+55(67)753-094144",
  "+55(67)603-262812", "+55(67)271-976269", "+55(67)164-474888", "+55(67)753-070351",
  "+55(67)633-731468", "+55(67)590-047435", "+55(67)628-936071", "+55(67)475-859006",
  "+55(67)428-422175", "+55(67)110-014611", "+55(67)365-941952", "+55(67)367-100428",
  "+55(67)991-992364", "+55(67)481-976162", "+55(67)259-970022", "+55(67)218-307643",
  "+55(67)089-177894", "+55(67)267-264267", "+55(67)496-237001", "+55(67)212-130920",
  "+55(67)330-056583", "+55(67)382-016717", "+55(67)691-915008", "+55(67)424-430199",
  "+55(67)222-533105", "+55(67)028-229729", "+55(67)448-881901", "+55(67)431-784105",
  "+55(67)959-781754", "+55(67)180-079269", "+55(67)446-515026", "+55(67)951-839005",
  "+55(67)773-870806", "+55(67)312-074677", "+55(67)368-452462", "+55(67)106-484564",
  "+55(67)473-680047", "+55(67)604-550796", "+55(67)970-528085", "+55(67)092-360474",
  "+55(67)512-068047", "+55(67)465-428226", "+55(67)768-904042", "+55(67)676-973787",
  "+55(67)512-155988", "+55(67)651-441946", "+55(67)929-616995", "+55(67)417-723222",
  "+55(82)746-733821", "+55(82)434-785053", "+55(82)080-069676", "+55(82)446-020402",
  "+55(82)079-448944", "+55(82)852-958816", "+55(82)409-111151", "+55(82)121-166961",
  "+55(82)999-194076", "+55(82)206-118333", "+55(82)857-964660", "+55(82)007-916324",
  "+55(82)870-581315", "+55(82)732-438805", "+55(82)758-550282", "+55(82)813-872014",
  "+55(82)819-053943", "+55(82)319-164283", "+55(82)516-904105", "+55(82)637-633927",
  "+55(82)703-620159", "+55(82)047-737148", "+55(82)049-803106", "+55(82)230-602717",
  "+55(82)770-443268", "+55(82)294-175595", "+55(82)884-844116", "+55(82)737-882208",
  "+55(82)001-528078", "+55(82)873-368770", "+55(82)688-366596", "+55(82)074-127024",
  "+55(82)836-272040", "+55(82)979-706365", "+55(82)067-589282", "+55(82)801-438733",
  "+55(82)424-495032", "+55(82)333-181110", "+55(82)984-027901", "+55(82)765-215728",
  "+55(82)823-242353", "+55(82)932-435235", "+55(82)530-151634", "+55(82)328-752987",
  "+55(82)276-410033", "+55(82)798-804978", "+55(82)326-192390", "+55(82)238-989983",
  "+55(82)402-283781", "+55(82)247-956196", "+55(82)185-974972", "+55(82)063-391660",
  "+55(82)221-917637", "+55(82)591-189586", "+55(82)175-405662", "+55(82)449-641414",
  "+55(82)301-510478", "+55(82)608-149715", "+55(82)804-768909", "+55(82)334-495432",
  "+55(82)593-408380", "+55(82)789-265056", "+55(82)904-343997", "+55(82)221-672500",
  "+55(82)984-800416", "+55(82)251-696085", "+55(82)070-247497", "+55(82)472-862903",
  "+55(82)261-421020", "+55(82)012-137976", "+55(82)114-390691", "+55(82)536-779872",
  "+55(82)329-642330", "+55(82)910-450429", "+55(82)259-926804", "+55(82)972-836169",
  "+55(82)693-649781", "+55(82)432-324904", "+55(82)132-425142", "+55(82)681-055923",
  "+55(82)074-217617", "+55(82)595-738342", "+55(82)594-690182", "+55(82)823-354015",
  "+55(82)317-890625", "+55(82)808-377395", "+55(82)449-874286", "+55(82)690-379442",
  "+55(82)310-147976", "+55(82)319-297625", "+55(82)112-250294", "+55(82)985-909797",
  "+55(82)405-435108", "+55(82)398-524644", "+55(82)839-430409", "+55(82)442-085595",
  "+55(82)684-546000", "+55(82)297-130271", "+55(82)856-164624", "+55(82)610-075675",
  "+55(71)924-942463", "+55(71)551-063954", "+55(71)791-816655", "+55(71)952-346583",
  "+55(71)585-691986", "+55(71)633-824590", "+55(71)896-030789", "+55(71)848-317506",
  "+55(71)435-728287", "+55(71)962-666634", "+55(71)320-251002", "+55(71)271-853772",
  "+55(71)010-387951", "+55(71)046-172373", "+55(71)462-658925", "+55(71)763-891586",
  "+55(71)271-999226", "+55(71)813-178971", "+55(71)991-370438", "+55(71)019-219131",
  "+55(71)900-317115", "+55(71)642-770723", "+55(71)448-469373", "+55(71)635-667389",
  "+55(71)153-421404", "+55(71)782-539567", "+55(71)131-797535", "+55(71)279-612863",
  "+55(71)501-764711", "+55(71)937-006860", "+55(71)021-083360", "+55(71)957-023504",
  "+55(71)449-250936", "+55(71)871-970307", "+55(71)768-471731", "+55(71)967-982976",
  "+55(71)644-841872", "+55(71)002-940023", "+55(71)538-226523", "+55(71)905-380567",
  "+55(71)288-573576", "+55(71)912-745498", "+55(71)178-716763", "+55(71)452-309667",
  "+55(71)574-848388", "+55(71)699-460037", "+55(71)829-150016", "+55(71)425-910749",
  "+55(71)656-603717", "+55(71)557-562574", "+55(71)585-176151", "+55(71)276-847218",
  "+55(71)634-491648", "+55(71)740-268883", "+55(71)967-551373", "+55(71)605-144319",
  "+55(71)266-283061", "+55(71)601-366594", "+55(71)119-724155", "+55(71)787-415712",
  "+55(71)699-726486", "+55(71)789-652078", "+55(71)864-505187", "+55(71)733-716464",
  "+55(71)519-584781", "+55(71)593-954572", "+55(71)106-588134", "+55(71)498-356825",
  "+55(71)909-205652", "+55(71)840-598312", "+55(71)868-693286", "+55(71)768-788254",
  "+55(71)429-589311", "+55(71)092-952280", "+55(71)685-554489", "+55(71)441-499331",
  "+55(71)914-100339", "+55(71)252-818256", "+55(71)316-455499", "+55(71)486-807940",
  "+55(71)833-015930", "+55(71)536-182731", "+55(71)855-535239", "+55(71)186-598081",
  "+55(71)464-183366", "+55(71)349-803426", "+55(71)672-221139", "+55(71)349-858184",
  "+55(71)273-263506", "+55(71)420-653866", "+55(71)802-887696", "+55(71)888-104464",
  "+55(71)893-868244", "+55(71)338-526396", "+55(71)058-868305", "+55(71)147-434358",
  "+55(71)321-274913", "+55(71)031-827768", "+55(71)407-250685", "+55(71)797-815316",
  "+55(85)061-114366", "+55(85)363-651303", "+55(85)029-527732", "+55(85)732-944480",
  "+55(85)137-502643", "+55(85)542-494268", "+55(85)368-653002", "+55(85)134-994269",
  "+55(85)649-899326", "+55(85)798-654054", "+55(85)656-145562", "+55(85)299-279111",
  "+55(85)396-151567", "+55(85)845-459016", "+55(85)682-600511", "+55(85)856-572728",
  "+55(85)269-714726", "+55(85)522-793744", "+55(85)135-882055", "+55(85)076-057439",
  "+55(85)754-923308", "+55(85)001-580796", "+55(85)860-465219", "+55(85)367-760090",
  "+55(85)719-967937", "+55(85)652-609231", "+55(85)647-314423", "+55(85)116-002896",
  "+55(85)521-782615", "+55(85)211-053495", "+55(85)460-070350", "+55(85)152-331592",
  "+55(85)753-958208", "+55(85)935-942078", "+55(85)706-039189", "+55(85)970-365296",
  "+55(85)764-268566", "+55(85)744-447465", "+55(85)151-187707", "+55(85)140-576432",
  "+55(85)704-159896", "+55(85)379-488258", "+55(85)904-961505", "+55(85)129-634514",
  "+55(85)578-527343", "+55(85)422-828088", "+55(85)707-661112", "+55(85)382-245979",
  "+55(85)935-127025", "+55(85)729-595607", "+55(85)618-832339", "+55(85)687-209901",
  "+55(85)998-858419", "+55(85)152-936170", "+55(85)179-890790", "+55(85)509-384236",
  "+55(85)476-770487", "+55(85)981-970950", "+55(85)450-499912", "+55(85)274-951990",
  "+55(85)406-503608", "+55(85)032-181173", "+55(85)461-857056", "+55(85)201-861232",
  "+55(85)034-243461", "+55(85)054-239944", "+55(85)477-664787", "+55(85)983-407754",
  "+55(85)344-778772", "+55(85)379-035413", "+55(85)130-481256", "+55(85)491-978745",
  "+55(85)696-509140", "+55(85)718-766882", "+55(85)475-562436", "+55(85)239-989804",
  "+55(85)511-397085", "+55(85)390-856199", "+55(85)021-910900", "+55(85)055-184992",
  "+55(85)264-250860", "+55(85)401-502593", "+55(85)230-859248", "+55(85)901-437413",
  "+55(85)085-145404", "+55(85)571-657682", "+55(85)326-569211", "+55(85)615-229769",
  "+55(85)450-626494", "+55(85)489-146077", "+55(85)343-866843", "+55(85)683-756395",
  "+55(85)606-510227", "+55(85)413-700484", "+55(85)605-070610", "+55(85)961-523645",
  "+55(85)405-885824", "+55(85)913-511672", "+55(85)913-176440", "+55(85)850-338920",
  "+55(98)934-970726", "+55(98)048-090467", "+55(98)207-613588", "+55(98)186-584657",
  "+55(98)276-186122", "+55(98)548-200569", "+55(98)903-551927", "+55(98)494-103725",
  "+55(98)004-925081", "+55(98)209-565757", "+55(98)224-734006", "+55(98)076-479977",
  "+55(98)691-648214", "+55(98)661-034545", "+55(98)059-696584", "+55(98)912-177909",
  "+55(98)950-164618", "+55(98)387-257916", "+55(98)465-672372", "+55(98)128-244615",
  "+55(98)384-010811", "+55(98)550-018256", "+55(98)888-603174", "+55(98)276-787778",
  "+55(98)134-236162", "+55(98)205-175483", "+55(98)557-136913", "+55(98)052-476193",
  "+55(98)664-271820", "+55(98)267-980571", "+55(98)614-862481", "+55(98)174-502785",
  "+55(98)073-771729", "+55(98)151-647896", "+55(98)787-237416", "+55(98)867-234316",
  "+55(98)089-253033", "+55(98)204-028779", "+55(98)680-303845", "+55(98)863-789182",
  "+55(98)454-857724", "+55(98)615-755030", "+55(98)882-250168", "+55(98)039-524397",
  "+55(98)649-114727", "+55(98)866-082109", "+55(98)402-364794", "+55(98)609-621003",
  "+55(98)814-423733", "+55(98)377-613192", "+55(98)496-459569", "+55(98)470-923306",
  "+55(98)705-466875", "+55(98)300-946992", "+55(98)876-878108", "+55(98)858-305083",
  "+55(98)965-060659", "+55(98)476-063884", "+55(98)723-664162", "+55(98)221-827893",
  "+55(98)875-472860", "+55(98)485-742159", "+55(98)016-109989", "+55(98)670-227414",
  "+55(98)483-058274", "+55(98)243-963862", "+55(98)895-918669", "+55(98)239-645463",
  "+55(98)853-240536", "+55(98)157-649515", "+55(98)288-153790", "+55(98)885-219262",
  "+55(98)434-208159", "+55(98)026-931201", "+55(98)001-622559", "+55(98)441-962788",
  "+55(98)699-293314", "+55(98)454-617972", "+55(98)573-760049", "+55(98)258-177508",
  "+55(98)535-007794", "+55(98)807-274378", "+55(98)607-424185", "+55(98)804-404183",
  "+55(98)826-644072", "+55(98)089-722240", "+55(98)488-939347", "+55(98)069-724132",
  "+55(98)221-104429", "+55(98)043-836861", "+55(98)322-395808", "+55(98)402-523065",
  "+55(98)154-548224", "+55(98)885-125605", "+55(98)095-358665", "+55(98)667-121944",
  "+55(98)833-445915", "+55(98)765-301177", "+55(98)943-766951", "+55(98)997-242844",
  "+55(83)612-651953", "+55(83)327-064927", "+55(83)415-695411", "+55(83)985-251457",
  "+55(83)110-817309", "+55(83)432-001542", "+55(83)926-452697", "+55(83)784-776506",
  "+55(83)118-328483", "+55(83)520-275434", "+55(83)721-209859", "+55(83)916-748696",
  "+55(83)723-751294", "+55(83)129-249124", "+55(83)742-427297", "+55(83)942-317447",
  "+55(83)181-115038", "+55(83)559-891520", "+55(83)207-438272", "+55(83)648-850464",
  "+55(83)197-077239", "+55(83)623-376294", "+55(83)919-895931", "+55(83)523-330054",
  "+55(83)813-250870", "+55(83)304-294787", "+55(83)131-464570", "+55(83)882-107295",
  "+55(83)283-712191", "+55(83)832-088446", "+55(83)453-673493", "+55(83)368-640950",
  "+55(83)484-782636", "+55(83)717-085435", "+55(83)384-248244", "+55(83)591-969222",
  "+55(83)500-319862", "+55(83)451-976800", "+55(83)262-468381", "+55(83)767-899875",
  "+55(83)106-204984", "+55(83)176-412351", "+55(83)281-970858", "+55(83)604-324723",
  "+55(83)259-890126", "+55(83)781-889874", "+55(83)117-640123", "+55(83)450-449562",
  "+55(83)899-978865", "+55(83)465-130243", "+55(83)971-915961", "+55(83)800-898684",
  "+55(83)288-801836", "+55(83)869-961558", "+55(83)767-747505", "+55(83)189-969153",
  "+55(83)613-619765", "+55(83)321-006766", "+55(83)681-688693", "+55(83)601-062048",
  "+55(83)928-128705", "+55(83)323-581340", "+55(83)477-584789", "+55(83)488-301281",
  "+55(83)359-607742", "+55(83)276-024503", "+55(83)682-513731", "+55(83)054-015890",
  "+55(83)728-430981", "+55(83)271-532806", "+55(83)065-567146", "+55(83)544-498486",
  "+55(83)183-247428", "+55(83)387-934749", "+55(83)658-198946", "+55(83)074-408141",
  "+55(83)558-352827", "+55(83)633-542347", "+55(83)087-427342", "+55(83)480-315597",
  "+55(83)746-091325", "+55(83)258-001836", "+55(83)908-930590", "+55(83)276-886919",
  "+55(83)210-111395", "+55(83)040-934083", "+55(83)158-837438", "+55(83)815-937077",
  "+55(83)680-673072", "+55(83)840-634387", "+55(83)264-757565", "+55(83)210-288695",
  "+55(83)433-406834", "+55(83)662-047894", "+55(83)265-384143", "+55(83)371-712305",
  "+55(83)624-839618", "+55(83)516-144569", "+55(83)437-609849", "+55(83)356-749701",
  "+55(81)331-366749", "+55(81)735-699314", "+55(81)066-356137", "+55(81)712-949523",
  "+55(81)409-079910", "+55(81)110-856469", "+55(81)572-767629", "+55(81)831-738639",
  "+55(81)717-892539", "+55(81)452-728491", "+55(81)998-061925", "+55(81)939-728071",
  "+55(81)165-447397", "+55(81)373-180373", "+55(81)622-594401", "+55(81)032-576305",
  "+55(81)598-807935", "+55(81)214-464804", "+55(81)643-801531", "+55(81)460-350044",
  "+55(81)776-113604", "+55(81)005-485549", "+55(81)544-579584", "+55(81)417-139499",
  "+55(81)009-548192", "+55(81)675-023082", "+55(81)867-670520", "+55(81)105-069888",
  "+55(81)957-560979", "+55(81)287-945008", "+55(81)590-097985", "+55(81)853-610707",
  "+55(81)104-909509", "+55(81)142-242931", "+55(81)191-562642", "+55(81)044-535486",
  "+55(81)277-592795", "+55(81)578-635899", "+55(81)305-858397", "+55(81)396-146326",
  "+55(81)116-079668", "+55(81)726-201141", "+55(81)348-053795", "+55(81)875-483449",
  "+55(81)065-696810", "+55(81)044-840229", "+55(81)675-123477", "+55(81)080-640221",
  "+55(81)217-602624", "+55(81)003-516963", "+55(81)035-109122", "+55(81)545-305568",
  "+55(81)280-642238", "+55(81)080-590512", "+55(81)481-912569", "+55(81)622-687811",
  "+55(81)825-885837", "+55(81)110-311578", "+55(81)047-316197", "+55(81)654-243726",
  "+55(81)486-418675", "+55(81)269-990600", "+55(81)379-893176", "+55(81)216-857615",
  "+55(81)678-578638", "+55(81)724-703110", "+55(81)939-514386", "+55(81)026-984748",
  "+55(81)168-538959", "+55(81)393-245783", "+55(81)647-345810", "+55(81)723-687472",
  "+55(81)764-198676", "+55(81)135-879450", "+55(81)287-545293", "+55(81)411-820788",
  "+55(81)997-484320", "+55(81)722-477007", "+55(81)614-706875", "+55(81)156-994437",
  "+55(81)746-094895", "+55(81)317-797485", "+55(81)465-155698", "+55(81)467-077567",
  "+55(81)102-972620", "+55(81)258-864323", "+55(81)679-487143", "+55(81)659-947109",
  "+55(81)227-004447", "+55(81)636-675390", "+55(81)862-756477", "+55(81)905-716160",
  "+55(81)472-130779", "+55(81)484-650207", "+55(81)470-041657", "+55(81)424-738716",
  "+55(81)805-361391", "+55(81)068-062128", "+55(81)921-495376", "+55(81)559-196226",
  "+55(86)769-356975", "+55(86)184-817248", "+55(86)482-717690", "+55(86)283-118815",
  "+55(86)872-253078", "+55(86)827-108868", "+55(86)306-628509", "+55(86)487-613010",
  "+55(86)081-801788", "+55(86)715-477228", "+55(86)321-192404", "+55(86)843-034202",
  "+55(86)601-149972", "+55(86)050-170310", "+55(86)692-006427", "+55(86)237-452449",
  "+55(86)202-319451", "+55(86)385-695237", "+55(86)102-848093", "+55(86)560-891847",
  "+55(86)008-567081", "+55(86)827-102911", "+55(86)178-258333", "+55(86)331-287986",
  "+55(86)652-363654", "+55(86)865-680524", "+55(86)381-400298", "+55(86)044-381656",
  "+55(86)356-825977", "+55(86)502-742772", "+55(86)630-069125", "+55(86)384-966553",
  "+55(86)982-167434", "+55(86)909-015038", "+55(86)213-610266", "+55(86)854-060714",
  "+55(86)732-734248", "+55(86)901-372398", "+55(86)575-972053", "+55(86)708-072506",
  "+55(86)163-290520", "+55(86)251-759965", "+55(86)123-930281", "+55(86)124-544607",
  "+55(86)592-678665", "+55(86)864-267286", "+55(86)775-230601", "+55(86)763-030897",
  "+55(86)160-587306", "+55(86)437-061021", "+55(86)688-081171", "+55(86)124-282023",
  "+55(86)179-985098", "+55(86)159-968175", "+55(86)575-904206", "+55(86)673-671170",
  "+55(86)826-812639", "+55(86)559-149579", "+55(86)250-517634", "+55(86)439-011374",
  "+55(86)008-923970", "+55(86)024-086750", "+55(86)355-256494", "+55(86)249-041439",
  "+55(86)297-695360", "+55(86)839-365004", "+55(86)979-874917", "+55(86)697-366903",
  "+55(86)424-450961", "+55(86)101-098480", "+55(86)772-509299", "+55(86)048-483579",
  "+55(86)117-216165", "+55(86)939-190010", "+55(86)704-542999", "+55(86)610-342059",
  "+55(86)880-899891", "+55(86)989-343643", "+55(86)497-432748", "+55(86)164-144134",
  "+55(86)131-075440", "+55(86)047-891066", "+55(86)375-790203", "+55(86)259-367901",
  "+55(86)824-603819", "+55(86)021-601621", "+55(86)845-881681", "+55(86)800-261543",
  "+55(86)937-198261", "+55(86)599-188246", "+55(86)354-471536", "+55(86)852-672498",
  "+55(86)446-454279", "+55(86)224-672825", "+55(86)130-497747", "+55(86)020-666184",
  "+55(86)863-321514", "+55(86)564-604379", "+55(86)303-469088", "+55(86)971-304465",
  "+55(84)091-647716", "+55(84)767-162075", "+55(84)128-624898", "+55(84)081-155927",
  "+55(84)552-378576", "+55(84)073-935314", "+55(84)450-566168", "+55(84)245-482230",
  "+55(84)407-701333", "+55(84)573-530246", "+55(84)485-923157", "+55(84)512-292436",
  "+55(84)114-578502", "+55(84)160-653079", "+55(84)849-179312", "+55(84)842-390140",
  "+55(84)611-777184", "+55(84)534-542483", "+55(84)911-150175", "+55(84)122-300018",
  "+55(84)149-604853", "+55(84)223-339456", "+55(84)682-912023", "+55(84)854-814209",
  "+55(84)117-551496", "+55(84)939-121434", "+55(84)232-714134", "+55(84)963-718868",
  "+55(84)888-801944", "+55(84)277-559972", "+55(84)820-192088", "+55(84)468-248443",
  "+55(84)967-712609", "+55(84)471-491600", "+55(84)942-867612", "+55(84)016-787958",
  "+55(84)436-676846", "+55(84)062-249010", "+55(84)213-882688", "+55(84)728-395070",
  "+55(84)503-838739", "+55(84)519-908266", "+55(84)133-972579", "+55(84)447-820603",
  "+55(84)998-898615", "+55(84)276-573730", "+55(84)951-634695", "+55(84)540-339290",
  "+55(84)335-982265", "+55(84)348-511081", "+55(84)860-903823", "+55(84)062-551887",
  "+55(84)118-070288", "+55(84)470-461844", "+55(84)347-603782", "+55(84)246-044073",
  "+55(84)176-122307", "+55(84)112-972341", "+55(84)939-644141", "+55(84)322-044275",
  "+55(84)571-779003", "+55(84)635-609024", "+55(84)784-989416", "+55(84)126-394204",
  "+55(84)209-770772", "+55(84)999-488339", "+55(84)302-032452", "+55(84)159-136104",
  "+55(84)243-282025", "+55(84)389-683839", "+55(84)106-120830", "+55(84)726-145347",
  "+55(84)408-467750", "+55(84)727-439423", "+55(84)417-122667", "+55(84)615-451127",
  "+55(84)944-688620", "+55(84)750-463639", "+55(84)755-200423", "+55(84)426-995758",
  "+55(84)463-500973", "+55(84)114-745797", "+55(84)123-822497", "+55(84)829-189277",
  "+55(84)697-162642", "+55(84)537-829179", "+55(84)071-990917", "+55(84)846-552827",
  "+55(84)624-417324", "+55(84)140-330322", "+55(84)905-561843", "+55(84)408-949682",
  "+55(84)134-177110", "+55(84)394-840934", "+55(84)993-788646", "+55(84)472-990712",
  "+55(84)556-041044", "+55(84)734-112077", "+55(84)624-914086", "+55(84)528-123327",
  "+55(79)776-077425", "+55(79)330-045673", "+55(79)667-714098", "+55(79)963-571323",
  "+55(79)462-476044", "+55(79)219-081490", "+55(79)500-968090", "+55(79)850-007701",
  "+55(79)442-341590", "+55(79)365-351161", "+55(79)007-007888", "+55(79)924-268318",
  "+55(79)611-257473", "+55(79)936-746525", "+55(79)246-772613", "+55(79)506-731478",
  "+55(79)482-056719", "+55(79)516-184445", "+55(79)908-582630", "+55(79)143-349010",
  "+55(79)460-179514", "+55(79)931-899052", "+55(79)045-489381", "+55(79)750-878820",
  "+55(79)206-386391", "+55(79)020-579507", "+55(79)553-640422", "+55(79)555-293923",
  "+55(79)943-091951", "+55(79)373-637780", "+55(79)365-894187", "+55(79)969-369465",
  "+55(79)383-657425", "+55(79)281-861389", "+55(79)397-324270", "+55(79)345-611363",
  "+55(79)167-343472", "+55(79)853-686013", "+55(79)866-437573", "+55(79)655-380737",
  "+55(79)765-124736", "+55(79)448-092849", "+55(79)467-905988", "+55(79)764-376859",
  "+55(79)749-548833", "+55(79)574-264862", "+55(79)403-841427", "+55(79)749-603487",
  "+55(79)625-042528", "+55(79)938-213366", "+55(79)035-905353", "+55(79)302-817169",
  "+55(79)583-414750", "+55(79)517-017652", "+55(79)660-952669", "+55(79)744-085560",
  "+55(79)068-779545", "+55(79)414-500766", "+55(79)240-649205", "+55(79)650-437481",
  "+55(79)760-210297", "+55(79)593-667597", "+55(79)336-380128", "+55(79)169-281200",
  "+55(79)950-216076", "+55(79)891-520532", "+55(79)640-668799", "+55(79)983-915612",
  "+55(79)911-164128", "+55(79)648-714583", "+55(79)634-925487", "+55(79)168-375797",
  "+55(79)330-101560", "+55(79)162-555194", "+55(79)655-592072", "+55(79)251-361528",
  "+55(79)291-456076", "+55(79)630-199497", "+55(79)791-837980", "+55(79)327-573171",
  "+55(79)272-381321", "+55(79)880-963761", "+55(79)450-108526", "+55(79)193-322554",
  "+55(79)635-622908", "+55(79)826-947899", "+55(79)503-946192", "+55(79)689-242442",
  "+55(79)614-318098", "+55(79)440-834453", "+55(79)105-029364", "+55(79)807-339249",
  "+55(79)334-328874", "+55(79)452-965991", "+55(79)504-347261", "+55(79)756-298075",
  "+55(79)990-297786", "+55(79)120-564391", "+55(79)190-710628", "+55(79)772-801589",
  "+55(68)185-846108", "+55(68)554-628846", "+55(68)122-930495", "+55(68)779-353974",
  "+55(68)093-566340", "+55(68)122-315354", "+55(68)526-451859", "+55(68)303-759484",
  "+55(68)756-988523", "+55(68)192-847023", "+55(68)679-944883", "+55(68)308-007850",
  "+55(68)521-705508", "+55(68)045-940438", "+55(68)628-438114", "+55(68)403-584034",
  "+55(68)244-748891", "+55(68)779-522444", "+55(68)589-947341", "+55(68)433-817697",
  "+55(68)746-698932", "+55(68)383-277012", "+55(68)966-247007", "+55(68)941-511315",
  "+55(68)584-811612", "+55(68)314-948749", "+55(68)280-332573", "+55(68)399-770842",
  "+55(68)253-657532", "+55(68)843-977134", "+55(68)483-451545", "+55(68)673-949702",
  "+55(68)513-901614", "+55(68)599-935089", "+55(68)553-958828", "+55(68)131-421683",
  "+55(68)089-073581", "+55(68)470-766558", "+55(68)597-749908", "+55(68)190-198447",
  "+55(68)914-091656", "+55(68)915-690680", "+55(68)024-133087", "+55(68)578-988054",
  "+55(68)038-608676", "+55(68)269-683982", "+55(68)574-473379", "+55(68)400-361138",
  "+55(68)005-063451", "+55(68)374-811148", "+55(68)130-267480", "+55(68)602-119455",
  "+55(68)283-665880", "+55(68)920-947785", "+55(68)118-430386", "+55(68)487-854332",
  "+55(68)026-120899", "+55(68)615-559597", "+55(68)819-605038", "+55(68)795-307486",
  "+55(68)235-880749", "+55(68)587-547151", "+55(68)889-420278", "+55(68)112-601786",
  "+55(68)315-170885", "+55(68)848-880807", "+55(68)999-169348", "+55(68)121-738817",
  "+55(68)167-055036", "+55(68)158-174118", "+55(68)001-274156", "+55(68)985-680294",
  "+55(68)864-672083", "+55(68)849-977483", "+55(68)729-398427", "+55(68)155-623932",
  "+55(68)208-295043", "+55(68)606-546489", "+55(68)717-370673", "+55(68)068-888383",
  "+55(68)298-952590", "+55(68)175-903971", "+55(68)519-408346", "+55(68)295-081240",
  "+55(68)821-412809", "+55(68)351-201036", "+55(68)087-686710", "+55(68)490-531712",
  "+55(68)162-293407", "+55(68)879-538119", "+55(68)941-005286", "+55(68)581-800140",
  "+55(68)596-440261", "+55(68)817-027545", "+55(68)910-090115", "+55(68)001-656782",
  "+55(68)010-713567", "+55(68)871-871993", "+55(68)134-309978", "+55(68)683-764121",
  "+55(96)407-894683", "+55(96)951-217164", "+55(96)998-141521", "+55(96)753-542901",
  "+55(96)318-430256", "+55(96)966-770833", "+55(96)616-960251", "+55(96)845-799715",
  "+55(96)840-428501", "+55(96)070-767792", "+55(96)313-992964", "+55(96)129-171032",
  "+55(96)238-305074", "+55(96)684-984170", "+55(96)228-236349", "+55(96)529-459057",
  "+55(96)833-331759", "+55(96)020-944588", "+55(96)547-482488", "+55(96)365-708973",
  "+55(96)641-646105", "+55(96)504-253591", "+55(96)150-630528", "+55(96)254-418138",
  "+55(96)347-772022", "+55(96)638-701754", "+55(96)561-903716", "+55(96)800-678980",
  "+55(96)175-945121", "+55(96)962-052434", "+55(96)031-199988", "+55(96)097-581094",
  "+55(96)538-744088", "+55(96)088-198187", "+55(96)878-527737", "+55(96)535-409818",
  "+55(96)685-505313", "+55(96)128-080764", "+55(96)798-338220", "+55(96)979-429960",
  "+55(96)716-614690", "+55(96)480-313145", "+55(96)549-492398", "+55(96)366-928397",
  "+55(96)022-154478", "+55(96)935-984114", "+55(96)677-279009", "+55(96)501-716264",
  "+55(96)634-233744", "+55(96)519-246247", "+55(96)322-403129", "+55(96)369-882157",
  "+55(96)727-651276", "+55(96)903-243666", "+55(96)102-081397", "+55(96)543-309537",
  "+55(96)472-797053", "+55(96)247-555685", "+55(96)918-359202", "+55(96)276-446251",
  "+55(96)230-085654", "+55(96)942-778608", "+55(96)916-651286", "+55(96)398-397952",
  "+55(96)727-095865", "+55(96)647-303431", "+55(96)750-580276", "+55(96)137-837313",
  "+55(96)893-624077", "+55(96)847-806823", "+55(96)848-531373", "+55(96)526-999396",
  "+55(96)145-935528", "+55(96)764-527755", "+55(96)203-803832", "+55(96)440-943495",
  "+55(96)920-382158", "+55(96)607-097371", "+55(96)351-345695", "+55(96)345-373598",
  "+55(96)554-263091", "+55(96)646-771340", "+55(96)633-271520", "+55(96)660-086485",
  "+55(96)020-698733", "+55(96)292-529672", "+55(96)293-292841", "+55(96)016-176950",
  "+55(96)422-674642", "+55(96)148-568752", "+55(96)939-647333", "+55(96)675-942317",
  "+55(96)080-837712", "+55(96)923-997721", "+55(96)678-163404", "+55(96)650-744415",
  "+55(96)150-449112", "+55(96)289-006446", "+55(96)633-607049", "+55(96)201-246258",
  "+55(92)976-838527", "+55(92)220-813766", "+55(92)145-286801", "+55(92)318-901863",
  "+55(92)158-140417", "+55(92)886-414004", "+55(92)083-883060", "+55(92)210-024076",
  "+55(92)846-497997", "+55(92)182-470886", "+55(92)280-393790", "+55(92)798-348037",
  "+55(92)787-934023", "+55(92)156-185565", "+55(92)025-950763", "+55(92)413-217719",
  "+55(92)815-534080", "+55(92)418-004070", "+55(92)255-677348", "+55(92)474-037446",
  "+55(92)016-827235", "+55(92)778-336060", "+55(92)057-460204", "+55(92)650-333066",
  "+55(92)943-876583", "+55(92)831-687708", "+55(92)957-080497", "+55(92)474-752411",
  "+55(92)791-869630", "+55(92)500-219358", "+55(92)637-013354", "+55(92)314-500574",
  "+55(92)296-328253", "+55(92)694-405731", "+55(92)854-305352", "+55(92)157-890625",
  "+55(92)310-850434", "+55(92)620-150696", "+55(92)885-665637", "+55(92)313-399433",
  "+55(92)891-917987", "+55(92)854-411974", "+55(92)977-316350", "+55(92)486-587385",
  "+55(92)446-987075", "+55(92)453-194829", "+55(92)837-595223", "+55(92)383-971788",
  "+55(92)438-747130", "+55(92)195-944577", "+55(92)507-905074", "+55(92)182-967780",
  "+55(92)927-511078", "+55(92)648-438936", "+55(92)373-579357", "+55(92)375-027124",
  "+55(92)014-857741", "+55(92)942-200135", "+55(92)695-208020", "+55(92)206-691466",
  "+55(92)150-380393", "+55(92)809-429231", "+55(92)844-403640", "+55(92)018-056096",
  "+55(92)844-797710", "+55(92)593-933308", "+55(92)395-291800", "+55(92)480-969741",
  "+55(92)367-660001", "+55(92)447-967057", "+55(92)029-116080", "+55(92)638-305405",
  "+55(92)890-696302", "+55(92)133-145844", "+55(92)612-552102", "+55(92)616-686327",
  "+55(92)388-702387", "+55(92)749-904214", "+55(92)806-574206", "+55(92)508-389617",
  "+55(92)947-948369", "+55(92)289-846366", "+55(92)621-569421", "+55(92)607-491238",
  "+55(92)201-195732", "+55(92)387-443496", "+55(92)136-875009", "+55(92)319-439912",
  "+55(92)650-305744", "+55(92)957-544145", "+55(92)383-326327", "+55(92)431-462046",
  "+55(92)760-524938", "+55(92)523-866498", "+55(92)525-672976", "+55(92)142-294698",
  "+55(92)437-814463", "+55(92)894-362659", "+55(92)016-336795", "+55(92)599-371727",
  "+55(91)309-529199", "+55(91)166-471293", "+55(91)976-125527", "+55(91)606-658678",
  "+55(91)801-448668", "+55(91)477-190643", "+55(91)004-760627", "+55(91)755-909866",
  "+55(91)614-323497", "+55(91)387-753726", "+55(91)731-232218", "+55(91)750-293532",
  "+55(91)051-836118", "+55(91)661-884016", "+55(91)045-064317", "+55(91)481-664285",
  "+55(91)628-817328", "+55(91)283-790131", "+55(91)967-124552", "+55(91)794-576208",
  "+55(91)010-389403", "+55(91)922-635091", "+55(91)182-649270", "+55(91)803-841881",
  "+55(91)504-777387", "+55(91)183-358385", "+55(91)045-320419", "+55(91)247-624452",
  "+55(91)040-485314", "+55(91)643-175227", "+55(91)895-567003", "+55(91)247-295827",
  "+55(91)137-455977", "+55(91)856-412213", "+55(91)450-189661", "+55(91)927-762260",
  "+55(91)385-027349", "+55(91)031-159026", "+55(91)665-331658",
  "+55(91)525-128853", "+55(91)140-356359", "+55(91)856-390566", "+55(91)316-828614",
  "+55(91)864-909535", "+55(91)430-069126", "+55(91)599-271142", "+55(91)411-801765",
  "+55(91)196-103115", "+55(91)916-834048",
  "+55(91)934-114391", "+55(91)228-839240", "+55(91)298-971386", "+55(91)165-577016",
  "+55(91)093-887802", "+55(91)748-636774", "+55(91)950-517318", "+55(91)399-687468",
  "+55(91)560-324002", "+55(91)421-472104", "+55(91)079-048884", "+55(91)492-534034",
  "+55(91)895-932253", "+55(91)543-548426", "+55(91)817-171674", "+55(91)030-533859",
  "+55(91)146-500342", "+55(91)312-139297", "+55(91)170-233529", "+55(91)300-960005",
  "+55(91)084-208228", "+55(91)997-010472", "+55(91)264-260370", "+55(91)018-548360",
  "+55(91)501-303350", "+55(91)833-260207", "+55(91)975-729666", "+55(91)727-858193",
  "+55(91)626-943073", "+55(91)125-607674", "+55(91)415-201121",
  "+55(91)577-171479", "+55(91)401-071849", "+55(91)733-354566", "+55(91)123-840098",
  "+55(91)730-838012", "+55(91)302-748205", "+55(91)671-065164", "+55(91)612-706507",
  "+55(91)919-293113", "+55(91)004-110627", "+55(91)243-423173", "+55(91)630-569971",
  "+55(91)413-934007", "+55(91)192-444752", "+55(91)484-540438", "+55(91)727-120620",
  "+55(91)013-367833", "+55(91)589-934088", "+55(91)451-163126", "+55(91)673-909783"]

function randomPhone() {
  return telefones[Math.floor((Math.random() * 1700) + 0)];
}

export default { randomPhone }