import "./SkillsGrid.css";
import uniqid from "uniqid";
import js from "./assets/svgs/js.svg";
import html from "./assets/svgs/html.svg";
import css from "./assets/svgs/css.svg";
import react from "./assets/svgs/react.svg";
import git from "./assets/svgs/git.svg";
import npm from "./assets/svgs/npm.svg";
import psql from "./assets/svgs/psql.svg";
import webpack from "./assets/svgs/webpack.svg";
import jest from "./assets/svgs/jest.svg";
import nodejs from "./assets/svgs/nodejs.svg";
import knexjs from "./assets/svgs/knexjs.svg";
import express from "./assets/svgs/express.svg";
import SkillBox from "../SkillBox/SkillBox";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      img: html,
    },
    {
      name: "CSS",
      img: css,
    },
    {
      name: "JavaScript",
      img: js,
    },
    {
      name: "React",
      img: react,
    },
    {
      name: "NPM",
      img: npm,
    },
    {
      name: "Git",
      img: git,
    },
    {
      name: "Webpack",
      img: webpack,
    },
    {
      name: "Jest",
      img: jest,
    },
    {
      name: "PostgreSQL",
      img: psql,
    },
    {
      name: "Node.js",
      img: nodejs,
    },
    {
      name: "Express",
      img: express,
    },
    {
      name: "Knex.js",
      img: knexjs,
    },
  ];
  const skillBoxes = skills.map((skill) => (
    <SkillBox key={uniqid()} img={skill.img} skill={skill.name} />
  ));

  return (
    <section id="skills-grid" className="skills-grid section">
      <h2>Skills</h2>
      <div className="flex">{skillBoxes}</div>
    </section>
  );
};

export default Skills;
