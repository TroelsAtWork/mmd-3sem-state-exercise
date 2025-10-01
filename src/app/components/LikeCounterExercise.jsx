"use client";
// Importer CSS filen
import "../component-style/like-counter-exercise.css";
// TODO for studerende: Importer useState fra React

export default function LikeCounterExercise() {
  // TODO for studerende: Opret state variabler

  // TODO for studerende: Implementer handleLike funktionen

  return (
    <div className="exercise-container">
      <div className="post-card">
        {/* Header */}
        <div className="post-header">
          <h1 className="exercise-title">Like Counter Øvelse</h1>
          <p className="exercise-description">
            Få opslagets like-knap til at tælle likes
          </p>
        </div>

        {/* Post indhold */}
        <div className="post-content">
          <div className="post-image">
            <span className="post-image-text">🎉</span>
          </div>
          <p className="post-text">
            Dette er et fantastisk opslag! Klik på like-knappen nedenfor for at
            vise din støtte. Knappen skal skifte farve og tælleren skal
            opdateres.
          </p>
        </div>

        {/* Like sektion */}
        <div className="like-section">
          <button
            // TODO for studerende: Tilføj liked class hvis isLiked er true
            className={`like-button`}
            // TODO for studerende: Tilføj onClick
          >
            {/* TODO for studerende: Vis det rigtige hjertet (❤️ / 🤍) i span elementet herunder  */}
            <span className="heart-icon">🤍</span>
            {/* TODO for studerende: Vis "Liked" eller "Like" */}
            {/* Hint: Brug en ternary operator */}
            Like
          </button>

          <div className="like-count">
            {/* TODO for studerende: Vis antallet af likes */}
            {/* Hint: Brug likes state variablen */}
            likes 0
          </div>
        </div>

        {/* Hjælpe information */}
        <div className="help-section">
          <h3 className="help-title">🎯 Opgave:</h3>
          <ul className="help-list">
            <li>Importer useState fra React</li>
            <li>Opret likes state (starter på 0)</li>
            <li>Opret ex. isLiked state (starter på false)</li>
            <li>Implementer handleLike funktionen</li>
            <li>Toggle isLiked og opdater likes tælleren</li>
            <li>Se like-knappen skifte farve og tælleren opdatere!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
