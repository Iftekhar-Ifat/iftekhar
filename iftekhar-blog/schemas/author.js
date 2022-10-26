export default {
    name: "author",
    title: "author",
    type: "document",
    fields: [
        {
            name: "name",
            title: "name",
            type: "string",
        },
        {
            name: "slug",
            title: "slug",
            type: "slug",
            options: {
                source: "name",
                maxlength: 96,
            },
        },
        {
            name: "image",
            title: "image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "bio",
            title: "bio",
            type: "array",
            of: [
                {
                    title: "block",
                    type: "block",
                    styles: [{ title: "normal", value: "normal" }],
                    lists: [],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
        },
    },
};
