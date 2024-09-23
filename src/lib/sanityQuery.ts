import { groq } from "next-sanity";

export const getAllProjects = groq`*[_type == "projects"] | order(order asc) {_id, mainImage, title, description, slug}`;

export const getProject = groq`*[_type == "projects" && slug.current == $slug]{_id, title, description, mainImage, slug, liveLink, githubLink, body, techStack[]->}[0]`;

export const getAllBlogs = groq`*[_type == "post"] | order(_createdAt desc) {_id, title, description, slug}`;

export const getBlog = groq`*[_type == "post" && slug.current == $slug]{_id, _createdAt, title, description, mainImage, slug, body, "authorName": author->name, "authorImage": author->image, "authorSocial": author->social}[0]`;

export const getFeaturedProjects = groq`*[_type == "projects" && "Featured Projects" in categories[]-> title] | order(order asc) {_id, title, mainImage, description, slug}`;

export const getFeaturedBlogs = groq`*[_type == "post" && "Featured Blogs" in categories[]-> title] {_id, title, description, slug}`;

export const getPublications = groq`*[_type == "publications"] | order(publishedAt desc) {_id, title, description, liveLink, body}`;

export const getOngoingResearch = groq`*[_type == "ongoing-research"] | order(publishedAt desc) {_id, title, description, liveLink, body}`;
