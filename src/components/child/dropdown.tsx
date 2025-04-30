import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
const Dropdown = () => {
  const question = [
    {
      question: "Apakah ini berlangganan?",
    },
    {
      question: "Cara menjadi kaya no root",
    },
    {
      question: "Apakah ini bisa bikin kaya?",
    },
    {
      question: "Nuansauai itu siapa si?",
    },
    {
      question: "Adudu itu kotak ya?",
    },
    {
      question: "Kenapa adudu kotak?",
    },
  ]
  const [open, setOpen] = useState('');
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum."
  return (
    <>
      {question.map((item, index) => (
        <div className=" bg-white py-5 px-4 rounded-sm shadow-md mt-0" key={index}>
          <div 
          className="flex flex-row justify-between items-center cursor-pointer"
          onClick={() => 
            open == item.question ? setOpen('') : setOpen(item.question)
            }
          >
            <p className="font-bold text-xl">{item.question}</p>
            <ChevronDownIcon
            className={`w-7 h-7 transform transition-transform duration-300 ${
              open == item.question ? "rotate-180" : ""
            }`}
            />
          </div>
          {open == item.question && (
            <div className="min-h-7 mt-10 ">
              <p>{lorem}</p> 
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Dropdown;