import React from "react";
import {Layout} from "../components/Layout";
import {Card} from "../components/card/Card";
import styled from "styled-components";
import {colors} from "../shared/Colors";
import client from "../client";
import {ICategory, IGrocery, IRecipe} from "../types/sanity";
import {NextPage} from "next";
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Box, Tab, Tabs, TextField} from "@material-ui/core";
import {BuildRounded, FavoriteRounded, MenuBookRounded, SearchRounded} from "@material-ui/icons";
import {Category} from "../components/Category";
import {categoryQuery, groceryQuery, recipeQuery} from "../utils/SanityQuery";


interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

interface IProps {
    inspoRecipes: IRecipe[];
    recipes: IRecipe[];
    categories: ICategory[];
    searchOptions: {name: string}[];
}

const CookBook: NextPage<IProps> = ({inspoRecipes, categories, searchOptions, recipes}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Layout title={'Kokebok'}>
            <Main>
                <RecipeCarousel>
                    {inspoRecipes && inspoRecipes.map((recipe)=>
                        <Card key={recipe._id} {...recipe}/>
                    )}
                </RecipeCarousel>
                <Menu>
                    <StyledTabs indicatorColor="primary"
                                textColor="primary"
                                variant="scrollable"
                                scrollButtons="on"
                                value={value}
                                onChange={handleChange}
                                aria-label="styled tabs example">
                        <StyledTab icon={<MenuBookRounded/>} label="Kategorier"/>
                        <StyledTab icon={<SearchRounded/>} label="Søk"/>
                        <StyledTab icon={<FavoriteRounded/>} label="Favoritter"/>
                        <StyledTab icon={<BuildRounded/>} label="Innstillinger"/>
                    </StyledTabs>
                    <TabPanel value={value} index={0}>
                        <Category categories={categories}/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Box p={4}>

                            <Autocomplete
                                multiple
                                id="tags-standard"
                                options={searchOptions}
                                getOptionLabel={(option) => option.name}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        label="Søk på oppskrifter eller ingredienser"
                                        placeholder="Søk"
                                        color={"secondary"}
                                    />
                                )}
                            />
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </Menu>
            </Main>
        </Layout>
    );
}


CookBook.getInitialProps = async () => {
    const recipes: IRecipe[] = await client.fetch(recipeQuery, {});
    const categories: ICategory[] = await client.fetch(categoryQuery, {});
    const groceries: IGrocery[] = await client.fetch(groceryQuery, {});
    return {
        inspoRecipes: recipes,
        recipes: recipes,
        categories: categories,
        searchOptions: [...categories, ...recipes, ...groceries]
    }
}

export default CookBook;

const Main = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color: ${colors.blue};
    padding: 4rem 0;
`;

const RecipeCarousel = styled.div`
    overflow-x: scroll;
    display: flex;
    padding-left: 2rem;
    padding-right: 2rem;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
`;

const Menu = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: calc(100vh - 170px - 2*4rem);
    width: 100%;
    padding: 2rem 0 0;
    background-color: ${colors.white};
    border-radius: 3rem 3rem 0 0 ;
    overflow-y: scroll;
    :before {
      content: '';
      width: 5rem;
      height: 2px;
      border-radius: 20rem;
      background-color: ${colors.blue};
      position: absolute;
      top: 1rem;
      left: 50%;
      transform: translate(-50%, -50%);
    }
`;
const StyledTabs = styled(Tabs)`
 && {
    width: 100%;
    flex-grow: 1;
    }
`;

const StyledTab = styled(Tab)`
  &&{
    font-size: 1.6rem;
    $selected {
      background-color: #2d8f51;
    }
  }
`;
