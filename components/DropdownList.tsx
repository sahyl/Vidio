"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const DropdownList = ({
  options,
  selectedOption,
  onOptionSelect,
  triggerElement,
}: DropdownListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionClick = (option: string) => {
    onOptionSelect(option);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {triggerElement}
      </div>

      {isOpen && (
        <ul className="dropdown">
          {options.map((option) => (
            <li
              key={option}
              className={cn("list-item", {
                "bg-pink-100 text-white": selectedOption === option,
              })}
              onClick={() => handleOptionClick(option)}
            >
              {option}
              {selectedOption === option && (
                <Image
                  src={"/assets/icons/check.svg"}
                  alt="check"
                  width={16}
                  height={16}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default DropdownList








// "use client";

// import Image from "next/image";
// import { useState } from "react";

// const DropdownList = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="relative">
//       <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
//         <div className="filter-trigger">
//           <figure>
//             <Image
//               src={"/assets/icons/hamburger.svg"}
//               alt="dropdown"
//               width={14}
//               height={14}
//             />
//             Menu
//           </figure>
//           <Image
//             src={"/assets/icons/arrow-down.svg"}
//             alt="arrow-down"
//             width={20}
//             height={20}
//           />
//         </div>
//       </div>
//       {isOpen && (
//         <ul className="dropdown">
//           {["most recent", "most Liked", "most viral "].map((option) => (
//             <li className="list-item" key={option}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default DropdownList;
