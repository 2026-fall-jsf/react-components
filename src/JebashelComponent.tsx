import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const races = ["Human", "Elf", "Dwarf", "Halfling", "Gnome", "Half-Orc", "Half-Elf", "Tiefling", "Dragonborn"];
const classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
const alignments = [
  "Lawful Good", "Neutral Good", "Chaotic Good",
  "Lawful Neutral", "True Neutral", "Chaotic Neutral",
  "Lawful Evil", "Neutral Evil", "Chaotic Evil",
];
const abilityNames = ["STR", "DEX", "CON", "INT", "WIS", "CHA"] as const;

const pick = <T,>(items: T[]) => items[Math.floor(Math.random() * items.length)];
const rollD6 = () => Math.floor(Math.random() * 6) + 1;

// Classic 4d6, drop the lowest die
const rollAbility = () => {
  const rolls = [rollD6(), rollD6(), rollD6(), rollD6()].sort((a, b) => a - b);
  return rolls[1] + rolls[2] + rolls[3];
};

const modifier = (score: number) => {
  const mod = Math.floor((score - 10) / 2);
  return mod >= 0 ? `+${mod}` : `${mod}`;
};

const generateCharacter = () => ({
  race: pick(races),
  characterClass: pick(classes),
  alignment: pick(alignments),
  level: 1,
  abilities: abilityNames.map(name => ({ name, score: rollAbility() })),
});

export const JebashelComponent = () => {
  const [character, setCharacter] = useState(generateCharacter);

  return (
    <Card className="mt-4" style={{ maxWidth: "24rem" }}>
      <Card.Header as="h2" className="h5">
        Random D&amp;D Character
      </Card.Header>
      <Card.Body>
        <Card.Title>
          Level {character.level} {character.race} {character.characterClass}
        </Card.Title>
        <Card.Subtitle className="mb-3 text-muted">
          {character.alignment}
        </Card.Subtitle>
        <ListGroup className="mb-3">
          {
            character.abilities.map(
              ({ name, score }) => (
                <ListGroup.Item
                  key={name}
                  className="d-flex justify-content-between"
                >
                  <strong>{name}</strong>
                  <span>{score} ({modifier(score)})</span>
                </ListGroup.Item>
              )
            )
          }
        </ListGroup>
        <Button onClick={() => setCharacter(generateCharacter())}>
          Roll new character
        </Button>
      </Card.Body>
    </Card>
  );
};
