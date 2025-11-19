package com.example.backend.list;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface TodoRepository extends JpaRepository<Todo, Long>{
	Optional<Todo> findByTodoContaining(String todo);
}
