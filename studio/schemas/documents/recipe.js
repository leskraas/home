import methodStep from '../objects/methodStep';


export default {
    name: 'recipe',
    title: 'Oppskrift',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'tags',
            title: 'Kategorier',
            type: 'array',
            options: {
                layout: 'tags',
            },
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
            validation: Rule => Rule.required()
            // of:[ {type: 'string'}],

        },
        {
            name: 'time',
            title: 'Tid',
            description: 'Ca hvor mange minutter tar det å lage denne retten',
            type: 'object',
            fields: [
                {name:'hour', type: 'number', title: 'Timer:', validation: Rule => Rule.required().positive()},
                {name:'minutes', type: 'number', title: 'Minutter:', validation: Rule => Rule.required().positive().min(1).max(60)},
                ],
            options: {
                columns: 2
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'serves',
            title: 'Antall personer',
            type: 'number',
            options: {
                list: [1, 2, 3, 4, 5, 6, 8, 9, 10]
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'difficulty',
            title: 'Vansekelighetsgrad',
            type: 'string',
            of: [{ type: 'string' }],
            options: {
                layout: 'radio',
                list: [
                    { title: 'Enkel', value: 'easy' },
                    { title: 'Middels', value: 'medium' },
                    { title: 'Vanskelig', value: 'hard' }
                ]
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Beskrivelse',
            type: 'text'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'mainImage',
            title: 'Hovedbilde',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'ingredients',
            title: 'Ingredienser',
            type: 'array',
            of: [{ type: 'ingredient' }],
            validation: Rule => Rule.required()
        },
        {
            name: 'method',
            title: 'Fremgangsmåte',
            type: 'array',
            of: [{ type: 'methodStep' }],
            validation: Rule => Rule.required()
        },
    ],
    initialValue: () => ({
        time: {
            _type: 'object',
            hour: 0
        },
    }),
    preview: {
        select: {
            title: 'name',
            author: 'author.name',
            media: 'mainImage'
        },
        prepare(selection) {
            const { author } = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`
            })
        }
    }
}
