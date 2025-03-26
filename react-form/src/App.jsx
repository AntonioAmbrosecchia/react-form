import React, { useState } from "react";

const BlogForm = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Aldo Baglio",
      content: "Aldo Baglio is an Italian actor, comedian, and screenwriter.",
    },
    {
      id: 2,
      title: "Giovanni Storti",
      content: "Giovanni Storti is an Italian actor, comedian, and screenwriter.",
    },
    {
      id: 3,
      title: "Giacomo Poretti",
      content: "Giacomo Poretti is an Italian actor, comedian, and screenwriter.",
    },

  ])
};

const [newTitle, setNewTitle] = useState("");