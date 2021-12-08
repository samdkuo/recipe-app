export type ButtonSize = "small" | "large";
export type ButtonVariation = "default" | "outlined" | "plain";

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;
