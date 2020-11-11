export default {
    name: 'ingredient',
    title: 'Ingrediens',
    type: 'object',
    fieldsets: [
        { name:'addIngredient', title: 'Legg til en ingrediens' }
    ],
    fields: [
        {
            name: 'name',
            title: 'Matvare',
            type: 'reference',
            to: [{ type: 'grocery' }],
            validation: Rule => Rule.required()
        },
        {
            name: 'quantity',
            title: ' ',
            type: 'object',
            options: {
                columns: 2
            },
            fieldsets: [
                {
                    title: 'Ingrediens',
                }
            ],
            fields: [{
                name: 'amount',
                title: 'Mengde',
                type: 'number',
                validation: Rule => Rule.required()
            }, {
                name: 'unit',
                type: 'string',
                options: {
                    list: [
                        { title: 'ss', value: 'ss' },
                        { title: 'ts', value: 'ts' },
                        { title: 'dl', value: 'dl' },
                        { title: 'ml', value: 'ml' },
                        { title: 'l', value: 'l' },
                        { title: 'g', value: 'g' },
                        { title: 'stykk', value: 'stykk' },
                        { title: 'boks', value: 'boks' }
                    ],
                    layout: 'dropdown'
                },
                validation: Rule => Rule.required()
            }],
        },

        {
            name: 'extendedText',
            description: 'Trenger du no mer utfyllende tekst, skriv det her!',
            title: 'Ekstra tekst',
            type: 'string'
        },
    ],
    preview: {
        select: {
            title: 'name.name',
            quantity: 'quantity',
            extendedText: 'extendedText'
        },
        prepare(selection) {
            const { title, quantity, extendedText } = selection;
            const { amount, unit } = quantity;
            return {
                title: `${amount} ${unit} ${title} ${extendedText ? `(${extendedText})`: ''}`,
            }
        }
    }
}
