import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MotionComponentProps } from "~/utils/types";
import { articleCategoryNavItems } from "~/articles";
import {
  getListItemMotionVariants,
  getListMotionVariants,
} from "~/utils/functions";

/**
 * Menu for the header's navigation items.
 */
export default function HeaderMenu({
  transition,
  className = "",
  ...props
}: MotionComponentProps) {
  const motionItemProps = getListItemMotionVariants({
    transition,
  });

  return (
    <motion.ul
      {...props}
      className={`flex ${className}`}
      {...getListMotionVariants({
        transition,
      })}
    >
      {articleCategoryNavItems.map(({ to, label }, index) => (
        <motion.li key={index} {...motionItemProps}>
          <Link to={to} className="text-menu text-contrast">
            {label}
          </Link>
        </motion.li>
      ))}
      <motion.li {...motionItemProps}>
        <Link to="/about" className="text-menu text-contrast">
          About
        </Link>
      </motion.li>
    </motion.ul>
  );
}
