import { useState } from "react";
import { motion } from "framer-motion";

export default function Avatar() {
  const [currentAvatar, setCurrentAvatar] = useState(0);
  const avatars = [
    "/avatars/1.png",
    "/avatars/2.png",
    "/avatars/3.png",
    "/avatars/4.png",
    "/avatars/5.png",
    "/avatars/6.png",
  ];

  function onHover() {
    setCurrentAvatar((currentAvatar + 1) % avatars.length);
  }

  const avatarListStyle = {
    transform: `translateY(${currentAvatar * -84}px)`,
  };

  return (
    <>
      <div className="avatar" onMouseEnter={onHover}>
        <motion.div
          animate={avatarListStyle}
          transition={{ type: "spring", stiffness: 80 }}
        >
          {avatars.map((avatar, index) => {
            return (
              <motion.img
                key={index}
                src={avatar}
                alt="avatar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              />
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
