package com.capstoneproject.Empower.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "affirmations")
public class Affirmation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "affirmation")
    private String affirmation;

    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonIgnoreProperties({"affirmations"})
    private Category category;

    public Affirmation(String affirmation, Category category){
        this.affirmation = affirmation;
        this.category = category;

    }

    public Affirmation(){

    }


    public String getAffirmation() {
        return affirmation;
    }

    public void setAffirmation(String affirmation) {
        this.affirmation = affirmation;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Long getId(){
        return id;
    }

    public void setId(){
        this.id = id;
    }
}
