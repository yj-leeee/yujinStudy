package com.example.backend.todo;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

//서버->클라이언트
//엔터티 주요 정보를 담음

@Builder
@Getter
@AllArgsConstructor
public class TodoResponseDto {
    private Integer id;
    private String content;
    private LocalDateTime createDateTime;

 // 정적 메서드: Todo 엔티티 → 응답 DTO 변환
    public static TodoResponseDto from(Todo todo) {
        return TodoResponseDto.builder()
                .id(todo.getId())
                .content(todo.getContent())
                .createDateTime(todo.getCreateDateTime())
                .build();
    }
 }



