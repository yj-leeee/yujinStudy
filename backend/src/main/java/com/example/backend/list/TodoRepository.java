package com.example.backend.list;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface TodoRepository extends JpaRepository<Todo, Long>{
	Optional<Todo> findByTodoContaining(String todo);
}
