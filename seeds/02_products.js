/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    {
      id: 1,
      product_name: "Open-architected composite access",
      product_misc: {
        description:
          "Consumer amount really test. One media week Mr animal. Every trip sport treat commercial worry.\nIts account our real. Possible race name world eat carry item.",
        price: 656.05,
        category: "no",
        brand: "Jones-Chavez",
        rating: 1.1,
        num_reviews: 448,
        in_stock: true,
        tags: ["sure", "bag", "character", "floor"],
        dimensions: {
          length: 9.83,
          width: 13.89,
          height: 82.04,
          unit: "cm",
        },
        weight: {
          value: 7.0,
          unit: "kg",
        },
        release_date: "2021-04-20",
        manufacturer: "Lopez-Santiago",
        color_options: [
          "Cornsilk",
          "MediumSeaGreen",
          "Lime",
          "PapayaWhip",
          "LightSteelBlue",
        ],
      },
    },
    {
      id: 2,
      product_name: "User-centric local Graphical User Interface",
      product_misc: {
        description:
          "New name past weight. Say tough man first able top red process. Compare central ago watch agreement.",
        price: 222.24,
        category: "memory",
        brand: "Thompson Ltd",
        rating: 3.5,
        num_reviews: 458,
        in_stock: true,
        tags: ["charge"],
        dimensions: {
          length: 7.24,
          width: 8.84,
          height: 14.92,
          unit: "cm",
        },
        weight: {
          value: 40.52,
          unit: "kg",
        },
        release_date: "2023-10-16",
        manufacturer: "Stark-Williams",
        color_options: [
          "Moccasin",
          "Chocolate",
          "SpringGreen",
          "IndianRed",
          "DarkViolet",
        ],
      },
    },
    {
      id: 3,
      product_name: "Automated 3rdgeneration intranet",
      product_misc: {
        description:
          "War else mention various.\nStory there instead but. Decade safe situation this agreement poor summer.\nSend nearly head around parent cup.",
        price: 367.49,
        category: "partner",
        brand: "Brown, Stevens and Fisher",
        rating: 4.4,
        num_reviews: 466,
        in_stock: true,
        tags: ["mind", "economy"],
        dimensions: {
          length: 57.74,
          width: 93.59,
          height: 79.08,
          unit: "cm",
        },
        weight: {
          value: 27.97,
          unit: "kg",
        },
        release_date: "2020-11-23",
        manufacturer: "Allen-Holland",
        color_options: ["DarkBlue"],
      },
    },
    {
      id: 4,
      product_name: "Managed actuating encryption",
      product_misc: {
        description:
          "Hundred hospital near. Fund adult study prevent owner notice remember argue. Early themselves ahead beautiful project.",
        price: 282.96,
        category: "person",
        brand: "Castillo, Clark and Shaw",
        rating: 2.3,
        num_reviews: 415,
        in_stock: true,
        tags: ["challenge"],
        dimensions: {
          length: 12.59,
          width: 97.18,
          height: 86.01,
          unit: "cm",
        },
        weight: {
          value: 16.7,
          unit: "kg",
        },
        release_date: "2023-08-01",
        manufacturer: "Coffey PLC",
        color_options: ["OliveDrab"],
      },
    },
    {
      id: 5,
      product_name: "Self-enabling client-driven challenge",
      product_misc: {
        description:
          "Hotel also simply source magazine. Article bit man pass become senior worry.\nSource candidate bit bank interesting. Mention law somebody whose. In conference old scientist. Eat song probably.",
        price: 196.91,
        category: "blue",
        brand: "Taylor PLC",
        rating: 2.5,
        num_reviews: 475,
        in_stock: true,
        tags: ["at", "everybody", "meeting"],
        dimensions: {
          length: 9.79,
          width: 80.74,
          height: 15.26,
          unit: "cm",
        },
        weight: {
          value: 30.78,
          unit: "kg",
        },
        release_date: "2021-12-03",
        manufacturer: "Jefferson-Miller",
        color_options: ["MediumSpringGreen", "SaddleBrown"],
      },
    },
    {
      id: 6,
      product_name: "Pre-emptive client-driven service-desk",
      product_misc: {
        description:
          "Wait join very wall. Memory necessary dinner arrive gun have effect.\nWhile often machine rock want attack.",
        price: 852.36,
        category: "sport",
        brand: "Grant, Thompson and Williams",
        rating: 3.3,
        num_reviews: 749,
        in_stock: false,
        tags: ["head", "couple", "bit"],
        dimensions: {
          length: 78.06,
          width: 39.13,
          height: 3.1,
          unit: "cm",
        },
        weight: {
          value: 13.51,
          unit: "kg",
        },
        release_date: "2024-07-07",
        manufacturer: "Payne Inc",
        color_options: ["LightPink"],
      },
    },
    {
      id: 7,
      product_name: "Expanded tertiary open architecture",
      product_misc: {
        description:
          "Cup there past stop. Reason watch score specific individual. Natural their war executive move theory.",
        price: 632.29,
        category: "agency",
        brand: "Garcia LLC",
        rating: 2.2,
        num_reviews: 526,
        in_stock: false,
        tags: ["fund", "material", "itself", "team"],
        dimensions: {
          length: 55.79,
          width: 70.13,
          height: 15.16,
          unit: "cm",
        },
        weight: {
          value: 48.18,
          unit: "kg",
        },
        release_date: "2024-03-14",
        manufacturer: "Smith, Davila and Wolf",
        color_options: ["Fuchsia", "PaleVioletRed", "Turquoise", "DimGray"],
      },
    },
    {
      id: 8,
      product_name: "Triple-buffered global framework",
      product_misc: {
        description:
          "Deal truth policy sort stand firm area. Rate policy cover stop yet lose data activity. Hard yes play page.\nTeach option rise stay carry. Stage offer beautiful message join point.",
        price: 524.3,
        category: "series",
        brand: "Maldonado-Davis",
        rating: 3.5,
        num_reviews: 212,
        in_stock: true,
        tags: ["eight", "pull", "government", "political"],
        dimensions: {
          length: 49.49,
          width: 49.43,
          height: 38.97,
          unit: "cm",
        },
        weight: {
          value: 11.23,
          unit: "kg",
        },
        release_date: "2021-08-24",
        manufacturer: "Ward, Lambert and Boyd",
        color_options: ["DarkSlateBlue", "RoyalBlue", "MediumAquaMarine"],
      },
    },
    {
      id: 9,
      product_name: "Multi-lateral zero-defect Graphical User Interface",
      product_misc: {
        description:
          "Star interest health this challenge certain. Activity affect knowledge.\nGun up ability when argue. Compare present idea campaign political lot.",
        price: 845.68,
        category: "voice",
        brand: "Howard, Anderson and Martin",
        rating: 2.2,
        num_reviews: 786,
        in_stock: true,
        tags: ["church", "remain", "record"],
        dimensions: {
          length: 64.03,
          width: 44.29,
          height: 27.94,
          unit: "cm",
        },
        weight: {
          value: 18.1,
          unit: "kg",
        },
        release_date: "2024-07-25",
        manufacturer: "Robles-Perez",
        color_options: ["Gray"],
      },
    },
  ]);
}
