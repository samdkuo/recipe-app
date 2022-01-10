import React, { ReactNode } from "react";
import { Button } from "../index";

interface pillProps {
  children: string | ReactNode;
  icon?: string;
  onPress?: () => void;
}

export function Pill({ children, icon, onPress = () => {} }: pillProps) {
  return <Button onPress={onPress}> {children}</Button>;
}
