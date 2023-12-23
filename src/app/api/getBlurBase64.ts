import axios from "axios";
import { getPlaiceholder } from "plaiceholder";

async function getBlurBase64(githubUrl: string) {
  try {
    const response = await axios.get(githubUrl);

    if (response.status !== 200) {
      throw new Error(`Error fetching GitHub data. Status: ${response.status}`);
    }

    const user = response.data;
    const image_url = user.avatar_url;

    const avatar = await axios.get(image_url, { responseType: "arraybuffer" });

    const imageBuffer = Buffer.from(avatar.data);

    const { base64 } = await getPlaiceholder(imageBuffer);

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export default getBlurBase64;
