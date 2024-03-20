import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import clsx from "clsx";
import { colors } from "../utils/theme";

const typographyVariants = cva("typography", {
  variants: {
    variant: {
      h1: "text-3xl md:text-[2.5rem]",
      title: "text-3xl text-[1.75rem]",
      h2: "text-xl font-bold",
      p: "text-base",
    },
    color: colors(),
    family: {
      young: "font-young",
      outfit: "font-outfit",
    },
  },
  defaultVariants: {
    variant: "p",
    color: "neutral",
    family: "outfit",
  },
});

const variantMapping = {
  h1: "h1",
  h2: "h2",
  title: "h2",
  p: "p",
} as const;

export interface TypographyProps
  extends Omit<
      React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
      "color"
    >,
    VariantProps<typeof typographyVariants> {}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  family,
  className,
  ...props
}) => {
  const Comp = variantMapping[variant ?? "p"];

  return (
    <Comp
      className={clsx(
        typographyVariants({ variant, color, family }),
        className,
      )}
      {...props}
    />
  );
};
