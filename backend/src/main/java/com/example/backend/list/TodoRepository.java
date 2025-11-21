package com.example.backend.list;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface TodoRepository extends JpaRepository<Todo, Long>{
	List<Todo> findByTodoContaining(String todo);
}
