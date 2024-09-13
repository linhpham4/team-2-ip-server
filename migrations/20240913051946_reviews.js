/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("product_id")
      .unsigned()
      .notNullable()
      .references("products.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.integer("review_star_rating").notNullable();
    table.string("review_headline").notNullable();
    table.string("review_body").notNullable();
    table.integer("review_date").notNullable();
    table
      .integer("vine_user_id")
      .unsigned()
      .notNullable()
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.boolean("vine_helpful").notNullable();
    table.string("vine_explanation").notNullable();
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("reviews");
}
