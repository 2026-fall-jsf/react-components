import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

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

const firstNames = ["Aldric", "Brynn", "Caelum", "Dara", "Eldon", "Fenna", "Gorin", "Hilda", "Ilyra", "Joren", "Kael", "Lyra", "Maren", "Nyx", "Orin", "Pip", "Quinn", "Rhea", "Soren", "Tali"];
const lastNames = ["Stonefist", "Brightblade", "Nightwhisper", "Oakenshield", "Ravenwood", "Ironforge", "Swiftfoot", "Duskmantle", "Emberheart", "Moonbrook"];

const feats = [
  "Alert", "Athlete", "Actor", "Charger", "Crossbow Expert", "Defensive Duelist",
  "Dual Wielder", "Durable", "Great Weapon Master", "Healer", "Lucky", "Mobile",
  "Observant", "Resilient", "Sentinel", "Sharpshooter", "Skulker", "Tough", "War Caster",
];

const hitDie: Record<string, number> = {
  Barbarian: 12, Fighter: 10, Paladin: 10, Ranger: 10,
  Bard: 8, Cleric: 8, Druid: 8, Monk: 8, Rogue: 8, Warlock: 8,
  Sorcerer: 6, Wizard: 6,
};

const subclasses: Record<string, string[]> = {
  Barbarian: ["Path of the Berserker", "Path of the Totem Warrior", "Path of the Wild Heart"],
  Bard: ["College of Lore", "College of Valor", "College of Glamour"],
  Cleric: ["Life Domain", "Light Domain", "Trickery Domain", "War Domain"],
  Druid: ["Circle of the Land", "Circle of the Moon", "Circle of the Stars"],
  Fighter: ["Champion", "Battle Master", "Eldritch Knight"],
  Monk: ["Way of the Open Hand", "Way of Shadow", "Way of the Four Elements"],
  Paladin: ["Oath of Devotion", "Oath of the Ancients", "Oath of Vengeance"],
  Ranger: ["Hunter", "Beast Master", "Gloom Stalker"],
  Rogue: ["Thief", "Assassin", "Arcane Trickster"],
  Sorcerer: ["Draconic Bloodline", "Wild Magic", "Divine Soul"],
  Warlock: ["The Fiend", "The Archfey", "The Great Old One"],
  Wizard: ["School of Evocation", "School of Abjuration", "School of Illusion"],
};

// Level at which each class picks its subclass; everyone else picks at 3
const subclassLevel: Record<string, number> = {
  Cleric: 1, Sorcerer: 1, Warlock: 1, Druid: 2, Wizard: 2,
};

const maxLevel = 20;
// Levels that grant an Ability Score Improvement, which we spend on a feat
const featLevels = [4, 8, 12, 16, 19];
// Fighters get two extra ASIs
const fighterFeatLevels = [...featLevels, 6, 14];

const shuffle = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5);

const generateCharacter = (level: number) => {
  const characterClass = pick(classes);
  const abilities = abilityNames.map(name => ({ name, score: rollAbility() }));
  const score = (name: string) => abilities.find(a => a.name === name)!.score;
  const conMod = Math.floor((score("CON") - 10) / 2);
  const dexMod = Math.floor((score("DEX") - 10) / 2);
  const die = hitDie[characterClass];

  // Level 1 gets max hit die; later levels use the average roll
  const hitPoints = Math.max(
    level,
    die + conMod + (level - 1) * (Math.floor(die / 2) + 1 + conMod)
  );

  // Simplified AC: unarmored / light armor from DEX, heavier armor for martial classes
  const armorBase = ["Fighter", "Paladin", "Cleric"].includes(characterClass) ? 16 : 
    ["Ranger", "Druid", "Bard", "Rogue", "Warlock", "Barbarian", "Monk"].includes(characterClass) ? 12 : 10;
  const armorClass = armorBase + (armorBase >= 16 ? 0 : dexMod);

  const featCount = (characterClass === "Fighter" ? fighterFeatLevels : featLevels)
    .filter(l => l <= level).length;

  const subclass = level >= (subclassLevel[characterClass] ?? 3)
    ? pick(subclasses[characterClass])
    : undefined;

  return {
    name: `${pick(firstNames)} ${pick(lastNames)}`,
    race: pick(races),
    characterClass,
    subclass,
    alignment: pick(alignments),
    level,
    abilities,
    armorClass,
    hitPoints,
    feats: shuffle(feats).slice(0, featCount),
  };
};

const randomLevel = () => Math.floor(Math.random() * maxLevel) + 1;

export const JebashelComponent = () => {
  // "random" picks a new level each roll
  const [levelChoice, setLevelChoice] = useState<"random" | number>(1);
  const [character, setCharacter] = useState(() => generateCharacter(1));

  const roll = () =>
    setCharacter(generateCharacter(levelChoice === "random" ? randomLevel() : levelChoice));

  return (
    <Card className="mt-4" style={{ maxWidth: "24rem" }}>
      <Card.Header as="h2" className="h5">
        Random D&amp;D Character
      </Card.Header>
      <Card.Body>
        <Form.Group className="mb-3">
          <Form.Label>Level</Form.Label>
          <Form.Select
            value={levelChoice}
            onChange={e => setLevelChoice(
              e.target.value === "random" ? "random" : Number(e.target.value)
            )}
          >
            <option value="random">Random</option>
            {
              Array.from({ length: maxLevel }, (_, i) => i + 1).map(
                l => <option key={l} value={l}>{l}</option>
              )
            }
          </Form.Select>
        </Form.Group>
        <Card.Title>{character.name}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">
          Level {character.level} {character.race} {character.characterClass}
          {character.subclass && ` (${character.subclass})`}
          {" • "}
          {character.alignment}
        </Card.Subtitle>
        <div className="d-flex justify-content-between mb-3">
          <span><strong>AC</strong> {character.armorClass}</span>
          <span><strong>HP</strong> {character.hitPoints}</span>
        </div>
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
        <div className="mb-3">
          <strong>Feats</strong>
          {
            character.feats.length === 0
              ? <div className="text-muted">None (first feat at level 4)</div>
              : (
                <ul className="mb-0">
                  {character.feats.map(f => <li key={f}>{f}</li>)}
                </ul>
              )
          }
        </div>
        <Button onClick={roll}>
          Roll new character
        </Button>
      </Card.Body>
    </Card>
  );
};
