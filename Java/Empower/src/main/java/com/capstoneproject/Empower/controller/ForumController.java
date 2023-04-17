package com.capstoneproject.Empower.controller;


import com.capstoneproject.Empower.models.Category;
import com.capstoneproject.Empower.models.Forum;
import com.capstoneproject.Empower.repository.ForumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ForumController {

    @Autowired
    ForumRepository forumRepository;

    @GetMapping(value = "/forum")
    public ResponseEntity<List<Forum>> getAllForums(){
        return new ResponseEntity<>(forumRepository.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "/forum/{id}")
    public ResponseEntity getForumComment(@PathVariable Long id){
        return new ResponseEntity<>(forumRepository.findById(id), HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "/forum")
    public ResponseEntity<Forum> createForumComment(@RequestBody Forum forum){
        forumRepository.save(forum);
        return new ResponseEntity<>(forum, HttpStatus.ACCEPTED);
    }

    @DeleteMapping(value = "/forum/{id}")
    public ResponseEntity<Forum> deleteForumComment(@PathVariable Long id){
        Forum found = forumRepository.getOne(id);
        forumRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.ACCEPTED);
    }

    @PatchMapping(value = "/forum/{id}")
    public ResponseEntity<Forum> updateForum(@RequestBody Forum forum){
        forumRepository.save(forum);
        return new ResponseEntity<>(forum, HttpStatus.ACCEPTED);
    }
}
