/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("reviews").del();
  await knex("reviews").insert([
    {
      id: 1,
      user_id: 12,
      product_id: 1,
      review_star_rating: 4,
      review_headline: "Far serve away treatment.",
      review_body: "Interest evening wall mission Mr. Wish enough travel job necessary as edge. Rock budget land other center.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 1,
      vine_explanation:
        "Leader hair think church girl. Picture long line control food talk operation.",
    },
    {
      id: 2,
      user_id: 10,
      product_id: 3,
      review_star_rating: 3,
      review_headline: "Term avoid two economic leg seek small money.",
      review_body: "Lead number number lot. Key less site.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 1,
      vine_explanation:
        "As nature ask simply bed let. Number institution successful wind reach couple or.\nMovement education job professor. Key learn sign beautiful example.",
    },
    {
      id: 3,
      user_id: 1,
      product_id: 4,
      review_star_rating: 1,
      review_headline: "Such interesting serious quickly need town watch.",
      review_body: "Pay magazine hospital feel stay happen amount region. Mission process attention each. Wife executive impact card tonight media account. Never prevent discuss consumer scientist common during general.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 0,
      vine_explanation:
        "Week store treatment push better. Type until would common management similar. Manage bill air until sound.",
    },
    {
      id: 4,
      user_id: 5,
      product_id: 6,
      review_star_rating: 3,
      review_headline: "About condition describe glass board.",
      review_body: "Economic television when this maybe increase such. Everything boy environmental just style some. Think present create address too pretty.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 0,
      vine_explanation:
        "Short which get hear month. Authority others mean keep.\nArm or improve. Cut another visit strong budget fall price. Teach building offer week letter home produce play.",
    },
    {
      id: 5,
      user_id: 6,
      product_id: 3,
      review_star_rating: 3,
      review_headline: "Or detail necessary kitchen home yard institution.",
      review_body: "Tax subject quality into three avoid. They situation including professor likely arm personal.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 0,
      vine_explanation:
        "Particularly pressure scientist fish democratic still. Perhaps while cell both ever recognize hard game. Improve prove network instead project may ready then.",
    },
    {
      id: 6,
      user_id: 2,
      product_id: 2,
      review_star_rating: 2,
      review_headline: "Turn blood trip ball act look country.",
      review_body: "Growth as foreign what which. Country nation detail radio produce similar. Successful why fact strategy indeed as stand.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 0,
      vine_explanation:
        "Green account through Congress worker. Eight sense require large similar occur discussion.\nAcross school traditional easy appear. Else degree realize she manager to must.",
    },
    {
      id: 7,
      user_id: 9,
      product_id: 4,
      review_star_rating: 2,
      review_headline: "Performance hundred involve address finish growth yes.",
      review_body: "Fish model food fear it local give. Now central thank concern office break also.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 0,
      vine_explanation:
        "Account personal too once tough. Must near themselves lay message project. Company behavior involve impact just.\nPage decision threat either spring series hear. Measure look seat move.",
    },
    {
      id: 8,
      user_id: 12,
      product_id: 2,
      review_star_rating: 5,
      review_headline: "Everybody challenge heart effect key.",
      review_body: "Since media month their nation. Line south spend personal similar.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 0,
      vine_explanation:
        "Feel third here father hundred. Her pretty least us budget standard discuss.\nGuy now type.\nPhone newspaper spring later music six social officer. Manage sound city theory sister police.",
    },
    {
      id: 9,
      user_id: 10,
      product_id: 5,
      review_star_rating: 1,
      review_headline: "Understand risk special better force.",
      review_body: "Upon save quite off art.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 1,
      vine_explanation:
        "Value need think collection system they likely. Market newspaper quite full condition course.",
    },
    {
      id: 10,
      user_id: 8,
      product_id: 9,
      review_star_rating: 1,
      review_headline: "Generation set myself course.",
      review_body: "End crime themselves according well itself each. Owner other commercial put. Upon cost let best human.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 1,
      vine_explanation:
        "Know move drop cup official nothing person. Daughter partner why often around board apply which. Exist yard and always. Measure character hand board.\nHair edge real meeting.",
    },
    {
      id: 11,
      user_id: 1,
      product_id: 2,
      review_star_rating: 5,
      review_headline: "Suddenly fight star share gun leader.",
      review_body: "Budget change center number early. Job else state population.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 0,
      vine_explanation:
        "Positive reality go discussion man high fund. Produce bit music price or force partner.\nStructure poor responsibility indeed. Station carry you part staff.",
    },
    {
      id: 12,
      user_id: 3,
      product_id: 2,
      review_star_rating: 2,
      review_headline: "Answer above market strong section learn after.",
      review_body: "Poor interesting share behavior care standard must consumer. Wonder weight generation weight sense American while whole.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 1,
      vine_explanation:
        "Chair call build anyone. Hair product consumer floor bill local already.\nSecurity before meet reveal whose. Less know participant because between. A star religious practice evening.",
    },
    {
      id: 13,
      user_id: 4,
      product_id: 8,
      review_star_rating: 3,
      review_headline: "Contain responsibility election build.",
      review_body: "Change strong market able lot would. Officer green land risk. Scene mouth join other eight key sound.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 1,
      vine_explanation:
        "Million professional computer stuff Mrs. Under physical current inside Republican quite test various.\nFly outside front your. Senior somebody not indicate stuff. Trip effort their tax product.",
    },
    {
      id: 14,
      user_id: 5,
      product_id: 4,
      review_star_rating: 4,
      review_headline: "Do agency class serious whether effort tree.",
      review_body: "If lawyer whose happy spend. We table herself know voice leave.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 1,
      vine_explanation:
        "Address movie available nearly discuss more. Though front another leg sort just either.\nCup large join activity different. Night prepare we later make as management.",
    },
    {
      id: 15,
      user_id: 7,
      product_id: 1,
      review_star_rating: 5,
      review_headline: "Rule they test.",
      review_body: "Indeed tell born base. International long agreement thank run attorney. Management own item hit visit economic me.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 1,
      vine_explanation:
        "Begin language drive than watch. Or none development morning position. Although article support production even political front.",
    },
    {
      id: 16,
      user_id: 8,
      product_id: 2,
      review_star_rating: 1,
      review_headline: "Who president decision per major receive call.",
      review_body: "President language job painting much. People board best some. Although standard section teacher read marriage.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 0,
      vine_explanation:
        "Government sometimes six explain team. Bar change article just send.\nReal share control free. Responsibility national offer discover still. Student outside feeling he small myself fish question.",
    },
    {
      id: 17,
      user_id: 9,
      product_id: 4,
      review_star_rating: 3,
      review_headline: "Bill rise name beautiful.",
      review_body: "Development recognize reason perhaps better history want majority. Star choice address.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 0,
      vine_explanation:
        "Stock into according nor traditional must relate might. Employee thus current its probably.\nSystem actually office serve method. Decide interesting similar evidence staff ahead.",
    },
    {
      id: 18,
      user_id: 10,
      product_id: 8,
      review_star_rating: 2,
      review_headline: "Manage be position perform act.",
      review_body: "Soldier argue ahead worry. Accept some goal other thank attention contain city. Thousand federal college.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 1,
      vine_explanation:
        "Address whom left medical. Hundred court notice forward truth.\nBlack edge run language not town summer. Next model always.\nSomebody nation camera successful. Reveal toward remain lead.",
    },
    {
      id: 19,
      user_id: 13,
      product_id: 1,
      review_star_rating: 3,
      review_headline: "Success year book food close concern star foreign.",
      review_body: "Wish now kind wife season bed pay. Summer discuss push fill. Design minute stand card office food.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 1,
      vine_explanation:
        "Once continue minute. Authority player control sit such.\nIndeed street threat month letter prove per. Onto effect southern they need everyone. Eye dinner on social know performance enter.",
    },
  ]);
}
