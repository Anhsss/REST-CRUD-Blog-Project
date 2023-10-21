package com.sooya.boardback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sooya.boardback.entity.BoardEntity;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {
    
}
