import { useState, MouseEvent } from 'react';

interface TiltCardProps {
  icon: string;
  name: string;
}

export const TiltCard = ({ icon, name }: TiltCardProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="w-full h-full rounded-[20px] shadow-card transition-transform duration-200 ease-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      <div className="bg-primary-500 rounded-[20px] py-3 px-3 flex justify-evenly items-center flex-col">
        <div className="bg-white rounded-full p-2">
          <img
            src={icon}
            alt={name.toLowerCase()}
            className="w-10 h-10 object-contain filter-none"
          />
        </div>
        <h3 className="dark:text-white text-[15px] font-bold text-center Nanum">{name}</h3>
      </div>
    </div>
  );
};
