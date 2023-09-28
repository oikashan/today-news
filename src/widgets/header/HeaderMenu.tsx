import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { articleCategoryNavItems } from "~/articles";
import { MotionComponentProps } from "~/utils/Types";
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
  return (
    <motion.ul
      {...props}
      initial="hidden"
      animate="visible"
      transition={transition}
      className={`flex ${className}`}
      variants={getListMotionVariants()}
    >
      {articleCategoryNavItems.map(({ to, label }, index) => (
        <motion.li
          key={index}
          transition={transition}
          variants={getListItemMotionVariants()}
        >
          <Link to={to} className="text-menu text-contrast">
            {label}
          </Link>
        </motion.li>
      ))}
      <motion.li transition={transition} variants={getListItemMotionVariants()}>
        <Link to="/about" className="text-menu text-contrast">
          About
        </Link>
      </motion.li>
    </motion.ul>
  );
}
