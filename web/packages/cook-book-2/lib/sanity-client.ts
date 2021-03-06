import sanityClient from '@sanity/client';

const options = {
    projectId: '2bkgd8l0', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: true, // `false` if you want to ensure fresh data
};

const client = sanityClient(options);

export default client;
