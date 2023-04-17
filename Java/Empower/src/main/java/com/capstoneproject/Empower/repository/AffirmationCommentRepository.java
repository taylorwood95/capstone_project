package com.capstoneproject.Empower.repository;

import com.capstoneproject.Empower.models.AffirmationComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AffirmationCommentRepository extends JpaRepository<AffirmationComment, Long> {
}
