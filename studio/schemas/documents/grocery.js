export default {
  name: 'grocery',
  title: 'Matvarer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Navn',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'isFromKitchen',
      title: 'Fra eget kjøkkenskap',
      type: 'boolean'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
  initialValue: {
    isFromKitchen: false
  },
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
