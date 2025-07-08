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
    className="me-2 inline-flex items-center rounded-lg border border-accent bg-accent fill-white p-2.5 text-center text-sm font-medium text-white hover:bg-white hover:fill-accent hover:text-accent focus:outline-none focus:ring-4"
    title={description}
  >
    {icon}
    <span className="sr-only">{description}</span>
  </button>
);
