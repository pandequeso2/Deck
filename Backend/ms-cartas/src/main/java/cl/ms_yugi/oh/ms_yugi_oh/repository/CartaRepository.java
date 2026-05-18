package cl.ms_yugi.oh.ms_yugi_oh.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cl.ms_yugi.oh.ms_yugi_oh.model.Carta;

import java.util.List;



@Repository
public interface CartaRepository extends JpaRepository<Carta, Long> {
    // Podemos crear métodos personalizados fácilmente
    List<Carta> findByCardType(String cardType);
}