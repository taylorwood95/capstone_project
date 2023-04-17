package com.capstoneproject.Empower.controller;

import com.capstoneproject.Empower.models.Affirmation;
import com.capstoneproject.Empower.models.AffirmationComment;
import com.capstoneproject.Empower.repository.AffirmationCommentRepository;
import com.capstoneproject.Empower.repository.AffirmationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class AffirmationCommentController {

    @Autowired
    AffirmationCommentRepository affirmationCommentRepository;
    @GetMapping(value = "/affirmationsComments")
    public ResponseEntity<List<AffirmationComment>> getAllCommentAffirmations(){
        return new ResponseEntity<>(affirmationCommentRepository.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "/affirmationsComments/{id}")
    public ResponseEntity getAffirmationComment(@PathVariable Long id){
        return new ResponseEntity<>(affirmationCommentRepository.findById(id), HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "/affirmationsComments")
    public ResponseEntity<AffirmationComment> createAffirmationComment(@RequestBody AffirmationComment affirmationComment){
        affirmationCommentRepository.save(affirmationComment);
        return new ResponseEntity<>(affirmationComment, HttpStatus.ACCEPTED);
    }

    @DeleteMapping(value = "/affirmationsComments/{id}")
    public ResponseEntity<AffirmationComment> deleteAffirmationComments(@PathVariable Long id){
        AffirmationComment found = affirmationCommentRepository.getOne(id);
        affirmationCommentRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.ACCEPTED);
    }

    @PatchMapping(value = "/affirmationsComments/{id}")
    public ResponseEntity<AffirmationComment> updateAffirmationComment(@RequestBody AffirmationComment affirmationComment){
        affirmationCommentRepository.save(affirmationComment);
        return new ResponseEntity<>(affirmationComment, HttpStatus.ACCEPTED);
    }
}
