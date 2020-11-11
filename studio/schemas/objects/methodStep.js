import client from 'part:@sanity/base/client'
import FormField from 'part:@sanity/components/formfields/default'
import Switch from 'part:@sanity/components/toggles/switch'
import { withDocument } from 'part:@sanity/form-builder';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
import React, { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(value))

const Test = withDocument(forwardRef((props, focusableRef) => {
    const { value, document, onChange, type, markers, level } = props;
    const stateValue = value ? value : [];
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        if (document?.ingredients) {
            const getQuery = () => {
                const filters = document.ingredients.map(ingredient => `_id == "${ingredient.name._ref}"`)
                const projection = '{name}'
                const query = filters.join(' || ')
                return ['*'] + '[' + query + ']' + projection;
            }
            client.fetch(getQuery()).then(resp => {
                    setIngredients(resp);
                }
            );
        }
    }, []);

    const onChangeHandler = (event) => {
        const ingredientName = event.target.title;
        const ingredientIndex = stateValue.indexOf(ingredientName);
        if (ingredientIndex !== -1) {
            onChange(createPatchFrom(stateValue.filter(ingredient => ingredient !== ingredientName)));
        } else {
            onChange(createPatchFrom([...stateValue, ingredientName]));
        }
    }
    return (
        <FormField label={type.title} description={type.description} markers={markers} level={level}>
            <IngredientWrapper ref={focusableRef}>
                {ingredients.length > 0 && ingredients.map((ingredient, index) => {
                    return <Switch
                        key={`Switch-${index}-${ingredient.name}`}
                        onChange={onChangeHandler}
                        checked={stateValue.indexOf(ingredient.name) !== -1}
                        label={ingredient.name}
                        title={ingredient.name}/>
                })}
            </IngredientWrapper>
        </FormField>
    );
}))

const IngredientWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    width: 150px;
    margin: 5px;
  }
`;

export default {
    name: 'methodStep',
    title: 'Steg',
    type: 'object',
    fieldsets: [
        { name: 'methodSteps', title: 'Legg til et steg' }
    ],
    fields: [{
        name: 'stepIngredients',
        title: 'Hvilke ingredienser',
        description: 'Hvilken igredinser brukes i dette stege',
        type: 'array',
        of: [{ type: 'string' }],
        inputComponent: Test,
    },
        {
            name: 'stepText',
            title: 'Steg',
            type: 'text'
        }
    ],
    preview: {
        select: {
            title: 'stepText',
        },
        prepare(selection) {
            const { title } = selection;
            return {
                title: `${title}`,
            }
        }
    }
}
