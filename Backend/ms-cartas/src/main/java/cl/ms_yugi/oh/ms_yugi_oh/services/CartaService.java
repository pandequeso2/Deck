package cl.ms_yugi.oh.ms_yugi_oh.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.ms_yugi.oh.ms_yugi_oh.model.Carta;
import cl.ms_yugi.oh.ms_yugi_oh.repository.CartaRepository;

import java.util.List;
import java.util.Optional;



@Service
public class CartaService {

    @Autowired
    private CartaRepository cardRepository;

    public List<Carta> getAllCards() {
        return cardRepository.findAll();
    }

    public Optional<Carta> getCardById(Long id) {
        return cardRepository.findById(id);
    }

    public List<Carta> getCardsByType(String type) {
        return cardRepository.findByCardType(type);
    }

    public Carta saveCard(Carta card) {
        return cardRepository.save(card);
    }
}