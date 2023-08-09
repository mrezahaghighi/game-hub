import { Alert, AlertIcon, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GamesCard from "./GamesCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid spacing={6} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
      {isLoading &&
        skeletons.map((s) => (
          <GameCardContainer>
            <GameCardSkeleton key={s} />
          </GameCardContainer>
        ))}
      {data.length === 0 && (
        <Alert status="warning">
          <AlertIcon />
          No Result To Show
        </Alert>
      )}
      {data.map((game) => (
        <GameCardContainer>
          <GamesCard key={game.id} game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};
export default GameGrid;
