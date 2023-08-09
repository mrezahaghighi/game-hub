import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import useGeneres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import { wrap } from "framer-motion";
interface Props {
  onSelected: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelected, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGeneres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  //if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((s) => (
            <ListItem>
              <GenreSkeleton key={s} />
            </ListItem>
          ))}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius={"8px"}
                boxSize={"36px"}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                onClick={() => onSelected(genre)}
                textAlign="left"
                variant="link"
                fontSize="lg"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
