import axios from "axios";
import { getPlaiceholder } from "plaiceholder";

async function generateBlurImg(image_url: string) {
  try {
    const fetchImgAsBuffer = await axios.get(image_url, {
      responseType: "arraybuffer",
    });

    const { base64 } = await getPlaiceholder(fetchImgAsBuffer.data);

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export default generateBlurImg;
