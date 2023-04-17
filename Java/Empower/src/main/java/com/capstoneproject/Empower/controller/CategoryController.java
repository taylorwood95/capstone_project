package com.capstoneproject.Empower.controller;

import com.capstoneproject.Empower.models.Category;
import com.capstoneproject.Empower.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping(value = "/categories")
    public ResponseEntity<List<Category>> getAllCategories(){
        return new ResponseEntity<>(categoryRepository.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "/categories/{id}")
    public ResponseEntity getCategory(@PathVariable Long id){
        return new ResponseEntity<>(categoryRepository.findById(id), HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "/categories")
    public ResponseEntity<Category> createCategory(@RequestBody Category category){
        categoryRepository.save(category);
        return new ResponseEntity<>(category, HttpStatus.ACCEPTED);
    }
}
