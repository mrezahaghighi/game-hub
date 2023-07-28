import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GamesCard from "./GamesCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid spacing={10} columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}>
        {isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
        {games.map((game) => (
          <GamesCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
