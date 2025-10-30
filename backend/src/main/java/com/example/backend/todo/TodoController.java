package com.example.backend.todo;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;

@RequestMapping("/todo")
@RequiredArgsConstructor
@RestController
public class TodoController {
	private final TodoService todoService;
	
	//할일 생성
	@PostMapping("/create")
	public TodoResponseDto create(TodoRequestDto todoRequestDto) {
		return todoService.create(todoRequestDto);
	}
	
	//할일 수정
	@PutMapping("/update/{id}")
	public TodoResponseDto update(@PathVariable("id") Integer id,@RequestBody TodoRequestDto todoRequestDto) {
		return todoService.update(id, todoRequestDto);
	}
	
	//할일 목록 가져오기
	@GetMapping("read")
	public List<TodoResponseDto> read() {
		return todoService.readAll();
	}
}
