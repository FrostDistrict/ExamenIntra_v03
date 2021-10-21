package com.cal.intra.controller;

import com.cal.intra.dto.ResponseMessage;
import com.cal.intra.model.GuessNum;
import com.cal.intra.service.GuessNumService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/guess")
public class GuessNumController {

    private GuessNumService guessNumService;

    public GuessNumController(GuessNumService guessNumService){
        this.guessNumService = guessNumService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createGuess(@RequestBody GuessNum guessNum) {
        try {
            GuessNum createdGuess = guessNumService.create(guessNum);
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(createdGuess);
        } catch (IllegalArgumentException e) {
            return ResponseEntity
                    .badRequest()
                    .body(new ResponseMessage(e.getMessage()));
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> allGuesses() {
        return ResponseEntity.ok(guessNumService.getAll());
    }
}
