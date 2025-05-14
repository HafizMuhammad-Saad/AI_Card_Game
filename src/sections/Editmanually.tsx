import * as React from 'react';
import { useState } from 'react';

import Switch from '@mui/material/Switch';




export default function Editmanually() {
    const [checked, setChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
  
  return (
<>
      {/* Heading */}
      <div className="page-heading">
        <h2>Edit Rules</h2>
        <p>Generate game rules instantly using AI suggestions</p>
      </div>

      {/* Form Sections */}
      <div className="rules-form">
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
  <svg
    width="27"
    height="26"
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1807_4839)">
      <path
        d="M18.7336 9.07812L23.3118 4.5L21.6399 2.82812L17.0618 7.40625L18.7336 9.07812ZM25.718 4.5C25.718 4.78125 25.6243 5.01562 25.4368 5.20312L5.34302 25.2969C5.15552 25.4844 4.92114 25.5781 4.63989 25.5781C4.35864 25.5781 4.12427 25.4844 3.93677 25.2969L0.843018 22.2031C0.655518 22.0156 0.561768 21.7812 0.561768 21.5C0.561768 21.2188 0.655518 20.9844 0.843018 20.7969L20.9368 0.703125C21.1243 0.515625 21.3586 0.421875 21.6399 0.421875C21.9211 0.421875 22.1555 0.515625 22.343 0.703125L25.4368 3.79688C25.6243 3.98438 25.718 4.21875 25.718 4.5ZM4.60864 1.53125L6.13989 2L4.60864 2.46875L4.13989 4L3.67114 2.46875L2.13989 2L3.67114 1.53125L4.13989 0L4.60864 1.53125ZM10.0774 4.0625L13.1399 5L10.0774 5.9375L9.13989 9L8.20239 5.9375L5.13989 5L8.20239 4.0625L9.13989 1L10.0774 4.0625ZM24.6086 11.5312L26.1399 12L24.6086 12.4688L24.1399 14L23.6711 12.4688L22.1399 12L23.6711 11.5312L24.1399 10L24.6086 11.5312ZM14.6086 1.53125L16.1399 2L14.6086 2.46875L14.1399 4L13.6711 2.46875L12.1399 2L13.6711 1.53125L14.1399 0L14.6086 1.53125Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1807_4839">
        <rect width="26" height="26" fill="white" transform="translate(0.139893)" />
      </clipPath>
    </defs>
  </svg>
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
              <h2 className="info-heading">
                {/* <BsPencilFill className="heading-icon" /> */}
                Game Mechanics
              </h2>
              <button className="toggle-button">
                {/* <Toggle /> */}               <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
              </button>
            </div>
            <p>
              Players progress through a virtual map by selecting paths or tasks
              and solving math problems of varying difficulty, determined by
              rolling a virtual dice. Instead of combat, they face “Math
              Challenges,” earning stars, items, or power-ups for correct
              answers, while incorrect ones may trigger retry penalties or
              hints. The goal is to reach the final level or collect 100 stars,
              with victory going to the first player to achieve either —
              blending learning with strategy and speed.
            </p>
          </div>

          {/* Section 2 - Core Gameplay Rules */}
          <div className="info-box">
            <div className="info-header">
              <h2 className="info-heading">
                {/* <BsPencilFill className="heading-icon" /> */}
                Core Gameplay Rules
              </h2>
              <button className="toggle-button">
                {/* <Toggle /> */}               <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
              </button>
            </div>
            <p>
              Players navigate through a series of levels or zones on a virtual
              map. Each turn, a player selects a path or task and solves a math
              problem to proceed. Questions vary by difficulty and topic (e.g.,
              addition, subtraction, multiplication, division, fractions).
            </p>
          </div>

          {/* Section 3 - Combat System */}
          <div className="info-box">
            <div className="info-header">
              <h2 className="info-heading">
                {/* <BsPencilFill className="heading-icon" /> */}
                Combat System
              </h2>
              <button className="toggle-button">
                {/* <Toggle /> */}               <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
              </button>
            </div>
            <p>
              Instead of traditional combat, players face “Math Challenges.”
              Players roll a virtual dice to determine the difficulty of the
              problem (easy to hard). Solving a problem correctly allows them to
              earn points or special items; incorrect answers may result in
              retry penalties or hints usage.
            </p>
          </div>

          {/* Section 4 - Victory Conditions */}
          <div className="info-box">
            <div className="info-header">
              <h2 className="info-heading">
                {/* <BsPencilFill className="heading-icon" /> */}
                Victory Conditions
              </h2>
              <button className="toggle-button">
                             <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
              </button>
            </div>
            <p>
              The game ends when a player reaches the final level or accumulates
              a set number of stars (e.g., 100 stars) by solving problems. First
              player to complete the journey or hit the star goal wins,
              encouraging both learning speed and accuracy.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="apply-button">
            {/* <BsCheckLg size={16} /> */}
            <span>Apply Selected Rules</span>
          </button>
        </div>
      </div>
</>  )
}
