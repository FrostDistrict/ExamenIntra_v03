package com.cal.intra.service;

import com.cal.intra.model.GuessNum;
import com.cal.intra.repository.GuessNumRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;

@Service
public class GuessNumService {

    private GuessNumRepository guessNumRepository;

    public GuessNumService(GuessNumRepository guessNumRepository){
        this.guessNumRepository = guessNumRepository;
    }

    public GuessNum create(GuessNum guessNum) throws IllegalArgumentException {
        Assert.isTrue(
                guessNum != null,
                "Ce guess est invalide!"
        );
        Assert.isTrue(
                guessNum.getName() != null
                        && guessNum.getName() != "",
                "Le nom ne peut pas etre null ou blank!"
        );
        return guessNumRepository.save(guessNum);
    }

    public GuessNum getById(Long id) throws IllegalArgumentException {
        Assert.isTrue(
                id != null,
                "Id ne peut pas etre null!"
        );
        return guessNumRepository.getById(id);
    }

    public List<GuessNum> getAll() {
        return guessNumRepository.findAll();
    }
}
