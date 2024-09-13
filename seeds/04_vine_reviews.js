/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("vine_reviews").del();
  await knex("vine_reviews").insert([
    {
      id: 1,
      review_id: 8,
      user_id: 12,
      product_id: 2,
      review_star_rating: 5,
      review_headline: "Everybody challenge heart effect key.",
      review_body:
        "Since media month their nation. Line south spend personal similar.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 0,
      vine_explanation:
        "Feel third here father hundred. Her pretty least us budget standard discuss.\nGuy now type.\nPhone newspaper spring later music six social officer. Manage sound city theory sister police.",
    },
    {
      id: 2,
      review_id: 10,
      user_id: 8,
      product_id: 9,
      review_star_rating: 1,
      review_headline: "Generation set myself course.",
      review_body:
        "End crime themselves according well itself each. Owner other commercial put. Upon cost let best human.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 1,
      vine_explanation:
        "Know move drop cup official nothing person. Daughter partner why often around board apply which. Exist yard and always. Measure character hand board.\nHair edge real meeting.",
    },
    {
      id: 3,
      review_id: 5,
      user_id: 6,
      product_id: 3,
      review_star_rating: 3,
      review_headline: "Or detail necessary kitchen home yard institution.",
      review_body:
        "Tax subject quality into three avoid. They situation including professor likely arm personal.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 0,
      vine_explanation:
        "Particularly pressure scientist fish democratic still. Perhaps while cell both ever recognize hard game. Improve prove network instead project may ready then.",
    },
    {
      id: 4,
      review_id: 9,
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
      id: 5,
      review_id: 1,
      user_id: 12,
      product_id: 1,
      review_star_rating: 4,
      review_headline: "Far serve away treatment.",
      review_body:
        "Interest evening wall mission Mr. Wish enough travel job necessary as edge. Rock budget land other center.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 1,
      vine_explanation:
        "Leader hair think church girl. Picture long line control food talk operation.",
    },
    {
      id: 6,
      review_id: 4,
      user_id: 5,
      product_id: 6,
      review_star_rating: 3,
      review_headline: "About condition describe glass board.",
      review_body:
        "Economic television when this maybe increase such. Everything boy environmental just style some. Think present create address too pretty.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 0,
      vine_explanation:
        "Short which get hear month. Authority others mean keep.\nArm or improve. Cut another visit strong budget fall price. Teach building offer week letter home produce play.",
    },
    {
      id: 7,
      review_id: 7,
      user_id: 9,
      product_id: 4,
      review_star_rating: 2,
      review_headline: "Performance hundred involve address finish growth yes.",
      review_body:
        "Fish model food fear it local give. Now central thank concern office break also.",
      review_date: 1726209293,
      vine_user_id: 1,
      vine_helpful: 0,
      vine_explanation:
        "Account personal too once tough. Must near themselves lay message project. Company behavior involve impact just.\nPage decision threat either spring series hear. Measure look seat move.",
    },
  ]);
}
