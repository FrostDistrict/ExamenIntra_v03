package com.cal.intra.repository;

import com.cal.intra.model.GuessNum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuessNumRepository extends JpaRepository<GuessNum, Long> {
}
