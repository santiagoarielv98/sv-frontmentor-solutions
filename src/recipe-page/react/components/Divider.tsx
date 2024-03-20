import React from "react";

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import clsx from "clsx";

import { colors } from "../utils/theme";

const dividerVariants = cva("divider", {
  variants: {
    color: colors("border-"),
    spacing: {
      base: "mx-10 my-7",
    },
  },
  defaultVariants: {
    color: "border",
    spacing: "base",
  },
});

export interface DividerProps
  extends Omit<React.HTMLAttributes<HTMLHRElement>, "color" | "children">,
    VariantProps<typeof dividerVariants> {}

export const Divider: React.FC<DividerProps> = ({
  className,
  color,
  spacing,
  ...props
}) => {
  return (
    <hr
      className={clsx(dividerVariants({ color, spacing }), className)}
      {...props}
    />
  );
};
