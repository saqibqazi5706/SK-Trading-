import type { StructureResolver } from 'sanity/structure'
import { accessoryCategories } from '../lib/sanity/accessories'
import { categoryBySlug } from '../lib/sanity/queries'
import { smartProductCategories } from '../lib/sanity/smartProducts'

const machineCategories = Object.entries(categoryBySlug).map(([slug, label]) => ({
  slug,
  label,
}))

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Machines, grouped by category
      S.listItem()
        .title('Machines')
        .child(
          S.list()
            .title('Machines')
            .items(
              machineCategories.map(({ slug, label }) =>
                S.listItem()
                  .title(label)
                  .id(`machine-${slug}`)
                  .child(
                    S.documentList()
                      .title(label)
                      .schemaType('machine')
                      .filter('_type == "machine" && category == $category')
                      .params({ category: label })
                      .initialValueTemplates([
                        S.initialValueTemplateItem('machine-by-category', {
                          category: label,
                        }),
                      ])
                  )
              )
            )
        ),

      // Accessories (SK Trading), grouped by category
      S.listItem()
        .title('Accessories')
        .child(
          S.list()
            .title('Accessories')
            .items(
              accessoryCategories.map(({ slug, label }) =>
                S.listItem()
                  .title(label)
                  .id(`accessory-${slug}`)
                  .child(
                    S.documentList()
                      .title(label)
                      .schemaType('accessory')
                      .filter('_type == "accessory" && category == $category')
                      .params({ category: label })
                      .initialValueTemplates([
                        S.initialValueTemplateItem('accessory-by-category', {
                          category: label,
                        }),
                      ])
                  )
              )
            )
        ),

      S.divider(),

      // Smart Automation products, grouped by category
      S.listItem()
        .title('Smart Automation Products')
        .child(
          S.list()
            .title('Smart Automation Products')
            .items(
              smartProductCategories.map(({ slug, label }) =>
                S.listItem()
                  .title(label)
                  .id(`smartProduct-${slug}`)
                  .child(
                    S.documentList()
                      .title(label)
                      .schemaType('smartProduct')
                      .filter('_type == "smartProduct" && category == $category')
                      .params({ category: label })
                      .initialValueTemplates([
                        S.initialValueTemplateItem('smartProduct-by-category', {
                          category: label,
                        }),
                      ])
                  )
              )
            )
        ),
    ])
