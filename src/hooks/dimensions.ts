import { useWindowDimensions, ScaledSize } from "react-native";

export type WindowDimensionsType = Pick<ScaledSize, "width" | "height">;
export type DimensionsQueryFunctionType = (
  dimensions: WindowDimensionsType
) => boolean;
export type DimensionsQueryType<Q> = {
  [key in keyof Q]: DimensionsQueryFunctionType;
};
export type DimensionsQueryResultType<Q> = {
  [key in keyof Q]: boolean;
};

const isSmall = ({ width }: WindowDimensionsType) => width < 600;
const isMedium = ({ width }: WindowDimensionsType) =>
  width >= 600 && width < 1200;
const isLarge = ({ width }: WindowDimensionsType) => width >= 1200;
const aboveSmall = ({ width }: WindowDimensionsType) => width >= 600;
const belowLarge = ({ width }: WindowDimensionsType) => width < 1200;

export const dimensionQueries = {
  isSmall,
  isMedium,
  isLarge,
  aboveSmall,
  belowLarge,
};

export function useWindowDimensionsQuery<
  Q extends {
    small: DimensionsQueryFunctionType;
    medium: DimensionsQueryFunctionType;
    large: DimensionsQueryFunctionType;
  }
>(queries?: Q): DimensionsQueryResultType<Q>;

export function useWindowDimensionsQuery<Q>(
  queries: DimensionsQueryType<Q>
): DimensionsQueryResultType<Q>;

export function useWindowDimensionsQuery<Q>(queries: any): any {
  const dimensions = useWindowDimensions();

  if (!queries) {
    queries = { small: isSmall, medium: isMedium, large: isLarge };
  }

  return (Object.keys(queries) as Array<keyof Q>).reduce((acc, queryName) => {
    return {
      ...acc,
      [queryName]: queries[queryName](dimensions),
    };
  }, {} as DimensionsQueryResultType<Q>);
}
