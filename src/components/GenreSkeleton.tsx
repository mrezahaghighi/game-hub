import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <HStack paddingY={"5px"}>
      <Skeleton borderRadius={"8px"} boxSize={"36px"} />
      <Skeleton width={"50px"} height={"10px"} />
    </HStack>
  );
};

export default GenreSkeleton;
