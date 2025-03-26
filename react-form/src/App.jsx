import React, { useState } from "react";
import "./App.css";

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


  const [newTitle, setNewTitle] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTitle.trim() === "") return;
    const newArticle = { id: articles.length + 1, title: newTitle };
    setArticles([...articles, newArticle]);
    setNewTitle("");
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista Articoli</h1>
      <ul className="list-group mb-4">
        {articles.map((article) => (
          <li key={article.id} className="list-group-item">
            {article.title}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Nuovo titolo"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Aggiungi Articolo
        </button>
      </form>
    </div>
  );
};
export default BlogForm;


