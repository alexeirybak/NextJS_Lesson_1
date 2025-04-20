"use client";

const Button = () => {
  return (
    <button className="bg-blue-500" onClick={() => alert("Нажали")}>
      Нажми меня
    </button>
  );
};

export default Button;
