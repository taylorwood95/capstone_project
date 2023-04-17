package com.capstoneproject.Empower.controller;

import com.capstoneproject.Empower.models.Affirmation;
import com.capstoneproject.Empower.models.Category;
import com.capstoneproject.Empower.repository.AffirmationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class AffirmationController {

    @Autowired
    AffirmationRepository affirmationRepository;

    @GetMapping(value = "/affirmations")
    public ResponseEntity<List<Affirmation>> getAllAffirmations(){
        return new ResponseEntity<>(affirmationRepository.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "/affirmations/{id}")
    public ResponseEntity getAffirmation(@PathVariable Long id){
        return new ResponseEntity<>(affirmationRepository.findById(id), HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "/affirmations")
    public ResponseEntity<Affirmation> createAffirmation(@RequestBody Affirmation affirmation){
        affirmationRepository.save(affirmation);
        return new ResponseEntity<>(affirmation, HttpStatus.ACCEPTED);
    }

    @DeleteMapping(value = "/affirmations/{id}")
    public ResponseEntity<Affirmation> deleteAffirmation(@PathVariable Long id){
        Affirmation found = affirmationRepository.getOne(id);
        affirmationRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.ACCEPTED);
    }

    @PatchMapping(value = "/affirmations/{id}")
    public ResponseEntity<Affirmation> updateAffirmation(@RequestBody Affirmation affirmation){
        affirmationRepository.save(affirmation);
        return new ResponseEntity<>(affirmation, HttpStatus.ACCEPTED);
    }

}
