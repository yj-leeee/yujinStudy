package com.example.backend.list;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TodoService {
	private final TodoRepository todoRepository;
	
	//할일 생성
	public TodoResponseDTO create(TodoRequestDTO dto) {
		Todo todo = dto.toEntity();
		Todo saved = todoRepository.save(todo);
		return TodoResponseDTO.fromEntity(saved);
	}
	
	//할일 전체 조회
	public List<TodoResponseDTO> findAll(){
		return todoRepository.findAll()
				.stream()
				.map(TodoResponseDTO::fromEntity)
				.toList();
	}
	
	//할일 삭제
	public void delete(Long id) {
		Todo todo = todoRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("존재하지 않는 할일 입니다"));
		todoRepository.delete(todo);
	}
	
	//할일 수정
	public TodoResponseDTO update(Long id, String content) {
		Todo todo = todoRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("존재하지 않습니다."));
		todo.update(content);
		
		//JPA는 영속성에 의해 한 번더 리포지터리로 저장 안 해도 자동으로 됨
		return TodoResponseDTO.fromEntity(todo);
	}
	
	//할일 검색
	public List<TodoResponseDTO> findTodo(String text) {
		List<Todo> todos = todoRepository.findByTodoContaining(text);
		
		if(todos.isEmpty()) {
			throw new IllegalArgumentException("검색결과가 없습니다.");
		}
		return todos.stream()
				.map(TodoResponseDTO::fromEntity)
				.toList();
	}
	
	//할일 체크
	@Transactional
	public TodoResponseDTO toggleChecked(Long id) {
		Todo todo = todoRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("존재하지 않는 할일입니다."));
		
		todo.toggleChecked(); //true <-> false 변환
		
		//save없어도 JPA가 자동 업데이트
		return TodoResponseDTO.fromEntity(todo);
	}
}
