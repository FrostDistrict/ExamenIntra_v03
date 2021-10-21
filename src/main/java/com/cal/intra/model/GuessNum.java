package com.cal.intra.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GuessNum {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private int userGuess;

    private int randNum;
}
