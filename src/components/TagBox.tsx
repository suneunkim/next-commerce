import React from "react";

interface TagBoxProps {
  tags: string[];
}

const TagBox = ({ tags = [] }: TagBoxProps) => {
  return (
    <div className="absolute top-1 right-0 text-right">
      {tags.map((tag, i) => (
        <span
          className={`
        px-2
        py-2
        text-white
        text-sm
        ${tag === "new" ? "bg-red-500" : ""}
        ${tag === "best" ? "bg-yellow-500" : ""}
        ${tag === "개별배송" ? "bg-black" : ""}
        ${tag === "자체개발" ? "bg-green-600" : ""}
        ${tag === "위글위글협업" ? "bg-blue-600" : ""}
        `}
          key={i}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagBox;
