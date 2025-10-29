package com.example.backend.todo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RequestMapping("/todo")
@RequiredArgsConstructor
@RestController
public class TodoController {
	private final TodoService todoService;
	
	//할일 생성
	@PostMapping("/create")
	public TodoResponseDto create(@RequestBody TodoRequestDto todoRequestDto) {
		return todoService.create(todoRequestDto);
	}
}
