import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { articleCategoryNavItems } from "~/articles";
import { MotionComponentProps } from "~/utils/Types";

type Props = MotionComponentProps & {
  childVariants?: Pick<MotionComponentProps, "variants">;
};

/**
 * Menu for the header's navigation items.
 */
export default function HeaderMenu({
  className = "",
  childVariants,
  ...props
}: Props) {
  return (
    <motion.ul {...props} className={`flex ${className}`}>
      {articleCategoryNavItems.map(({ to, label }, index) => (
        <motion.li variants={childVariants} key={index}>
          <Link to={to} className="text-menu text-contrast">
            {label}
          </Link>
        </motion.li>
      ))}
      <motion.li variants={childVariants}>
        <Link to="/about" className="text-menu text-contrast">
          About
        </Link>
      </motion.li>
    </motion.ul>
  );
}
