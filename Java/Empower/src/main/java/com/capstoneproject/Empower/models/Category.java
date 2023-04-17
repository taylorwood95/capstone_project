package com.capstoneproject.Empower.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Columns;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name =  "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @JsonIgnoreProperties({"category"})
    @OneToMany(mappedBy = "category")
    private List<Affirmation> affirmations;

    public Category(String title){
        this.title = title;
        this.affirmations = new ArrayList<>();
    }

    public Category(){

    };

    public List<Affirmation> getAffirmations() {
        return affirmations;
    }

    public void setAffirmations(List<Affirmation> affirmations) {
        this.affirmations = affirmations;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getId(){
        return id;
    }

    public void setId(){
        this.id = id;
    }
}
