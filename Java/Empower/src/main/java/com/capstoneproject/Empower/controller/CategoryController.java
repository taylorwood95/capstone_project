package com.capstoneproject.Empower.controller;

import com.capstoneproject.Empower.models.Category;
import com.capstoneproject.Empower.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<List>
}
