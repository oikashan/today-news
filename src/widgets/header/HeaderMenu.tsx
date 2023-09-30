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
      className={`flex ${className}`}
      variants={getListMotionVariants(transition)}
    >
      {articleCategoryNavItems.map(({ to, label }, index) => (
        <motion.li key={index} variants={getListItemMotionVariants(transition)}>
          <Link to={to} className="text-menu text-contrast">
            {label}
          </Link>
        </motion.li>
      ))}
      <motion.li variants={getListItemMotionVariants(transition)}>
        <Link to="/about" className="text-menu text-contrast">
          About
        </Link>
      </motion.li>
    </motion.ul>
  );
}
