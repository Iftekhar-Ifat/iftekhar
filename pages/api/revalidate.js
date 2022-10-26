import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET;

export default async function handler(req, res) {
    const signature = req.headers[SIGNATURE_HEADER_NAME].toString();
    const isValid = isValidSignature(
        JSON.stringify(req.body),
        signature,
        SANITY_WEBHOOK_SECRET
    );

    console.log(`===== Is the webhook request valid? ${isValid}`);

    // Validate signature
    if (!isValid) {
        return res
            .status(401)
            .json({ success: false, message: "Invalid signature" });
    } else {
        try {
            const pathToRevalidate = req.body.slug.current;

            console.log(`===== Revalidating: ${req.body.slug}`);
            console.log(req.body._type);

            if (req.body._type === "post") {
                await res.revalidate(`/blogs/${pathToRevalidate}`);
            } else if (req.body._type === "projects") {
                await res.revalidate(`/projects/${pathToRevalidate}`);
            }

            return res.json({ revalidated: true });
        } catch (err) {
            // Could not revalidate. The stale page will continue to be shown until
            // this issue is fixed.
            return res.status(500).send("Error while revalidating");
        }
    }
}
