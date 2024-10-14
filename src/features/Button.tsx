import React from "react";

type ButtonProps = {
  icon: React.ReactNode;
  description: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ icon, description, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    type="button"
    className="bg-accent text-white border border-accent hover:bg-white hover:text-accent focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2"
    title={description}
  >
    {icon}
    <span className="sr-only">{description}</span>
  </button>
);
