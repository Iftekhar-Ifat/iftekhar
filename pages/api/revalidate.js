// import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

// const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

// export default async function handler(req, res) {
//     const signature = req.headers[SIGNATURE_HEADER_NAME];
//     const body = await readBody(req);
//     if (!isValidSignature(body, signature, SANITY_WEBHOOK_SECRET)) {
//         res.status(401).json({ success: false, message: "Invalid signature" });
//         return;
//     }

//     const jsonBody = JSON.parse(body);
//     try {
//         const pathToRevalidate = jsonBody.slug.current;

//         console.log(`===== Revalidating: ${jsonBody.slug}`);
//         console.log(jsonBody._type);

//         if (jsonBody._type === "post") {
//             await res.revalidate(`/blogs/${pathToRevalidate}`);
//         } else if (jsonBody._type === "projects") {
//             await res.revalidate(`/projects/${pathToRevalidate}`);
//         }

//         return res.json({ revalidated: true });
//     } catch (err) {
//         // Could not revalidate. The stale page will continue to be shown until
//         // this issue is fixed.
//         return res.status(500).send("Error while revalidating");
//     }
// }

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

// async function readBody(readable) {
//     const chunks = [];
//     for await (const chunk of readable) {
//         chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
//     }
//     return Buffer.concat(chunks).toString("utf8");
// }
