import React from "react";
import "./Tools.css"; 
export default function ToolListApp() {
  const tools = [
    { name: "React", desc: "Frameworks", icon: "https://i.pinimg.com/736x/f5/b9/91/f5b9918f76b778e799b6aa54c270061e.jpg" },
    { name: "Figma", desc: "Design Tool", icon: "https://i.pinimg.com/736x/9f/4c/25/9f4c2598ee3f12d78d35065639f8e243.jpg" },
    { name: "Tailwind", desc: "Styling Tools", icon: "https://i.pinimg.com/736x/a4/b7/4a/a4b74a0363d04c1f1fe8c951592a3a8a.jpg" },
    { name: "GitHub", desc: "Version Control ", icon: "https://i.pinimg.com/736x/64/88/0b/64880b9b0fe5b53bbe3f7280d262b33f.jpg" },
    { name: "Redux", desc: "State Management", icon: "https://i.pinimg.com/736x/a3/02/10/a302105c53a9506950a5cbd2959ad553.jpg" },
    { name: "Nextjs", desc: "React Framework", icon: "https://i.pinimg.com/736x/32/9a/d8/329ad85f4ab2047cae13d582274f9270.jpg" },
  ];

  return (
    <div className="toollist-container">
         <h1 className="toolist-title">
         PREMIUM <span className="toollist-highlight">TOOLS</span>
      </h1>
      <div className="toollist-grid">
        {tools.map((tool, index) => (
          <div key={index} className="toollist-card">
            <img src={tool.icon} alt={tool.name} className="toollist-icon" />
            <div>
              <h2 className="toollist-title">{tool.name}</h2>
              <p className="toollist-desc">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
