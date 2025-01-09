import { ActivityIndicator } from "react-native";
import { colors } from "@/styles/theme"


interface LoadingProps {
  colorLoading: string;

}


export function Loading ({ colorLoading }: LoadingProps) {
  if (colorLoading === 'purple') {
    return <ActivityIndicator size="large" color={colors.purple.light} />;
  } else {
    return <ActivityIndicator size="large" color={colors.gray.light} />;

  }

};