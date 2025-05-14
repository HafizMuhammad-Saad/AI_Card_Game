import { Link } from 'react-router-dom';
import { FaMagic } from 'react-icons/fa';
import { BsCheckLg } from 'react-icons/bs';
import { BsPencilFill } from 'react-icons/bs'; // For edit icon

// ----------------------------------------------------------------------

export default function RulesGenerator() {
  return (
    <div className="rules-page">
      {/* Heading */}
      <div className="page-heading">
        <h2>AI Rules Generator</h2>
        <p>Generate game rules instantly using AI suggestions</p>
      </div>

      {/* Form Sections */}
      <div className="rules-form"  style={{paddingRight: '20px', paddingLeft: '20px'}}>
        {/* Describe your game */}
        <div className="input-box">
          <div className="input-left">
            <span className="input-label">Describe your game</span>
            <div className="input-field">
              <span>Mathematics learning game for school children</span>
            </div>
          </div>
          <button className="generate-button">
            <span>Generate</span>
            <FaMagic className="magic-icon" />
          </button>
        </div>

        {/* Difficulty + Game Roles */}
        <div className="input-box">
          <div className="input-left">
            <span className="input-label">Difficulty levels</span>
            <div className="input-field">
              <span>Expert</span>
            </div>
          </div>
          <div className="input-right">
            <span className="input-label">Games Roles</span>
            <div className="input-field">
              <span>10</span>
            </div>
          </div>
        </div>

        {/* Info Sections */}
        <div className="info-boxes">
          {/* Section 1 - Game Mechanics */}
          <div className="info-box">
            <div className="info-header">
              <h2>Game Mechanics</h2>
            </div>
            <p>
              Players progress through a virtual map by selecting paths or tasks and solving math
              problems of varying difficulty, determined by rolling a virtual dice. Instead of
              combat, they face “Math Challenges,” earning stars, items, or power-ups for correct
              answers, while incorrect ones may trigger retry penalties or hints. The goal is to
              reach the final level or collect 100 stars, with victory going to the first player to
              achieve either — blending learning with strategy and speed.
            </p>
          </div>

          {/* Section 2 - Core Gameplay Rules */}
          <div className="info-box">
            <div className="info-header">
              <h2>Core Gameplay Rules</h2>
            </div>
            <p>
              Players navigate through a series of levels or zones on a virtual map. Each turn, a
              player selects a path or task and solves a math problem to proceed. Questions vary by
              difficulty and topic (e.g., addition, subtraction, multiplication, division,
              fractions).
            </p>
          </div>

          {/* Section 3 - Combat System */}
          <div className="info-box">
            <div className="info-header">
              <h2>Combat System</h2>
            </div>
            <p>
              Instead of traditional combat, players face “Math Challenges.” Players roll a virtual
              dice to determine the difficulty of the problem (easy to hard). Solving a problem
              correctly allows them to earn points or special items; incorrect answers may result in
              retry penalties or hints usage.
            </p>
          </div>

          {/* Section 4 - Victory Conditions */}
          <div className="info-box">
            <div className="info-header">
              <h2>Victory Conditions</h2>
            </div>
            <p>
              The game ends when a player reaches the final level or accumulates a set number of
              stars (e.g., 100 stars) by solving problems. First player to complete the journey or
              hit the star goal wins, encouraging both learning speed and accuracy.
            </p>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="action-buttons">
          <Link to="/editmanually">
            <button className="edit-button">
              <BsPencilFill size={20} />
              <span>Edit Manually</span>
            </button>
          </Link>
          <button className="apply-button">
            <BsCheckLg size={16} />
            <span>Apply Selected Rules</span>
          </button>
        </div>
      </div>
    </div>
  );
}
