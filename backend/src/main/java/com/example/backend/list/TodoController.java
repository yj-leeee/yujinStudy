package com.example.backend.list;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*")
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
	
	//할일 삭제
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable("id") Long id) {
		todoService.delete(id);
	}
	
	//할일 수정
	@PatchMapping("/update/{id}")
	public TodoResponseDTO update(@PathVariable("id") Long id, @RequestBody String content) {
		return todoService.update(id, content);
	}
	
	//할일 검색
	@GetMapping("/findTodo")
	public List<TodoResponseDTO> findTodo(@RequestParam("text") String text) {
		return todoService.findTodo(text);
	}
	
	//할일 체크
	@PatchMapping("/toggle/{id}")
	public TodoResponseDTO toggleChecked(@PathVariable("id") Long id) {
		return todoService.toggleChecked(id);
	}
}
