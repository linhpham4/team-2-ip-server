/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "Elaine Day",
      vine_member: 1,
      tier: 4,
      reviewed_reviews: 80,
      amazon_credits: 200,
      user_misc: {
        email: "melissawilson@example.com",
        address: "04754 Gray Drive\nSmithmouth, PW 80882",
        phone: "260-856-8899",
        join_date: "2021-10-12",
        preferences: {
          favorite_categories: ["reveal", "card"],
          notification_settings: {
            email: false,
            sms: true,
            push: true,
          },
        },
        last_login: "2024-05-24T04:22:29",
      },
    },
    {
      id: 2,
      name: "William Romero",
      vine_member: 0,
      tier: 5,
      reviewed_reviews: 83,
      amazon_credits: 449,
      user_misc: {
        email: "rcook@example.org",
        address: "3993 Jacqueline Curve\nChristophermouth, CA 38315",
        phone: "(522)493-0759x5321",
        join_date: "2021-12-20",
        preferences: {
          favorite_categories: ["movement", "action", "value"],
          notification_settings: {
            email: true,
            sms: false,
            push: true,
          },
        },
        last_login: "2024-08-24T09:44:17",
      },
    },
    {
      id: 3,
      name: "Michelle Ellison",
      vine_member: 1,
      tier: 1,
      reviewed_reviews: 80,
      amazon_credits: 454,
      user_misc: {
        email: "robertgill@example.com",
        address: "765 Chelsea Squares\nSouth Danashire, AK 56469",
        phone: "7336978264",
        join_date: "2020-11-23",
        preferences: {
          favorite_categories: ["ok", "spend"],
          notification_settings: {
            email: false,
            sms: true,
            push: false,
          },
        },
        last_login: "2024-01-02T18:30:56",
      },
    },
    {
      id: 4,
      name: "David Wagner",
      vine_member: 0,
      tier: 2,
      reviewed_reviews: 28,
      amazon_credits: 799,
      user_misc: {
        email: "william97@example.com",
        address: "565 Judith Fort Apt. 069\nHardyfurt, MA 71367",
        phone: "(499)712-3845x918",
        join_date: "2020-03-01",
        preferences: {
          favorite_categories: ["do", "top", "couple", "to"],
          notification_settings: {
            email: false,
            sms: false,
            push: false,
          },
        },
        last_login: "2024-07-11T09:30:51",
      },
    },
    {
      id: 5,
      name: "Jorge Chavez",
      vine_member: 1,
      tier: 5,
      reviewed_reviews: 76,
      amazon_credits: 527,
      user_misc: {
        email: "qpeters@example.net",
        address: "662 Hampton Burg Suite 864\nNew Theresa, UT 70386",
        phone: "+1-597-225-7212x189",
        join_date: "2024-08-18",
        preferences: {
          favorite_categories: ["five", "that", "discussion"],
          notification_settings: {
            email: false,
            sms: true,
            push: false,
          },
        },
        last_login: "2024-07-05T19:09:35",
      },
    },
    {
      id: 6,
      name: "Christopher Richmond",
      vine_member: 1,
      tier: 1,
      reviewed_reviews: 51,
      amazon_credits: 566,
      user_misc: {
        email: "rosedenise@example.com",
        address: "23915 Wyatt Court Apt. 178\nNew Toni, AZ 60267",
        phone: "740.926.5949",
        join_date: "2020-09-10",
        preferences: {
          favorite_categories: ["service"],
          notification_settings: {
            email: true,
            sms: false,
            push: true,
          },
        },
        last_login: "2024-04-16T18:31:33",
      },
    },
    {
      id: 7,
      name: "Joseph Cunningham",
      vine_member: 1,
      tier: 2,
      reviewed_reviews: 43,
      amazon_credits: 664,
      user_misc: {
        email: "derektaylor@example.org",
        address:
          "528 Jacob Trafficway Suite 407\nNorth Christinatown, IA 38789",
        phone: "334-840-8874x547",
        join_date: "2022-06-13",
        preferences: {
          favorite_categories: ["carry", "during", "answer"],
          notification_settings: {
            email: false,
            sms: true,
            push: false,
          },
        },
        last_login: "2024-01-14T07:10:29",
      },
    },
    {
      id: 8,
      name: "Clinton Mckinney",
      vine_member: 0,
      tier: 3,
      reviewed_reviews: 0,
      amazon_credits: 66,
      user_misc: {
        email: "michaelkramer@example.org",
        address: "Unit 9198 Box 8801\nDPO AP 51577",
        phone: "520-651-2599x0276",
        join_date: "2024-06-15",
        preferences: {
          favorite_categories: ["draw"],
          notification_settings: {
            email: true,
            sms: false,
            push: false,
          },
        },
        last_login: "2024-08-29T09:30:29",
      },
    },
    {
      id: 9,
      name: "Eric Long",
      vine_member: 0,
      tier: 4,
      reviewed_reviews: 31,
      amazon_credits: 442,
      user_misc: {
        email: "jamesdavid@example.net",
        address: "63732 Bond Brooks Apt. 755\nHowardtown, NM 33484",
        phone: "(651)632-0561x0656",
        join_date: "2023-10-11",
        preferences: {
          favorite_categories: ["something", "including", "list"],
          notification_settings: {
            email: true,
            sms: true,
            push: true,
          },
        },
        last_login: "2024-04-03T13:40:10",
      },
    },
    {
      id: 10,
      name: "Lauren Wilkinson",
      vine_member: 1,
      tier: 1,
      reviewed_reviews: 83,
      amazon_credits: 146,
      user_misc: {
        email: "laura46@example.com",
        address: "PSC 8306, Box 3755\nAPO AE 40583",
        phone: "+1-286-562-7986",
        join_date: "2024-02-12",
        preferences: {
          favorite_categories: ["identify", "country", "happy"],
          notification_settings: {
            email: true,
            sms: true,
            push: false,
          },
        },
        last_login: "2024-08-23T10:55:28",
      },
    },
    {
      id: 11,
      name: "Brittany Burton",
      vine_member: 1,
      tier: 2,
      reviewed_reviews: 43,
      amazon_credits: 674,
      user_misc: {
        email: "mitchellrobert@example.net",
        address: "1446 Miles Tunnel Suite 487\nWest Jessica, MA 79700",
        phone: "+1-443-973-0920x1623",
        join_date: "2023-03-27",
        preferences: {
          favorite_categories: ["purpose", "door", "network"],
          notification_settings: {
            email: true,
            sms: true,
            push: true,
          },
        },
        last_login: "2024-05-11T12:06:43",
      },
    },
    {
      id: 12,
      name: "Wanda Chavez",
      vine_member: 1,
      tier: 1,
      reviewed_reviews: 4,
      amazon_credits: 100,
      user_misc: {
        email: "biancaford@example.net",
        address: "42541 Rocha Fields\nSouth Daltonberg, NM 16048",
        phone: "684.684.3053",
        join_date: "2024-08-26",
        preferences: {
          favorite_categories: [
            "yourself",
            "fly",
            "sing",
            "east",
            "discussion",
          ],
          notification_settings: {
            email: true,
            sms: true,
            push: false,
          },
        },
        last_login: "2024-04-22T11:24:06",
      },
    },
    {
      id: 13,
      name: "Michael Webb",
      vine_member: 0,
      tier: 5,
      reviewed_reviews: 46,
      amazon_credits: 47,
      user_misc: {
        email: "walkeralexander@example.org",
        address: "05544 Taylor Lights Suite 625\nRobertsburgh, LA 86040",
        phone: "+1-546-497-0320x49945",
        join_date: "2020-09-18",
        preferences: {
          favorite_categories: ["on", "he", "like", "time", "ten"],
          notification_settings: {
            email: true,
            sms: true,
            push: false,
          },
        },
        last_login: "2024-05-20T22:52:42",
      },
    },
  ]);
}
