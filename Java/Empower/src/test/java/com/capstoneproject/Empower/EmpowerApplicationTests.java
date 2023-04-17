package com.capstoneproject.Empower;

import com.capstoneproject.Empower.models.Affirmation;
import com.capstoneproject.Empower.models.AffirmationComment;
import com.capstoneproject.Empower.models.Category;
import com.capstoneproject.Empower.repository.CategoryRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;

//@RunWith(SpringRunner.class)
@ActiveProfiles("test")
@SpringBootTest
class EmpowerApplicationTests {

	Category category;
	Affirmation affirmation;

	AffirmationComment affirmationComment;



	@Test
	void contextLoads() {
	}

	@Test
	public void canCreateCategory(){
		Category category = new Category("Self-Improvement");
		assertEquals("Self-Improvement", category.getTitle());
	}

	@Test
	public void canCreateAffirmation(){
		Category category = new Category("Self-Improvement");
		Affirmation affirmation =  new Affirmation("BLAH BLAH BLAH", category);
		assertEquals("BLAH BLAH BLAH", affirmation.getAffirmation());
	}

	@Test
	public void canCreateAffirmationComment(){
		Category category = new Category("Self-Improvement");
		Affirmation affirmation =  new Affirmation("BLAH BLAH BLAH", category);
		AffirmationComment affirmationComment =  new AffirmationComment("Here we go", affirmation );
		assertEquals("Here we go", affirmationComment.getComment());
	}



}
