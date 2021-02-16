const path = require('path');

// create pages dynamically
exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;
    const result = await graphql(
        `query GetGallerySlug{
            gallery: allContentfulGallery {
                nodes {
                    slug
                }
            }
        }`
    );
    result.data.gallery.nodes.forEach((project)=>{
        createPage({
            path: `/gallery/${project.slug}`,
            component: path.resolve('src/templates/projects.js'),
            context: {
                slug: project.slug
            }
        })
    })
}