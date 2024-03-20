import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import clsx from "clsx";

const variantMapping = {
  disc: "ul",
  decimal: "ol",
} as const;

const listVariants = cva("list", {
  variants: {
    marker: {
      disc: "list-disc",
      decimal: "list-decimal",
    },
    markerColor: {
      nutmeg: "marker:text-primary",
      darkRaspberry: "marker:text-secondary",
    },
    markerFont: {
      bold: "marker:font-bold",
    },
  },
  defaultVariants: {
    marker: "disc",
    markerColor: "nutmeg",
  },
});

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listVariants> {}

export const List: React.FC<ListProps> = ({
  marker,
  markerColor,
  markerFont,
  className,
  ...props
}) => {
  const defaultClasses = "list-outside py-1.5";
  const Comp = variantMapping[marker ?? "disc"];

  return (
    <Comp
      className={clsx(
        defaultClasses,
        listVariants({ marker, markerColor, markerFont }),
        className,
      )}
      {...props}
    />
  );
};

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {}

export const ListItem: React.FC<ListItemProps> = ({ className, ...props }) => {
  const defaultClasses = "ml-6 pl-4 py-1";
  return <li className={clsx(defaultClasses, className)} {...props} />;
};
