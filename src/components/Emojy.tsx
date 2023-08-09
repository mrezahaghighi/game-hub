import meh from "../assets/meh.webp";
import bullseye from "../assets/bulls-eye.webp";
import thumbsup from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emojy = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojymap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "recomended", boxSize: "25px" },
    5: { src: bullseye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojymap[rating]} marginTop={1} />;
};

export default Emojy;
