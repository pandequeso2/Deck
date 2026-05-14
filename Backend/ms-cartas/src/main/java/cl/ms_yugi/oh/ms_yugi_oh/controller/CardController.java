package cl.ms_yugi.oh.ms_yugi_oh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import cl.ms_yugi.oh.ms_yugi_oh.model.Carta;
import cl.ms_yugi.oh.ms_yugi_oh.services.CartaService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cards")
public class CardController {

    @Autowired
    private CartaService cardService;

    // Obtener todas las cartas: GET /api/v1/cards
    @GetMapping
    public List<Carta> getAllCards() {
        return cardService.getAllCards();
    }

    // Obtener por ID: GET /api/v1/cards/1
    @GetMapping("/{id}")
    public ResponseEntity<Carta> getCardById(@PathVariable Long id) {
        return cardService.getCardById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Obtener por tipo: GET /api/v1/cards/type/Monster
    @GetMapping("/type/{type}")
    public List<Carta> getCardsByType(@PathVariable String type) {
        return cardService.getCardsByType(type);
    }

    // Crear nueva carta: POST /api/v1/cards
    @PostMapping
    public Carta createCard(@RequestBody Carta card) {
        return cardService.saveCard(card);
    }
}