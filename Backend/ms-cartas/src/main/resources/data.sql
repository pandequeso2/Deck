-- Insertando cartas icónicas de la primera generación

INSERT INTO cards (name, card_type, attribute, level, attack, defense, description) VALUES 
('Dark Magician', 'Monster', 'Dark', 7, 2500, 2100, 'The ultimate wizard in terms of attack and defense.'),
('Blue-Eyes White Dragon', 'Monster', 'Light', 8, 3000, 2500, 'This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.'),
('Exodia the Forbidden One', 'Monster', 'Dark', 3, 1000, 1000, 'If you have "Right Leg of the Forbidden One", "Left Leg of the Forbidden One", "Right Arm of the Forbidden One" and "Left Arm of the Forbidden One" in addition to this card in your hand, you win the Duel.'),
('Pot of Greed', 'Spell', NULL, NULL, NULL, NULL, 'Draw 2 cards.'),
('Monster Reborn', 'Spell', NULL, NULL, NULL, NULL, 'Target 1 monster in either GY; Special Summon it.'),
('Mirror Force', 'Trap', NULL, NULL, NULL, NULL, 'When an opponents monster declares an attack: Destroy all Attack Position monsters your opponent controls.');