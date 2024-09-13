import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";
const router = express.Router();
const knex = initKnex(configuration);

router.get("/", async (_req, res) => {
  try {
    const data = await knex("reviews");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(`${error}`);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await knex("reviews")
      .join("users", "reviews.user_id", "users.id")
      .join("products", "reviews.product_id", "products.id")
      .where({ id: id })
      .select(
        "id",
        "name",
        "product_name",
        "review_star_rating",
        "review_heading",
        "review_body",
        "review_date",
        "vine_user_id",
        "vine_helpful",
        "vine_explanation"
      );

    if (!data.length) {
      return res.status(404).json({ error: `Review with ID ${id} not found` });
    }

    res.status(200).json(data[0]);
  } catch (error) {
    res.status(500).send(`Error retrieving specific review: ${error}`);
  }
});

router.post("/", async (req, res) => {
  try {
    const reviewData = req.body;
    const [newId] = await knex("reviews").insert(reviewData);
    const newReview = await knex("reviews").where({ id: newId }).first();
    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error adding review", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const getReviewById = async (id) => {
  return await knex("reviews").where({ id });
};

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const reviewData = req.body;
    const existingReview = await getReviewById(id);

    if (!existingReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    await knex("reviews")
      .where({ id })
      .update({
        ...reviewData,
      });

    const updatedReview = await getReviewById(id);
    res.json(updatedReview);
    
  } catch (error) {
    console.error("Error updating review:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
