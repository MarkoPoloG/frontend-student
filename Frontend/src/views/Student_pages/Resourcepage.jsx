import React from "react";
import "../../css/Resource.css";

export default function StudentResources() {
  // Predefined subject-related topics
  const resources = [
    {
      id: 1,
      title: "Mathematics",
      topics: [
        "Algebra & Equations",
        "Geometry & Trigonometry",
        "Calculus Basics",
        "Probability & Statistics",
      ],
    },
    {
      id: 2,
      title: "Science",
      topics: [
        "Physics: Newton's Laws",
        "Chemistry: Periodic Table",
        "Biology: Cell Structure",
        "Environmental Science",
      ],
    },
    {
      id: 3,
      title: "English",
      topics: [
        "Essay Writing Techniques",
        "Grammar & Sentence Structure",
        "Literary Analysis",
        "Public Speaking Tips",
      ],
    },
    {
      id: 4,
      title: "History",
      topics: [
        "World War I & II",
        "Ancient Civilizations",
        "Modern Politics",
        "Cultural Movements",
      ],
    },
  ];

  return (
    <div className="student-resources">
      <h1 className="resources-title">Student Resources</h1>
      
      <div className="resources-container">
        {resources.map((subject) => (
          <div key={subject.id} className="resource-card">
            <h2>{subject.title}</h2>
            <ul>
              {subject.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
