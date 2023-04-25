import { useState } from "react";

import Arrow from "../../assets/arrow.svg";
import Dots from "../../assets/dots_pattern.svg";
import Tag from "../../types/tag";
import { motion } from "framer-motion";

type Props = {
  href: string;
  title: string;
  description: string;
  color: string;
  light?: boolean;
  tags: Tag[];
};

export default function Skills(props: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (event: any) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left - width / 2;
    const y = event.clientY - top - height / 2;
    setPosition({ x, y });
  };

  const hoverStyle = {
    x: position.x / 5,
    y: position.y / 5,
    rotate: Math.random() * 10 - 5,
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1, zIndex: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
      onMouseMove={handleMouseMove}
      animate={isHovered ? hoverStyle : {}}
    >
      <a href={props.href} className={`card skill ${props.color} bg-hover`}>
        <img src={Dots} />
        <div className="texts">
          <h2 className={props.light ? "text-gray-900" : "text-gray-50"}>
            {props.title}
          </h2>
          <p className={props.light ? "text-gray-800" : "text-gray-100"}>
            {props.description}
          </p>
          <div className="tags small">
            {props.tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className={`tag ${tag.color} ${tag.borderColor}`}
                >
                  <span className={tag.textColor}>{tag.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="icon">
          <span>View my projects</span>
          <img src={Arrow} />
        </div>
      </a>
    </motion.div>
  );
}
