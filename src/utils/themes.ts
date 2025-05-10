import themeConfig from "../config/themes.json";

type ThemeName = "home" | "about" | "feed" | "experiments";

export const generateThemeVars = (themeName: ThemeName) => {
  const theme = themeConfig.themes[themeName];
  const base = themeConfig.base;

  return {
    // Theme-specific variables
    "--theme-current": theme.color.rgba,
    "--theme-current-rgb": theme.color.rgb,
    "--theme-gradient-primary": theme.gradient.primary,
    "--theme-gradient-secondary": theme.gradient.secondary,

    // Base variables
    "--bg-primary": base.colors.background.primary,
    "--bg-secondary": base.colors.background.secondary,
    "--text-primary": base.colors.text.primary,
    "--text-secondary": base.colors.text.secondary,

    // Typography
    "--font-mono": base.typography.fonts.mono,
    "--font-sans": base.typography.fonts.sans,
    "--line-height-tight": base.typography.lineHeight.tight,
    "--line-height-normal": base.typography.lineHeight.normal,
    "--line-height-relaxed": base.typography.lineHeight.relaxed,

    // Spacing
    "--spacing-unit": base.spacing.unit,
    "--spacing-small": base.spacing.sections.small,
    "--spacing-medium": base.spacing.sections.medium,
    "--spacing-large": base.spacing.sections.large,

    // Effects
    "--glass-bg": base.effects.glass.background,
    "--glass-blur": base.effects.glass.blur,
    // "--glass-border": base.effects.glass.border,
    "--transition-default": base.effects.transitions.default,
    "--transition-slow": base.effects.transitions.slow,
    "--transition-fast": base.effects.transitions.fast,
  };
};

export const getThemeName = (path: string): ThemeName => {
  if (path === "/") return "home";
  if (path.startsWith("/about")) return "about";
  if (path.startsWith("/feed")) return "feed";
  if (path.startsWith("/experiments")) return "experiments";
  return "home";
};

export const getThemeValues = (themeName: ThemeName) => {
  const theme = themeConfig.themes[themeName];

  if (!theme) {
    console.warn(`Theme "${themeName}" not found, falling back to home theme`);
    return themeConfig.themes.home;
  }

  return theme;
};
