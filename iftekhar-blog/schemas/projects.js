export default {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "liveLink",
            title: "Live Link",
            type: "string",
        },
        {
            name: "githubLink",
            title: "Github Link",
            type: "string",
        },
        {
            name: "techStack",
            title: "Tech Stack",
            type: "array",
            of: [{ type: "reference", to: { type: "techStack" } }],
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent",
        },
    ],

    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage",
        },
        prepare(selection) {
            const { author } = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            });
        },
    },
};
