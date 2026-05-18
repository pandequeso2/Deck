package cl.ms_yugi.oh.ms_yugi_oh.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cards")
@Data // Lombok: genera getters, setters, toString, etc.
@NoArgsConstructor // Lombok: constructor vacío
@AllArgsConstructor // Lombok: constructor con todos los argumentos
public class Carta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String cardType; // Monster, Spell, Trap

    private String attribute; // Dark, Light, Earth, etc. (Puede ser null para Mágicas/Trampas)
    
    private Integer level;    // Nivel de estrellas
    private Integer attack;
    private Integer defense;

    @Column(length = 1000)
    private String description;
}