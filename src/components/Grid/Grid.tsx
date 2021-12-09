import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  useMemo,
} from "react";
import { View, ViewProps } from "react-native";
import { chunk } from "lodash-es";

import { Row } from "./Row";

export interface GridProps extends ViewProps {
  children: ReactNode;
  gap?: number;
  numColumns: number;
}

/**
 * A component that lets you easily layout items in a grid with equal gaps.
 *
 * example: https://smartrent-ui.com/components/layout/grid
 */
export function Grid({
  children,
  gap = 0,
  numColumns,
  style,
  ...props
}: GridProps) {
  const chunks = useMemo(() => {
    const arr = Children.toArray(children);

    if (arr.length % numColumns !== 0) {
      for (let i = 0; i < arr.length % numColumns; i++) {
        arr.push(<View />);
      }
    }

    return chunk(arr, numColumns);
  }, [children, numColumns]);

  return (
    <View
      style={[
        {
          margin: -1 * (gap / 2),
        },
        style,
      ]}
      {...props}
    >
      {chunks.map((chunk, idx) => {
        return (
          <Row key={idx}>
            {chunk.map((child, idx) => {
              if (!isValidElement(child)) return <View />;
              return (
                <View
                  key={idx}
                  style={{
                    flex: 1,
                    margin: gap / 2,
                  }}
                >
                  {cloneElement(child)}
                </View>
              );
            })}
          </Row>
        );
      })}
    </View>
  );
}
