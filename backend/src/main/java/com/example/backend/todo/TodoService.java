package com.example.backend.todo;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class TodoService {
	private final TodoRepository todoRepository;
	
	//할일 생성 메서드
	public TodoResponseDto create(TodoRequestDto todorequestDto) {
		Todo todo = todorequestDto.toEntity(); // DTO → Entity
        Todo saved = todoRepository.save(todo); // DB 저장
        return TodoResponseDto.from(saved); // Entity → DTO 변환
	}
	
	//할일 수정 메서드
	public TodoResponseDto update(Integer id, TodoRequestDto todoRequestDto) {
		//1.id로 기존 Todo엔터티 조회
		Todo todo = todoRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("존재하지 않는 할 일입니다."));
		todo.update(todoRequestDto.getContent(), LocalDateTime.now());
		return TodoResponseDto.from(todo);
	}
	
	//할일 목록 가져오기
	public List<TodoResponseDto> readAll(){
		//DB에서 전체 Todo 엔터티 조회
		List<Todo> todoList = todoRepository.findAll();
		
		//변환된 결과를 담을 리스트 준비
		List<TodoResponseDto> responseList = new ArrayList();
		
		//반복문으로 DTO로 변환하여 추가
		for(Todo todo : todoList) {
			TodoResponseDto dto = TodoResponseDto.from(todo);
			responseList.add(dto);
		}
		return responseList;
	}
}
