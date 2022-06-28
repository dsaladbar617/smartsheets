/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('app_authors').select('*')
    .then((rows) => {
      if (rows.length === 0) {
        return knex('app_authors').insert([
          {first_name: 'Eric', last_name: 'Sung'},
          {first_name: 'Jeff', last_name: 'Haddock'}
        ]);
      }
    })
}
