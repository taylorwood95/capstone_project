package com.capstoneproject.Empower.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "affirmationComments")
public class AffirmationComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "comment")
    private String comment;

    @ManyToOne
    @JoinColumn(name = "affirmation_id")
    @JsonIgnoreProperties({"affirmationComments"})
    private Affirmation affirmation;

    public AffirmationComment() {
    }

    public AffirmationComment(String comment, Affirmation affirmation){
        this.comment = comment;
        this.affirmation = affirmation;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Affirmation getAffirmation() {
        return affirmation;
    }

    public void setAffirmation(Affirmation affirmation) {
        this.affirmation = affirmation;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
