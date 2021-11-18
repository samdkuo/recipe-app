const isLightMode = true;

export type TextThemeColor =
  | "primary"
  | "primaryMuted"
  | "secondary"
  | "tertiary"
  | "text"
  | "white"
  | "gray050"
  | "gray100"
  | "gray200"
  | "gray300"
  | "gray400"
  | "gray500"
  | "gray600"
  | "gray700"
  | "gray800"
  | "gray900"
  | "gray950"
  | "black"
  | "pink"
  | "purple"
  | "deepPurple"
  | "indigo"
  | "darkBlue"
  | "blue"
  | "lightBlue"
  | "cyan"
  | "teal"
  | "green"
  | "lightGreen"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "deepOrange"
  | "brown";

export const colors = {
  // Elemental
  primary: "#fcd378",
  primaryMuted: "#fcd4a8",
  secondary: "#fc9f61",
  tertiary: "#ff775c",
  text: "#f7e8cc",

  // Grays
  white: "#FFFFFF",
  gray050: "#FBFCFD",
  gray075: "#F5F7FA",
  gray100: "#EBEEF4",
  gray200: "#CAD0DA",
  gray300: "#BEC2CD",
  gray400: "#9A9EAA",
  gray500: "#757A87",
  gray600: "#6A6E79",
  gray700: "#3E4650",
  gray800: "#2D3238",
  gray900: "#1A1F27",
  gray950: "#11151A",
  black: "#04070B",

  // Rainbow
  pink: isLightMode ? "#DA4F7A" : "#F76894",
  purple: isLightMode ? "#9F4EB6" : "#CD77E6",
  deepPurple: isLightMode ? "#7859BC" : "#A984FA",
  indigo: isLightMode ? "#5F6BBA" : "#8292FA",
  darkBlue: isLightMode ? "#4D7CDB" : "#6998F5",
  blue: isLightMode ? "#5EA3EF" : "#73B5FF",
  lightBlue: isLightMode ? "#59B3F0" : "#7EC9FC",
  cyan: isLightMode ? "#5FC3D7" : "#79DEF2",
  teal: isLightMode ? "#52A39A" : "#4CBFB3",
  green: isLightMode ? "#7BB972" : "#7CBF73",
  lightGreen: isLightMode ? "#A6CA72" : "#ACD96C",
  lime: isLightMode ? "#D6E06D" : "#C8D96C",
  yellow: isLightMode ? "#FDEF72" : "#FFF38C",
  amber: isLightMode ? "#F7CC50" : "#FFDB73",
  orange: isLightMode ? "#F3AB47" : "#FFBF66",
  deepOrange: isLightMode ? "#EE7850" : "#FF8D66",
  brown: isLightMode ? "#886F65" : "#B29285",
};
