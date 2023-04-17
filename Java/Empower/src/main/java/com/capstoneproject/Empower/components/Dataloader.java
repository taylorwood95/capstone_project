package com.capstoneproject.Empower.components;

import com.capstoneproject.Empower.models.Affirmation;
import com.capstoneproject.Empower.models.AffirmationComment;
import com.capstoneproject.Empower.models.Category;
import com.capstoneproject.Empower.repository.AffirmationCommentRepository;
import com.capstoneproject.Empower.repository.AffirmationRepository;
import com.capstoneproject.Empower.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class Dataloader implements ApplicationRunner {

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    AffirmationCommentRepository affirmationCommentRepository;
    @Autowired
    AffirmationRepository affirmationRepository;


    public Dataloader() {

    }
    public void run(ApplicationArguments args)  {

        Category journey = new Category("Journey");
        categoryRepository.save(journey);



        Affirmation affirmation1 = new Affirmation("Be hopeful for everything", journey );
        affirmationRepository.save(affirmation1);

        Affirmation affirmation2 = new Affirmation("Stop comparing yerself to others", journey);
        affirmationRepository.save(affirmation2);

        AffirmationComment affirmationComment =  new AffirmationComment("This really helped", affirmation1);
        affirmationCommentRepository.save(affirmationComment);





    }
}
