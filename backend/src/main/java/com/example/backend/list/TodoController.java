package com.example.backend.list;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RequestMapping("/todo")
@RestController
@RequiredArgsConstructor
public class TodoController {
	private final TodoService todoService;
	
	//할일 생성
	@PostMapping("/create")
	public TodoResponseDTO create(@RequestBody TodoRequestDTO dto) {
		return todoService.create(dto);
	}
	
	//할일 전체 가져오가
	@GetMapping("/lists")
	public List<TodoResponseDTO> findAll(){
		return todoService.findAll();
	}
	
	
}
