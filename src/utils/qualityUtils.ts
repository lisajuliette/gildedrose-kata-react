import { Theme } from "../theme";
import { MAX_QUALITY } from "../utils/gildedRose";

export function getQualityColor(theme: Theme, quality: number) {
  const percentage = (quality / MAX_QUALITY) * 100;

  switch (true) {
    case percentage < 25:
      return theme.colors.qualityRating.common;
    case percentage < 50:
      return theme.colors.qualityRating.uncommon;
    case percentage < 75:
      return theme.colors.qualityRating.rare;
    case percentage <= 100:
      return theme.colors.qualityRating.epic;
    default:
      return theme.colors.qualityRating.legendary;
  }
}
