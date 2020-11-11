import S from '@sanity/desk-tool/structure-builder'
import { FaBook, FaRegLemon, FaScroll, FaLayerGroup } from 'react-icons/fa';

export default () =>
    S.list()
        .title('Mitt hjem')
        .items([
            S.listItem()
                .title('Kokebok')
                .icon(FaBook)
                .child(
                    S.list()
                        .title('Kokebok')
                        .items([
                            S.listItem()
                                .title('Oppskrifter')
                                .icon(FaScroll)
                                .schemaType('recipe')
                                .child(S.documentTypeList('recipe')),
                            S.listItem()
                                .title('Matvarer')
                                .icon(FaRegLemon)
                                .schemaType('grocery')
                                .child(S.documentTypeList('grocery')),
                            S.listItem()
                                .title('Kategori')
                                .icon(FaLayerGroup)
                                .schemaType('category')
                                .child(S.documentTypeList('category')),

                        ])
                )
        ])
